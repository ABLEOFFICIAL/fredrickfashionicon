"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Bar from "./Bar";
import SearchIcon from "./SearchIcon";
import { FaBars } from "react-icons/fa6";
import Logo from "./Logo";
import Cart from "./Cart";
import { User } from "lucide-react";
import DarkLogo from "./DarkLogo";
import LightLogo from "./LightLogo";
import { useDispatch, useSelector } from "react-redux";
import { setShowCartModal } from "../store/contextSlice";

export const UserProfile = () => {
  return (
    <Link href="/profile">
      <User className="size-6" />
    </Link>
  );
};

export default function NavBarMd() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isHomePage = pathname === "/homepage";
  const { cart } = useSelector((state) => state.context);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  if (
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgotPassword" ||
    pathname.includes("/reset-password") ||
    pathname.includes("/x-AD-min")
  ) {
    return null;
  }

  return (
    <nav
      onMouseEnter={() => isHomePage && setIsHovered(true)}
      onMouseLeave={() => isHomePage && setIsHovered(false)}
      className={`${
        isHomePage ? "fixed" : "relative"
      } top-0 right-0 left-0 flex items-center transition-all duration-300 z-40 overflow-hidden
        ${
          isHomePage
            ? isScrolled
              ? "bg-[#f7f1e8] text-black shadow-md"
              : isHovered
              ? "md:bg-[#f7f1e8] md:text-black md:shadow-sm bg-[#f7f1e8] text-black"
              : "md:bg-transparent md:text-[#f7f1e8] bg-white text-black"
            : "bg-[#f7f1e8] text-black shadow-sm"
        }
        ${isHomePage ? (isScrolled ? "h-20" : "h-20 md:h-24") : "h-20"}
      `}
    >
      <div className="flex justify-between items-center w-full max-w-[90vw] px-5 mx-auto">
        {/* Left section (desktop) */}
        <div className="hidden md:flex gap-6 items-center">
          <Bar classname={" rounded-full size-10 p-2 cursor-pointer"} />
          <button className="flex items-center gap-2 cursor-pointer hover:text-neutral-700 transition">
            <SearchIcon />
            <span>Search</span>
          </button>
        </div>
        {/* Mobile menu icon */}
        <div className="block md:hidden">
          <FaBars />
        </div>
        {/* Logo */}
        {isHomePage ? (
          isScrolled ? (
            <DarkLogo />
          ) : isHovered ? (
            <DarkLogo />
          ) : (
            <LightLogo />
          )
        ) : (
          <DarkLogo />
        )}

        {/* Right section (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/contact-us">
            <span className="text-sm whitespace-nowrap">Contact Us</span>
          </Link>
          <UserProfile />
          <div
            onClick={() => dispatch(setShowCartModal(true))}
            className="relative flex items-center cursor-pointer"
          >
            <Cart classname="size-6" />
            {cart && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center bg-black text-white rounded-full text-xs font-semibold w-5 h-5">
                {cart.length}
              </span>
            )}
          </div>
        </div>
        {/* Right section (mobile) */}
        <div className="flex md:hidden items-center gap-4">
          <UserProfile />
        </div>
      </div>
    </nav>
  );
}

// import Link from "next/link";
// import { User } from "lucide-react";
// import { useEffect, useState } from "react";
// import Logo from "./Logo";
// import NavLinks from "./NavLinks";
// import Bar from "./Bar";
// import Cart from "./Cart";
// import { usePathname } from "next/navigation";

// const NavBarMd = ({
//   initialTop = "top-2",
//   finaltop = "top-2",
//   position = "relative",
// }) => {

//   return (
//     <div
//       className={`${position} left-0 right-0 z-20 mx-4 md:mx-auto max-w-7xl transition-all duration-300 bg-[#4a4741]/50 backdrop-blur-md py-1 mt-2 rounded hidden mb-4 md:block ${
//         isScrolled ? finaltop : initialTop
//       } rounded-lg`}
//     >
//       <div className="flex items-center justify-between max-w-6xl mx-auto">

//         <div className="flex items-center gap-6 lg:gap-8">
//           <NavLinks />
//           <div className="w-16  justify-between items-center hidden md:flex text-[#f7f1e8]">

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBarMd;
