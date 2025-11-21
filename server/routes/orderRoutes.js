const orderRouter = require("express").Router();
const Order = require("../models/Order");
const { protect } = require("../middleware/auth");
const Cart = require("../models/Cart");
const { createNotification } = require("../utils/notifications");

// Get user's orders
orderRouter.get("/", protect, async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const query = { user: req.user._id };

    if (status) {
      query.orderStatus = status;
    }

    const orders = await Order.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate("items.product");

    const count = await Order.countDocuments(query);

    res.json({
      success: true,
      orders,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get single order
orderRouter.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).populate("items.product");

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create order (called after successful payment)
orderRouter.post("/create", protect, async (req, res) => {
  try {
    const { cartItems, shippingAddress, paymentReference, totalAmount } =
      req.body;

    // Generate order number
    const orderNumber = `ORD-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`;

    // Format items
    const items = cartItems.map((item) => ({
      product: item.product._id,
      name: item.product.name,
      price: item.price,
      quantity: item.quantity,
      image: item.product.images?.[0],
    }));

    const order = await Order.create({
      user: req.user._id,
      orderNumber,
      items,
      totalAmount,
      shippingAddress,
      paymentReference,
      paymentStatus: "paid",
      orderStatus: "processing",
    });

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

    res.status(201).json({
      success: true,
      order,
      message: "Order created successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Cancel order
orderRouter.put("/:id/cancel", protect, async (req, res) => {
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
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = orderRouter;
