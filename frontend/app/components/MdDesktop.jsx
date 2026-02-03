"use client";
import DarkLogo from "@/app/components/DarkLogo";
import MyBtn from "@/app/components/MyBtn";
import XBar from "@/app/components/XBar";
import { setDropDown, setShowSearchModal } from "@/app/store/contextSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // ✅ added
import { LogOut, Search, User } from "lucide-react";
import { logoutUser } from "../utils/helper";

const MdDesktop = () => {
  const dispatch = useDispatch();
  const { dropDown } = useSelector((state) => state.context);
  const dropdownRef = useRef(null);
  const pathname = usePathname(); // ✅ added
  const { isMobileMenuOpen } = useSelector((state) => state.context);
  const { user } = useSelector((state) => state.auth);

  const handleDropDown = () => dispatch(setDropDown(false));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(setDropDown(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  // ✅ Close dropdown whenever route changes
  useEffect(() => {
    dispatch(setDropDown(false));
  }, [pathname, dispatch]);

  if (!dropDown) return null;

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      // Optional redirect after logout
      window.location.href = "/login";
    });
  };

  return (
    <main className="fixed inset-0 z-50">
      {/* Transparent backdrop */}
      <div
        onClick={handleDropDown}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Actual dropdown content */}
      <div
        ref={dropdownRef}
        className="relative z-50 bg-[#f7f1e8] text-[#4a4741] shadow-lg py-6 md:py-10 max-h-screen overflow-y-auto"
      >
        <div className="max-w-375 mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="grid grid-cols-3 items-center mb-5">
            <span
              className="flex items-center gap-2 md:gap-3 font-semibold cursor-pointer text-sm md:text-base"
              onClick={handleDropDown}
            >
              <span className="hidden md:block">Close</span>{" "}
              <XBar classname="size-7 md:size-9 border border-[#4a4741] rounded-full p-1.5 md:p-2" />
            </span>
            <DarkLogo className="w-10 md:w-14 justify-self-center" />
            <div className=" flex items-center justify-center p-2 cursor-pointer text-[#4a4741] hover:bg-[#4a4741]/10 transition-colors justify-self-end">
              <Search
                size={18}
                className="md:hidden"
                onClick={() => {
                  dispatch(setShowSearchModal(true));
                  dispatch(setDropDown(false));
                }}
              />
            </div>
          </div>

          {/* Content */}
          {!isMobileMenuOpen ? (
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 my-5">
              {/* Section 1 */}
              <div className="grid gap-3 md:gap-5 md:py-5">
                <h4 className="font-bold text-lg md:text-base">Home</h4>
                <div className="flex flex-col gap-3 md:gap-4 justify-start md:text-base text-sm">
                  <Link href="/homepage" className="hover:underline">
                    Home
                  </Link>
                  <Link
                    href="/homepage#explore-section"
                    className="hover:underline"
                  >
                    Explore
                  </Link>
                  <Link href="/homepage#why-ffi" className="hover:underline">
                    Why FFI
                  </Link>
                  <Link href="/homepage#style" className="hover:underline">
                    Style Moments
                  </Link>
                </div>
              </div>

              {/* Section 2 */}
              <div className="grid gap-3 md:gap-5 md:py-5">
                <h4 className="font-bold text-lg md:text-base">Blogs</h4>
                <div className="flex flex-col gap-3 md:gap-4 justify-start md:text-base text-sm">
                  <Link href="/style-with-us" className="hover:underline">
                    Blogs
                  </Link>
                  <Link href="/style-with-us" className="hover:underline">
                    Recent Trends
                  </Link>
                  <Link href="/style-with-us" className="hover:underline">
                    Style Tips
                  </Link>
                  <Link href="/style-with-us" className="hover:underline">
                    Fashion News
                  </Link>
                </div>
              </div>

              {/* Section 3 */}
              <div className="grid gap-3 md:gap-5 md:py-5">
                <h4 className="font-bold text-lg md:text-base h-1/5">About</h4>
                <div className="flex flex-col gap-3 md:gap-4 justify-start md:text-base text-sm h-4/5">
                  <Link href="/about" className="hover:underline">
                    Why FFI
                  </Link>
                  <Link href="/about#who-we-are" className="hover:underline">
                    Who are we
                  </Link>
                  <Link href="/about#stylish" className="hover:underline">
                    Stylish
                  </Link>
                  {/* <Link href="/about#difference" className="hover:underline">
                    Difference
                  </Link> */}
                  <Link href="/about#our-values" className="hover:underline">
                    Our Values
                  </Link>
                </div>
              </div>

              {/* Section 4 */}
              <div className="grid gap-3 md:gap-5 md:py-5">
                <h4 className="font-bold text-lg md:text-base">Contact Us</h4>
                <div className="flex flex-col gap-3 md:gap-4 justify-start md:text-base text-sm">
                  <Link href="/contact-us" className="hover:underline">
                    Contact Us
                  </Link>
                  <Link
                    href="/contact-us#contact-info"
                    className="hover:underline"
                  >
                    contact info
                  </Link>
                  {/* <Link
                    href="/homepage#contact-info"
                    className="hover:underline"
                  >
                    contact email
                  </Link> */}
                  <Link
                    href="/contact-us#contact-form"
                    className="hover:underline"
                  >
                    Contact Form
                  </Link>
                </div>
              </div>

              {/* Image Card */}
              <div className="grid gap-5 content-around w-full h-48 md:h-64 bg-center bg-cover bg-[url(/start-ur-day.png)] rounded-2xl p-3">
                <h4 className="text-[#f7f1e8] block lg:hidden 2xl:block text-md md:text-2xl xl:text-4xl font-bold md:font-light">
                  Fredrick Fashion Icon <span className="slant">is here</span>
                </h4>
                <MyBtn
                  to="/discover"
                  classname="bg-blue-500 text-[#f7f1e8] w-20 px-5 py-2 rounded-full justify-self-end text-sm md:text-base"
                >
                  Shop
                </MyBtn>
              </div>
            </div>
          ) : (
            <div className="my-8">
              {/* User Profile Card */}
              <div className="bg-[#4a4741] rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#f7f1e8] rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-[#4a4741]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#f7f1e8] text-lg">
                      {user?.name || "Welcome Back"}
                    </h3>
                    <p className="text-[#f7f1e8]/70 text-sm">
                      {user?.email || "user@email.com"}
                    </p>
                  </div>
                </div>
                <div className="h-px bg-[#f7f1e8]/20 my-4"></div>
                <p className="text-[#f7f1e8]/60 text-xs">
                  Manage your account and preferences
                </p>
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: "👤",
                    label: "Profile",
                    href: "/profile",
                    color: "bg-blue-50",
                  },
                  {
                    icon: "📦",
                    label: "Orders",
                    href: "/profile/orders",
                    color: "bg-green-50",
                  },
                  {
                    icon: "💌",
                    label: "Inbox",
                    href: "/profile/inbox",
                    color: "bg-purple-50",
                  },
                  {
                    icon: "❤️",
                    label: "Wishlist",
                    href: "/profile/wishlist",
                    color: "bg-red-50",
                  },
                  {
                    icon: "💳",
                    label: "Payment",
                    href: "/profile/payment",
                    color: "bg-yellow-50",
                  },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`${item.color} rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform active:scale-95`}
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="font-medium text-[#4a4741] text-sm">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full bg-red-50 border-2 border-red-200 text-red-600 rounded-xl py-4 font-semibold hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>

              {/* Support Section */}
              <div className="mt-6 text-center">
                <p className="text-[#4a4741]/60 text-sm mb-2">Need help?</p>
                <Link
                  href="/contact-us"
                  className="text-[#4a4741] font-medium hover:underline text-sm"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MdDesktop;
