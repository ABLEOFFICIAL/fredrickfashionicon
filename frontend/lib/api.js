// // frontend/lib/api.js
// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add token to requests
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // ============================================
// // AUTH ENDPOINTS
// // ============================================
// export const authAPI = {
//   signup: (data) => api.post("/auth/signup", data),
//   signin: (data) => api.post("/auth/signin", data),
//   logout: () => api.post("/auth/logout"),
//   getMe: () => api.get("/auth/me"),
//   forgotPassword: (email) => api.post("/auth/forgot-password", { email }),
//   resetPassword: (token, password) =>
//     api.put(`/auth/reset-password/${token}`, { password }),
// };

// // ============================================
// // USER ENDPOINTS
// // ============================================
// export const adminAPI = {
//   getAllUsers: (params) => api.get("/admin/users", { params }),
//   getUserById: (id) => api.get(`/admin/users/${id}`),
//   updateUser: (id, data) => api.put(`/admin/users/${id}`, data),
//   deleteUser: (id) => api.delete(`/admin/users/${id}`),
// };

// // ============================================
// // USER ENDPOINTS
// // ============================================
// export const userAPI = {
//   getProfile: () => api.get("/users/profile"),
//   updateProfile: (data) => api.put("/users/profile", data),
//   getWishlist: () => api.get("/users/wishlist"),
//   deleteAccount: () => api.delete("/users/account"),

//   // Address management
//   getAddresses: () => api.get("/users/addresses"),
//   addAddress: (data) => api.post("/users/addresses", data),
//   updateAddress: (id, data) => api.put(`/users/addresses/${id}`, data),
//   deleteAddress: (id) => api.delete(`/users/addresses/${id}`),
// };

// // ============================================
// // PRODUCT ENDPOINTS
// // ============================================
// export const productAPI = {
//   getAll: (params) => api.get("/products", { params }),
//   getById: (id) => api.get(`/products/${id}`),
//   create: (data) => api.post("/products", data),
//   update: (id, data) => api.put(`/products/${id}`, data),
//   delete: (id) => api.delete(`/products/${id}`),
//   like: (id) => api.post(`/products/${id}/like`),
//   wishlist: (id) => api.post(`/products/${id}/wishlist`),
// };

// // ============================================
// // CART ENDPOINTS (NEW!)
// // ============================================
// export const cartAPI = {
//   getCart: () => api.get("/cart"),
//   addItem: (productId, quantity = 1) =>
//     api.post("/cart/add", { productId, quantity }),
//   updateItem: (itemId, quantity) =>
//     api.put(`/cart/update/${itemId}`, { quantity }),
//   removeItem: (itemId) => api.delete(`/cart/remove/${itemId}`),
//   clearCart: () => api.delete("/cart/clear"),
// };

// // ============================================
// // ORDER ENDPOINTS (NEW!)
// // ============================================
// export const orderAPI = {
//   getAll: (params) => api.get("/orders", { params }),
//   getById: (id) => api.get(`/orders/${id}`),
//   create: (data) => api.post("/orders/create", data),
//   cancel: (id) => api.put(`/orders/${id}/cancel`),
// };

// // ============================================
// // NOTIFICATION ENDPOINTS (NEW!)
// // ============================================
// export const notificationAPI = {
//   getAll: (params) => api.get("/notifications", { params }),
//   markAsRead: (id) => api.put(`/notifications/${id}/read`),
//   markAllAsRead: () => api.put("/notifications/mark-all-read"),
//   delete: (id) => api.delete(`/notifications/${id}`),
// };

// // ============================================
// // BLOG ENDPOINTS
// // ============================================
// export const blogAPI = {
//   getAll: (params) => api.get("/blogs", { params }),
//   getById: (id) => api.get(`/blogs/${id}`),
//   create: (data) => api.post("/blogs", data),
//   update: (id, data) => api.put(`/blogs/${id}`, data),
//   delete: (id) => api.delete(`/blogs/${id}`),
// };

// // ============================================
// // PAYMENT ENDPOINTS
// // ============================================
// export const paymentAPI = {
//   initialize: (data) => api.post("/payments/initialize", data),
//   verify: (reference) => api.get(`/payments/verify/${reference}`),
//   getHistory: (params) => api.get("/payments/history", { params }),
//   getPayment: (reference) => api.get(`/payments/${reference}`),
// };

// // ============================================
// // CARD ENDPOINTS
// // ============================================
// export const cardAPI = {
//   // Get all cards for the logged-in user
//   getAll: () => api.get("/cards"),

