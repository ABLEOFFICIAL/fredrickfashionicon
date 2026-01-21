"use client";

import { CiSearch } from "react-icons/ci";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { setSearchProduct } from "../store/contextSlice";
import DarkLogo from "./DarkLogo";
import MyInput from "./MyInput";
import Like from "./Like";
import Bar from "./Bar";
import ArrowLeft from "./ArrowLeft";
import Cart from "./Cart";

const Header = () => {
  const [search, setSearch] = useState("");
  const { wishList } = useSelector((state) => state.auth);
  const { itemCount } = useSelector((state) => state.context);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname(); // ✅ better than window.location for Next.js

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    dispatch(setSearchProduct(value));

    // ✅ Only push if not already on discover page
    if (pathname !== "/discover") {
      router.push(`/discover?search=${encodeURIComponent(value)}`);
    }
  };

  const goBack = () => {
    router.back(); // ✅ safer alternative to router.push(-1)
  };

  return (
    <header className="w-full border-b border-b-neutral-400/50">
      {/* ====== Desktop Header ====== */}
      <div className="hidden md:flex justify-between items-center px-6 py-6 max-w-287.5 mx-auto">
        <div className="flex items-center gap-3">
          <DarkLogo className="w-16 cursor-pointer" />
          <div className="relative">
            <MyInput
              type="search"
              placeholder="Search product..."
              name="search"
              value={search}
              onChange={handleSearch}
              classname="backdrop-blur-md bg-neutral-950/10 w-[20vw] px-4 py-2 rounded-3xl pl-12 focus:outline-none"
            />
            <CiSearch className="absolute top-1/2 left-4 -translate-y-1/2 size-5 text-[#4a4741]" />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-2 bg-[#4a4741] text-[#f7f1e8] rounded-2xl px-3 py-2 relative">
            <Link href="/profile">Wishlist</Link>
            <Like className="size-5 stroke-1" />
            <span className="bg-white text-black rounded-full p-2 absolute -top-2 -right-2 text-sm font-semibold">
              {wishList ? wishList.length : 0}
            </span>
          </span>

          <span className="flex items-center gap-2 bg-[#4a4741] text-[#f7f1e8] rounded-2xl px-3 py-2 relative">
            <Link href="/cart" className="flex items-center gap-2">
              Cart
              <Cart classname="size-6" />
              <span className="bg-white text-black rounded-full p-2 absolute -top-2 -right-2 text-sm font-semibold">
                {itemCount ? itemCount : 0}
              </span>
            </Link>
          </span>

          <Bar className="border-[#4a4741] rounded-full border size-10 p-2 cursor-pointer text-[#4a4741]" />
        </div>
      </div>

      {/* ====== Mobile Header ====== */}
      <div className="md:hidden px-5 py-4">
        <div className="flex justify-between items-center">
          <ArrowLeft onClick={goBack} className="size-6 cursor-pointer" />
          <h2 className="text-xl font-medium">Discover</h2>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Cart classname="size-5" />
            </Link>
            <Bar className="border-[#4a4741] rounded-full border size-10 p-2 cursor-pointer" />
          </div>
        </div>

        <div className="relative mt-4">
          <MyInput
            type="search"
            placeholder="Search product..."
            name="search"
            value={search}
            onChange={handleSearch}
            classname="backdrop-blur-md bg-neutral-950/10 w-full px-4 py-2 rounded-3xl pl-12 focus:outline-none"
          />
          <CiSearch className="absolute top-1/2 left-4 -translate-y-1/2 size-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
