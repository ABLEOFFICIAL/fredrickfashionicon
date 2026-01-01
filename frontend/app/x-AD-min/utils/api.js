// admin/utils/api.js
// Import your existing API setup
import {
  productAPI as baseProductAPI,
  blogAPI as baseBlogAPI,
  userAPI as baseUserAPI,
  orderAPI as baseOrderAPI,
  notificationAPI as baseNotificationAPI,
} from "../../../lib/api"; // Adjust path to your existing api.js

// Helper function to handle API responses
const handleResponse = async (apiCall) => {
  try {
    const response = await apiCall;
    return {
      success: true,
      data: response.data,
      ...response.data, // Spread the data for backward compatibility
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      success: false,
      error:
        error.response?.data?.message || error.message || "An error occurred",
      message: error.response?.data?.message || error.message,
    };
  }
};

// ============================================
// ADMIN PRODUCT API (Enhanced)
// ============================================
export const productAPI = {
  getAll: async (params = {}) => {
    return handleResponse(baseProductAPI.getAll(params));
  },

  getById: async (id) => {
    return handleResponse(baseProductAPI.getById(id));
  },

  create: async (data) => {
    return handleResponse(baseProductAPI.create(data));
  },

  update: async (id, data) => {
    return handleResponse(baseProductAPI.update(id, data));
  },

  delete: async (id) => {
    return handleResponse(baseProductAPI.delete(id));
  },
};

// ============================================
// ADMIN BLOG API (Enhanced)
// ============================================
export const blogAPI = {
  getAll: async (params = {}) => {
    return handleResponse(baseBlogAPI.getAll(params));
  },

  getById: async (id) => {
    return handleResponse(baseBlogAPI.getById(id));
  },

  create: async (data) => {
    return handleResponse(baseBlogAPI.create(data));
  },

  update: async (id, data) => {
    return handleResponse(baseBlogAPI.update(id, data));
  },

  delete: async (id) => {
    return handleResponse(baseBlogAPI.delete(id));
  },
};

// ============================================
// ADMIN USER API (Enhanced)
// ============================================
export const userAPI = {
  getProfile: async () => {
    return handleResponse(baseUserAPI.getProfile());
  },

  // For admin: get all users (you may need to add this endpoint to your backend)
  getAll: async (params = {}) => {
    return handleResponse(
      baseUserAPI.getProfile() // Replace with actual admin endpoint when available
    );
  },

  getById: async (id) => {
    // You'll need to add this endpoint to your backend
    return handleResponse(baseUserAPI.getProfile());
  },

  update: async (id, data) => {
    return handleResponse(baseUserAPI.updateProfile(data));
  },

  delete: async (id) => {
    return handleResponse(baseUserAPI.deleteAccount());
  },
};

// ============================================
// ADMIN ORDER API
// ============================================
export const orderAPI = {
  getAll: async (params = {}) => {
    return handleResponse(baseOrderAPI.getAll(params));
  },

  getById: async (id) => {
    return handleResponse(baseOrderAPI.getById(id));
  },

  updateStatus: async (id, status) => {
    // You may need to add this endpoint to your backend
    return handleResponse(baseOrderAPI.cancel(id));
  },
};

// ============================================
// ADMIN NOTIFICATION API (Enhanced)
// ============================================
export const notificationAPI = {
  getAll: async (params = {}) => {
    return handleResponse(baseNotificationAPI.getAll(params));
  },

  // Admin-specific: Send to specific user
  sendToUser: async (userId, data) => {
    // You'll need to add this endpoint to your backend
    // POST /api/admin/notifications/send/:userId
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"
        }/admin/notifications/send/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return {
        success: response.ok,
        data: result,
        ...result,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  },

  // Admin-specific: Broadcast to all users
  sendToAll: async (data) => {
    // You'll need to add this endpoint to your backend
    // POST /api/admin/notifications/broadcast
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"
        }/admin/notifications/broadcast`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return {
        success: response.ok,
        data: result,
        ...result,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  },

  markAsRead: async (id) => {
    return handleResponse(baseNotificationAPI.markAsRead(id));
  },

  markAllAsRead: async () => {
    return handleResponse(baseNotificationAPI.markAllAsRead());
  },

  delete: async (id) => {
    return handleResponse(baseNotificationAPI.delete(id));
  },
};

// ============================================
// STATS API (New - for Dashboard)
// ============================================
export const statsAPI = {
  getDashboard: async () => {
    // You'll need to add this endpoint to your backend
    // GET /api/admin/stats/dashboard
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"
        }/admin/stats/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      return {
        success: response.ok,
        data: result,
        ...result,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  },

  getRevenue: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"
        }/admin/stats/revenue?${queryString}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      return {
        success: response.ok,
        data: result,
        ...result,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  },
};

export default {
  product: productAPI,
  blog: blogAPI,
  user: userAPI,
  order: orderAPI,
  notification: notificationAPI,
  stats: statsAPI,
};
