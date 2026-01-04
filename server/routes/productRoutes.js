// server/routes/productRoutes.js
const router = require("express").Router();
const Product = require("../models/Product");
const User = require("../models/User");
const { protect } = require("../middleware/auth");
const { createNotification } = require("../utils/notifications");

// ============================================
// Get All Products with Enhanced Filtering
// ============================================
router.get("/", async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      search,
      minPrice,
      maxPrice,
      minRating,
      trending,
      popular,
      onSale,
      newArrivals,
      sortBy = "createdAt",
      order = "desc",
    } = req.query;

    const query = {};

    if (category) query.category = category;

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (minRating) {
      query.averageRating = { $gte: Number(minRating) };
    }

    if (trending === "true") query["tags.isTrending"] = true;
    if (popular === "true") query["tags.isPopular"] = true;
    if (onSale === "true") query["tags.isOnSale"] = true;
    if (newArrivals === "true") query["tags.isNewArrival"] = true;

    const sortOptions = {};
    sortOptions[sortBy] = order === "asc" ? 1 : -1;

    const products = await Product.find(query)
      .populate("seller", "name email")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort(sortOptions);

    // Transform products to include isLiked boolean for current user
    const userId = req.user?._id;
    const transformedProducts = products.map((product) => {
      const productObj = product.toObject();
      productObj.isLiked = userId ? product.isLikedByUser(userId) : false;
      productObj.likesCount = product.likes.length;
      delete productObj.likes; // Remove likes array from response
      return productObj;
    });

    const count = await Product.countDocuments(query);

    res.json({
      success: true,
      products: transformedProducts,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
      totalProducts: count,
    });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Create Product with Sizes and Colors
// ============================================
router.post("/", protect, async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      category,
      images,
      sizes, // [{ size: "M", stock: 10 }]
      colors, // [{ name: "Red", hexCode: "#FF0000", stock: 5 }]
      stock,
      tags,
      salePrice,
      salePercentage,
    } = req.body;

    // Validation
    if (!name || !description || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "Name, description, price, and category are required",
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      images: images || [],
      sizes: sizes || [],
      colors: colors || [],
      stock: stock || 0,
      tags: {
        isTrending: tags?.isTrending || false,
        isPopular: tags?.isPopular || false,
        isOnSale: tags?.isOnSale || false,
        isNewArrival: tags?.isNewArrival || false,
      },
      salePrice,
      salePercentage,
      seller: req.user._id,
    });

    const productObj = product.toObject();
    productObj.isLiked = false;
    productObj.likesCount = 0;
    delete productObj.likes;

    res.status(201).json({ success: true, product: productObj });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Get Trending Products
