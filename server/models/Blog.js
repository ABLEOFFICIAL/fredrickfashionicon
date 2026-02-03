// server/models/Blog.js
const mongoose = require("mongoose");

console.log("🔍 LOADING BLOG MODEL - PRODUCTION SAFE VERSION");

// ============================================
// Content Block Schema
// ============================================
const contentBlockSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["text", "image", "video"],
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },

  // Text block
  text: { type: String },

  // Image block
  image: {
    url: { type: String },
    caption: { type: String },
  },

  // Video block
  video: {
    url: { type: String },
    caption: { type: String },
  },
});

// ============================================
// Blog Schema
// ============================================
const blogSchema = new mongoose.Schema(
  {
    // Basic Info
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      sparse: true,
    },

    // Author
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Categories (multiple)
    category: {
      type: [String],
      enum: ["Clothes", "Shoes", "Bags"],
      required: true,
      validate: {
        validator(v) {
          return Array.isArray(v) && v.length > 0;
        },
        message: "At least one category is required",
      },
    },

    // Tags
    tags: [{ type: String }],

    // Featured Media
    featuredImage: { type: String },

    featuredVideo: {
      url: { type: String },
      platform: { type: String, default: "direct" },
    },

    // Content Blocks
    contentBlocks: [contentBlockSchema],

    // Publishing
    published: {
      type: Boolean,
      default: false,
    },

    publishedAt: {
      type: Date,
    },

    // Engagement
    views: {
      type: Number,
      default: 0,
    },

    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // ✅ handles createdAt & updatedAt automatically
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// ============================================
// Pre-save Hook
// ============================================
blogSchema.pre("save", async function () {
  console.log("🔍 Pre-save hook running for:", this.title);

  // Generate slug if missing
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    console.log("✅ Slug generated:", this.slug);
  }

  // Set publishedAt on first publish
  if (this.published && !this.publishedAt) {
    this.publishedAt = new Date();
    console.log("✅ publishedAt set:", this.publishedAt);
  }
});

// ============================================
// Virtual: Reading Time
// ============================================
blogSchema.virtual("readingTime").get(function () {
  let wordCount = 0;

  if (Array.isArray(this.contentBlocks)) {
    for (const block of this.contentBlocks) {
      if (block.text) {
        wordCount += block.text.split(/\s+/).length;
      }
    }
  }

  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
});

// ============================================
// Indexes
// ============================================
blogSchema.index({ published: 1, createdAt: -1 });
blogSchema.index({ slug: 1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ category: 1 });

// ============================================
// Model Export (Production Safe)
// ============================================
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

console.log("✅ Blog model loaded successfully");

module.exports = Blog;
