(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "adminAPI",
    ()=>adminAPI,
    "authAPI",
    ()=>authAPI,
    "blogAPI",
    ()=>blogAPI,
    "cardAPI",
    ()=>cardAPI,
    "cartAPI",
    ()=>cartAPI,
    "default",
    ()=>__TURBOPACK__default__export__,
    "notificationAPI",
    ()=>notificationAPI,
    "orderAPI",
    ()=>orderAPI,
    "paymentAPI",
    ()=>paymentAPI,
    "productAPI",
    ()=>productAPI,
    "userAPI",
    ()=>userAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:5002/api") || "http://localhost:5002/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});
// Add token to requests
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
const authAPI = {
    signup: (data)=>api.post("/auth/signup", data),
    signin: (data)=>api.post("/auth/signin", data),
    logout: ()=>api.post("/auth/logout"),
    getMe: ()=>api.get("/auth/me"),
    forgotPassword: (email)=>api.post("/auth/forgot-password", {
            email
        }),
    resetPassword: (token, password)=>api.put(`/auth/reset-password/${token}`, {
            password
        })
};
const adminAPI = {
    getAllUsers: (params)=>api.get("/admin/users", {
            params
        }),
    getUserById: (id)=>api.get(`/admin/users/${id}`),
    updateUser: (id, data)=>api.put(`/admin/users/${id}`, data),
    deleteUser: (id)=>api.delete(`/admin/users/${id}`)
};
const userAPI = {
    getProfile: ()=>api.get("/users/profile"),
    updateProfile: (data)=>api.put("/users/profile", data),
    getWishlist: ()=>api.get("/users/wishlist"),
    deleteAccount: ()=>api.delete("/users/account"),
    // Address management
    getAddresses: ()=>api.get("/users/addresses"),
    addAddress: (data)=>api.post("/users/addresses", data),
    updateAddress: (id, data)=>api.put(`/users/addresses/${id}`, data),
    deleteAddress: (id)=>api.delete(`/users/addresses/${id}`)
};
const productAPI = {
    getAll: (params)=>api.get("/products", {
            params
        }),
    getById: (id)=>api.get(`/products/${id}`),
    create: (data)=>api.post("/products", data),
    update: (id, data)=>api.put(`/products/${id}`, data),
    delete: (id)=>api.delete(`/products/${id}`),
    like: (id)=>api.post(`/products/${id}/like`),
    wishlist: (id)=>api.post(`/products/${id}/wishlist`)
};
const cartAPI = {
    getCart: ()=>api.get("/cart"),
    addItem: (productId, quantity = 1)=>api.post("/cart/add", {
            productId,
            quantity
        }),
    updateItem: (itemId, quantity)=>api.put(`/cart/update/${itemId}`, {
            quantity
        }),
    removeItem: (itemId)=>api.delete(`/cart/remove/${itemId}`),
    clearCart: ()=>api.delete("/cart/clear")
};
const orderAPI = {
    getAll: (params)=>api.get("/orders", {
            params
        }),
    getById: (id)=>api.get(`/orders/${id}`),
    create: (data)=>api.post("/orders/create", data),
    cancel: (id)=>api.put(`/orders/${id}/cancel`)
};
const notificationAPI = {
    getAll: (params)=>api.get("/notifications", {
            params
        }),
    markAsRead: (id)=>api.put(`/notifications/${id}/read`),
    markAllAsRead: ()=>api.put("/notifications/mark-all-read"),
    delete: (id)=>api.delete(`/notifications/${id}`)
};
const blogAPI = {
    getAll: (params)=>api.get("/blogs", {
            params
        }),
    getById: (id)=>api.get(`/blogs/${id}`),
    create: (data)=>api.post("/blogs", data),
    update: (id, data)=>api.put(`/blogs/${id}`, data),
    delete: (id)=>api.delete(`/blogs/${id}`)
};
const paymentAPI = {
    initialize: (data)=>api.post("/payments/initialize", data),
    verify: (reference)=>api.get(`/payments/verify/${reference}`),
    getHistory: (params)=>api.get("/payments/history", {
            params
        }),
    getPayment: (reference)=>api.get(`/payments/${reference}`)
};
const cardAPI = {
    // Get all cards for the logged-in user
    getAll: ()=>api.get("/cards"),
    // Add a new card
    create: (data)=>api.post("/cards", data),
    // Update a card (e.g., set default)
    update: (id, data)=>api.put(`/cards/${id}`, data),
    // Delete a card
    remove: (id)=>api.delete(`/cards/${id}`)
};
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/utils/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/helper.js
__turbopack_context__.s([
    "addCard",
    ()=>addCard,
    "addToCart",
    ()=>addToCart,
    "clearCart",
    ()=>clearCart,
    "deleteCard",
    ()=>deleteCard,
    "fetchAllUsers",
    ()=>fetchAllUsers,
    "fetchBlogs",
    ()=>fetchBlogs,
    "fetchCards",
    ()=>fetchCards,
    "fetchCart",
    ()=>fetchCart,
    "fetchCurrentUser",
    ()=>fetchCurrentUser,
    "fetchOrders",
    ()=>fetchOrders,
    "fetchProduct",
    ()=>fetchProduct,
    "fetchUserAddresses",
    ()=>fetchUserAddresses,
    "fetchUserProfile",
    ()=>fetchUserProfile,
    "fetchWishlist",
    ()=>fetchWishlist,
    "logoutUser",
    ()=>logoutUser,
    "removeFromCart",
    ()=>removeFromCart,
    "setDefaultCard",
    ()=>setDefaultCard,
    "updateCartQuantity",
    ()=>updateCartQuantity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const fetchAllUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("adminUsers/fetchAllUsers", async (params = {}, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminAPI"].getAllUsers(params);
        console.log("Fetched admin users:::::::::::::::", data);
        return data; // { users, total, page, pages }
    } catch (error) {
        if (error.response?.status === 403) {
            return rejectWithValue("Admin access only");
        }
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
});
const fetchCurrentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/fetchCurrentUser", async (_, { rejectWithValue })=>{
    try {
        // console.log("TOKEN:", localStorage.getItem("token"));
        // Automatically uses your configured axios instance (with baseURL, interceptors, etc.)
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].getMe();
        if ("TURBOPACK compile-time truthy", 1) {
            console.log("Fetched user data:", data);
        }
        // ✅ Handle possible API structures
        if (!data || !data.success && !data.user) {
            return rejectWithValue("Invalid response structure from /auth/me");
        }
        const user = data.user || data; // fallback if API just returns user directly
        return {
            id: user.id || user._id,
            name: user.name || "",
            email: user.email || "",
            // avatar: user.avatar || "",
            // bio: user.bio || "",
            phone: user.phone || "",
            addresses: user.addresses || [],
            role: user.role || "user",
            createdAt: user.createdAt,
            wishlist: user.wishlist || []
        };
    } catch (error) {
        console.error("Error fetching user:", error);
        // Axios errors have a predictable structure
        return rejectWithValue(error.response?.data?.message || "Failed to fetch current user");
    }
});
const fetchUserProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/fetchUserProfile", async (_, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAPI"].getProfile();
        if ("TURBOPACK compile-time truthy", 1) {
            console.log("Fetched user profile:", data);
        }
        if (!data || !data.success && !data.user) {
            return rejectWithValue("Invalid response structure from /users/profile");
        }
        const user = data.user || data;
        return {
            id: user.id || user._id,
            name: user.name || "",
            email: user.email || "",
            avatar: user.avatar || "",
            bio: user.bio || "",
            phone: user.phone || "",
            address: user.address || [],
            role: user.role || "user"
        };
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch user profile");
    }
});
const fetchUserAddresses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("user/fetchUserAddresses", async (_, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAPI"].getAddresses();
        console.log("Fetched addresses:", data);
        return data.addresses || []; // must match your API response
    } catch (error) {
        console.error("Error fetching addresses:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to load addresses");
    }
});
const fetchProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("context/fetchProduct", async (_, { rejectWithValue })=>{
    console.log("fetching products...");
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productAPI"].getAll();
        console.log("Fetched products:", data);
        return data.products; // return the products to Redux
    } catch (error) {
        console.error("Error fetching products:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to load products");
    }
});
const fetchCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("context/fetchCart", async (_, { rejectWithValue })=>{
    try {
        // ✅ Use cartAPI instead of fetch with relative URL
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartAPI"].getCart();
        console.log("✅ fetchCart: response data:", data);
        // 🧩 Return correct structure
        return {
            cart: data.cart?.items || data.items || [],
            itemCount: data.itemCount || 0,
            totalAmount: data.cart?.totalAmount || data.totalAmount || 0
        };
    } catch (error) {
        console.error("❌ fetchCart: error:", error);
        return rejectWithValue(error.response?.data?.message || error.message || "Failed to load cart");
    }
});
const fetchWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("wishlist/fetchWishlist", async (_, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userAPI"].getWishlist();
        console.log("Fetched wishlist:", data);
        return data.wishlist; // ✅ return wishlist data to store
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to load wishlist");
    }
});
const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("cart/addToCart", async ({ productId, quantity = 1 }, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartAPI"].addItem(productId, quantity);
        return data.cart; // returns updated cart
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to add to cart");
    }
});
const updateCartQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("cart/updateCartQuantity", async ({ itemId, quantity }, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartAPI"].updateItem(itemId, quantity);
        return data.cart; // updated cart array
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to update quantity");
    }
});
const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("cart/removeFromCart", async (itemId, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartAPI"].removeItem(itemId);
        return data.cart; // updated cart array
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to remove item");
    }
});
const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("cart/clearCart", async (_, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartAPI"].clearCart();
        return data.cart || [];
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to clear cart");
    }
});
const fetchOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("context/fetchOrders", async (_, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderAPI"].getAll();
        console.log("Fetched orders:", data.orders);
        return data.orders || []; // must match your API response
    } catch (error) {
        console.error("Error fetching addresses:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to load addresses");
    }
});
const fetchBlogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("context/fetchBlogs", async (_, { rejectWithValue })=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogAPI"].getAll();
        console.log("Fetched blogs:", data);
        return data.blogs || []; // must match your API response
    } catch (error) {
        console.error("Error fetching addresses:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to load addresses");
    }
});
const logoutUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/logoutUser", async (_, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].logout();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Logout failed");
    }
});
const fetchCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/fetchCards", async (_, thunkAPI)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardAPI"].getAll();
        console.log("Fetched cards:", res.data);
        return res.data.cards;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || "Failed to fetch cards");
    }
});
const addCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/addCard", async (cardData, thunkAPI)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardAPI"].create(cardData);
        return res.data.card;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || "Failed to add card");
    }
});
const deleteCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/deleteCard", async (cardId, thunkAPI)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardAPI"].remove(cardId);
        return cardId;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || "Failed to delete card");
    }
});
const setDefaultCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/setDefaultCard", async (cardId, thunkAPI)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardAPI"].update(cardId, {
            isDefault: true
        });
        return cardId;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || "Failed to set default card");
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/store/contextSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "filterProducts",
    ()=>filterProducts,
    "removeProduct",
    ()=>removeProduct,
    "setDropDown",
    ()=>setDropDown,
    "setProductFilter",
    ()=>setProductFilter,
    "setProducts",
    ()=>setProducts,
    "setSearchProduct",
    ()=>setSearchProduct,
    "setShowCartModal",
    ()=>setShowCartModal,
    "setShowEditModal",
    ()=>setShowEditModal,
    "setShowNavDrop",
    ()=>setShowNavDrop,
    "setShowSide",
    ()=>setShowSide,
    "setproductCategory",
    ()=>setproductCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const contextSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "context",
    initialState: {
        dropDown: false,
        showSide: false,
        productCategory: "All",
        productFilter: "All",
        products: [],
        filteredProducts: [],
        searchProduct: "",
        showNavDrop: false,
        cart: [],
        itemCount: 0,
        loading: false,
        error: null,
        showCartModal: false,
        showEditModal: true,
        // order
        orders: [],
        // blogs
        blogs: []
    },
    reducers: {
        setDropDown (state, action) {
            state.dropDown = action.payload;
        },
        setShowSide (state, action) {
            state.showSide = action.payload;
        },
        setproductCategory (state, action) {
            state.productCategory = action.payload;
        },
        setProductFilter (state, action) {
            state.productFilter = action.payload;
        },
        setProducts: (state, action)=>{
            state.products = action.payload;
            state.filteredProducts = action.payload;
        },
        filterProducts: (state)=>{
            let filtered = state.products;
            // CATEGORY FILTER
            if (state.productCategory !== "All") {
                filtered = filtered.filter((p)=>p.category && p.category.toLowerCase() === state.productCategory.toLowerCase());
            }
            // TAG FILTER (Trending, Popular, Sales, New Arrivals)
            // ⚠️ FIXED: Access nested tags object
            const filterMap = {
                Trending: "isTrending",
                Popular: "isPopular",
                "New Arrivals": "isNewArrival",
                Sales: "isOnSale"
            };
            if (state.productFilter !== "All") {
                const key = filterMap[state.productFilter];
                // Access tags object properly: p.tags[key]
                filtered = filtered.filter((p)=>p.tags && p.tags[key] === true);
            }
            state.filteredProducts = filtered;
        },
        setSearchProduct (state, action) {
            state.searchProduct = action.payload;
        },
        setShowNavDrop (state, action) {
            state.showNavDrop = action.payload;
        },
        removeProduct: (state, action)=>{
            state.products = state.products.filter((p)=>p._id !== action.payload);
            state.filteredProducts = state.filteredProducts.filter((p)=>p._id !== action.payload);
        },
        setShowCartModal (state, action) {
            state.showCartModal = action.payload;
        },
        setShowEditModal (state, action) {
            state.showEditModal = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder// 🛍️ Fetch Products
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProduct"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProduct"].fulfilled, (state, action)=>{
            state.loading = false;
            state.products = action.payload;
            state.filteredProducts = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProduct"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// 🛒 Fetch Cart
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCart"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCart"].fulfilled, (state, action)=>{
            state.loading = false;
            // Transform backend response so component can map easily
            state.cart = action.payload.cart.map((item)=>({
                    _id: item._id,
                    quantity: item.quantity,
                    price: item.product.price,
                    name: item.product.name,
                    selectedSize: item.selectedSize || "",
                    imageUrl: item.product.images ? item.product.images[0] : ""
                }));
            // Optional: itemCount
            state.itemCount = state.cart.reduce((sum, item)=>sum + item.quantity, 0);
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCart"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// ➕ Add to Cart
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"].pending, (state)=>{
            state.loading = true;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"].fulfilled, (state, action)=>{
            state.loading = false;
            // If backend returns updated cart
            if (Array.isArray(action.payload.cart)) {
                state.cart = action.payload.cart;
            } else {
                // fallback: append new item
                state.cart.push(action.payload);
            }
            state.itemCount = state.cart.length;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// 🔁 Update Quantity
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCartQuantity"].pending, (state)=>{
            state.loading = true;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCartQuantity"].fulfilled, (state, action)=>{
            state.loading = false;
            state.cart = action.payload.cart || state.cart;
            state.itemCount = state.cart.length;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCartQuantity"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// ❌ Remove Item
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromCart"].pending, (state)=>{
            state.loading = true;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromCart"].fulfilled, (state, action)=>{
            state.loading = false;
            state.cart = action.payload.cart || [];
            state.itemCount = state.cart.length;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromCart"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// 🧹 Clear Cart
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCart"].fulfilled, (state)=>{
            state.cart = [];
            state.itemCount = 0;
        })// order
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOrders"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOrders"].fulfilled, (state, action)=>{
            state.orders = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOrders"].rejected, (state, action)=>{
            state.error = action.payload;
        })// blogs
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBlogs"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBlogs"].fulfilled, (state, action)=>{
            state.blogs = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBlogs"].rejected, (state, action)=>{
            state.error = action.payload;
        })//logout
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutUser"].pending, (state)=>{
            state.loading = true;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutUser"].fulfilled, (state)=>{
            state.loading = false;
            // CLEAR USER SESSION DATA
            state.cart = [];
            state.itemCount = 0;
            // Optionally remove tokens from cookies/localStorage if you use them
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem("token");
            }
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutUser"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { setDropDown, setShowSide, setproductCategory, setProductFilter, setProducts, filterProducts, setSearchProduct, setShowNavDrop, removeProduct, setShowCartModal, setShowEditModal } = contextSlice.actions;
const __TURBOPACK__default__export__ = contextSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/store/widthSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setScreenWidth",
    ()=>setScreenWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
