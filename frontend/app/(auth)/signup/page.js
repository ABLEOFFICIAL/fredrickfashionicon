"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import DarkLogo from "@/app/components/DarkLogo";
import { SignUpSchema } from "@/app/utils/SignUpSchema";
import Link from "next/link";
import { authAPI } from "@/lib/api"; // ✅ assuming this handles axios calls

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (values) => {
    setIsLoading(true);
    setError("");

    try {
      const { data } = await authAPI.signup({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      // ✅ Store access token
      localStorage.setItem("token", data.token);

      // ✅ Log signed-up user
      console.log("Signed up user:", data.user);

      // ✅ Redirect user (e.g., to dashboard or login)
      router.push("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Sign-up failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center relative">
      <div className="w-screen min-h-screen flex flex-col md:flex-row">
        <div className="bg-[url(/hero1.jpg)] bg-cover bg-center w-1/2 relative md:block hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center">
            <div className="w-3/5 h-auto">
              <DarkLogo className="w-32 mx-auto" />
              <span className="text-[#f7f1e8] font-medium text-4xl text-center block">
                Fredrick Fashion Icon
              </span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 min-h-screen px-6 sm:px-10 md:px-14 text-[#4a4741] flex justify-center items-center relative w-full md:w-1/2">
          <div className="bg-[#4a4741]/20 absolute top-0 right-0 z-0 w-64 h-64 rotate-45 rounded-2xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="py-10 md:py-0 sm:w-[70%] w-full max-w-md mx-auto flex flex-col gap-6">
            <header>
              <DarkLogo className={"w-10"} />
            </header>

            <section className="flex flex-col gap-4">
              <div>
                <h1 className="font-bold text-[#4a4741] text-lg">
                  Create Account
                </h1>
                <p className="text-sm text-[#4a4741]">
                  Choose from 10,000+ products across 400+ categories
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() =>
                      (window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`)
                    }
                    className="p-1 bg-neutral-200/70 rounded-full"
                  >
                    <FcGoogle className="size-5" />
                  </button>

                  <button className="text-black">
                    <FaApple className="size-7 p-1 bg-neutral-200/70 rounded-full" />
                  </button>
                </div>
              </div>

              <div className="relative py-3">
                <hr className="opacity-[0.4]" />
                <span className="text-center absolute top-0 left-1/2 -translate-x-1/2 bg-neutral-50 px-2 text-sm">
                  or
                </span>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}

              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={SignUpSchema}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form>
                    {/* Name */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium pb-2">
                        Name
                      </label>
                      <Field
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        className="block w-full px-4 py-3 border border-gray-300 focus:outline-none rounded-2xl shadow-sm sm:text-sm"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-400 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium pb-2">
                        Email
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        className="block w-full px-4 py-3 border border-gray-300 focus:outline-none rounded-2xl shadow-sm sm:text-sm"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-400 text-sm"
                      />
                    </div>

                    {/* Password */}
                    <div className="relative mb-4">
                      <label className="block text-sm font-medium pb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Field
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Password"
                          className="block w-full px-4 py-3 border border-gray-300 focus:outline-none rounded-2xl shadow-sm sm:text-sm"
                        />
                        <div className="absolute top-0 right-0 h-full w-14 flex justify-center items-center">
                          {showPassword ? (
                            <EyeOff
                              onClick={() => setShowPassword(false)}
                              className="size-5 text-neutral-600 cursor-pointer"
                            />
                          ) : (
                            <Eye
                              onClick={() => setShowPassword(true)}
                              className="size-5 text-neutral-600 cursor-pointer"
                            />
                          )}
                        </div>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-400 text-sm"
                      />
                    </div>

                    {/* Confirm Password */}
                    <div className="relative mb-4">
                      <label className="block text-sm font-medium pb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Field
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Repeat Password"
                          className="block w-full px-4 py-3 border border-gray-300 focus:outline-none rounded-2xl shadow-sm sm:text-sm"
                        />
                        <div className="absolute top-0 right-0 h-full w-14 flex justify-center items-center">
                          {showConfirmPassword ? (
                            <EyeOff
                              onClick={() => setShowConfirmPassword(false)}
                              className="size-5 text-neutral-600 cursor-pointer"
                            />
                          ) : (
                            <Eye
                              onClick={() => setShowConfirmPassword(true)}
                              className="size-5 text-neutral-600 cursor-pointer"
                            />
                          )}
                        </div>
                      </div>
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-400 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full my-2 py-3 mt-10 flex justify-center items-center gap-2 bg-[#4a4741] text-[#f7f1e8] rounded-2xl text-sm hover:bg-[#4a4741]/90 transition-colors disabled:opacity-70"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Create Account"
                      )}
                    </button>

                    <div className="text-center">
                      <span className="text-sm text-[#4a4741]">
                        Already have an account?
                      </span>
                      <Link
                        href="/login"
                        className="text-sm text-blue-500 underline pl-1"
                      >
                        Sign In Here
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
