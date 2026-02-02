// const mongoose = require("mongoose");

// const blogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   image: { type: String },
//   tags: [{ type: String }],
//   published: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Blog", blogSchema);

// server/models/Blog.js
const mongoose = require("mongoose");

// Content block schema - supports text, images, and videos
const contentBlockSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["text", "image", "video", "heading"],
    required: true,
  },
  order: { type: Number, required: true },

  // For text blocks
  heading: { type: String },
  text: { type: String },

  // For image blocks
  image: {
    url: { type: String },
    caption: { type: String },
    alt: { type: String },
  },

  // For video blocks
  video: {
    url: { type: String },
    thumbnailUrl: { type: String },
    caption: { type: String },
    duration: { type: String }, // e.g., "5:30"
    platform: {
      type: String,
      enum: ["youtube", "vimeo", "direct", "other"],
      default: "direct",
    },
  },
});

const blogSchema = new mongoose.Schema(
  {
    // Basic Info
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, sparse: true },
    excerpt: { type: String, maxlength: 300 }, // Short summary for listings

    // Author
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Featured Media
    featuredImage: { type: String }, // Main thumbnail
    featuredVideo: {
      url: { type: String },
      thumbnailUrl: { type: String },
      platform: {
        type: String,
        enum: ["youtube", "vimeo", "direct", "other"],
      },
    },

    // Content Sections - Flexible blocks
    contentBlocks: [contentBlockSchema],

    // Legacy content field (for backward compatibility)
    content: { type: String },

    // Metadata
    tags: [{ type: String }],
    category: {
      type: String,
      enum: [
        "tutorial",
        "news",
        "announcement",
        "product",
        "lifestyle",
        "technology",
        "fashion",
        "business",
        "other",
      ],
      default: "other",
    },

    // Publishing
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },

    // Engagement
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },

    // SEO
    metaTitle: { type: String },
    metaDescription: { type: String, maxlength: 160 },

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

// Auto-generate slug from title if not provided
blogSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  // Set publishedAt when first published
  if (this.published && !this.publishedAt) {
    this.publishedAt = new Date();
  }

  next();
});

// Virtual for reading time estimation
blogSchema.virtual("readingTime").get(function () {
  let wordCount = 0;

  // Count words in legacy content
  if (this.content) {
    wordCount += this.content.split(/\s+/).length;
  }

  // Count words in content blocks
  if (this.contentBlocks) {
    this.contentBlocks.forEach((block) => {
      if (block.text) {
        wordCount += block.text.split(/\s+/).length;
      }
      if (block.heading) {
        wordCount += block.heading.split(/\s+/).length;
      }
    });
  }

  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes || 1;
});

// Index for better performance
blogSchema.index({ published: 1, createdAt: -1 });
blogSchema.index({ slug: 1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ category: 1 });

module.exports = mongoose.model("Blog", blogSchema);
