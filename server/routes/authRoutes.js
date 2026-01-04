// server/routes/authRoutes.js
const router = require("express").Router();
const crypto = require("crypto");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");
const { protect } = require("../middleware/auth");
const passport = require("passport");

// Sign Up - WITH DETAILED LOGGING
router.post("/signup", async (req, res, next) => {
  console.log("=== SIGNUP ATTEMPT ===");
  console.log("Request body:", req.body);

  try {
    const { name, email, password } = req.body;

    console.log("1. Extracted data:", {
      name,
      email,
      passwordLength: password?.length,
    });

    const existingUser = await User.findOne({ email });
    console.log(
      "2. Existing user check:",
      existingUser ? "User exists" : "No user found"
    );

    if (existingUser) {
      console.log("3. Returning 400 - User already exists");
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    console.log("4. Creating new user...");
    const user = await User.create({ name, email, password });
    console.log("5. User created successfully:", user._id);

    console.log("6. Generating token...");
    const token = generateToken(user._id);
    console.log("7. Token generated");

    console.log("8. Setting cookie...");
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    console.log("9. Sending response...");
    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
    console.log("10. ✅ Signup completed successfully");
  } catch (error) {
    console.error("❌ SIGNUP ERROR:");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    next(error);
  }
});

// Sign In
router.post("/signin", async (req, res, next) => {
  // ✅ Add 'next' parameter
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    next(error); // ✅ Pass error to error handler
  }
});

// Google Sign In
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    const token = generateToken(req.user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.redirect(`${process.env.NEXT_PUBLIC_APP_URL}?token=${token}`);
  }
);

// Logout
router.post("/logout", (req, res, next) => {
  // ✅ Added next
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
});

// Get Logged In User
router.get("/me", protect, async (req, res, next) => {
  // ✅ Added next
  try {
    res.json({
      success: true,
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        phone: req.user.phone,
        addresses: req.user.addresses,
        createdAt: req.user.createdAt,
        wishlist: req.user.wishlist,
        role: req.user.role,
      },
    });
  } catch (error) {
    next(error);
  }
});

// Forgot Password
router.post("/forgot-password", async (req, res, next) => {
  // ✅ ADD next here
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    await user.save();

    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/${resetToken}`;

    await sendEmail({
      email: user.email,
      subject: "Password Reset Request",
      html: `
        <h1>You requested a password reset</h1>
        <p>Click the link below to reset your password:</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>This link expires in 10 minutes.</p>
      `,
    });

    res.json({ success: true, message: "Email sent" });
  } catch (error) {
    next(error);
  }
});

// Reset Password
router.put("/reset-password/:token", async (req, res, next) => {
  // ✅ ADD next here
  try {
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.json({ success: true, message: "Password reset successful" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
