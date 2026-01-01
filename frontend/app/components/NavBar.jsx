"use client";
import Link from "next/link";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Bar from "./Bar";
import { useEffect, useState } from "react";

const NavBar = ({ initialTop = "top-2", finaltop = "top-2" }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-20 mx-4 md:mx-auto max-w-7xl transition-all duration-300 bg-white/30 backdrop-blur-md md:hidden ${
        isScrolled ? finaltop : initialTop
      } rounded-lg px-5 py-2 md:py-3 `}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-6 lg:gap-8">
          <NavLinks />
          <Bar
            classname={
              "border-white rounded-full border size-10 p-2 cursor-pointer text-[#f7f1e8]"
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
