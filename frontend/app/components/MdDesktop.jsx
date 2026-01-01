"use client";
import DarkLogo from "@/app/components/DarkLogo";
import MyBtn from "@/app/components/MyBtn";
import XBar from "@/app/components/XBar";
import { setDropDown } from "@/app/store/contextSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // ✅ added

const MdDesktop = () => {
  const dispatch = useDispatch();
  const { dropDown } = useSelector((state) => state.context);
  const dropdownRef = useRef(null);
  const pathname = usePathname(); // ✅ added

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
              Close{" "}
              <XBar classname="size-7 md:size-9 border border-[#4a4741] rounded-full p-1.5 md:p-2" />
            </span>
            <DarkLogo className="w-10 md:w-14 justify-self-center" />
            <div></div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 my-5">
            {/* Section 1 */}
            <div className="grid gap-3 md:gap-5 md:py-5">
              <h4 className="font-bold text-lg md:text-base">Home</h4>
              <div className="grid gap-3 md:gap-4">
                <Link href="/homepage" className="hover:underline">
                  Home
                </Link>
                <Link href="/" className="hover:underline">
                  Oura Ring Gen3
                </Link>
                <Link href="/" className="hover:underline">
                  On Sale Extra Charger
                </Link>
                <Link href="/" className="hover:underline">
                  Oura Ring Gen3
                </Link>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid gap-3 md:gap-5 md:py-5">
              <h4 className="font-bold text-lg md:text-base">Blogs</h4>
              <div className="grid gap-3 md:gap-4">
                <Link href="/style-with-us" className="hover:underline">
                  Blogs
                </Link>
                <Link href="/" className="hover:underline">
                  Oura Ring Gen3
                </Link>
                <Link href="/" className="hover:underline">
                  On Sale Extra Charger
                </Link>
                <Link href="/" className="hover:underline">
                  Oura Ring Gen3
                </Link>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid gap-3 md:gap-5 md:py-5">
              <h4 className="font-bold text-lg md:text-base">About</h4>
              <div className="grid gap-3 md:gap-4">
                <Link href="/about" className="hover:underline">
                  Why FFI
                </Link>
                <Link href="/" className="hover:underline">
                  Oura Ring Gen3
                </Link>
                <Link href="/" className="hover:underline">
                  On Sale Extra Charger
                </Link>
                <Link href="/" className="hover:underline">
                  Oura Ring Gen3
                </Link>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid gap-3 md:gap-5 md:py-5">
              <h4 className="font-bold text-lg md:text-base">Contact Us</h4>
              <div className="grid gap-3 md:gap-4">
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
                <Link href="/" className="hover:underline">
                  Oura Ring Gen3
                </Link>
                <Link href="/" className="hover:underline">
                  On Sale Extra Charger
                </Link>
                <Link href="/" className="hover:underline">
                  Oura Ring Gen3
                </Link>
              </div>
            </div>

            {/* Image Card */}
            <div className="grid gap-5 content-between w-full h-48 md:h-64 bg-center bg-cover bg-[url(/mood.avif)] rounded-2xl p-3">
              <h4 className="text-[#f7f1e8] block lg:hidden 2xl:block text-md md:text-2xl xl:text-4xl font-light">
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
        </div>
      </div>
    </main>
  );
};

export default MdDesktop;
