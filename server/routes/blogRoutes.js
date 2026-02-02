// // server/routes/blogRoutes.js
// const router = require("express").Router();
// const Blog = require("../models/Blog");
// const { protect } = require("../middleware/auth");

// // Get all blogs
// router.get("/", async (req, res, next) => {
//   try {
//     const { page = 1, limit = 10 } = req.query;

//     const blogs = await Blog.find({ published: true })
//       .populate("author", "name email avatar")
//       .limit(limit * 1)
//       .skip((page - 1) * limit)
//       .sort({ createdAt: -1 });

//     const count = await Blog.countDocuments({ published: true });

//     res.json({
//       success: true,
//       blogs,
//       totalPages: Math.ceil(count / limit),
//       currentPage: page,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// // Create Blog
// router.post("/", protect, async (req, res, next) => {
//   try {
//     const blog = await Blog.create({
//       ...req.body,
//       author: req.user._id,
//     });

//     res.status(201).json({ success: true, blog });
//   } catch (error) {
//     next(error);
//   }
// });

// // Edit Blog
// router.put("/:id", protect, async (req, res, next) => {
//   try {
//     const blog = await Blog.findById(req.params.id);

//     if (!blog) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Blog not found" });
//     }

//     if (blog.author.toString() !== req.user._id.toString()) {
//       return res
//         .status(403)
//         .json({ success: false, message: "Not authorized" });
//     }

//     const updated = await Blog.findByIdAndUpdate(
//       req.params.id,
//       { ...req.body, updatedAt: Date.now() },
//       { new: true, runValidators: true }
//     );

//     res.json({ success: true, blog: updated });
//   } catch (error) {
//     next(error);
//   }
// });

// // Delete Blog
// router.delete("/:id", protect, async (req, res, next) => {
//   try {
//     const blog = await Blog.findById(req.params.id);

//     if (!blog) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Blog not found" });
//     }

//     if (blog.author.toString() !== req.user._id.toString()) {
//       return res
//         .status(403)
//         .json({ success: false, message: "Not authorized" });
//     }

//     await Blog.findByIdAndDelete(req.params.id);
//     res.json({ success: true, message: "Blog deleted" });
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;

// server/routes/blogRoutes.js
const router = require("express").Router();
const Blog = require("../models/Blog");
const { protect, adminOnly } = require("../middleware/auth");

// ============================================
// PUBLIC ROUTES
// ============================================

// Get all published blogs with filters
router.get("/", async (req, res, next) => {
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
    next(error);
  }
});

// Get single blog by slug or ID
router.get("/:identifier", async (req, res, next) => {
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
    next(error);
  }
});

// Get featured/trending blogs
router.get("/featured/list", async (req, res, next) => {
  try {
    const blogs = await Blog.find({ published: true })
      .populate("author", "name email avatar")
      .sort({ views: -1, likes: -1 })
      .limit(6)
      .lean();

    res.json({ success: true, blogs });
  } catch (error) {
    next(error);
  }
});

// ============================================
// PROTECTED ROUTES (ADMIN/AUTHOR ONLY)
// ============================================

// Get all blogs (including unpublished) - Admin only
router.get("/admin/all", protect, async (req, res, next) => {
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
    next(error);
  }
});

// Create new blog
router.post("/", protect, async (req, res, next) => {
  try {
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

    res.status(201).json({
      success: true,
      blog: populatedBlog,
      message: "Blog created successfully",
    });
  } catch (error) {
    next(error);
  }
});

// Update blog
router.put("/:id", protect, async (req, res, next) => {
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

    res.json({
      success: true,
      blog: updated,
      message: "Blog updated successfully",
    });
  } catch (error) {
    next(error);
  }
});

// Delete blog
router.delete("/:id", protect, async (req, res, next) => {
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
    next(error);
  }
});

// Toggle publish status
router.patch("/:id/publish", protect, async (req, res, next) => {
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
    next(error);
  }
});

// Like blog
router.post("/:id/like", async (req, res, next) => {
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
    next(error);
  }
});

module.exports = router;
