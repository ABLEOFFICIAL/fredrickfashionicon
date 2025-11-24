"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import MdDesktop from "./MdDesktop";
import NavBarMd from "./NavBarMd";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import {
  fetchCart,
  fetchCurrentUser,
  fetchOrders,
  fetchProduct,
  fetchUserAddresses,
  fetchUserProfile,
  fetchWishlist,
} from "../utils/helper";
import AddToCart from "./AddToCart";

export default function ClientLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(fetchUserProfile());
    dispatch(fetchProduct());
    dispatch(fetchWishlist());
    dispatch(fetchCart());
    dispatch(fetchUserAddresses());
    dispatch(fetchOrders());
  }, [dispatch]);
  // const { wishList } = useSelector((state) => state.auth);
  // console.log("🌟 ClientLayout: wishList from Redux store:", wishList);

  return (
    <div>
      <MdDesktop />
      <NavBarMd
        initialTop="top-14 md:top-8"
        finaltop="top-2"
        position="fixed"
      />
      <NavBar initialTop="top-14 md:top-8" finaltop="top-2" />
      <AddToCart />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
}
