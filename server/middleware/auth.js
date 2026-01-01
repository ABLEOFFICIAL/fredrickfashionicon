// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const protect = async (req, res, next) => {
//   try {
//     let token;

//     if (req.cookies.token) {
//       token = req.cookies.token;
//     } else if (req.headers.authorization?.startsWith("Bearer")) {
//       token = req.headers.authorization.split(" ")[1];
//     }

//     if (!token) {
//       return res
//         .status(401)
//         .json({ success: false, message: "Not authorized" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id).select("-password");

//     if (!req.user) {
//       return res
//         .status(401)
//         .json({ success: false, message: "User not found" });
//     }

//     next();
//   } catch (error) {
//     res.status(401).json({ success: false, message: "Not authorized" });
//   }
// };

// const isAdmin = (req, res, next) => {
//   if (req.user.role !== "admin") {
//     return res
//       .status(403)
//       .json({ success: false, message: "Admin access only" });
//   }
//   next();
// };

// module.exports = { protect, isAdmin };

// server/middleware/auth.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Protect routes - check if user is authenticated
const protect = async (req, res, next) => {
  try {
    let token;

    // Check for token in Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token",
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "User not found",
        });
      }

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, token failed",
      });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Admin middleware - check if user is admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Not authorized as admin",
    });
  }
};

module.exports = { protect, admin };
