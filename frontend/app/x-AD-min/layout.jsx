"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../utils/helper";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, authLoading } = useSelector((state) => state.auth);

  console.log(
    "AdminLayout - authLoading:",
    authLoading,
    "user:",
    user,
    "role:",
    user?.role
  );

  useEffect(() => {
    console.log("Admin effect - authLoading:", authLoading, "user:", user);

    // Wait for auth to finish loading
    if (authLoading) {
      console.log("Still loading auth...");
      return;
    }

    // If no user after loading, redirect
    if (!user) {
      console.log("No user, redirecting to home...");
      router.replace("/");
      return;
    }

    // If not admin, redirect
    if (user.role !== "admin") {
      console.log("Not admin, redirecting to home...");
      router.replace("/");
      return;
    }

    // Fetch admin data
    console.log("User is admin, fetching admin data...");
    dispatch(fetchAllUsers());
  }, [user, authLoading, dispatch, router]);

  // Show loading while checking auth
  if (authLoading) {
    console.log("Rendering: Loading...");
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    console.log("Rendering: null (redirecting)");
    return null;
  }

  console.log("Rendering: Admin content");
  return <>{children}</>;
}
