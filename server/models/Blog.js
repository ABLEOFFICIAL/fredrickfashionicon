// server/models/Blog.js
const mongoose = require("mongoose");

// Content block schema - text, image, video only
const contentBlockSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["text", "image", "video"],
    required: true,
  },
  order: { type: Number, required: true },

  // For text blocks
  text: { type: String },

  // For image blocks
  image: {
    url: { type: String },
    caption: { type: String },
  },

  // For video blocks
  video: {
    url: { type: String },
    caption: { type: String },
  },
});

const blogSchema = new mongoose.Schema(
  {
    // Basic Info
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, sparse: true },

    // Author
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // ✅ UPDATED: Multiple categories (array)
    category: {
      type: [String],
      enum: ["Clothes", "Shoes", "Bags"],
      required: true,
      validate: {
        validator: function (v) {
          return v && v.length > 0;
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

    // Content blocks
    contentBlocks: [contentBlockSchema],

    // Publishing
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },

    // Engagement
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },

    // Timestamps
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Auto-generate slug from title
blogSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  if (this.published && !this.publishedAt) {
    this.publishedAt = new Date();
  }

  next();
});

// Virtual for reading time
blogSchema.virtual("readingTime").get(function () {
  let wordCount = 0;

  if (this.contentBlocks) {
    this.contentBlocks.forEach((block) => {
      if (block.text) {
        wordCount += block.text.split(/\s+/).length;
      }
    });
  }

  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes || 1;
});

// Indexes
blogSchema.index({ published: 1, createdAt: -1 });
blogSchema.index({ slug: 1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ category: 1 });

module.exports = mongoose.model("Blog", blogSchema);
