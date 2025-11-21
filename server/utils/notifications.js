const Notification = require("../models/Notification");

const createNotification = async ({ user, type, title, message, link }) => {
  try {
    await Notification.create({
      user,
      type,
      title,
      message,
      link,
    });
  } catch (error) {
    console.error("Error creating notification:", error);
  }
};

module.exports = { createNotification };
