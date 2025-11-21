// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { type: String, required: true },
//   images: [{ type: String }],
//   stock: { type: Number, default: 0 },
//   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//   seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Product", productSchema);

// ============================================
// UPDATED models/Product.js
// ============================================
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],

  // SIZES (Array of size options)
  sizes: [
    {
      size: {
        type: String,
        required: true, // e.g., "S", "M", "L", "XL", "38", "40", "42"
      },
      stock: {
        type: Number,
        default: 0,
        required: true,
      },
    },
  ],

  // COLORS (NEW!)
  colors: [
    {
      name: {
        type: String,
        required: true, // e.g., "Red", "Blue", "Black"
      },
      hexCode: {
        type: String, // e.g., "#FF0000", "#0000FF", "#000000"
      },
      stock: {
        type: Number,
        default: 0,
        required: true,
      },
    },
  ],

  // Keep old stock for products without sizes/colors
  stock: {
    type: Number,
    default: 0,
  },

  // Product Tags
  tags: {
    isTrending: {
      type: Boolean,
      default: false,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    isOnSale: {
      type: Boolean,
      default: false,
    },
    isNewArrival: {
      type: Boolean,
      default: false,
    },
  },

  // Sale Information
  salePrice: {
    type: Number,
  },
  salePercentage: {
    type: Number,
    min: 0,
    max: 100,
  },

  // Ratings & Reviews
  reviews: [reviewSchema],

  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },

  totalReviews: {
    type: Number,
    default: 0,
  },

  // Likes (keep as array for database)
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Calculate average rating before saving
productSchema.pre("save", function (next) {
  if (this.reviews.length > 0) {
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    this.averageRating = total / this.reviews.length;
    this.totalReviews = this.reviews.length;
  } else {
    this.averageRating = 0;
    this.totalReviews = 0;
  }
  next();
});

// Method to check if user liked the product
productSchema.methods.isLikedByUser = function (userId) {
  return this.likes.some((like) => like.toString() === userId.toString());
};

// Calculate total stock from sizes/colors
productSchema.methods.getTotalStock = function () {
  if (this.sizes && this.sizes.length > 0) {
    return this.sizes.reduce((total, size) => total + size.stock, 0);
  }
  if (this.colors && this.colors.length > 0) {
    return this.colors.reduce((total, color) => total + color.stock, 0);
  }
  return this.stock;
};

module.exports = mongoose.model("Product", productSchema);
