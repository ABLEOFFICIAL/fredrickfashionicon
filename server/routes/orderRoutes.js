// server/routes/orderRoutes.js
const orderRouter = require("express").Router();
const Order = require("../models/Order");
const { protect } = require("../middleware/auth");
const Cart = require("../models/Cart");
const { createNotification } = require("../utils/notifications");
const {
  sendOrderNotificationToAdmin,
  sendOrderConfirmationToCustomer,
} = require("../utils/sendEmail");

// Get user's orders - FIXED: Removed populate
orderRouter.get("/", protect, async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const query = { user: req.user._id };

    if (status) {
      query.orderStatus = status;
    }

    const orders = await Order.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    // Removed .populate("items.product") since we store all needed data in the order

    const count = await Order.countDocuments(query);

    res.json({
      success: true,
      orders,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    next(error);
  }
});

// Get single order - FIXED: Removed populate
orderRouter.get("/:id", protect, async (req, res, next) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    // Removed .populate("items.product")

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, order });
  } catch (error) {
    console.error("Error fetching order:", error);
    next(error);
  }
});

// Create order - FIXED: Better data extraction and validation
orderRouter.post("/create", protect, async (req, res, next) => {
  try {
    const { cartItems, shippingAddress, paymentReference, totalAmount } =
      req.body;

    // Validate required fields
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart items are required",
      });
    }

    console.log("=== ORDER CREATION DEBUG ===");
    console.log("Received cartItems:", JSON.stringify(cartItems, null, 2));

    // Generate order number
    const orderNumber = `ORD-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`;

    // FIXED: Format items with flexible data extraction
    const items = cartItems.map((item, index) => {
      // Extract product data - handle both nested and flat structures
      const productId = item.product?._id || item.product || item._id;
      const productName = item.product?.name || item.name || "Unknown Product";

      // Extract images - check multiple possible locations
      let productImages = [];
      if (item.product?.images && Array.isArray(item.product.images)) {
        productImages = item.product.images;
      } else if (item.images && Array.isArray(item.images)) {
        productImages = item.images;
      } else if (item.product?.image) {
        productImages = [item.product.image];
      } else if (item.image) {
        productImages = [item.image];
      }

      console.log(`Item ${index + 1} processing:`, {
        productId,
        productName,
        productImages,
        originalItem: item,
      });

      // Validate that we have at least the required data
      if (!productId) {
        throw new Error(`Item ${index + 1} is missing product ID`);
      }

      return {
        product: productId,
        name: productName,
        price: item.price || 0,
        quantity: item.quantity || 1,
        images: productImages,
      };
    });

    console.log("Formatted items for order:", JSON.stringify(items, null, 2));

    const order = await Order.create({
      user: req.user._id,
      orderNumber,
      items,
      totalAmount,
      shippingAddress,
      paymentReference,
      paymentStatus: "paid",
      orderStatus: "processing",
      isNewOrder: true, // NEW: Mark as new for admin notification
    });

    console.log("Order created successfully:", order._id);

    // Clear cart
    await Cart.findOneAndUpdate(
      { user: req.user._id },
      { items: [], totalAmount: 0 }
    );

    // Create notification
    await createNotification({
      user: req.user._id,
      type: "order",
      title: "Order Placed Successfully",
      message: `Your order ${orderNumber} has been placed successfully`,
      link: `/orders/${order._id}`,
    });

    // ===== NEW: SEND EMAIL NOTIFICATIONS =====
    try {
      // Send email to admin
      await sendOrderNotificationToAdmin(order, req.user);
      console.log("✅ Admin notification email sent");
    } catch (emailError) {
      console.error("❌ Failed to send admin email:", emailError);
      // Don't fail the order creation if email fails
    }

    try {
      // Send confirmation email to customer
      await sendOrderConfirmationToCustomer(order, req.user);
      console.log("✅ Customer confirmation email sent");
    } catch (emailError) {
      console.error("❌ Failed to send customer email:", emailError);
      // Don't fail the order creation if email fails
    }
    // ===== END EMAIL NOTIFICATIONS =====

    res.status(201).json({
      success: true,
      order,
      message: "Order created successfully",
    });
  } catch (error) {
    console.error("Error creating order:", error);
    console.error("Error stack:", error.stack);
    next(error);
  }
});

// Cancel order
orderRouter.put("/:id/cancel", protect, async (req, res, next) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    if (order.orderStatus !== "processing") {
      return res.status(400).json({
        success: false,
        message: "Only processing orders can be cancelled",
      });
    }

    order.orderStatus = "cancelled";
    await order.save();

    // Create notification
    await createNotification({
      user: req.user._id,
      type: "order",
      title: "Order Cancelled",
      message: `Your order ${order.orderNumber} has been cancelled`,
      link: `/orders/${order._id}`,
    });

    res.json({
      success: true,
      order,
      message: "Order cancelled successfully",
    });
  } catch (error) {
    console.error("Error cancelling order:", error);
    next(error);
  }
});

module.exports = orderRouter;
