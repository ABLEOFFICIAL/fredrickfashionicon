// server/routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");
const Blog = require("../models/Blog");
const Notification = require("../models/Notification");
const { protect, admin } = require("../middleware/auth");

// All routes require authentication and admin role
router.use(protect, admin);

// ============================================
// USER MANAGEMENT ROUTES
// ============================================

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
router.get("/users", async (req, res, next) => {
  try {
    const { page = 1, limit = 100, search, role } = req.query;

    let query = {};

    // Search filter
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
      ];
    }

    // Role filter
    if (role) {
      query.role = role;
    }

    const users = await User.find(query)
      .select("-password")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await User.countDocuments(query);

    res.json({
      success: true,
      users,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Get single user by ID
// @route   GET /api/admin/users/:id
// @access  Private/Admin
router.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Update user
// @route   PUT /api/admin/users/:id
// @access  Private/Admin
router.put("/users/:id", async (req, res, next) => {
  try {
    const { name, email, phone, role, isActive } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update fields
    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (role) user.role = role;
    if (typeof isActive !== "undefined") user.isActive = isActive;

    await user.save();

    res.json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        isActive: user.isActive,
      },
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
router.delete("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Prevent admin from deleting themselves
    if (user._id.toString() === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot delete your own account",
      });
    }

    await user.deleteOne();

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});

// ============================================
// NOTIFICATION ROUTES
// ============================================

// @desc    Send notification to specific user
// @route   POST /api/admin/notifications/send/:userId
// @access  Private/Admin
router.post("/notifications/send/:userId", async (req, res, next) => {
  try {
    const { title, message, type = "info" } = req.body;
    const { userId } = req.params;

    // Validate input
    if (!title || !message) {
      return res.status(400).json({
        success: false,
        message: "Title and message are required",
      });
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Create notification
    const notification = await Notification.create({
      user: userId,
      title,
      message,
      type,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      notification,
      message: "Notification sent successfully",
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Broadcast notification to all users
// @route   POST /api/admin/notifications/broadcast
// @access  Private/Admin
router.post("/notifications/broadcast", async (req, res, next) => {
  try {
    const { title, message, type = "info", targetRole = "user" } = req.body;

    // Validate input
    if (!title || !message) {
      return res.status(400).json({
        success: false,
        message: "Title and message are required",
      });
    }

    // Get all users with specified role
    const users = await User.find({ role: targetRole }).select("_id");

    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found to send notification",
      });
    }

    // Create notifications for all users
    const notifications = users.map((user) => ({
      user: user._id,
      title,
      message,
      type,
      createdBy: req.user._id,
    }));

    await Notification.insertMany(notifications);

    res.status(201).json({
      success: true,
      sent: users.length,
      message: `Notification sent to ${users.length} user(s)`,
    });
  } catch (error) {
    next(error);
  }
});

// ============================================
// STATISTICS ROUTES
// ============================================

// @desc    Get dashboard statistics
// @route   GET /api/admin/stats/dashboard
// @access  Private/Admin
router.get("/stats/dashboard", async (req, res, next) => {
  try {
    // Get counts
    const [
      totalProducts,
      totalOrders,
      totalCustomers,
      recentOrders,
      topProducts,
    ] = await Promise.all([
      Product.countDocuments(),
      Order.countDocuments(),
      User.countDocuments({ role: "user" }),
      Order.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .populate("user", "name email")
        .populate("items.product", "name images price"),
      Product.find()
        .sort({ sold: -1 })
        .limit(5)
        .select("name images price stock averageRating totalReviews"),
    ]);

    // Calculate total revenue from delivered orders
    const deliveredOrders = await Order.find({ orderStatus: "delivered" });
    const totalRevenue = deliveredOrders.reduce((sum, order) => {
      return sum + (order.totalAmount || 0);
    }, 0);

    // Get orders by status
    const ordersByStatus = await Order.aggregate([
      {
        $group: {
          _id: "$orderStatus",
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({
      success: true,
      stats: {
        totalRevenue,
        totalOrders,
        totalProducts,
        totalCustomers,
        recentOrders,
        topProducts,
        ordersByStatus,
      },
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Get revenue statistics
// @route   GET /api/admin/stats/revenue
// @access  Private/Admin
router.get("/stats/revenue", async (req, res, next) => {
  try {
    const { period = "month" } = req.query;

    let startDate = new Date();

    // Calculate start date based on period
    switch (period) {
      case "day":
        startDate.setHours(0, 0, 0, 0);
        break;
      case "week":
        startDate.setDate(startDate.getDate() - 7);
        break;
      case "month":
        startDate.setMonth(startDate.getMonth() - 1);
        break;
      case "year":
        startDate.setFullYear(startDate.getFullYear() - 1);
        break;
      default:
        startDate.setMonth(startDate.getMonth() - 1);
    }

    const orders = await Order.find({
      orderStatus: "delivered",
      createdAt: { $gte: startDate },
    }).sort({ createdAt: 1 });

    const revenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);

    // Group by date
    const revenueByDate = {};
    orders.forEach((order) => {
      const date = order.createdAt.toISOString().split("T")[0];
      revenueByDate[date] = (revenueByDate[date] || 0) + order.totalAmount;
    });

    res.json({
      success: true,
      revenue: {
        total: revenue,
        period,
        byDate: revenueByDate,
        orderCount: orders.length,
      },
    });
  } catch (error) {
    next(error);
  }
});

// ============================================
// ORDER MANAGEMENT ROUTES
// ============================================

// @desc    Update order status
// @route   PUT /api/admin/orders/:id/status
// @access  Private/Admin
router.put("/orders/:id/status", async (req, res, next) => {
  try {
    const { status } = req.body;
    const validStatuses = [
      "pending",
      "processing",
      "shipped",
      "delivered",
      "cancelled",
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order status",
      });
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.orderStatus = status;

    // Update delivered date if status is delivered
    if (status === "delivered" && !order.deliveredAt) {
      order.deliveredAt = Date.now();
    }

    await order.save();

    res.json({
      success: true,
      order,
      message: "Order status updated successfully",
    });
  } catch (error) {
    next(error);
  }
});

// ============================================
// NEW: ADMIN ORDER NOTIFICATION ROUTES
// ============================================

// @desc    Get all orders with new order count
// @route   GET /api/admin/orders
// @access  Private/Admin
router.get("/orders", async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status, showNew } = req.query;

    // Build query
    const query = {};
    if (status) query.orderStatus = status;
    if (showNew === "true") query.isNewOrder = true;

    // Get total count
    const totalOrders = await Order.countDocuments(query);
    const totalPages = Math.ceil(totalOrders / limit);

    // Get new orders count (for badge)
    const newOrdersCount = await Order.countDocuments({ isNewOrder: true });

    // Get orders with pagination
    const orders = await Order.find(query)
      .populate("user", "name email phone")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json({
      success: true,
      orders,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalOrders,
        limit: parseInt(limit),
      },
      newOrdersCount, // For notification badge
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Update order status (Delivered/Cancelled)
// @route   PUT /api/admin/orders/:id/update-status
// @access  Private/Admin
router.put("/orders/:id/update-status", async (req, res, next) => {
  try {
    const { orderStatus } = req.body;

    // Validate status
    if (!["delivered", "cancelled"].includes(orderStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Must be 'delivered' or 'cancelled'",
      });
    }

    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Update order status
    order.orderStatus = orderStatus;
    if (orderStatus === "delivered") {
      order.deliveredAt = new Date();
    }
    await order.save();

    // Create notification for user
    await Notification.create({
      user: order.user._id,
      type: "order",
      title:
        orderStatus === "delivered" ? "Order Delivered" : "Order Cancelled",
      message: `Your order ${order.orderNumber} has been ${orderStatus}`,
      link: `/orders/${order._id}`,
    });

    res.json({
      success: true,
      order,
      message: `Order ${orderStatus} successfully`,
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Mark order as read
// @route   PUT /api/admin/orders/:id/mark-read
// @access  Private/Admin
router.put("/orders/:id/mark-read", async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        isNewOrder: false,
        readAt: new Date(),
        readBy: req.user._id,
      },
      { new: true }
    ).populate("user", "name email phone");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Get updated new orders count
    const newOrdersCount = await Order.countDocuments({ isNewOrder: true });

    res.json({
      success: true,
      message: "Order marked as read",
      order,
      newOrdersCount,
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Get single order details
// @route   GET /api/admin/orders/:id
// @access  Private/Admin
router.get("/orders/:id", async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email phone"
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Mark all orders as read
// @route   PUT /api/admin/orders/mark-all-read
// @access  Private/Admin
router.put("/orders/mark-all-read", async (req, res, next) => {
  try {
    const result = await Order.updateMany(
      { isNewOrder: true },
      {
        isNewOrder: false,
        readAt: new Date(),
        readBy: req.user._id,
      }
    );

    res.json({
      success: true,
      message: `${result.modifiedCount} orders marked as read`,
      modifiedCount: result.modifiedCount,
      newOrdersCount: 0,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
