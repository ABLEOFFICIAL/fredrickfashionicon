// // server/index.js

// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const session = require("express-session");
// const passport = require("passport");
// require("dotenv").config({ path: ".env.local" });

// const app = express();

// // Middleware
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
//     credentials: true,
//   })
// );

// app.use(
//   session({
//     secret: process.env.JWT_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: process.env.NODE_ENV === "production" },
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// // Database Connection
// const connectDB = require("./config/db");
// connectDB();

// // Passport Config
// require("./config/passport");

// // Routes
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/blogs", require("./routes/blogRoutes"));
// app.use("/api/payments", require("./routes/paymentRoutes"));
// app.use("/api/cart", require("./routes/cartRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/notifications", require("./routes/notificationRoutes"));
// app.use("/api/upload", require("./routes/uploadRoutes")); // ✅ Added Cloudinary upload route
// app.use("/api/admin", require("./routes/adminRoutes"));
// app.use("/api/cards", require("./routes/cardRoutes"));

// // Error Handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.statusCode || 500).json({
//     success: false,
//     message: err.message || "Server Error",
//   });
// });

// module.exports = app;

// server/index.js

require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const app = express();

// ============================================
// CRITICAL: Body parsers BEFORE CORS
// ============================================
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

// ============================================
// CORS Configuration
// ============================================
const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://fredrickfashionicon.vercel.app",
  process.env.NEXT_PUBLIC_APP_URL,
  "http://localhost:3001", // In case Next.js uses 3001
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // allow cookies/session headers
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
    exposedHeaders: ["Set-Cookie"],
  })
);

// app.use((req, res, next) => {
//   const origin = req.headers.origin;

//   if (allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }

//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS, PATCH"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, X-Requested-With, Accept"
//   );
//   res.setHeader("Access-Control-Expose-Headers", "Set-Cookie");

//   // Handle preflight
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(204);
//   }

//   next();
// });

// ============================================
// Session & Passport
// ============================================
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      sameSite: "lax",
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ============================================
// Database Connection
// ============================================
const connectDB = require("./config/db");
connectDB();

// ============================================
// Passport Config
// ============================================
require("./config/passport");

// ============================================
// Health Check Route (for debugging)
// ============================================
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// ============================================
// API Routes
// ============================================
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/notifications", require("./routes/notificationRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/cards", require("./routes/cardRoutes"));

// ============================================
// 404 Handler
// ============================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// ============================================
// Error Handler
// ============================================
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

module.exports = app;