// ============================================
router.get("/tags/trending", async (req, res, next) => {
  try {
    const { limit = 10 } = req.query;

    const products = await Product.find({ "tags.isTrending": true })
      .populate("seller", "name email")
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const userId = req.user?._id;
    const transformedProducts = products.map((product) => {
      const productObj = product.toObject();
      productObj.isLiked = userId ? product.isLikedByUser(userId) : false;
      productObj.likesCount = product.likes.length;
      delete productObj.likes;
      return productObj;
    });

    res.json({ success: true, products: transformedProducts });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Get Popular Products
// ============================================
router.get("/tags/popular", async (req, res, next) => {
  try {
    const { limit = 10 } = req.query;

    const products = await Product.find({ "tags.isPopular": true })
      .populate("seller", "name email")
      .limit(Number(limit))
      .sort({ averageRating: -1 });

    const userId = req.user?._id;
    const transformedProducts = products.map((product) => {
      const productObj = product.toObject();
      productObj.isLiked = userId ? product.isLikedByUser(userId) : false;
      productObj.likesCount = product.likes.length;
      delete productObj.likes;
      return productObj;
    });

    res.json({ success: true, products: transformedProducts });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Get On Sale Products
// ============================================
router.get("/tags/on-sale", async (req, res, next) => {
  try {
    const { limit = 10 } = req.query;

    const products = await Product.find({ "tags.isOnSale": true })
      .populate("seller", "name email")
      .limit(Number(limit))
      .sort({ salePercentage: -1 });

    const userId = req.user?._id;
    const transformedProducts = products.map((product) => {
      const productObj = product.toObject();
      productObj.isLiked = userId ? product.isLikedByUser(userId) : false;
      productObj.likesCount = product.likes.length;
      delete productObj.likes;
      return productObj;
    });

    res.json({ success: true, products: transformedProducts });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Get New Arrivals
// ============================================
router.get("/tags/new-arrivals", async (req, res, next) => {
  try {
    const { limit = 10 } = req.query;

    const products = await Product.find({ "tags.isNewArrival": true })
      .populate("seller", "name email")
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const userId = req.user?._id;
    const transformedProducts = products.map((product) => {
      const productObj = product.toObject();
      productObj.isLiked = userId ? product.isLikedByUser(userId) : false;
      productObj.likesCount = product.likes.length;
      delete productObj.likes;
      return productObj;
    });

    res.json({ success: true, products: transformedProducts });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Get Single Product
// ============================================
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("seller", "name email avatar")
      .populate("reviews.user", "name avatar");

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Transform to include isLiked boolean
    const productObj = product.toObject();
    const userId = req.user?._id;
    productObj.isLiked = userId ? product.isLikedByUser(userId) : false;
    productObj.likesCount = product.likes.length;
    delete productObj.likes;

    res.json({ success: true, product: productObj });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Update Product
// ============================================
router.put("/:id", protect, async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    if (product.seller.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ success: false, message: "Not authorized" });
    }

    const {
      name,
      description,
      price,
      category,
      images,
      sizes,
      colors,
      stock,
      tags,
      salePrice,
      salePercentage,
    } = req.body;

    const updateData = {
      name,
      description,
      price,
      category,
      images,
      sizes,
      colors,
      stock,
      salePrice,
      salePercentage,
    };

    if (tags) {
      updateData.tags = {
        isTrending:
          tags.isTrending !== undefined
            ? tags.isTrending
            : product.tags.isTrending,
        isPopular:
          tags.isPopular !== undefined
            ? tags.isPopular
            : product.tags.isPopular,
        isOnSale:
          tags.isOnSale !== undefined ? tags.isOnSale : product.tags.isOnSale,
        isNewArrival:
          tags.isNewArrival !== undefined
            ? tags.isNewArrival
            : product.tags.isNewArrival,
      };
    }

    const updated = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    const productObj = updated.toObject();
    productObj.isLiked = updated.isLikedByUser(req.user._id);
    productObj.likesCount = updated.likes.length;
    delete productObj.likes;

    res.json({ success: true, product: productObj });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Delete Product
// ============================================
router.delete("/:id", protect, async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    if (product.seller.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ success: false, message: "Not authorized" });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Like/Unlike Product (Returns Boolean)
// ============================================
router.post("/:id/like", protect, async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const index = product.likes.indexOf(req.user._id);
    let isLiked;

    if (index > -1) {
      product.likes.splice(index, 1);
      isLiked = false;
    } else {
      product.likes.push(req.user._id);
      isLiked = true;
    }

    await product.save();

    res.json({
      success: true,
      isLiked,
      likesCount: product.likes.length,
    });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Add to Wishlist
// ============================================
router.post("/:id/wishlist", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const productId = req.params.id;

    const index = user.wishlist.indexOf(productId);

    if (index > -1) {
      user.wishlist.splice(index, 1);
    } else {
      user.wishlist.push(productId);
    }

    await user.save();
    res.json({ success: true, wishlist: user.wishlist });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Add Review/Rating
// ============================================
router.post("/:id/review", protect, async (req, res, next) => {
  try {
    const { rating, comment } = req.body;

    // Validation
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    if (!comment || comment.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Comment is required",
      });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Check if user already reviewed
    const existingReview = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message:
          "You have already reviewed this product. You can update your existing review.",
      });
    }

    // Add review
    product.reviews.push({
      user: req.user._id,
      rating: Number(rating),
      comment: comment.trim(),
    });

    await product.save();
    await product.populate("reviews.user", "name avatar");

    // Create notification for seller
    await createNotification({
      user: product.seller,
      type: "product",
      title: "New Product Review",
      message: `${req.user.name} left a ${rating}-star review on ${product.name}`,
      link: `/products/${product._id}`,
    });

    const productObj = product.toObject();
    productObj.isLiked = product.isLikedByUser(req.user._id);
    productObj.likesCount = product.likes.length;
    delete productObj.likes;

    res.status(201).json({
      success: true,
      product: productObj,
      message: "Review added successfully",
    });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Update Review
// ============================================
router.put("/:productId/review/:reviewId", protect, async (req, res, next) => {
  try {
    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.productId);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const review = product.reviews.id(req.params.reviewId);

    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    }

    if (review.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ success: false, message: "Not authorized" });
    }

    if (rating) {
      if (rating < 1 || rating > 5) {
        return res.status(400).json({
          success: false,
          message: "Rating must be between 1 and 5",
        });
      }
      review.rating = rating;
    }

    if (comment) {
      review.comment = comment.trim();
    }

    await product.save();
    await product.populate("reviews.user", "name avatar");

    const productObj = product.toObject();
    productObj.isLiked = product.isLikedByUser(req.user._id);
    productObj.likesCount = product.likes.length;
    delete productObj.likes;

    res.json({
      success: true,
      product: productObj,
      message: "Review updated successfully",
    });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Delete Review
// ============================================
router.delete(
  "/:productId/review/:reviewId",
  protect,
  async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.productId);

      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }

      const review = product.reviews.id(req.params.reviewId);

      if (!review) {
        return res
          .status(404)
          .json({ success: false, message: "Review not found" });
      }

      if (review.user.toString() !== req.user._id.toString()) {
        return res
          .status(403)
          .json({ success: false, message: "Not authorized" });
      }

      product.reviews.pull(req.params.reviewId);
      await product.save();

      const productObj = product.toObject();
      productObj.isLiked = product.isLikedByUser(req.user._id);
      productObj.likesCount = product.likes.length;
      delete productObj.likes;

      res.json({
        success: true,
        product: productObj,
        message: "Review deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
);

// ============================================
// Get Product Reviews
// ============================================
router.get("/:id/reviews", async (req, res, next) => {
  try {
    const { page = 1, limit = 10, rating } = req.query;

    const product = await Product.findById(req.params.id).populate(
      "reviews.user",
      "name avatar"
    );

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    let reviews = product.reviews;

    if (rating) {
      reviews = reviews.filter((review) => review.rating === Number(rating));
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedReviews = reviews.slice(startIndex, endIndex);

    res.json({
      success: true,
      reviews: paginatedReviews,
      totalReviews: reviews.length,
      averageRating: product.averageRating,
      totalPages: Math.ceil(reviews.length / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    next(error);
  }
});

// ============================================
// Check Stock (Supports Size and Color)
// ============================================
router.post("/:id/check-stock", async (req, res, next) => {
  try {
    const { size, color, quantity = 1 } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    let available = false;
    let availableStock = 0;

    // Check size stock
    if (product.sizes && product.sizes.length > 0 && size) {
      const sizeOption = product.sizes.find((s) => s.size === size);
      if (sizeOption) {
        availableStock = sizeOption.stock;
        available = sizeOption.stock >= quantity;
      }
    }
    // Check color stock
    else if (product.colors && product.colors.length > 0 && color) {
      const colorOption = product.colors.find((c) => c.name === color);
      if (colorOption) {
        availableStock = colorOption.stock;
        available = colorOption.stock >= quantity;
      }
    }
    // Check general stock
    else {
      availableStock = product.stock;
      available = product.stock >= quantity;
    }

    res.json({
      success: true,
      available,
      availableStock,
      message: available ? "Product is available" : "Insufficient stock",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
