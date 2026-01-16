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
import { createSlice } from "@reduxjs/toolkit";
import {
  addCard,
  deleteCard,
  fetchCards,
  fetchCurrentUser,
  fetchUserAddresses,
  fetchUserProfile,
  fetchWishlist,
  setDefaultCard,
} from "../utils/helper";

const authSlice = createSlice({
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
    cards: [],
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.initialized = true;
      state.authLoading = false;
      state.wishList = [];
    },
  },
  extraReducers: (builder) => {
    // ✅ Fetch Current User (Initial Auth Check)
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.authLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.authLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.initialized = true;
      })
      // .addCase(fetchCurrentUser.rejected, (state, action) => {
      //   state.authLoading = false;
      //   state.error = action.payload;
      //   state.user = null;
      //   state.isAuthenticated = false;
      //   state.initialized = true;
      // })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.authLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.initialized = true;

        // ✅ Logged out user (expected)
        if (action.payload === "NOT_AUTHENTICATED") {
          state.error = null;
          return;
        }

        // ❌ Real error
        state.error = action.payload || "Something went wrong";
      })

      // ✅ Fetch User Profile - DON'T update user object
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Addresses
      .addCase(fetchUserAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.userAddresses = action.payload;
      })
      .addCase(fetchUserAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Fetch Wishlist
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishList = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // FETCH CARDS
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
      })

      // ADD CARD
      .addCase(addCard.fulfilled, (state, action) => {
        state.cards.push(action.payload);
      })

      // DELETE CARD
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.cards = state.cards.filter((c) => c._id !== action.payload);
      })

      // SET DEFAULT CARD
      .addCase(setDefaultCard.fulfilled, (state, action) => {
        state.cards = state.cards.map((c) => ({
          ...c,
          isDefault: c._id === action.payload,
        }));
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
