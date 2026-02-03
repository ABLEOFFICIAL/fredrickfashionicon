// server/models/Notification.js
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
      index: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [500, "Message cannot exceed 500 characters"],
    },
    type: {
      type: String,
      enum: [
        "info",
        "success",
        "warning",
        "error",
        "promotion",
        "order",
        "product",
      ],
      default: "info",
    },
    read: {
      type: Boolean,
      default: false,
      index: true,
    },
    readAt: {
      type: Date,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Admin who created the notification
    },
    link: {
      type: String, // Optional link to redirect user
      trim: true,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed, // Additional data if needed
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
notificationSchema.index({ user: 1, read: 1, createdAt: -1 });

// Instance method to mark as read
notificationSchema.methods.markAsRead = async function () {
  this.read = true;
  this.readAt = new Date();
  return await this.save();
};

// Static method to mark multiple as read
notificationSchema.statics.markManyAsRead = async function (
  notificationIds,
  userId
) {
  return await this.updateMany(
    { _id: { $in: notificationIds }, user: userId },
    { $set: { read: true, readAt: new Date() } }
  );
};

// Static method to get unread count for user
notificationSchema.statics.getUnreadCount = async function (userId) {
  return await this.countDocuments({ user: userId, read: false });
};

// Static method to delete old read notifications
notificationSchema.statics.deleteOldNotifications = async function (days = 30) {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);

  return await this.deleteMany({
    read: true,
    readAt: { $lt: cutoffDate },
  });
};

// Virtual for time since creation
notificationSchema.virtual("timeSince").get(function () {
  const now = new Date();
  const diff = now - this.createdAt;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return "Just now";
});

// Ensure virtuals are included in JSON
notificationSchema.set("toJSON", { virtuals: true });
notificationSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Notification", notificationSchema);
