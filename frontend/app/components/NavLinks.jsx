"use client";

import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import MyBtn from "./MyBtn";

const NavLinks = () => {
  const screenWidth = useSelector((state) => state.width.screenWidth);
  const currentPath = usePathname();

  const navItems = [
    { title: "Home", location: "/homepage" },
    { title: "Shop", location: "/discover" },
    { title: "Why FFI", location: "/about" },
    { title: "Blogs", location: "/style-with-us" },
    { title: "Contact-us", location: "/contact-us" },
  ];

  return (
    <div className="flex gap-16 items-center justify-between text-[#f7f1e8]">
      {navItems.map((nav, idx) => {
        const isActive = currentPath === nav.location;
        const shouldShow = screenWidth >= 1020 || isActive;

        return shouldShow ? (
          <MyBtn
            key={idx}
            classname={`text-sm cursor-pointer ${
              isActive
                ? "bg-blue-500 hover:bg-blue-700 px-5 py-3 rounded-3xl"
                : "text-[#f7f1e8]"
            }`}
            to={nav.location}
          >
            {nav.title}
          </MyBtn>
        ) : null;
      })}
    </div>
  );
};

export default NavLinks;
