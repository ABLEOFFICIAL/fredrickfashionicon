// server/models/Blog.js
const mongoose = require("mongoose");

console.log(
  "🔍 LOADING BLOG MODEL - VERSION 3.0 WITH ARRAY CATEGORIES AND CACHE CLEAR"
);

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

    // ✅ Multiple categories (array)
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

// ✅ Pre-save middleware - MUST use function() not arrow function
blogSchema.pre("save", async function () {
  console.log("🔍 Pre-save hook executing for blog:", this.title);

  // Generate slug if not present
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    console.log("✅ Generated slug:", this.slug);
  }

  // Set publishedAt date if publishing for first time
  if (this.published && !this.publishedAt) {
    this.publishedAt = new Date();
    console.log("✅ Set publishedAt:", this.publishedAt);
  }
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

// ✅ CRITICAL FIX: Delete existing model if it exists (for hot reload)
if (mongoose.models.Blog) {
  console.log("⚠️ Deleting existing Blog model from cache");
  delete mongoose.models.Blog;
}

// Export the model
const Blog = mongoose.model("Blog", blogSchema);
console.log("✅ Blog model created successfully");

module.exports = Blog;
