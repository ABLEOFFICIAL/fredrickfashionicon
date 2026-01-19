//server/models/Payment.js
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  reference: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: "NGN" },
  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
  },
  channel: { type: String }, // card, bank, ussd, mobile_money, etc.
  metadata: { type: Object },
  paidAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Payment", paymentSchema);
