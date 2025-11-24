// utils/helper.js
import { authAPI, cartAPI, orderAPI, userAPI } from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      // console.log("TOKEN:", localStorage.getItem("token"));

      // Automatically uses your configured axios instance (with baseURL, interceptors, etc.)
      const { data } = await authAPI.getMe();

      if (process.env.NODE_ENV !== "production") {
        console.log("Fetched user data:", data);
      }

      // ✅ Handle possible API structures
      if (!data || (!data.success && !data.user)) {
        return rejectWithValue("Invalid response structure from /auth/me");
      }

      const user = data.user || data; // fallback if API just returns user directly

      return {
        id: user.id || user._id,
        name: user.name || "",
        email: user.email || "",
        avatar: user.avatar || "",
        bio: user.bio || "",
        phone: user.phone || "",
        address: user.address || "",
      };
    } catch (error) {
      console.error("Error fetching user:", error);

      // Axios errors have a predictable structure
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch current user"
      );
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userAPI.getProfile();

      if (process.env.NODE_ENV !== "production") {
        console.log("Fetched user profile:", data);
      }

      if (!data || (!data.success && !data.user)) {
        return rejectWithValue(
          "Invalid response structure from /users/profile"
        );
      }

      const user = data.user || data;

      return {
        id: user.id || user._id,
        name: user.name || "",
        email: user.email || "",
        avatar: user.avatar || "",
        bio: user.bio || "",
        phone: user.phone || "",
        address: user.address || "",
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user profile"
      );
    }
  }
);

//fetch addresses
export const fetchUserAddresses = createAsyncThunk(
  "user/fetchUserAddresses",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userAPI.getAddresses();
      console.log("Fetched addresses:", data);
      return data.addresses || []; // must match your API response
    } catch (error) {
      console.error("Error fetching addresses:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to load addresses"
      );
    }
  }
);

// ✅ Fetch all products
export const fetchProduct = createAsyncThunk(
  "context/fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

      const res = await fetch("/api/products", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      console.log("🔍 fetchProduct: response status:", res.status);

      if (!res.ok) {
        let errorData;
        try {
          errorData = await res.json();
        } catch {
          errorData = { message: `HTTP error ${res.status}` };
        }
        return rejectWithValue(errorData.message || `HTTP error ${res.status}`);
      }

      const data = await res.json();
      console.log("✅ fetchProduct: response data:", data);
      return data.products; // must match your API response
    } catch (err) {
      console.error("❌ fetchProduct: error:", err.message);
      return rejectWithValue(err.message || "Network error");
    }
  }
);

// ✅ Fetch cart items
export const fetchCart = createAsyncThunk(
  "context/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      // const controller = new AbortController();
      // const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

      const res = await fetch("/api/cart", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        // signal: controller.signal,
      });

      // clearTimeout(timeoutId);
      // console.log("🔍 fetchCart: response status:", res.status);

      if (!res.ok) {
        let errorData;
        try {
          errorData = await res.json();
        } catch {
          errorData = { message: `HTTP error ${res.status}` };
        }
        return rejectWithValue(errorData.message || `HTTP error ${res.status}`);
      }

      const data = await res.json();
      console.log("✅ fetchCart: response data:", data.cart.items);

      // 🧩 Return correct structure
      return {
        cart: data.cart.items || [],
        itemCount: data.itemCount,
        totalAmount: data.cart?.totalAmount ?? 0,
      };
    } catch (err) {
      console.error("❌ fetchCart: error:", err.message);
      return rejectWithValue(err.message || "Network error");
    }
  }
);

// ✅ Fetch cart items
export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userAPI.getWishlist();
      console.log("Fetched wishlist:", data);
      return data.wishlist; // ✅ return wishlist data to store
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to load wishlist"
      );
    }
  }
);

// ✅ Add new item
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity = 1 }, { rejectWithValue }) => {
    try {
      const { data } = await cartAPI.addItem(productId, quantity);
      return data.cart; // returns updated cart
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add to cart"
      );
    }
  }
);

// ✅ Update item quantity
export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ itemId, quantity }, { rejectWithValue }) => {
    try {
      const { data } = await cartAPI.updateItem(itemId, quantity);
      return data.cart; // updated cart array
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update quantity"
      );
    }
  }
);

// ✅ Remove item
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (itemId, { rejectWithValue }) => {
    try {
      const { data } = await cartAPI.removeItem(itemId);
      return data.cart; // updated cart array
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to remove item"
      );
    }
  }
);

// ✅ Clear entire cart
export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await cartAPI.clearCart();
      return data.cart || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to clear cart"
      );
    }
  }
);

//fetch addresses
export const fetchOrders = createAsyncThunk(
  "context/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await orderAPI.getAll();
      console.log("Fetched orders:", data);
      return data.orders || []; // must match your API response
    } catch (error) {
      console.error("Error fetching addresses:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to load addresses"
      );
    }
  }
);

// ✅ Fetch cart items
// const { data } = await orderAPI.getAll();
