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
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import MdDesktop from "./MdDesktop";
import NavBarMd from "./NavBarMd";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import AddToCart, { FloatingCartButton } from "./AddToCart";
import AuthProvider from "./AuthProvider";

import {
  fetchBlogs,
  fetchCards,
  fetchCart,
  fetchOrders,
  fetchProduct,
  fetchUserAddresses,
  fetchUserProfile,
  fetchWishlist,
} from "../utils/helper";
import SearchModal from "./SearchModal";

export default function ClientLayout({ children }) {
  const dispatch = useDispatch();
  const { user, authLoading, initialized } = useSelector((state) => state.auth);

  console.log(
    "ClientLayout - authLoading:",
    authLoading,
    "initialized:",
    initialized,
    "user:",
    user
  );

  // Fetch user-related data ONLY when initialized and user exists
  useEffect(() => {
    // ✅ Only run when auth is fully initialized
    if (!initialized) {
      console.log("Not initialized yet, skipping...");
      return;
    }

    if (!user) {
      console.log("No user after initialization, skipping...");
      return;
    }

    console.log("Fetching user data...");
    dispatch(fetchUserProfile());
    dispatch(fetchWishlist());
    dispatch(fetchCart());
    dispatch(fetchUserAddresses());
    dispatch(fetchOrders());
    dispatch(fetchCards());
  }, [initialized, dispatch]); // ✅ Only depend on initialized, not user

  // Public data (runs once)
  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <AuthProvider>
      <div>
        <MdDesktop />
        <NavBarMd
          initialTop="top-14 md:top-8"
          finaltop="top-2"
          position="fixed"
        />
        <SearchModal />
        {/* <NavBar initialTop="top-14 md:top-8" finaltop="top-2" /> */}
        <AddToCart />
        <FloatingCartButton />
        <Sidebar />
        {children}
        <Footer />
      </div>
    </AuthProvider>
  );
}
