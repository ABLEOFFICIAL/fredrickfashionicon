"use client";
import React, { useEffect } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import ProfileSide from "./ProfileSide";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const page = ({ children }) => {
  const router = useRouter();
  const { user, isAuthenticated, initialized, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // Wait until auth state has been initialized
    if (initialized && !isAuthenticated) {
      router.push("/login");
    }
  }, [initialized, isAuthenticated, router]);

  if (!initialized || loading) {
    return (
      <div className="flex justify-center items-center h-screen text-[#f7f1e8]">
        Loading your profile...
      </div>
    );
  }

  if (!user) return null; // prevents rendering flicker before redirect
  return (
    <div className="bg-[#FAF9F6]">
      <ProtectedRoute>
        {/* <Header /> */}
        <div className="max-w-287.5 mx-auto flex gap-5 pt-7">
          <ProfileSide />
          <div className="flex-1">{children}</div>
        </div>
      </ProtectedRoute>
    </div>
  );
};

export default page;
