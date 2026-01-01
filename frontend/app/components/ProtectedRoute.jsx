"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, initialized, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (initialized && !isAuthenticated) {
      router.push("/login");
    }
  }, [initialized, isAuthenticated, router]);

  // Show loading state while checking authentication
  if (!initialized || loading) {
    return (
      <div className="flex justify-center items-center h-screen text-[#f7f1e8]">
        Checking authentication...
      </div>
    );
  }

  // If not authenticated (and initialized), return nothing temporarily
  if (!isAuthenticated) return null;

  // Otherwise, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