"use client";
;
const initialState = {
    screenWidth: 0
};
const widthSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "width",
    initialState,
    reducers: {
        setScreenWidth: (state, action)=>{
            state.screenWidth = action.payload;
        }
    }
});
const { setScreenWidth } = widthSlice.actions;
const __TURBOPACK__default__export__ = widthSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/store/authSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // app/store/authSlice.js
// import { createSlice } from "@reduxjs/toolkit";
// import {
//   addCard,
//   deleteCard,
//   fetchCards,
//   fetchCurrentUser,
//   fetchUserAddresses,
//   fetchUserProfile,
//   fetchWishlist,
//   setDefaultCard,
// } from "../utils/helper";
// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     accessToken: null,
//     isAuthenticated: false,
//     initialized: false,
//     wishList: [],
//     loading: false,
//     error: null,
//     userAddresses: [],
//     cards: [],
//   },
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem("token");
//       state.user = null;
//       state.accessToken = null;
//       state.isAuthenticated = false;
//       state.initialized = true;
//       state.wishList = [];
//     },
//   },
//   extraReducers: (builder) => {
//     // ✅ Fetch Current User
//     builder
//       .addCase(fetchCurrentUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCurrentUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//         state.initialized = true;
//       })
//       .addCase(fetchCurrentUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.user = null;
//         state.isAuthenticated = false;
//         state.initialized = true;
//       })
//       .addCase(fetchUserProfile.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserProfile.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload; // update user data from profile
//         state.isAuthenticated = true; // user is authenticated if profile loads
//       })
//       .addCase(fetchUserProfile.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       //fetch Addresses
//       .addCase(fetchUserAddresses.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserAddresses.fulfilled, (state, action) => {
//         state.loading = false;
//         state.userAddresses = action.payload;
//       })
//       .addCase(fetchUserAddresses.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       // ✅ Fetch Wishlist
//       .addCase(fetchWishlist.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchWishlist.fulfilled, (state, action) => {
//         state.loading = false;
//         state.wishList = action.payload;
//       })
//       .addCase(fetchWishlist.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       // FETCH CARDS
//       .addCase(fetchCards.fulfilled, (state, action) => {
//         state.cards = action.payload;
//       })
//       // ADD CARD
//       .addCase(addCard.fulfilled, (state, action) => {
//         state.cards.push(action.payload);
//       })
//       // DELETE CARD
//       .addCase(deleteCard.fulfilled, (state, action) => {
//         state.cards = state.cards.filter((c) => c._id !== action.payload);
//       })
//       // SET DEFAULT CARD
//       .addCase(setDefaultCard.fulfilled, (state, action) => {
//         state.cards = state.cards.map((c) => ({
//           ...c,
//           isDefault: c._id === action.payload,
//         }));
//       });
//   },
// });
// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
// app/store/authSlice.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/helper.js [app-client] (ecmascript)");
;
;
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "auth",
    initialState: {
        user: null,
        accessToken: null,
        isAuthenticated: false,
        initialized: false,
        wishList: [],
        authLoading: true,
        loading: false,
        error: null,
        userAddresses: [],
        cards: []
    },
    reducers: {
        logout: (state)=>{
            localStorage.removeItem("token");
            state.user = null;
            state.accessToken = null;
            state.isAuthenticated = false;
            state.initialized = true;
            state.authLoading = false;
            state.wishList = [];
        }
    },
    extraReducers: (builder)=>{
        // ✅ Fetch Current User (Initial Auth Check)
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCurrentUser"].pending, (state)=>{
            state.authLoading = true;
            state.error = null;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCurrentUser"].fulfilled, (state, action)=>{
            state.authLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
            state.initialized = true;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCurrentUser"].rejected, (state, action)=>{
            state.authLoading = false;
            state.error = action.payload;
            state.user = null;
            state.isAuthenticated = false;
            state.initialized = true;
        })// ✅ Fetch User Profile - DON'T update user object
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserProfile"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserProfile"].fulfilled, (state, action)=>{
            state.loading = false;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserProfile"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Fetch Addresses
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserAddresses"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserAddresses"].fulfilled, (state, action)=>{
            state.loading = false;
            state.userAddresses = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserAddresses"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// ✅ Fetch Wishlist
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWishlist"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWishlist"].fulfilled, (state, action)=>{
            state.loading = false;
            state.wishList = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWishlist"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// FETCH CARDS
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCards"].fulfilled, (state, action)=>{
            state.cards = action.payload;
        })// ADD CARD
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addCard"].fulfilled, (state, action)=>{
            state.cards.push(action.payload);
        })// DELETE CARD
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCard"].fulfilled, (state, action)=>{
            state.cards = state.cards.filter((c)=>c._id !== action.payload);
        })// SET DEFAULT CARD
        .addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDefaultCard"].fulfilled, (state, action)=>{
            state.cards = state.cards.map((c)=>({
                    ...c,
                    isDefault: c._id === action.payload
                }));
        });
    }
});
const { logout } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/store/productSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setShowSideideBar",
    ()=>setShowSideideBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    showSideideBar: false
};
const productSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "product",
    initialState,
    reducers: {
        setShowSideideBar: (state, action)=>{
            state.showSideideBar = action.payload;
        }
    }
});
const { setShowSideideBar } = productSlice.actions;
const __TURBOPACK__default__export__ = productSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/store/adminSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAdminUsersError",
    ()=>clearAdminUsersError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setCurrentItem",
    ()=>setCurrentItem,
    "setFormData",
    ()=>setFormData,
    "setModalType",
    ()=>setModalType,
    "setShowModal",
    ()=>setShowModal,
    "setTempColors",
    ()=>setTempColors,
    "setTempSizes",
    ()=>setTempSizes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/helper.js [app-client] (ecmascript)");
