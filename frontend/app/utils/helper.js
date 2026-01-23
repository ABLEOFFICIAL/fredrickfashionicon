// utils/helper.js
import {
  adminAPI,
  authAPI,
  blogAPI,
  cardAPI,
  cartAPI,
  orderAPI,
  productAPI,
  userAPI,
} from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk(
  "adminUsers/fetchAllUsers",
  async (params = {}, { rejectWithValue }) => {
    try {
      const { data } = await adminAPI.getAllUsers(params);
      console.log("Fetched admin users:::::::::::::::", data);
      return data; // { users, total, page, pages }
    } catch (error) {
      if (error.response?.status === 403) {
        return rejectWithValue("Admin access only");
      }
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch users"
      );
    }
  }
);

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
        // avatar: user.avatar || "",
        // bio: user.bio || "",
        phone: user.phone || "",
        addresses: user.addresses || [],
        role: user.role || "user",
        createdAt: user.createdAt,
        wishlist: user.wishlist || [],
      };
    } catch (error) {
      console.error("Error fetching user:", error);

      // Axios errors have a predictable structure
      // return rejectWithValue(
      //   error.response?.data?.message || "Failed to fetch current user"
      // );
      if (error.response?.status === 401) {
        return rejectWithValue("NOT_AUTHENTICATED");
      }
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
        address: user.address || [],
        role: user.role || "user",
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
    console.log("fetching products...");

    try {
      const { data } = await productAPI.getAll();
      console.log("Fetched products:", data);

      return data.products; // return the products to Redux
    } catch (error) {
      console.error("Error fetching products:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to load products"
      );
    }
  }
);

// ✅ Fetch cart items
// Replace the fetchCart function in utils/helper.js

// ✅ Fetch cart items - FIXED VERSION
export const fetchCart = createAsyncThunk(
  "context/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      // ✅ Use cartAPI instead of fetch with relative URL
      const { data } = await cartAPI.getCart();

      console.log("✅ fetchCart: response data:", data);

      // 🧩 Return correct structure
      return {
        cart: data.cart?.items || data.items || [],
        itemCount: data.itemCount || 0,
        totalAmount: data.cart?.totalAmount || data.totalAmount || 0,
      };
    } catch (error) {
      console.error("❌ fetchCart: error:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message || "Failed to load cart"
      );
    }
  }
);

// ✅ Fetch wishlist items
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

// ✅ Update item quantity - FIXED
export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ itemId, quantity }, { rejectWithValue }) => {
    try {
      const { data } = await cartAPI.updateItem(itemId, quantity);
      console.log("✅ updateCartQuantity response:", data);

      // Return the same structure as fetchCart
      return {
        cart: data.cart?.items || data.items || [],
        itemCount: data.itemCount || 0,
        totalAmount: data.cart?.totalAmount || data.totalAmount || 0,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update quantity"
      );
    }
  }
);

// ✅ Remove item - FIXED
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (itemId, { rejectWithValue }) => {
    try {
      const { data } = await cartAPI.removeItem(itemId);
      console.log("✅ removeFromCart response:", data);

      // Return the same structure as fetchCart
      return {
        cart: data.cart?.items || data.items || [],
        itemCount: data.itemCount || 0,
        totalAmount: data.cart?.totalAmount || data.totalAmount || 0,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to remove item"
      );
    }
  }
);

// ✅ Clear entire cart - FIXED
export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await cartAPI.clearCart();
      console.log("✅ clearCart response:", data);

      // Return empty cart structure
      return {
        cart: [],
        itemCount: 0,
        totalAmount: 0,
      };
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
      console.log("Fetched orders:", data.orders);
      return data.orders || []; // must match your API response
    } catch (error) {
      console.error("Error fetching addresses:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to load addresses"
      );
    }
  }
);

//fetch blogs
export const fetchBlogs = createAsyncThunk(
  "context/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await blogAPI.getAll();
      console.log("Fetched blogs:", data);
      return data.blogs || []; // must match your API response
    } catch (error) {
      console.error("Error fetching addresses:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to load addresses"
      );
    }
  }
);

// ✅ Logout user
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const response = await authAPI.logout();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Logout failed"
      );
    }
  }
);

// FETCH ALL CARDS
export const fetchCards = createAsyncThunk(
  "auth/fetchCards",
  async (_, thunkAPI) => {
    try {
      const res = await cardAPI.getAll();
      console.log("Fetched cards:", res.data);

      return res.data.cards;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || "Failed to fetch cards"
      );
    }
  }
);

// ADD CARD
export const addCard = createAsyncThunk(
  "auth/addCard",
  async (cardData, thunkAPI) => {
    try {
      const res = await cardAPI.create(cardData);
      return res.data.card;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || "Failed to add card"
      );
    }
  }
);

// DELETE CARD
export const deleteCard = createAsyncThunk(
  "auth/deleteCard",
  async (cardId, thunkAPI) => {
    try {
      await cardAPI.remove(cardId);
      return cardId;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || "Failed to delete card"
      );
    }
  }
);

// SET DEFAULT CARD
export const setDefaultCard = createAsyncThunk(
  "auth/setDefaultCard",
  async (cardId, thunkAPI) => {
    try {
      await cardAPI.update(cardId, { isDefault: true });
      return cardId;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || "Failed to set default card"
      );
    }
  }
);