//   // Add a new card
//   create: (data) => api.post("/cards", data),

//   // Update a card (e.g., set default)
//   update: (id, data) => api.put(`/cards/${id}`, data),

//   // Delete a card
//   remove: (id) => api.delete(`/cards/${id}`),
// };

// export default api;
// frontend/lib/api.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ============================================
// AUTH ENDPOINTS
// ============================================
export const authAPI = {
  signup: (data) => api.post("/auth/signup", data),
  signin: (data) => api.post("/auth/signin", data),
  logout: () => api.post("/auth/logout"),
  getMe: () => api.get("/auth/me"),
  forgotPassword: (email) => api.post("/auth/forgot-password", { email }),
  resetPassword: (token, password) =>
    api.put(`/auth/reset-password/${token}`, { password }),
};

// ============================================
// USER ENDPOINTS
// ============================================
export const adminAPI = {
  getAllUsers: (params) => api.get("/admin/users", { params }),
  getUserById: (id) => api.get(`/admin/users/${id}`),
  updateUser: (id, data) => api.put(`/admin/users/${id}`, data),
  deleteUser: (id) => api.delete(`/admin/users/${id}`),
};

// ============================================
// USER ENDPOINTS
// ============================================
export const userAPI = {
  getProfile: () => api.get("/users/profile"),
  updateProfile: (data) => api.put("/users/profile", data),
  getWishlist: () => api.get("/users/wishlist"),
  deleteAccount: () => api.delete("/users/account"),

  // Address management
  getAddresses: () => api.get("/users/addresses"),
  addAddress: (data) => api.post("/users/addresses", data),
  updateAddress: (id, data) => api.put(`/users/addresses/${id}`, data),
  deleteAddress: (id) => api.delete(`/users/addresses/${id}`),
};

// ============================================
// PRODUCT ENDPOINTS
// ============================================
export const productAPI = {
  getAll: (params) => api.get("/products", { params }),
  getById: (id) => api.get(`/products/${id}`),
  create: (data) => api.post("/products", data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
  like: (id) => api.post(`/products/${id}/like`),
  wishlist: (id) => api.post(`/products/${id}/wishlist`),
};

// ============================================
// CART ENDPOINTS
// ============================================
export const cartAPI = {
  getCart: () => api.get("/cart"),
  addItem: (productId, quantity = 1) =>
    api.post("/cart/add", { productId, quantity }),
  updateItem: (itemId, quantity) =>
    api.put(`/cart/update/${itemId}`, { quantity }),
  removeItem: (itemId) => api.delete(`/cart/remove/${itemId}`),
  clearCart: () => api.delete("/cart/clear"),
};

// ============================================
// ORDER ENDPOINTS
// ============================================
export const orderAPI = {
  getAll: (params) => api.get("/orders", { params }),
  getById: (id) => api.get(`/orders/${id}`),
  create: (data) => api.post("/orders/create", data),
  cancel: (id) => api.put(`/orders/${id}/cancel`),
};

// ============================================
// NOTIFICATION ENDPOINTS
// ============================================
export const notificationAPI = {
  getAll: (params) => api.get("/notifications", { params }),
  markAsRead: (id) => api.put(`/notifications/${id}/read`),
  markAllAsRead: () => api.put("/notifications/mark-all-read"),
  delete: (id) => api.delete(`/notifications/${id}`),
};

// ============================================
// BLOG ENDPOINTS
// ============================================
export const blogAPI = {
  getAll: (params) => api.get("/blogs", { params }),
  getById: (id) => api.get(`/blogs/${id}`),
  create: (data) => api.post("/blogs", data),
  update: (id, data) => api.put(`/blogs/${id}`, data),
  delete: (id) => api.delete(`/blogs/${id}`),
};

// ============================================
// PAYMENT ENDPOINTS
// ============================================
export const paymentAPI = {
  initialize: (data) => api.post("/payments/initialize", data),
  verify: (reference) => api.get(`/payments/verify/${reference}`),
  getHistory: (params) => api.get("/payments/history", { params }),
  getPayment: (reference) => api.get(`/payments/${reference}`),
};

// ============================================
// CARD ENDPOINTS
// ============================================
export const cardAPI = {
  // Get all cards for the logged-in user
  getAll: () => api.get("/cards"),

  // Add a new card
  create: (data) => api.post("/cards", data),

  // Update a card (e.g., set default)
  update: (id, data) => api.put(`/cards/${id}`, data),

  // Delete a card
  remove: (id) => api.delete(`/cards/${id}`),
};

export default api;