;
;
const initialState = {
    modalType: "",
    formData: {},
    showModal: false,
    currentItem: null,
    tempSizes: [],
    tempColors: [],
    users: [],
    total: 0,
    page: 1,
    pages: 1,
    loading: false,
    error: null
};
const adminSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "admin",
    initialState,
    reducers: {
        setModalType (state, action) {
            state.modalType = action.payload;
        },
        setFormData (state, action) {
            state.formData = action.payload;
        },
        setShowModal (state, action) {
            state.showModal = action.payload;
        },
        setTempSizes (state, action) {
            state.tempSizes = action.payload;
        },
        setTempColors (state, action) {
            state.tempColors = action.payload;
        },
        setCurrentItem (state, action) {
            state.currentItem = action.payload;
        },
        clearAdminUsersError: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAllUsers"].pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAllUsers"].fulfilled, (state, action)=>{
            state.loading = false;
            state.users = action.payload.users || action.payload; // in case you only return users array
            state.total = action.payload.total || state.users.length;
            state.page = action.payload.page || 1;
            state.pages = action.payload.pages || 1;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAllUsers"].rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || "Failed to load users";
        });
    }
});
const { setModalType, setFormData, setShowModal, setTempSizes, setTempColors, setCurrentItem, clearAdminUsersError } = adminSlice.actions;
const __TURBOPACK__default__export__ = adminSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/store/notificationsSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteNotification",
    ()=>deleteNotification,
    "fetchNotifications",
    ()=>fetchNotifications,
    "markAllNotificationsAsRead",
    ()=>markAllNotificationsAsRead,
    "markNotificationAsRead",
    ()=>markNotificationAsRead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const fetchNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("notifications/fetchNotifications", async (params = {}, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationAPI"].getAll(params);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});
const markNotificationAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("notifications/markAsRead", async (id, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationAPI"].markAsRead(id);
        return res.data.notification;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});
const markAllNotificationsAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("notifications/markAllAsRead", async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationAPI"].markAllAsRead();
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});
const deleteNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("notifications/delete", async (id, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationAPI"].delete(id);
        return id;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});
const notificationsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "notifications",
    initialState: {
        notifications: [],
        unreadCount: 0,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder// Fetch notifications
        .addCase(fetchNotifications.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchNotifications.fulfilled, (state, action)=>{
            state.loading = false;
            state.notifications = action.payload.notifications;
            state.unreadCount = action.payload.unreadCount;
        }).addCase(fetchNotifications.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Mark single as read
        .addCase(markNotificationAsRead.fulfilled, (state, action)=>{
            const index = state.notifications.findIndex((n)=>n._id === action.payload._id);
            if (index !== -1) {
                state.notifications[index] = action.payload;
                state.unreadCount = Math.max(0, state.unreadCount - 1);
            }
        })// Mark all as read
        .addCase(markAllNotificationsAsRead.fulfilled, (state)=>{
            state.notifications = state.notifications.map((n)=>({
                    ...n,
                    read: true
                }));
            state.unreadCount = 0;
        })// Delete notification
        .addCase(deleteNotification.fulfilled, (state, action)=>{
            state.notifications = state.notifications.filter((n)=>n._id !== action.payload);
        });
    }
});
const __TURBOPACK__default__export__ = notificationsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/store/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Store",
    ()=>Store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/contextSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$widthSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/widthSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/authSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$productSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/productSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$adminSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/adminSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$notificationsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/notificationsSlice.js [app-client] (ecmascript)");
