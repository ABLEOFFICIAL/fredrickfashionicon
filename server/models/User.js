const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// ✅ Define sub-schema for user addresses
const addressSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true, // e.g., "Home", "Office", "Shipping Address"
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
});

// ✅ Main User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String },
  googleId: { type: String },
  avatar: { type: String },
  bio: { type: String },
  phone: { type: String },
  addresses: [addressSchema], // ✅ Replace single "address" with an array of address objects
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: { type: Date, default: Date.now },
});

// ✅ Hash password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// ✅ Password comparison method
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
