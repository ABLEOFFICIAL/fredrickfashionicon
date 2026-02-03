// server/routes/blogRoutes.js
const router = require("express").Router();
const Blog = require("../models/Blog");
const { protect, adminOnly } = require("../middleware/auth");

// ============================================
// PUBLIC ROUTES
// ============================================

// Get all published blogs with filters
router.get("/", async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      tag,
      search,
      sortBy = "createdAt",
      order = "desc",
    } = req.query;

    // Build query
    const query = { published: true };

    if (category) query.category = category;
    if (tag) query.tags = tag;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
        { tags: { $regex: search, $options: "i" } },
      ];
    }

    // Sorting
    const sortOptions = {};
    sortOptions[sortBy] = order === "asc" ? 1 : -1;

    const blogs = await Blog.find(query)
      .populate("author", "name email avatar")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort(sortOptions)
      .lean();

    const count = await Blog.countDocuments(query);

    res.json({
      success: true,
      blogs,
      pagination: {
        total: count,
        totalPages: Math.ceil(count / limit),
        currentPage: parseInt(page),
        limit: parseInt(limit),
      },
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch blogs",
    });
  }
});

// Get single blog by slug or ID
router.get("/:identifier", async (req, res) => {
  try {
    const { identifier } = req.params;

    // Try to find by slug first, then by ID
    let blog = await Blog.findOne({
      slug: identifier,
      published: true,
    }).populate("author", "name email avatar");

    if (!blog) {
      blog = await Blog.findOne({
        _id: identifier,
        published: true,
      }).populate("author", "name email avatar");
    }

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.json({ success: true, blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch blog",
    });
  }
});

// Get featured/trending blogs
router.get("/featured/list", async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true })
      .populate("author", "name email avatar")
      .sort({ views: -1, likes: -1 })
      .limit(6)
      .lean();

    res.json({ success: true, blogs });
  } catch (error) {
    console.error("Error fetching featured blogs:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch featured blogs",
    });
  }
});

// ============================================
// PROTECTED ROUTES (ADMIN/AUTHOR ONLY)
// ============================================

// Get all blogs (including unpublished) - Admin only
router.get("/admin/all", protect, async (req, res) => {
  try {
    const { page = 1, limit = 20, published } = req.query;

    const query = {};
    if (published !== undefined) {
      query.published = published === "true";
    }

    const blogs = await Blog.find(query)
      .populate("author", "name email avatar")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .lean();

    const count = await Blog.countDocuments(query);

    res.json({
      success: true,
      blogs,
      pagination: {
        total: count,
        totalPages: Math.ceil(count / limit),
        currentPage: parseInt(page),
      },
    });
  } catch (error) {
    console.error("Error fetching admin blogs:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch blogs",
    });
  }
});

// Create new blog - ✅ FIXED ERROR HANDLING
router.post("/", protect, async (req, res) => {
  try {
    console.log("📥 Creating blog with data:", req.body);

    const blogData = {
      ...req.body,
      author: req.user._id,
    };

    // Sort content blocks by order if provided
    if (blogData.contentBlocks && Array.isArray(blogData.contentBlocks)) {
      blogData.contentBlocks = blogData.contentBlocks
        .map((block, index) => ({
          ...block,
          order: block.order !== undefined ? block.order : index,
        }))
        .sort((a, b) => a.order - b.order);
    }

    const blog = await Blog.create(blogData);

    const populatedBlog = await Blog.findById(blog._id).populate(
      "author",
      "name email avatar"
    );

    console.log("✅ Blog created successfully:", populatedBlog._id);

    res.status(201).json({
      success: true,
      blog: populatedBlog,
      message: "Blog created successfully",
    });
  } catch (error) {
    console.error("❌ Error creating blog:", error);

    // Handle validation errors specifically
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
        errors: Object.keys(error.errors).reduce((acc, key) => {
          acc[key] = error.errors[key].message;
          return acc;
        }, {}),
      });
    }

    res.status(500).json({
      success: false,
      message: error.message || "Failed to create blog",
    });
  }
});

// Update blog - ✅ FIXED ERROR HANDLING
router.put("/:id", protect, async (req, res) => {
  try {
    console.log("📝 Updating blog:", req.params.id);

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Check authorization
    if (
      blog.author.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to edit this blog",
      });
    }

    // Sort content blocks if provided
    if (req.body.contentBlocks && Array.isArray(req.body.contentBlocks)) {
      req.body.contentBlocks = req.body.contentBlocks
        .map((block, index) => ({
          ...block,
          order: block.order !== undefined ? block.order : index,
        }))
        .sort((a, b) => a.order - b.order);
    }

    const updated = await Blog.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    ).populate("author", "name email avatar");

    console.log("✅ Blog updated successfully");

    res.json({
      success: true,
      blog: updated,
      message: "Blog updated successfully",
    });
  } catch (error) {
    console.error("❌ Error updating blog:", error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
        errors: Object.keys(error.errors).reduce((acc, key) => {
          acc[key] = error.errors[key].message;
          return acc;
        }, {}),
      });
    }

    res.status(500).json({
      success: false,
      message: error.message || "Failed to update blog",
    });
  }
});

// Delete blog
router.delete("/:id", protect, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Check authorization
    if (
      blog.author.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this blog",
      });
    }

    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete blog",
    });
  }
});

// Toggle publish status
router.patch("/:id/publish", protect, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Check authorization
    if (
      blog.author.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    blog.published = !blog.published;
    if (blog.published && !blog.publishedAt) {
      blog.publishedAt = new Date();
    }

    await blog.save();

    res.json({
      success: true,
      blog,
      message: `Blog ${
        blog.published ? "published" : "unpublished"
      } successfully`,
    });
  } catch (error) {
    console.error("Error toggling publish status:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to toggle publish status",
    });
  }
});

// Like blog
router.post("/:id/like", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    blog.likes += 1;
    await blog.save();

    res.json({
      success: true,
      likes: blog.likes,
    });
  } catch (error) {
    console.error("Error liking blog:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to like blog",
    });
  }
});

module.exports = router;