const { configureStore } = __turbopack_context__.r("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const Store = configureStore({
    reducer: {
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        context: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$widthSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        product: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$productSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        admin: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$adminSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        notifications: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$notificationsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/provider/ReduxProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/store.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function ReduxProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "23c4fce0802d6d21ad851750f3a2bbd58e864c3074a0d51165be1a542d5bb04b") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "23c4fce0802d6d21ad851750f3a2bbd58e864c3074a0d51165be1a542d5bb04b";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
            store: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"],
            children: children
        }, void 0, false, {
            fileName: "[project]/app/provider/ReduxProvider.jsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/WidthListener.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/WidthListener.jsx
__turbopack_context__.s([
    "default",
    ()=>WidthListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$widthSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/widthSlice.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WidthListener() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "e3041312a2eb03665afd0ddf28cc8fe94b6a6690dc38a99409be7720a52b54de") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e3041312a2eb03665afd0ddf28cc8fe94b6a6690dc38a99409be7720a52b54de";
    }
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    let t0;
    let t1;
    if ($[1] !== dispatch) {
        t0 = ({
            "WidthListener[useEffect()]": ()=>{
                const updateWidth = {
                    "WidthListener[useEffect() > updateWidth]": ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$widthSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setScreenWidth"])(window.innerWidth))
                }["WidthListener[useEffect() > updateWidth]"];
                updateWidth();
                window.addEventListener("resize", updateWidth);
                return ()=>window.removeEventListener("resize", updateWidth);
            }
        })["WidthListener[useEffect()]"];
        t1 = [
            dispatch
        ];
        $[1] = dispatch;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return null;
}
_s(WidthListener, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = WidthListener;
var _c;
__turbopack_context__.k.register(_c, "WidthListener");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/MyInput.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const MyInput = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "73fcef7e9d45f90bc46cbbaaeb9d27c3a5fb14f3e9211acbb28668676bbbe887") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "73fcef7e9d45f90bc46cbbaaeb9d27c3a5fb14f3e9211acbb28668676bbbe887";
    }
    const { type, name, value, placeholder, onChange, classname } = t0;
    let t1;
    if ($[1] !== classname || $[2] !== name || $[3] !== onChange || $[4] !== placeholder || $[5] !== type || $[6] !== value) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                name: name,
                value: value,
                placeholder: placeholder,
                onChange: onChange,
                className: classname
            }, void 0, false, {
                fileName: "[project]/app/components/MyInput.jsx",
                lineNumber: 21,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
        $[1] = classname;
        $[2] = name;
        $[3] = onChange;
        $[4] = placeholder;
        $[5] = type;
        $[6] = value;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    return t1;
};
_c = MyInput;
const __TURBOPACK__default__export__ = MyInput;
var _c;
__turbopack_context__.k.register(_c, "MyInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyInput$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MyInput.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function Footer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "38e763873fbf18560199076a6aa371c1ae2435fd9b45381b7b2664215572cb8a") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "38e763873fbf18560199076a6aa371c1ae2435fd9b45381b7b2664215572cb8a";
    }
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formStatus, setFormStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] !== email) {
        t0 = ({
            "Footer[handleSubscribe]": (e)=>{
                e.preventDefault();
                setIsSubmitting(true);
                setFormStatus("");
                const templateParams = {
                    user_email: email
                };
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send("service_xw05ht7", "template_vqxo8x7", templateParams, "0-UL1jRHodRtq_rl7").then({
                    "Footer[handleSubscribe > (anonymous)(arg0)]": ()=>{
                        setFormStatus("Message sent successfully!");
                        setEmail("");
                        setIsSubmitting(false);
                    }
                }["Footer[handleSubscribe > (anonymous)(arg0)]"], {
                    "Footer[handleSubscribe > (anonymous)(arg1)]": (error)=>{
                        setFormStatus("Failed to send message. Please try again.");
                        setIsSubmitting(false);
                        console.error("EmailJS error:", error);
                    }
                }["Footer[handleSubscribe > (anonymous)(arg1)]"]);
            }
        })["Footer[handleSubscribe]"];
        $[1] = email;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleSubscribe = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Footer[handleChange]": (e_0)=>{
                setEmail(e_0.target.value);
            }
        })["Footer[handleChange]"];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleChange = t1;
    if (pathname === "/login" || pathname === "/signup" || pathname === "/forgotPassword" || pathname.includes("/reset-password") || pathname.includes("/x-AD-min")) {
        return null;
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRotate"], {
            className: "size-12"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 items-center",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[13.8rem]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "font-bold",
                            children: "Extended Return & Exchange"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 76,
                            columnNumber: 84
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "We offer free returns for items sent back within 20 days."
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 76,
                            columnNumber: 145
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.jsx",
                    lineNumber: 76,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoDiamondOutline"], {
            className: "size-12"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-5 items-start md:flex-row justify-between md:items-center md:max-w-[80vw] mx-auto",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 items-center",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[13.8rem]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "font-bold",
                                    children: "Complimentary Customization"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.jsx",
                                    lineNumber: 91,
                                    columnNumber: 205
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Complimentary engraving and customized size for all orders."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.jsx",
                                    lineNumber: 91,
                                    columnNumber: 263
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 91,
                            columnNumber: 176
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.jsx",
                    lineNumber: 91,
                    columnNumber: 131
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
            className: "m-auto my-4 md:my-10 text-[#80776f]"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: "w-28",
            src: "/logo.png",
            alt: "Logo"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " md:border-b-0 border-b md:pr-5 md:pb-0 pb-5",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1 mt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "info@1403luxury.com"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 108,
                            columnNumber: 118
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Call or Send Us a WhatsApp Message"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 108,
                            columnNumber: 150
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Mon-Sat | 8am-7pm GMT"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 108,
                            columnNumber: 197
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Sun | 2pm-6pm GMT"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 108,
                            columnNumber: 231
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "+234 809 900 1403"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 108,
                            columnNumber: 261
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.jsx",
                    lineNumber: 108,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "py-4 text-lg font-semibold",
            children: "About Us"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-start w-full px-5",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1 font-extralight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: "Company"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 122,
                            columnNumber: 108
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: "Community"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 122,
                            columnNumber: 137
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: "Careers"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 122,
                            columnNumber: 168
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: "Terms of Use"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 122,
                            columnNumber: 197
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.jsx",
                    lineNumber: 122,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "py-4 text-lg font-semibold",
            children: "Support"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between w-full md:border-b-0 border-b md:pr-5 md:pb-0 pb-5",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-start w-full px-5  border-r-0",
                    children: [
                        t11,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 font-extralight",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: "Knowledge Base"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.jsx",
                                    lineNumber: 136,
                                    columnNumber: 215
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: "Tutorials"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.jsx",
                                    lineNumber: 136,
                                    columnNumber: 251
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: "Guides"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.jsx",
                                    lineNumber: 136,
                                    columnNumber: 282
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: "Video"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.jsx",
                                    lineNumber: 136,
                                    columnNumber: 310
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.jsx",
                            lineNumber: 136,
                            columnNumber: 162
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.jsx",
                    lineNumber: 136,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "py-1 border-b w-max mx-auto",
            children: "NEWSLETTER"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center my-6 max-w-2xl mx-auto",
            children: "Subscribe to our newsletter and be the first to know about new updates, exclusive offers, and helpful tips straight to your inbox."
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[15] = t13;
        $[16] = t14;
    } else {
        t13 = $[15];
        t14 = $[16];
    }
    let t15;
    if ($[17] !== email) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyInput$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            value: email,
            onChange: handleChange,
            type: "email",
            placeholder: "Enter your email",
            classname: "px-4 py-2 border-neutral-500 border rounded-l-3xl w-full outline-none focus:outline-none focus:ring-0"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[17] = email;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    const t16 = isSubmitting ? "Subscribing..." : "Subscribe";
    let t17;
    if ($[19] !== handleSubscribe || $[20] !== isSubmitting || $[21] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSubscribe,
            type: "submit",
            disabled: isSubmitting,
            className: "text-xs px-4 py-2 rounded-r-3xl whitespace-nowrap bg-[#f7f1e8] border border-[#f7f1e8] text-[#4a4741]",
            children: t16
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[19] = handleSubscribe;
        $[20] = isSubmitting;
        $[21] = t16;
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] !== t15 || $[24] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "flex md:flex-row w-full max-w-md mx-auto",
            children: [
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[23] = t15;
        $[24] = t17;
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    let t19;
    if ($[26] !== formStatus) {
        t19 = formStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center mt-4 text-sm italic",
            children: formStatus
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 182,
            columnNumber: 25
        }, this);
        $[26] = formStatus;
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] !== t18 || $[29] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-3 md:max-w-[80vw] mx-auto gap-8",
            children: [
                t8,
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white px-5 backdrop-blur-md bg-[black]/30 py-12 md:w-[80%] w-full m-auto rounded-2xl",
                    children: [
                        t13,
                        t14,
                        t18,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.jsx",
                    lineNumber: 190,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[28] = t18;
        $[29] = t19;
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
            className: "m-auto my-4 md:my-10 text-[#80776f]"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-center block py-2",
                children: "© 2025 Fredrick Fashion Icon. All rights reserved."
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 206,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] !== t20) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#4a4741] text-[#f7f1e8] px-5 py-10",
            children: [
                t5,
                t6,
                t20,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.jsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[33] = t20;
        $[34] = t23;
    } else {
        t23 = $[34];
    }
    return t23;
}
_s(Footer, "KZcH1plejHyDIfWaJ1AfU/0Jk6w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/DarkLogo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
const DarkLogo = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "0d526b7e2b219f97bf9e53693a095721839d1dac3959b19dd15e346e867fa293") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0d526b7e2b219f97bf9e53693a095721839d1dac3959b19dd15e346e867fa293";
    }
    const { className } = t0;
    const t1 = `w-15 h-15 md:w-14 md:h-14 lg:w-20 lg:h-18 ${className}`;
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/darklogo.png",
                alt: "ffi_logo",
                height: 80,
                width: 80,
                className: t1
            }, void 0, false, {
                fileName: "[project]/app/components/DarkLogo.jsx",
                lineNumber: 18,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/DarkLogo.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    return t2;
};
_c = DarkLogo;
const __TURBOPACK__default__export__ = DarkLogo;
var _c;
__turbopack_context__.k.register(_c, "DarkLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/MyBtn.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const MyBtn = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "a5f39f9f8f87351b7a31b5f21da6e42e5e199b81d4104eca0228275807960674") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a5f39f9f8f87351b7a31b5f21da6e42e5e199b81d4104eca0228275807960674";
    }
    const { children, classname, to, onClick } = t0;
    const t1 = `${classname} cursor-pointer`;
    let t2;
    if ($[1] !== children || $[2] !== onClick || $[3] !== t1 || $[4] !== to) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClick: onClick,
            href: to,
            className: t1,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/MyBtn.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = children;
        $[2] = onClick;
        $[3] = t1;
        $[4] = to;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_c = MyBtn;
