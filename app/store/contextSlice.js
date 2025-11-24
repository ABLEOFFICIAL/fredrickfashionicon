import {
  addToCart,
  clearCart,
  fetchCart,
  fetchOrders,
  fetchProduct,
  removeFromCart,
  updateCartQuantity,
} from "../utils/helper";
import { createSlice } from "@reduxjs/toolkit";

const contextSlice = createSlice({
  name: "context",
  initialState: {
    dropDown: false,
    showSide: false,
    productCategory: "All",
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
  },
  reducers: {
    setDropDown(state, action) {
      state.dropDown = action.payload;
    },
    setShowSide(state, action) {
      state.showSide = action.payload;
    },
    setproductCategory: (state, action) => {
      state.productCategory = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProducts: (state) => {
      if (state.productCategory === "All") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (p) => p.category === state.productCategory
        );
      }
    },
    setSearchProduct(state, action) {
      state.searchProduct = action.payload;
    },
    setShowNavDrop(state, action) {
      state.showNavDrop = action.payload;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((p) => p._id !== action.payload);
      state.filteredProducts = state.filteredProducts.filter(
        (p) => p._id !== action.payload
      );
    },
    setShowCartModal(state, action) {
      state.showCartModal = action.payload;
    },
    setShowEditModal(state, action) {
      state.showEditModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🛍️ Fetch Products
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🛒 Fetch Cart
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;

        // Transform backend response so component can map easily
        state.cart = action.payload.cart.map((item) => ({
          _id: item._id,
          quantity: item.quantity,
          price: item.product.price,
          name: item.product.name,
          selectedSize: item.selectedSize || "", // if you have sizes
          imageUrl: item.product.images ? item.product.images[0] : "",
        }));

        // Optional: itemCount
        state.itemCount = state.cart.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ➕ Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        // If backend returns updated cart
        if (Array.isArray(action.payload.cart)) {
          state.cart = action.payload.cart;
        } else {
          // fallback: append new item
          state.cart.push(action.payload);
        }
        state.itemCount = state.cart.length;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🔁 Update Quantity
      .addCase(updateCartQuantity.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.cart || state.cart;
        state.itemCount = state.cart.length;
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ❌ Remove Item
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.cart || [];
        state.itemCount = state.cart.length;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🧹 Clear Cart
      .addCase(clearCart.fulfilled, (state) => {
        state.cart = [];
        state.itemCount = 0;
      })

      // order
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload.orders;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {
  setDropDown,
  setShowSide,
  setproductCategory,
  setProducts,
  filterProducts,
  setSearchProduct,
  setShowNavDrop,
  removeProduct,
  setShowCartModal,
  setShowEditModal,
} = contextSlice.actions;

export default contextSlice.reducer;
