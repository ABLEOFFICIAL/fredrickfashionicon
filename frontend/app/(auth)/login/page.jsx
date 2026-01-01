"use client";
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import DarkLogo from "@/app/components/DarkLogo";
import { LoginSchema } from "@/app/utils/SignUpSchema";
import Link from "next/link";
import { authAPI } from "@/lib/api";
import { Eye, EyeOff } from "lucide-react";
import LightLogo from "@/app/components/LightLogo";

const login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    setError("");

    try {
      const res = await authAPI.signin(values);

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        router.push("/homepage");
      } else {
        setError("Invalid response from server");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  const handleForgetPassword = async () => {};

  return (
    <div className="min-h-screen flex flex-col justify-center relative">
      {/* {signInModal && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-md w-[90%] max-w-sm text-center text-sm font-medium transition-all duration-300 ${
            loginSuccess ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {loginSuccess
            ? "Login successful!"
            : "Incorrect login details or User unavailable."}
        </div>
      )} */}
      <div className=" w-screen h-screen flex">
        <div
          className={`bg-[url(/hero1.jpg)] bg-cover bg-center w-1/2 relative md:block hidden`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center">
            <div className="w-3/5 h-auto flex flex-col justify-center items-center gap-4">
              <LightLogo className="w-32 mx-auto" />
              {/* <span className="text-[#f7f1e8] font-medium text-4xl text-center block">
                Fredrick Fashion Icon
              </span> */}
            </div>
          </div>
        </div>
        <div className="bg-neutral-50 min-h-screen px-6 sm:px-10 md:px-14 text-[#4a4741] flex justify-center items-center overflow-x-hidden overflow-y-auto relative w-full md:w-1/2">
          {/* Adjusted decorative div */}
          <div className="bg-[#4a4741]/20 absolute top-0 right-0 z-0 w-64 h-64 rotate-45 rounded-2xl translate-x-1/2 -translate-y-1/2"></div>
          {/* <div className="bg-[#4a4741]/20 absolute -bottom-48 -left-1/2 z-10 w-96 h-96 rotate-45 rounded-2xl"></div> */}
          <div className=" py-10 md:py-0  sm:w-[70%] w-full h-auto flex flex-col gap-6  max-w-md mx-auto">
            <header className="flex justify-center mb-6">
              <DarkLogo className={"w-10"} />
            </header>
            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-[#4a4741] text-lg">Sign in</h1>
                <label className="text-sm text-[#4a4741]">
                  choose from 10,000+ products across 400+ categories
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleGoogleLogin}
                    className=" p-1 bg-neutral-200/70 rounded-full"
                  >
                    <FcGoogle className="size-5" />
                  </button>
                  <button
                    // onClick={handleGoogleLogin}
                    className="text-black"
                  >
                    <FaApple className="size-7 p-1 bg-neutral-200/70 rounded-full" />
                  </button>
                </div>
              </div>
              <div className="relative py-3 ">
                <hr className="opacity-[0.4]" />
                <span className="text-center absolute top-0 left-1/2 -translate-x-1/2 bg-neutral-50 rounded-2xl px-2 text-sm">
                  or
                </span>
              </div>
              {/* Formik Form */}
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
              >
                {({ values }) => (
                  <Form>
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
                        <div className="absolute top-0 right-0 h-full w-12 flex justify-center items-center cursor-pointer">
                          {showPassword ? (
                            <EyeOff
                              onClick={() => setShowPassword(false)}
                              className="size-5 text-neutral-600"
                            />
                          ) : (
                            <Eye
                              onClick={() => setShowPassword(true)}
                              className="size-5 text-neutral-600"
                            />
                          )}
                        </div>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-400 text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end items-center text-sm text-gray-500 italic">
                      <Link href={"/forgotPassword"}>
                        <p>Forgot Password</p>
                      </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full my-2 py-3 mt-6 flex justify-center items-center gap-2 bg-[#4a4741] text-[#f7f1e8] rounded-2xl text-sm hover:bg-[#4a4741]/90 transition-colors disabled:opacity-70"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Log In"
                      )}
                    </button>

                    {/* Signup Redirect */}
                    <div className="text-center mt-2">
                      <span className="text-sm text-[#4a4741]">
                        Don't have an account?
                      </span>
                      <Link
                        href="/signup"
                        className="text-sm text-blue-500 underline pl-1"
                      >
                        Sign up here
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

export default login;
/* f7f1e8 */
/* 4a4741 */
