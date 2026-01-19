// const router = require("express").Router();
// const Cart = require("../models/Cart");
// const Product = require("../models/Product");
// const { protect } = require("../middleware/auth");
// const { createNotification } = require("../utils/notifications");

// // Get user's cart
// router.get("/", protect, async (req, res) => {
//   try {
//     let cart = await Cart.findOne({ user: req.user._id }).populate(
//       "items.product"
//     );

//     if (!cart) {
//       cart = await Cart.create({ user: req.user._id, items: [] });
//     }

//     res.json({
//       success: true,
//       cart,
//       itemCount: cart.items.length,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Add item to cart
// router.post("/add", protect, async (req, res) => {
//   try {
//     const { productId, quantity = 1 } = req.body;

//     const product = await Product.findById(productId);
//     if (!product) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Product not found" });
//     }

//     if (product.stock < quantity) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Insufficient stock" });
//     }

//     let cart = await Cart.findOne({ user: req.user._id });

//     if (!cart) {
//       cart = await Cart.create({ user: req.user._id, items: [] });
//     }

//     // Check if product already in cart
//     const existingItemIndex = cart.items.findIndex(
//       (item) => item.product.toString() === productId
//     );

//     if (existingItemIndex > -1) {
//       // Update quantity
//       cart.items[existingItemIndex].quantity += quantity;
//     } else {
//       // Add new item
//       cart.items.push({
//         product: productId,
//         quantity,
//         price: product.price,
//       });
//     }

//     await cart.save();
//     await cart.populate("items.product");

//     // Create notification
//     await createNotification({
//       user: req.user._id,
//       type: "product",
//       title: "Added to Cart",
//       message: `${product.name} has been added to your cart`,
//       link: `/cart`,
//     });

//     res.json({
//       success: true,
//       cart,
//       message: "Item added to cart",
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Update cart item quantity
// router.put("/update/:itemId", protect, async (req, res) => {
//   try {
//     const { quantity } = req.body;

//     if (quantity < 1) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Quantity must be at least 1" });
//     }

//     const cart = await Cart.findOne({ user: req.user._id });
//     if (!cart) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Cart not found" });
//     }

//     const item = cart.items.id(req.params.itemId);
//     if (!item) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Item not found in cart" });
//     }

//     // Check stock
//     const product = await Product.findById(item.product);
//     if (product.stock < quantity) {
//       return res.status(400).json({
//         success: false,
//         message: `Only ${product.stock} items available in stock`,
//       });
//     }

//     item.quantity = quantity;
//     await cart.save();
//     await cart.populate("items.product");

//     res.json({
//       success: true,
//       cart,
//       message: "Cart updated",
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Remove item from cart
// router.delete("/remove/:itemId", protect, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user: req.user._id });
//     if (!cart) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Cart not found" });
//     }

//     cart.items.pull(req.params.itemId);
//     await cart.save();
//     await cart.populate("items.product");

//     res.json({
//       success: true,
//       cart,
//       message: "Item removed from cart",
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Clear cart
// router.delete("/clear", protect, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user: req.user._id });
//     if (!cart) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Cart not found" });
//     }

//     cart.items = [];
//     cart.totalAmount = 0;
//     await cart.save();

//     res.json({
//       success: true,
//       message: "Cart cleared",
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// module.exports = router;

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

    console.log("Adding to cart:", {
      productId,
      quantity,
      userId: req.user._id,
      selectedSize,
    });

    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    if (product.stock < quantity) {
      return res
        .status(400)
        .json({ success: false, message: "Insufficient stock" });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    // Check if product already in cart
    const existingItemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (existingItemIndex > -1) {
      // Update quantity
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.items.push({
        product: productId,
        quantity,
        price: product.price,
        selectedSize,
      });
    }

    await cart.save();
    await cart.populate("items.product");

    // ✅ Create notification (wrapped in try-catch to prevent errors)
    try {
      const { createNotification } = require("../utils/notifications");
      await createNotification({
        user: req.user._id,
        type: "product",
        title: "Added to Cart",
        message: `${product.name} has been added to your cart`,
        link: `/cart`,
      });
    } catch (notifError) {
      console.log("Notification error (non-critical):", notifError.message);
      // Don't fail the request if notification fails
    }

    res.json({
      success: true,
      cart,
      message: "Item added to cart",
    });
  } catch (error) {
    console.error("Add to cart error:", error);
    next(error);
  }
});

// Update cart item quantity
router.put("/update/:itemId", protect, async (req, res, next) => {
  try {
    const { quantity } = req.body;

    if (quantity < 1) {
      return res
        .status(400)
        .json({ success: false, message: "Quantity must be at least 1" });
    }

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }

    const item = cart.items.id(req.params.itemId);
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found in cart" });
    }

    // Check stock
    const product = await Product.findById(item.product);
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
      message: "Cart updated",
    });
  } catch (error) {
    console.error("Update cart error:", error);
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
