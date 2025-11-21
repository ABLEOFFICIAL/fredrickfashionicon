"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { authAPI } from "@/lib/api";
import Link from "next/link";
import DarkLogo from "@/app/components/DarkLogo";
import { Eye, EyeOff } from "lucide-react";

export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useParams();
  const token = params.token;

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      await authAPI.resetPassword(token, formData.password);
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid or expired reset token. Please request a new one."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Success Screen
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="max-w-md w-full text-center px-6">
          <div className="rounded-full bg-green-100 p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
            <svg
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Password Reset Successful!
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Your password has been reset successfully. Redirecting to login...
          </p>
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-500 underline font-medium"
          >
            Go to Login →
          </Link>
        </div>
      </div>
    );
  }

  // ✅ Main Layout (matches login + forgot password)
  return (
    <div className="min-h-screen flex flex-col justify-center relative">
      <div className="w-screen h-screen flex">
        {/* LEFT SIDE */}
        <div className="bg-[url(/hero1.jpg)] bg-cover bg-center w-1/2 relative md:block hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center">
            <div className="w-3/5 h-auto text-center">
              <DarkLogo className="w-32 mx-auto mb-4" />
              <span className="text-[#f7f1e8] font-medium text-4xl block">
                Fredrick Fashion Icon
              </span>
              <p className="text-sm text-neutral-200 mt-2">
                Redefining your style with timeless luxury and elegance.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-neutral-50 min-h-screen px-6 sm:px-10 md:px-14 text-[#4a4741] flex justify-center items-center overflow-x-hidden overflow-y-auto relative w-full md:w-1/2">
          {/* Decorative Shape */}
          <div className="bg-[#4a4741]/20 absolute top-0 right-0 z-0 w-64 h-64 rotate-45 rounded-2xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="py-10 md:py-0 sm:w-[70%] w-full h-auto flex flex-col gap-6 max-w-md mx-auto">
            <header>
              <DarkLogo className={"w-10"} />
            </header>

            <section className="flex flex-col gap-4">
              <h1 className="font-bold text-[#4a4741] text-lg">
                Reset Your Password
              </h1>
              <p className="text-sm text-[#4a4741]/80">
                Enter your new password below to regain access to your account.
              </p>

              {/* Error Message */}
              {error && (
                <div className="rounded-md bg-red-50 p-4 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* New Password */}
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    New Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    className="block w-full px-4 py-3 border border-gray-300 focus:outline-none rounded-2xl shadow-sm sm:text-sm pr-10"
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[42px] text-gray-500 cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                    className="block w-full px-4 py-3 border border-gray-300 focus:outline-none rounded-2xl shadow-sm sm:text-sm pr-10"
                  />
                  <div
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-[42px] text-gray-500 cursor-pointer"
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full my-2 py-3 flex justify-center items-center gap-2 bg-[#4a4741] text-[#f7f1e8] rounded-2xl text-sm hover:bg-[#4a4741]/90 transition-colors disabled:opacity-70"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Reset Password"
                  )}
                </button>

                <div className="text-center mt-2">
                  <span className="text-sm text-[#4a4741]">
                    Remember your password?
                  </span>
                  <Link
                    href="/login"
                    className="text-sm text-blue-500 underline pl-1"
                  >
                    Back to Login
                  </Link>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
