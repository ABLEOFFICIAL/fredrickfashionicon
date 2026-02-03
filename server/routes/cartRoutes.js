// server/models/Cart.js
const router = require("express").Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/auth");
// const { createNotification } = require("../utils/notifications"); // ⚠️ Commented out for now

// Get user's cart
router.get("/", protect, async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.product"
    );

    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    res.json({
      success: true,
      cart,
      itemCount: cart.items.length,
    });
  } catch (error) {
    next(error);
  }
});

// Add item to cart
router.post("/add", protect, async (req, res, next) => {
  try {
    const { productId, quantity = 1, selectedSize } = req.body;

    console.log("📦 Adding to cart:", {
      productId,
      quantity,
      selectedSize,
      userId: req.user._id,
    });

    // Validate required fields
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    if (!selectedSize) {
      return res.status(400).json({
        success: false,
        message: "Size selection is required",
      });
    }

    // Validate product exists and has stock
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: `Only ${product.stock} items available in stock`,
      });
    }

    // Get or create cart
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [],
      });
    }

    // Check if same product + same size exists
    const existingItemIndex = cart.items.findIndex(
      (item) =>
        item.product.toString() === productId &&
        item.selectedSize === selectedSize
    );

    if (existingItemIndex > -1) {
      // Update quantity for existing item
      const newQuantity = cart.items[existingItemIndex].quantity + quantity;

      // Check if new quantity exceeds stock
      if (newQuantity > product.stock) {
        return res.status(400).json({
          success: false,
          message: `Cannot add ${quantity} more. Only ${product.stock} items available in stock`,
        });
      }

      cart.items[existingItemIndex].quantity = newQuantity;
      console.log(`✅ Updated existing item - New quantity: ${newQuantity}`);
    } else {
      // Add new item (different product OR different size)
      cart.items.push({
        product: productId,
        quantity,
        price: product.price,
        selectedSize,
      });
      console.log(`✅ Added new item - Size: ${selectedSize}`);
    }

    // Save and populate
    await cart.save();
    await cart.populate("items.product");

    // ✅ FIXED: Create notification with proper error handling
    try {
      const { createNotification } = require("../utils/notifications");
      await createNotification({
        user: req.user._id,
        type: "product", // Make sure this matches your Notification model enum
        title: "Added to Cart",
        message: `${product.name} (Size: ${selectedSize}) has been added to your cart`,
        link: `/cart`,
      });
      console.log("✅ Notification created successfully");
    } catch (notifError) {
      // ✅ IMPROVED: More detailed error logging
      console.error("⚠️ Notification error (non-critical):", {
        error: notifError.message,
        name: notifError.name,
        // Check if it's a validation error
        errors: notifError.errors,
      });
      // Don't fail the request if notification fails
    }

    res.json({
      success: true,
      cart,
      message: "Item added to cart successfully",
    });
  } catch (error) {
    console.error("❌ Add to cart error:", error);
    next(error);
  }
});

// Update cart item quantity
router.put("/update/:itemId", protect, async (req, res, next) => {
  try {
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be at least 1",
      });
    }

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.id(req.params.itemId);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart",
      });
    }

    // ✅ Check stock availability
    const product = await Product.findById(item.product);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product no longer available",
      });
    }

    if (product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: `Only ${product.stock} items available in stock`,
      });
    }

    item.quantity = quantity;
    await cart.save();
    await cart.populate("items.product");

    res.json({
      success: true,
      cart,
      message: "Cart updated successfully",
    });
  } catch (error) {
    console.error("❌ Update cart error:", error);
    next(error);
  }
});

// Remove item from cart
router.delete("/remove/:itemId", protect, async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }

    cart.items.pull(req.params.itemId);
    await cart.save();
    await cart.populate("items.product");

    res.json({
      success: true,
      cart,
      message: "Item removed from cart",
    });
  } catch (error) {
    next(error);
  }
});

// Clear cart
router.delete("/clear", protect, async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }

    cart.items = [];
    cart.totalAmount = 0;
    await cart.save();

    res.json({
      success: true,
      cart,
      message: "Cart cleared",
    });
  } catch (error) {
    console.error("Clear cart error:", error);
    next(error);
  }
});

module.exports = router;