const __TURBOPACK__default__export__ = MyBtn;
var _c;
__turbopack_context__.k.register(_c, "MyBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/XBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const XBar = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "6a0021750e956d5379485b4f97e56791dfa7bcc90728c13ed2ed7277de8cc9fa") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6a0021750e956d5379485b4f97e56791dfa7bcc90728c13ed2ed7277de8cc9fa";
    }
    const { classname, onclick } = t0;
    let t1;
    if ($[1] !== classname || $[2] !== onclick) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            onClick: onclick,
            className: classname
        }, void 0, false, {
            fileName: "[project]/app/components/XBar.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = classname;
        $[2] = onclick;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
};
_c = XBar;
const __TURBOPACK__default__export__ = XBar;
var _c;
__turbopack_context__.k.register(_c, "XBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/MdDesktop.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DarkLogo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/DarkLogo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MyBtn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$XBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/XBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/contextSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)"); // ✅ added
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const MdDesktop = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "c600bc2f940f1b2ed3ccfbb01c0063d1ff7df5f687a0f24042906ca67bb5d0c8") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c600bc2f940f1b2ed3ccfbb01c0063d1ff7df5f687a0f24042906ca67bb5d0c8";
    }
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { dropDown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] !== dispatch) {
        t0 = ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDropDown"])(false));
        $[1] = dispatch;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleDropDown = t0;
    let t1;
    let t2;
    if ($[3] !== dispatch) {
        t1 = ()=>{
            const handleClickOutside = (event)=>{
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDropDown"])(false));
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return ()=>document.removeEventListener("mousedown", handleClickOutside);
        };
        t2 = [
            dispatch
        ];
        $[3] = dispatch;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[6] !== dispatch) {
        t3 = ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDropDown"])(false));
        };
        $[6] = dispatch;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== dispatch || $[9] !== pathname) {
        t4 = [
            pathname,
            dispatch
        ];
        $[8] = dispatch;
        $[9] = pathname;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    if (!dropDown) {
        return null;
    }
    let t5;
    if ($[11] !== handleDropDown) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: handleDropDown,
            className: "absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        }, void 0, false, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = handleDropDown;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$XBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            classname: "size-7 md:size-9 border border-[#4a4741] rounded-full p-1.5 md:p-2"
        }, void 0, false, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== handleDropDown) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2 md:gap-3 font-semibold cursor-pointer text-sm md:text-base",
            onClick: handleDropDown,
            children: [
                "Close",
                " ",
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = handleDropDown;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DarkLogo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "w-10 md:w-14 justify-self-center"
        }, void 0, false, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 106,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t8;
        $[17] = t9;
    } else {
        t8 = $[16];
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t7) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 items-center mb-5",
            children: [
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 116,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t7;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-lg md:text-base",
            children: "Home"
        }, void 0, false, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 124,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 md:gap-5 md:py-5",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/homepage",
                            className: "hover:underline",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 131,
                            columnNumber: 98
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "Oura Ring Gen3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 131,
                            columnNumber: 160
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "On Sale Extra Charger"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 131,
                            columnNumber: 224
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "Oura Ring Gen3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 131,
                            columnNumber: 295
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MdDesktop.jsx",
                    lineNumber: 131,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 131,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-lg md:text-base",
            children: "Blogs"
        }, void 0, false, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 138,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 md:gap-5 md:py-5",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/style-with-us",
                            className: "hover:underline",
                            children: "Blogs"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 145,
                            columnNumber: 98
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "Oura Ring Gen3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 145,
                            columnNumber: 166
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "On Sale Extra Charger"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 145,
                            columnNumber: 230
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "Oura Ring Gen3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 145,
                            columnNumber: 301
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MdDesktop.jsx",
                    lineNumber: 145,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-lg md:text-base",
            children: "About"
        }, void 0, false, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 152,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 md:gap-5 md:py-5",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            className: "hover:underline",
                            children: "Why FFI"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 159,
                            columnNumber: 98
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "Oura Ring Gen3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 159,
                            columnNumber: 160
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "On Sale Extra Charger"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 159,
                            columnNumber: 224
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "Oura Ring Gen3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 159,
                            columnNumber: 295
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MdDesktop.jsx",
                    lineNumber: 159,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 159,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-lg md:text-base",
            children: "Contact Us"
        }, void 0, false, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 166,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 md:gap-5 md:py-5",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact-us",
                            className: "hover:underline",
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 173,
                            columnNumber: 98
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "Oura Ring Gen3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 173,
                            columnNumber: 168
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "On Sale Extra Charger"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 173,
                            columnNumber: 232
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:underline",
                            children: "Oura Ring Gen3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 173,
                            columnNumber: 303
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MdDesktop.jsx",
                    lineNumber: 173,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 my-5",
            children: [
                t12,
                t14,
                t16,
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-5 content-between w-full h-48 md:h-64 bg-center bg-cover bg-[url(/mood.avif)] rounded-2xl p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-[#f7f1e8] block lg:hidden 2xl:block text-md md:text-2xl xl:text-4xl font-light",
                            children: [
                                "Fredrick Fashion Icon ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "slant",
                                    children: "is here"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/MdDesktop.jsx",
                                    lineNumber: 180,
                                    columnNumber: 342
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 180,
                            columnNumber: 220
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            to: "/discover",
                            classname: "bg-blue-500 text-[#f7f1e8] w-20 px-5 py-2 rounded-full justify-self-end text-sm md:text-base",
                            children: "Shop"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MdDesktop.jsx",
                            lineNumber: 180,
                            columnNumber: 385
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MdDesktop.jsx",
                    lineNumber: 180,
                    columnNumber: 100
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t19;
    } else {
        t19 = $[28];
    }
    let t20;
    if ($[29] !== t10) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: dropdownRef,
            className: "relative z-50 bg-[#f7f1e8] text-[#4a4741] shadow-lg py-6 md:py-10 max-h-screen overflow-y-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-375 mx-auto px-4 md:px-6",
                children: [
                    t10,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/MdDesktop.jsx",
                lineNumber: 187,
                columnNumber: 141
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 187,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t10;
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] !== t20 || $[32] !== t5) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "fixed inset-0 z-50",
            children: [
                t5,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/MdDesktop.jsx",
            lineNumber: 195,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t20;
        $[32] = t5;
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    return t21;
};
_s(MdDesktop, "7Ykaf6kTzSnBN48Lv+qdgvSxMAQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MdDesktop;
const __TURBOPACK__default__export__ = MdDesktop;
function _temp(state) {
    return state.context;
}
var _c;
__turbopack_context__.k.register(_c, "MdDesktop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Bar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Bar.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/contextSlice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Bar = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "5372389f60f43229ff74188b4abbe3341f84fc2fc73d779a605e126181980fcd") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5372389f60f43229ff74188b4abbe3341f84fc2fc73d779a605e126181980fcd";
    }
    const { classname } = t0;
    const screenWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    let t1;
    if ($[1] !== dispatch) {
        t1 = (e)=>{
            e.stopPropagation();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDropDown"])(true));
        };
        $[1] = dispatch;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const openDropdown = t1;
    const t2 = `${screenWidth < 1020 ? "hidden" : "block"}`;
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2,
            children: "Menu"
        }, void 0, false, {
            fileName: "[project]/app/components/Bar.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== classname) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBars"], {
            className: classname
        }, void 0, false, {
            fileName: "[project]/app/components/Bar.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = classname;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== openDropdown || $[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: openDropdown,
            className: "flex gap-3 items-center cursor-pointer",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Bar.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = openDropdown;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
};
_s(Bar, "vBFqWM8NXwUJ6kNKNCr7ATjSgZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = Bar;
const __TURBOPACK__default__export__ = Bar;
function _temp(state) {
    return state.width.screenWidth;
}
var _c;
__turbopack_context__.k.register(_c, "Bar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/SearchIcon.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
function SearchIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "b382ce46b5f521f751c81958a02876b59dc674b2309e855cd3f03ef97b5e564b") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b382ce46b5f521f751c81958a02876b59dc674b2309e855cd3f03ef97b5e564b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "size-5"
        }, void 0, false, {
            fileName: "[project]/app/components/SearchIcon.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = SearchIcon;
var _c;
__turbopack_context__.k.register(_c, "SearchIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Logo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const Logo = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "a40a1bd39702364360cdd06c6f7578c811e25e642cfdbef2486e9bdbd688c616") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a40a1bd39702364360cdd06c6f7578c811e25e642cfdbef2486e9bdbd688c616";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/logo.png",
            alt: "logo",
            height: 60,
            width: 60
        }, void 0, false, {
            fileName: "[project]/app/components/Logo.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = Logo;
const __TURBOPACK__default__export__ = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Cart.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Cart = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "9886412bfcbed5ae6a1f53315a6665302485fcc2bcad2a29eac0b3cabbec1287") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9886412bfcbed5ae6a1f53315a6665302485fcc2bcad2a29eac0b3cabbec1287";
    }
    const { classname, onClick } = t0;
    const { itemCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp);
    let t1;
    if ($[1] !== classname || $[2] !== onClick) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCart3"], {
            className: classname,
            onClick: onClick
        }, void 0, false, {
            fileName: "[project]/app/components/Cart.jsx",
            lineNumber: 24,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = classname;
        $[2] = onClick;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== itemCount) {
        t2 = itemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-3 -right-2 bg-[#4a4741] text-[#f7f1e8] px-2 py-0.5 rounded-full text-xs",
            children: itemCount
        }, void 0, false, {
            fileName: "[project]/app/components/Cart.jsx",
            lineNumber: 33,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = itemCount;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t1 || $[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Cart.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
};
_s(Cart, "ZlZz7mXp0fMXidySXX8PTh7eWIc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Cart;
const __TURBOPACK__default__export__ = Cart;
function _temp(state) {
    return state.context;
}
var _c;
__turbopack_context__.k.register(_c, "Cart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/LightLogo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
const LightLogo = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "709a16e21834efebb1c4651521099c0952009b247dd73ed0862609739e364736") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "709a16e21834efebb1c4651521099c0952009b247dd73ed0862609739e364736";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/lightlogo.png",
                alt: "ffi_logo",
                height: 100,
                width: 100,
                className: "invert brightness-0 saturate-0 sepia-[1] hue-rotate-320"
            }, void 0, false, {
                fileName: "[project]/app/components/LightLogo.jsx",
                lineNumber: 14,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/LightLogo.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    return t1;
};
_c = LightLogo;
const __TURBOPACK__default__export__ = LightLogo;
var _c;
__turbopack_context__.k.register(_c, "LightLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/NavBarMd.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProfile",
    ()=>UserProfile,
    "default",
    ()=>NavBarMd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Bar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SearchIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SearchIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Logo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Cart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Cart.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DarkLogo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/DarkLogo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LightLogo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/LightLogo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/contextSlice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const UserProfile = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "f93aae5a2e77a60a14600543106fde4f31630a44f37d7e9c3ae706f160f695a7") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f93aae5a2e77a60a14600543106fde4f31630a44f37d7e9c3ae706f160f695a7";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/profile",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                className: "size-6"
            }, void 0, false, {
                fileName: "[project]/app/components/NavBarMd.jsx",
                lineNumber: 27,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = UserProfile;
function NavBarMd() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "f93aae5a2e77a60a14600543106fde4f31630a44f37d7e9c3ae706f160f695a7") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f93aae5a2e77a60a14600543106fde4f31630a44f37d7e9c3ae706f160f695a7";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isHomePage = pathname === "/homepage";
    const { cart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_NavBarMdUseSelector);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    let t0;
    if ($[1] !== dispatch) {
        t0 = ({
            "NavBarMd[openDropdown]": (e)=>{
                e.stopPropagation();
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDropDown"])(true));
            }
        })["NavBarMd[openDropdown]"];
        $[1] = dispatch;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const openDropdown = t0;
    let t1;
    let t2;
    if ($[3] !== isHomePage) {
        t1 = ({
            "NavBarMd[useEffect()]": ()=>{
                if (!isHomePage) {
                    return;
                }
                const handleScroll = {
                    "NavBarMd[useEffect() > handleScroll]": ()=>{
                        setIsScrolled(window.scrollY > 30);
                    }
                }["NavBarMd[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["NavBarMd[useEffect()]"];
        t2 = [
            isHomePage
        ];
        $[3] = isHomePage;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (pathname === "/login" || pathname === "/signup" || pathname === "/forgotPassword" || pathname.includes("/reset-password") || pathname.includes("/x-AD-min")) {
        return null;
    }
    let t3;
    let t4;
    if ($[6] !== isHomePage) {
        t3 = ({
            "NavBarMd[<nav>.onMouseEnter]": ()=>isHomePage && setIsHovered(true)
        })["NavBarMd[<nav>.onMouseEnter]"];
        t4 = ({
            "NavBarMd[<nav>.onMouseLeave]": ()=>isHomePage && setIsHovered(false)
        })["NavBarMd[<nav>.onMouseLeave]"];
        $[6] = isHomePage;
        $[7] = t3;
        $[8] = t4;
    } else {
        t3 = $[7];
        t4 = $[8];
    }
    const t5 = `${isHomePage ? "fixed" : "relative"} top-0 right-0 left-0 flex items-center transition-all duration-300 z-40 overflow-hidden
        ${isHomePage ? isScrolled ? "bg-[#f7f1e8] text-black shadow-md" : isHovered ? "md:bg-[#f7f1e8] md:text-black md:shadow-sm bg-[#f7f1e8] text-black" : "bg-transparent md:text-[#f7f1e8]  text-[#f7f1e8]" : "bg-[#f7f1e8] text-black shadow-sm"}
        ${isHomePage ? isScrolled ? "h-20" : "h-20 md:h-24" : "h-20"}
      `;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            classname: " rounded-full size-10 p-2 cursor-pointer"
        }, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex gap-6 items-center",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center gap-2 cursor-pointer hover:text-neutral-700 transition",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SearchIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/components/NavBarMd.jsx",
                            lineNumber: 122,
                            columnNumber: 158
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Search"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBarMd.jsx",
                            lineNumber: 122,
                            columnNumber: 172
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NavBarMd.jsx",
                    lineNumber: 122,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBars"], {}, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== openDropdown) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: openDropdown,
            className: "block md:hidden",
            children: t8
        }, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[12] = openDropdown;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== isHomePage || $[15] !== isHovered || $[16] !== isScrolled) {
        t10 = isHomePage ? isScrolled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DarkLogo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 144,
            columnNumber: 37
        }, this) : isHovered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DarkLogo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 144,
            columnNumber: 64
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LightLogo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 144,
            columnNumber: 79
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DarkLogo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 144,
            columnNumber: 95
        }, this);
        $[14] = isHomePage;
        $[15] = isHovered;
        $[16] = isScrolled;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/contact-us",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm whitespace-nowrap",
                children: "Contact Us"
            }, void 0, false, {
                fileName: "[project]/app/components/NavBarMd.jsx",
                lineNumber: 155,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserProfile, {}, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t12;
    } else {
        t11 = $[18];
        t12 = $[19];
    }
    let t13;
    if ($[20] !== dispatch) {
        t13 = ({
            "NavBarMd[<div>.onClick]": ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowCartModal"])(true))
        })["NavBarMd[<div>.onClick]"];
        $[20] = dispatch;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Cart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            classname: "size-6"
        }, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== cart) {
        t15 = cart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-2 -right-2 flex items-center justify-center bg-black text-white rounded-full text-xs font-semibold w-5 h-5",
            children: cart.length
        }, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 182,
            columnNumber: 19
        }, this);
        $[23] = cart;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t13 || $[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center gap-6",
            children: [
                t11,
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: t13,
                    className: "relative flex items-center cursor-pointer",
                    children: [
                        t14,
                        t15
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NavBarMd.jsx",
                    lineNumber: 190,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex md:hidden items-center gap-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserProfile, {}, void 0, false, {
                fileName: "[project]/app/components/NavBarMd.jsx",
                lineNumber: 199,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== t10 || $[30] !== t16 || $[31] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center w-full max-w-[90vw] px-5 mx-auto",
            children: [
                t7,
                t9,
                t10,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[29] = t10;
        $[30] = t16;
        $[31] = t9;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== t18 || $[34] !== t3 || $[35] !== t4 || $[36] !== t5) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            onMouseEnter: t3,
            onMouseLeave: t4,
            className: t5,
            children: t18
        }, void 0, false, {
            fileName: "[project]/app/components/NavBarMd.jsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[33] = t18;
        $[34] = t3;
        $[35] = t4;
        $[36] = t5;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    return t19;
}
_s(NavBarMd, "WipCCaHL8vGccfLe9QFrnoOxmX0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c1 = NavBarMd;
// import Link from "next/link";
// import { User } from "lucide-react";
// import { useEffect, useState } from "react";
// import Logo from "./Logo";
// import NavLinks from "./NavLinks";
// import Bar from "./Bar";
// import Cart from "./Cart";
// import { usePathname } from "next/navigation";
// const NavBarMd = ({
//   initialTop = "top-2",
//   finaltop = "top-2",
//   position = "relative",
// }) => {
//   return (
//     <div
//       className={`${position} left-0 right-0 z-20 mx-4 md:mx-auto max-w-7xl transition-all duration-300 bg-[#4a4741]/50 backdrop-blur-md py-1 mt-2 rounded hidden mb-4 md:block ${
//         isScrolled ? finaltop : initialTop
//       } rounded-lg`}
//     >
//       <div className="flex items-center justify-between max-w-6xl mx-auto">
//         <div className="flex items-center gap-6 lg:gap-8">
//           <NavLinks />
//           <div className="w-16  justify-between items-center hidden md:flex text-[#f7f1e8]">
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default NavBarMd;
function _NavBarMdUseSelector(state) {
    return state.context;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "UserProfile");
__turbopack_context__.k.register(_c1, "NavBarMd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/NavLinks.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MyBtn.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const NavLinks = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "4d614e29203158613cd2c3b461e4c3569955dde83433848e934d807dac9bb490") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4d614e29203158613cd2c3b461e4c3569955dde83433848e934d807dac9bb490";
    }
    const screenWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp);
    const currentPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                title: "Home",
                location: "/homepage"
            },
            {
                title: "Shop",
                location: "/discover"
            },
            {
                title: "Why FFI",
                location: "/about"
            },
            {
                title: "Blogs",
                location: "/style-with-us"
            },
            {
                title: "Contact-us",
                location: "/contact-us"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const navItems = t0;
    let t1;
    if ($[2] !== currentPath || $[3] !== screenWidth) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-16 items-center justify-between text-[#f7f1e8]",
            children: navItems.map((nav, idx)=>{
                const isActive = currentPath === nav.location;
                const shouldShow = screenWidth >= 1020 || isActive;
                return shouldShow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    classname: `text-sm cursor-pointer ${isActive ? "bg-blue-500 hover:bg-blue-700 px-5 py-3 rounded-3xl" : "text-[#f7f1e8]"}`,
                    to: nav.location,
                    children: nav.title
                }, idx, false, {
                    fileName: "[project]/app/components/NavLinks.jsx",
                    lineNumber: 45,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0)) : null;
            })
        }, void 0, false, {
            fileName: "[project]/app/components/NavLinks.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = currentPath;
        $[3] = screenWidth;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
};
_s(NavLinks, "y/z+CviuWVI3YCfH/fOUTpbKoFU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavLinks;
const __TURBOPACK__default__export__ = NavLinks;
function _temp(state) {
    return state.width.screenWidth;
}
var _c;
__turbopack_context__.k.register(_c, "NavLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/NavBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Logo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavLinks$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NavLinks.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Bar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const NavBar = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "b724db342bbb35c77e4400e67e4d68d87b7cb11f89d2d3c510f9b83cfc1139ce") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b724db342bbb35c77e4400e67e4d68d87b7cb11f89d2d3c510f9b83cfc1139ce";
    }
    const { initialTop: t1, finaltop: t2 } = t0;
    const initialTop = t1 === undefined ? "top-2" : t1;
    const finaltop = t2 === undefined ? "top-2" : t2;
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ()=>{
            const handleScroll = ()=>{
                setIsScrolled(window.scrollY > 30);
            };
            window.addEventListener("scroll", handleScroll);
            return ()=>window.removeEventListener("scroll", handleScroll);
        };
        t4 = [];
        $[1] = t3;
        $[2] = t4;
    } else {
        t3 = $[1];
        t4 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const t5 = `fixed left-0 right-0 z-20 mx-4 md:mx-auto max-w-7xl transition-all duration-300 bg-white/30 backdrop-blur-md md:hidden ${isScrolled ? finaltop : initialTop} rounded-lg px-5 py-2 md:py-3 `;
    let t6;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/NavBar.jsx",
                lineNumber: 45,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/NavBar.jsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t6;
    } else {
        t6 = $[3];
    }
    let t7;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between max-w-6xl mx-auto",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6 lg:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavLinks$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/components/NavBar.jsx",
                            lineNumber: 52,
                            columnNumber: 133
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Bar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            classname: "border-white rounded-full border size-10 p-2 cursor-pointer text-[#f7f1e8]"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar.jsx",
                            lineNumber: 52,
                            columnNumber: 145
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NavBar.jsx",
                    lineNumber: 52,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/NavBar.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t7;
    } else {
        t7 = $[4];
    }
    let t8;
    if ($[5] !== t5) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t5,
            children: t7
        }, void 0, false, {
            fileName: "[project]/app/components/NavBar.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t5;
        $[6] = t8;
    } else {
        t8 = $[6];
    }
    return t8;
};
_s(NavBar, "UCaI8lpZVGvPrsRoIFYRt2wv0+o=");
_c = NavBar;
const __TURBOPACK__default__export__ = NavBar;
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/SideBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/contextSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$XBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/XBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DarkLogo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/DarkLogo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MyBtn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const Sidebar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c4cba755a07d8dc026a34756d333899db506da9061cb0447a842be19da4e7cd4") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4cba755a07d8dc026a34756d333899db506da9061cb0447a842be19da4e7cd4";
    }
    const { showSide } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] !== dispatch) {
        t0 = ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowSide"])(false));
        };
        $[1] = dispatch;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== pathName) {
        t1 = [
            pathName
        ];
        $[3] = pathName;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = `${showSide ? "block" : "hidden"} fixed top-0 right-0 h-screen w-[92vw] bg-[#f7f1e8] text-[#4a4741] z-40 px-6 py-10 pb-12 shadow-md md:hidden`;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center pb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DarkLogo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "w-5"
                }, void 0, false, {
                    fileName: "[project]/app/components/SideBar.jsx",
                    lineNumber: 50,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$XBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onclick: _temp2,
                    classname: "size-7"
                }, void 0, false, {
                    fileName: "[project]/app/components/SideBar.jsx",
                    lineNumber: 50,
                    columnNumber: 95
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/SideBar.jsx",
            lineNumber: 50,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "side-bottom flex flex-col h-3/5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/app/components/SideBar.jsx",
                    lineNumber: 57,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/about-us",
                    children: "About"
                }, void 0, false, {
                    fileName: "[project]/app/components/SideBar.jsx",
                    lineNumber: 57,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact-us",
                    children: "Contact Us"
                }, void 0, false, {
                    fileName: "[project]/app/components/SideBar.jsx",
                    lineNumber: 57,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/style-with-us",
                    children: "Blog"
                }, void 0, false, {
                    fileName: "[project]/app/components/SideBar.jsx",
                    lineNumber: 57,
                    columnNumber: 162
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/wishlist",
                    children: "Wishlist"
                }, void 0, false, {
                    fileName: "[project]/app/components/SideBar.jsx",
                    lineNumber: 57,
                    columnNumber: 201
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/profile",
                    children: "Profile"
                }, void 0, false, {
                    fileName: "[project]/app/components/SideBar.jsx",
                    lineNumber: 57,
                    columnNumber: 239
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/SideBar.jsx",
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {}, void 0, false, {
            fileName: "[project]/app/components/SideBar.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-4/5 flex flex-col justify-between",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center gap-2",
                    children: [
                        t5,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Dark Mode"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SideBar.jsx",
                            lineNumber: 71,
                            columnNumber: 124
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/SideBar.jsx",
                    lineNumber: 71,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    to: "/LogAcct",
                    children: "Sign in"
                }, void 0, false, {
                    fileName: "[project]/app/components/SideBar.jsx",
                    lineNumber: 71,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/SideBar.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t2) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t6
        }, void 0, false, {
            fileName: "[project]/app/components/SideBar.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t2;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
};
_s(Sidebar, "XpGHNUnY1hTzdYRCW0DPLkTRXXE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
function _temp(state) {
    return state.context;
}
function _temp2() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowSide"])(false);
}
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ArrowLeft.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
;
;
;
const ArrowLeft = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "be87ac7942c8b43b61f91be52f9be4310e473b7e5bd92dd7f3682c360a414980") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "be87ac7942c8b43b61f91be52f9be4310e473b7e5bd92dd7f3682c360a414980";
    }
    const { classname, onclick } = t0;
    let t1;
    if ($[1] !== classname || $[2] !== onclick) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowRoundBack"], {
            onClick: onclick,
            className: classname
        }, void 0, false, {
            fileName: "[project]/app/components/ArrowLeft.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = classname;
        $[2] = onclick;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
};
_c = ArrowLeft;
const __TURBOPACK__default__export__ = ArrowLeft;
var _c;
__turbopack_context__.k.register(_c, "ArrowLeft");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/AddToCart.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeaders",
    ()=>PageHeaders,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ArrowLeft$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ArrowLeft.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$XBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/XBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MyBtn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/contextSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/helper.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const PageHeaders = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "5f9160b49099e5612251792394dbde1b6e8b48723cf669641fe23b9921f13a24") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f9160b49099e5612251792394dbde1b6e8b48723cf669641fe23b9921f13a24";
    }
    const { title } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[1] !== router) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ArrowLeft$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onclick: ()=>router.back(),
            classname: "size-7"
        }, void 0, false, {
            fileName: "[project]/app/components/AddToCart.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = router;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-light text-xl",
            children: title
        }, void 0, false, {
            fileName: "[project]/app/components/AddToCart.jsx",
            lineNumber: 35,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "size-5"
        }, void 0, false, {
            fileName: "[project]/app/components/AddToCart.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t1 || $[7] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between pb-3",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AddToCart.jsx",
            lineNumber: 50,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
        $[7] = t2;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
};
_s(PageHeaders, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PageHeaders;
const AddToCart = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "5f9160b49099e5612251792394dbde1b6e8b48723cf669641fe23b9921f13a24") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f9160b49099e5612251792394dbde1b6e8b48723cf669641fe23b9921f13a24";
    }
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp);
    const { showCartModal, cart, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp2);
    let t0;
    let t1;
    if ($[1] !== dispatch || $[2] !== showCartModal || $[3] !== user) {
        t0 = ()=>{
            if (showCartModal && user) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCart"])());
            }
        };
        t1 = [
            showCartModal,
            user,
            dispatch
        ];
        $[1] = dispatch;
        $[2] = showCartModal;
        $[3] = user;
        $[4] = t0;
        $[5] = t1;
    } else {
        t0 = $[4];
        t1 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[6] !== dispatch) {
        t2 = ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowCartModal"])(false));
        };
        $[6] = dispatch;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== pathname) {
        t3 = [
            pathname
        ];
        $[8] = pathname;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[10] !== dispatch) {
        t4 = (itemId)=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromCart"])(itemId));
        };
        $[10] = dispatch;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    const handleRemove = t4;
    let t5;
    if ($[12] !== dispatch) {
        t5 = (itemId_0, newQuantity)=>{
            if (newQuantity < 1) {
                return;
            }
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCartQuantity"])({
                itemId: itemId_0,
                quantity: newQuantity
            }));
        };
        $[12] = dispatch;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    const handleQuantity = t5;
    let t10;
    let t11;
    let t12;
    let t13;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[14] !== cart || $[15] !== dispatch || $[16] !== error || $[17] !== handleQuantity || $[18] !== handleRemove || $[19] !== loading || $[20] !== showCartModal || $[21] !== user) {
        t13 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const total = Array.isArray(cart) ? cart.reduce(_temp3, 0) : 0;
            if (!showCartModal) {
                t13 = null;
                break bb0;
            }
            t11 = "fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm";
            if ($[30] !== dispatch) {
                t12 = ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowCartModal"])(false));
                $[30] = dispatch;
                $[31] = t12;
            } else {
                t12 = $[31];
            }
            t6 = "relative h-full md:w-[30%] w-full bg-[#f7f1e8] flex flex-col";
            t7 = _temp4;
            let t14;
            if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
                t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-light text-2xl",
                    children: "Cart"
                }, void 0, false, {
                    fileName: "[project]/app/components/AddToCart.jsx",
                    lineNumber: 173,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[32] = t14;
            } else {
                t14 = $[32];
            }
            if ($[33] !== dispatch) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b border-[#4a4741]",
                    children: [
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$XBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onclick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$contextSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setShowCartModal"])(false)),
                            classname: "size-5 stroke-1 cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AddToCart.jsx",
                            lineNumber: 179,
                            columnNumber: 106
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AddToCart.jsx",
                    lineNumber: 179,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[33] = dispatch;
                $[34] = t8;
            } else {
                t8 = $[34];
            }
            let t15;
            if ($[35] !== cart || $[36] !== error || $[37] !== handleQuantity || $[38] !== handleRemove || $[39] !== loading || $[40] !== user) {
                t15 = !user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center mt-20",
                    children: "Please log in to view your cart."
                }, void 0, false, {
                    fileName: "[project]/app/components/AddToCart.jsx",
                    lineNumber: 187,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0)) : loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center mt-20",
                    children: "Loading cart..."
                }, void 0, false, {
                    fileName: "[project]/app/components/AddToCart.jsx",
                    lineNumber: 187,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center mt-20 text-red-500",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/components/AddToCart.jsx",
                    lineNumber: 187,
                    columnNumber: 168
                }, ("TURBOPACK compile-time value", void 0)) : cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center mt-20",
                    children: "Your cart is empty."
                }, void 0, false, {
                    fileName: "[project]/app/components/AddToCart.jsx",
                    lineNumber: 187,
                    columnNumber: 248
                }, ("TURBOPACK compile-time value", void 0)) : cart.map((item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-4 flex gap-4 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item_0.imageUrl || "/placeholder.png",
                                alt: item_0.name,
                                className: "w-20 h-20 object-contain rounded"
                            }, void 0, false, {
                                fileName: "[project]/app/components/AddToCart.jsx",
                                lineNumber: 187,
                                columnNumber: 409
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold truncate",
                                        children: item_0.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AddToCart.jsx",
                                        lineNumber: 187,
                                        columnNumber: 547
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item_0.selectedSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: [
                                            "Size: ",
                                            item_0.selectedSize
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AddToCart.jsx",
                                        lineNumber: 187,
                                        columnNumber: 628
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mt-2 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleQuantity(item_0._id, item_0.quantity - 1),
                                                className: "px-2 py-1 bg-gray-200 rounded cursor-pointer",
                                                disabled: loading,
                                                children: "-"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AddToCart.jsx",
                                                lineNumber: 187,
                                                columnNumber: 729
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item_0.quantity
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AddToCart.jsx",
                                                lineNumber: 187,
                                                columnNumber: 887
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleQuantity(item_0._id, item_0.quantity + 1),
                                                className: "px-2 py-1 bg-gray-200 rounded cursor-pointer",
                                                disabled: loading,
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AddToCart.jsx",
                                                lineNumber: 187,
                                                columnNumber: 917
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleRemove(item_0._id),
                                                disabled: loading,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiDeleteBinLine"], {
                                                    className: "size-5 cursor-pointer text-red-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AddToCart.jsx",
                                                    lineNumber: 187,
                                                    columnNumber: 1143
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AddToCart.jsx",
                                                lineNumber: 187,
                                                columnNumber: 1075
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AddToCart.jsx",
                                        lineNumber: 187,
                                        columnNumber: 683
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AddToCart.jsx",
                                lineNumber: 187,
                                columnNumber: 523
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-medium",
                                children: [
                                    "₦",
                                    (item_0.price * item_0.quantity).toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AddToCart.jsx",
                                lineNumber: 187,
                                columnNumber: 1230
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, item_0._id, true, {
                        fileName: "[project]/app/components/AddToCart.jsx",
                        lineNumber: 187,
                        columnNumber: 326
                    }, ("TURBOPACK compile-time value", void 0)));
                $[35] = cart;
                $[36] = error;
                $[37] = handleQuantity;
                $[38] = handleRemove;
                $[39] = loading;
                $[40] = user;
                $[41] = t15;
            } else {
                t15 = $[41];
            }
            if ($[42] !== t15) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto px-6 py-4 space-y-4",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/app/components/AddToCart.jsx",
                    lineNumber: 199,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[42] = t15;
                $[43] = t9;
            } else {
                t9 = $[43];
            }
            t10 = cart.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 bg-white border-t border-[#4a4741] flex flex-col gap-4 sticky bottom-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-xl font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Total:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/AddToCart.jsx",
                                lineNumber: 205,
                                columnNumber: 182
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "₦",
                                    total.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AddToCart.jsx",
                                lineNumber: 205,
                                columnNumber: 201
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AddToCart.jsx",
                        lineNumber: 205,
                        columnNumber: 124
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MyBtn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        to: "/check-out",
                        classname: "bg-[#4a4741] py-3 rounded-3xl text-[#f7f1e8] w-full text-center",
                        children: "Check Out"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AddToCart.jsx",
                        lineNumber: 205,
                        columnNumber: 245
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AddToCart.jsx",
                lineNumber: 205,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0));
        }
        $[14] = cart;
        $[15] = dispatch;
        $[16] = error;
        $[17] = handleQuantity;
        $[18] = handleRemove;
        $[19] = loading;
        $[20] = showCartModal;
        $[21] = user;
        $[22] = t10;
        $[23] = t11;
        $[24] = t12;
        $[25] = t13;
        $[26] = t6;
        $[27] = t7;
        $[28] = t8;
        $[29] = t9;
    } else {
        t10 = $[22];
        t11 = $[23];
        t12 = $[24];
        t13 = $[25];
        t6 = $[26];
        t7 = $[27];
        t8 = $[28];
        t9 = $[29];
    }
    if (t13 !== Symbol.for("react.early_return_sentinel")) {
        return t13;
    }
    let t14;
    if ($[44] !== t10 || $[45] !== t6 || $[46] !== t7 || $[47] !== t8 || $[48] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: t6,
            onClick: t7,
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AddToCart.jsx",
            lineNumber: 238,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t10;
        $[45] = t6;
        $[46] = t7;
        $[47] = t8;
        $[48] = t9;
        $[49] = t14;
    } else {
        t14 = $[49];
    }
    let t15;
    if ($[50] !== t11 || $[51] !== t12 || $[52] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            onClick: t12,
            children: t14
        }, void 0, false, {
            fileName: "[project]/app/components/AddToCart.jsx",
            lineNumber: 250,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t11;
        $[51] = t12;
        $[52] = t14;
        $[53] = t15;
    } else {
        t15 = $[53];
    }
    return t15;
};
_s1(AddToCart, "HqHdzpEtIc0F1q5gM8iJr/cvzmY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c1 = AddToCart;
const __TURBOPACK__default__export__ = AddToCart;
function _temp(state) {
    return state.auth;
}
function _temp2(state_0) {
    return state_0.context;
}
function _temp3(sum, item) {
    return sum + item.price * item.quantity;
}
function _temp4(e) {
    return e.stopPropagation();
}
var _c, _c1;
__turbopack_context__.k.register(_c, "PageHeaders");
__turbopack_context__.k.register(_c1, "AddToCart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/AuthProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/helper.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AuthProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "97b710fe6602478ff18d43f73f2095b8c80d54a3043958216a2d4b72f1825383") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "97b710fe6602478ff18d43f73f2095b8c80d54a3043958216a2d4b72f1825383";
    }
    const { children } = t0;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    let t1;
    let t2;
    if ($[1] !== dispatch) {
        t1 = ({
            "AuthProvider[useEffect()]": ()=>{
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCurrentUser"])());
            }
        })["AuthProvider[useEffect()]"];
        t2 = [
            dispatch
        ];
        $[1] = dispatch;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== children) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
        $[4] = children;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_s(AuthProvider, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ClientLayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Footer from "./Footer";
// import MdDesktop from "./MdDesktop";
// import NavBarMd from "./NavBarMd";
// import NavBar from "./NavBar";
// import Sidebar from "./SideBar";
// import AddToCart from "./AddToCart";
// import AuthProvider from "./AuthProvider";
// import {
//   fetchBlogs,
//   fetchCards,
//   fetchCart,
//   fetchOrders,
//   fetchProduct,
//   fetchUserAddresses,
//   fetchUserProfile,
//   fetchWishlist,
// } from "../utils/helper";
// export default function ClientLayout({ children }) {
//   const dispatch = useDispatch();
//   const { user, authLoading } = useSelector((state) => state.auth);
//   const hasFetchedUserData = useRef(false); // ✅ Track if we've fetched
//   console.log("ClientLayout - authLoading:", authLoading, "user:", user);
//   // Fetch user-related data ONLY ONCE when user exists
//   useEffect(() => {
//     console.log(
//       "User effect triggered - authLoading:",
//       authLoading,
//       "user:",
//       user,
//       "hasFetched:",
//       hasFetchedUserData.current
//     );
//     if (authLoading) {
//       console.log("Still loading auth, skipping...");
//       return;
//     }
//     if (!user) {
//       console.log("No user, skipping...");
//       hasFetchedUserData.current = false; // Reset when user logs out
//       return;
//     }
//     // ✅ Only fetch if we haven't already
//     if (hasFetchedUserData.current) {
//       console.log("Already fetched user data, skipping...");
//       return;
//     }
//     console.log("Fetching user data...");
//     hasFetchedUserData.current = true; // ✅ Mark as fetched
//     dispatch(fetchUserProfile());
//     dispatch(fetchWishlist());
//     dispatch(fetchCart());
//     dispatch(fetchUserAddresses());
//     dispatch(fetchOrders());
//     dispatch(fetchCards());
//   }, [user, authLoading, dispatch]);
//   // Public data (runs once)
//   useEffect(() => {
//     dispatch(fetchProduct());
//     dispatch(fetchBlogs());
//   }, [dispatch]);
//   return (
//     <AuthProvider>
//       <div>
//         <MdDesktop />
//         <NavBarMd
//           initialTop="top-14 md:top-8"
//           finaltop="top-2"
//           position="fixed"
//         />
//         <NavBar initialTop="top-14 md:top-8" finaltop="top-2" />
//         <AddToCart />
//         <Sidebar />
//         {children}
//         <Footer />
//       </div>
//     </AuthProvider>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MdDesktop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MdDesktop.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBarMd$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NavBarMd.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NavBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SideBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SideBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AddToCart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AddToCart.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AuthProvider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/helper.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function ClientLayout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "85971ddac360eaf2f94688c675019fa82b2a43964eb68c4b20dc65fdabac57e0") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85971ddac360eaf2f94688c675019fa82b2a43964eb68c4b20dc65fdabac57e0";
    }
    const { children } = t0;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { user, authLoading, initialized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_ClientLayoutUseSelector);
    console.log("ClientLayout - authLoading:", authLoading, "initialized:", initialized, "user:", user);
    let t1;
    if ($[1] !== dispatch || $[2] !== initialized || $[3] !== user) {
        t1 = ({
            "ClientLayout[useEffect()]": ()=>{
                if (!initialized) {
                    console.log("Not initialized yet, skipping...");
                    return;
                }
                if (!user) {
                    console.log("No user after initialization, skipping...");
                    return;
                }
                console.log("Fetching user data...");
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserProfile"])());
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWishlist"])());
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCart"])());
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserAddresses"])());
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOrders"])());
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCards"])());
            }
        })["ClientLayout[useEffect()]"];
        $[1] = dispatch;
        $[2] = initialized;
        $[3] = user;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== dispatch || $[6] !== initialized) {
        t2 = [
            initialized,
            dispatch
        ];
        $[5] = dispatch;
        $[6] = initialized;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[8] !== dispatch) {
        t3 = ({
            "ClientLayout[useEffect()]": ()=>{
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProduct"])());
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBlogs"])());
            }
        })["ClientLayout[useEffect()]"];
        t4 = [
            dispatch
        ];
        $[8] = dispatch;
        $[9] = t3;
        $[10] = t4;
    } else {
        t3 = $[9];
        t4 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MdDesktop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/components/ClientLayout.jsx",
            lineNumber: 185,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBarMd$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            initialTop: "top-14 md:top-8",
            finaltop: "top-2",
            position: "fixed"
        }, void 0, false, {
            fileName: "[project]/app/components/ClientLayout.jsx",
            lineNumber: 186,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AddToCart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/components/ClientLayout.jsx",
            lineNumber: 187,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SideBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/components/ClientLayout.jsx",
            lineNumber: 188,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
    } else {
        t5 = $[11];
        t6 = $[12];
        t7 = $[13];
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/components/ClientLayout.jsx",
            lineNumber: 201,
            columnNumber: 10
        }, this);
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== children) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t5,
                    t6,
                    t7,
                    t8,
                    children,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ClientLayout.jsx",
                lineNumber: 208,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/ClientLayout.jsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[16] = children;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    return t10;
}
_s(ClientLayout, "H39I6ePJHBtkonJZR/+eVfX80FA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = ClientLayout;
function _ClientLayoutUseSelector(state) {
    return state.auth;
}
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_8dc161cf._.js.map