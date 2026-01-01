// const Notification = require("../models/Notification");

// const createNotification = async ({ user, type = "info", title, message, link }) => {
//   try {
//     if (!user || !title || !message) {
//       throw new Error("Missing required fields (user, title, message)");
//     }

//     const notification = await Notification.create({
//       user,
//       type,
//       title,
//       message,
//       link,
//     });

//     return notification;
//   } catch (error) {
//     console.error("Error creating notification:", error.message);
//     return null;
//   }
// };

// module.exports = { createNotification };

//server/utils/notifications.js
const Notification = require("../models/Notification");

const createNotification = async ({
  user,
  type = "info",
  title,
  message,
  link,
}) => {
  try {
    if (!user || !title || !message) {
      throw new Error("Missing required fields (user, title, message)");
    }

    const notification = await Notification.create({
      user,
      type,
      title,
      message,
      link,
    });

    return notification;
  } catch (error) {
    console.error("Error creating notification:", error.message);
    return null;
  }
};

module.exports = { createNotification };
