"use client";

import { useState } from "react";
import { authAPI } from "@/lib/api";
import Link from "next/link";
import DarkLogo from "@/app/components/DarkLogo";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await authAPI.forgotPassword(email);
      setMessage(
        "Password reset link has been sent to your email. Please check your inbox (and spam folder)."
      );
      setEmail("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

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

        {/* RIGHT SIDE - FORM */}
        <div className="bg-neutral-50 min-h-screen px-6 sm:px-10 md:px-14 text-[#4a4741] flex justify-center items-center overflow-x-hidden overflow-y-auto relative w-full md:w-1/2">
          {/* Decorative Shape */}
          <div className="bg-[#4a4741]/20 absolute top-0 right-0 z-0 w-64 h-64 rotate-45 rounded-2xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="py-10 md:py-0 sm:w-[70%] w-full h-auto flex flex-col gap-6 max-w-md mx-auto">
            <header>
              <DarkLogo className={"w-10"} />
            </header>

            <section className="flex flex-col gap-4">
              <h1 className="font-bold text-[#4a4741] text-lg">
                Forgot Password
              </h1>
              <p className="text-sm text-[#4a4741]/80">
                Enter your registered email address and we’ll send you a reset
                link.
              </p>

              {/* Success Message */}
              {message && (
                <div className="rounded-md bg-green-50 p-4 border border-green-200 text-green-700 text-sm">
                  {message}
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="rounded-md bg-red-50 p-4 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="block w-full px-4 py-3 border border-gray-300 focus:outline-none rounded-2xl shadow-sm sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full my-2 py-3 flex justify-center items-center gap-2 bg-[#4a4741] text-[#f7f1e8] rounded-2xl text-sm hover:bg-[#4a4741]/90 transition-colors disabled:opacity-70"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Send Reset Link"
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
