const router = require("express").Router();
const User = require("../models/User");
const Product = require("../models/Product");
const Blog = require("../models/Blog");
const { protect } = require("../middleware/auth");

// Delete Account
router.delete("/account", protect, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    await Product.deleteMany({ seller: req.user._id });
    await Blog.deleteMany({ author: req.user._id });

    res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
    res.json({ success: true, message: "Account deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get User Profile
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select("-password -resetPasswordToken -resetPasswordExpire")
      .populate("wishlist");
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update User Profile
router.put("/profile", protect, async (req, res) => {
  try {
    const { name, bio, phone, address, avatar } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, bio, phone, address, avatar },
      { new: true, runValidators: true }
    ).select("-password");

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

// Get User Wishlist
router.get("/wishlist", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: "wishlist",
      populate: {
        path: "seller",
        select: "name email",
      },
    });

    res.json({
      success: true,
      wishlist: user.wishlist,
      count: user.wishlist.length,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Add address
router.post("/addresses", protect, async (req, res) => {
  try {
    const { label, street, city, state, country, zipCode, isDefault } =
      req.body;

    const user = await User.findById(req.user._id);

    // If this is default, unset other defaults
    if (isDefault) {
      user.addresses.forEach((addr) => (addr.isDefault = false));
    }

    user.addresses.push({
      label,
      street,
      city,
      state,
      country,
      zipCode,
      isDefault: isDefault || user.addresses.length === 0,
    });

    await user.save();

    res.status(201).json({
      success: true,
      addresses: user.addresses,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all addresses
router.get("/addresses", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("addresses");
    res.json({
      success: true,
      addresses: user.addresses,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update address
router.put("/addresses/:addressId", protect, async (req, res) => {
  try {
    const { label, street, city, state, country, zipCode, isDefault } =
      req.body;

    const user = await User.findById(req.user._id);
    const address = user.addresses.id(req.params.addressId);

    if (!address) {
      return res
        .status(404)
        .json({ success: false, message: "Address not found" });
    }

    // If setting as default, unset other defaults
    if (isDefault) {
      user.addresses.forEach((addr) => (addr.isDefault = false));
    }

    address.label = label || address.label;
    address.street = street || address.street;
    address.city = city || address.city;
    address.state = state || address.state;
    address.country = country || address.country;
    address.zipCode = zipCode || address.zipCode;
    address.isDefault = isDefault !== undefined ? isDefault : address.isDefault;

    await user.save();

    res.json({
      success: true,
      addresses: user.addresses,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete address
router.delete("/addresses/:addressId", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const address = user.addresses.id(req.params.addressId);

    if (!address) {
      return res
        .status(404)
        .json({ success: false, message: "Address not found" });
    }

    const wasDefault = address.isDefault;
    user.addresses.pull(req.params.addressId);

    // If deleted address was default, set first address as default
    if (wasDefault && user.addresses.length > 0) {
      user.addresses[0].isDefault = true;
    }

    await user.save();

    res.json({
      success: true,
      addresses: user.addresses,
      message: "Address deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
