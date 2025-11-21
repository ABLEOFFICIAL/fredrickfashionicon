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
    <main className="hidden md:block fixed inset-0 z-50">
      {/* Transparent backdrop */}
      <div
        onClick={handleDropDown}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Actual dropdown content */}
      <div
        ref={dropdownRef}
        className="relative z-50 bg-[#f7f1e8] text-[#4a4741] shadow-lg py-10"
      >
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center">
            <span
              className="flex items-center gap-3 font-semibold cursor-pointer"
              onClick={handleDropDown}
            >
              Close{" "}
              <XBar classname="size-9 border border-[#4a4741] rounded-full p-2" />
            </span>
            <DarkLogo className="w-14" />
            <div className="w-4 h-4"></div>
          </div>

          {/* Content */}
          <div className="my-5 flex justify-between">
            {/* Section 1 */}
            <div className="flex flex-col gap-5 py-5">
              <h4 className="font-bold">Home</h4>
              <div className="flex flex-col items-start h-32 justify-between">
                <Link href="/homepage">Home</Link>
                <Link href="/">Oura Ring Gen3</Link>
                <Link href="/">On Sale Extra Charger</Link>
                <Link href="/">Oura Ring Gen3</Link>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col gap-5 py-5">
              <h4 className="font-bold">Blogs</h4>
              <div className="flex flex-col items-start h-32 justify-between">
                <Link href="/style-with-us">Blogs</Link>
                <Link href="/">Oura Ring Gen3</Link>
                <Link href="/">On Sale Extra Charger</Link>
                <Link href="/">Oura Ring Gen3</Link>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col gap-5 py-5">
              <h4 className="font-bold">About</h4>
              <div className="flex flex-col items-start h-32 justify-between">
                <Link href="/about">Why FFI</Link>
                <Link href="/">Oura Ring Gen3</Link>
                <Link href="/">On Sale Extra Charger</Link>
                <Link href="/">Oura Ring Gen3</Link>
              </div>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col gap-5 py-5">
              <h4 className="font-bold">Contact Us</h4>
              <div className="flex flex-col items-start h-32 justify-between">
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/">Oura Ring Gen3</Link>
                <Link href="/">On Sale Extra Charger</Link>
                <Link href="/">Oura Ring Gen3</Link>
              </div>
            </div>

            {/* Image Card */}
            <div className="flex flex-col gap-5 w-96 h-64 bg-center bg-cover bg-[url(/mood.avif)] rounded-2xl p-3 justify-between">
              <h4 className="text-[#f7f1e8] text-4xl font-light">
                Fredrick Fashion Icon <span className="slant">is here</span>
              </h4>
              <MyBtn
                to="/discover"
                classname="bg-blue-500 text-[#f7f1e8] w-20 px-5 py-2 rounded-full ml-auto"
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
