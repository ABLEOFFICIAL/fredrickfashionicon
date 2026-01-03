"use client";
import React, { useState } from "react";
import {
  Package,
  Mail,
  Heart,
  CreditCard,
  User,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../utils/helper";

const ProfileSidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop();
  const { user } = useSelector((state) => state.auth);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobileMenuOpen } = useSelector((state) => state.context);

  const menuItems = [
    { title: "Profile", icon: User, path: "profile" },
    { title: "Orders", icon: Package, path: "orders" },
    { title: "Inbox", icon: Mail, path: "inbox" },
    { title: "Wishlist", icon: Heart, path: "wishlist" },
    { title: "Payment", icon: CreditCard, path: "payment" },
  ];

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      // Optional redirect after logout
      window.location.href = "/login";
    });
  };

  return (
    <div className="bg-white hidden lg:block rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-8 h-max mb-10">
      {/* User Profile Header */}
      <div className="p-6 border-b border-gray-100 bg-[#4a4741]">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <User className="w-7 h-7 text-gray-900" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white truncate">
              {user?.name || "User Name"}
            </h3>
            <p className="text-sm text-gray-300 truncate">
              {user?.email || "user@email.com"}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-3">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;

            return (
              <button
                key={item.path}
                onClick={() => router.push(`/profile/${item.path}`)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all group ${
                  isActive
                    ? "bg-[#4a4741] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-5 h-5 ${
                      isActive
                        ? "text-white"
                        : "text-gray-600 group-hover:text-gray-900"
                    }`}
                  />
                  <span
                    className={`font-medium ${isActive ? "text-white" : ""}`}
                  >
                    {item.title}
                  </span>
                </div>
                {isActive && <ChevronRight className="w-5 h-5 text-white" />}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-3 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all group"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>

      {/* Support Section */}
      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-500 mb-2">Need help?</p>
        <button className="text-sm text-gray-900 font-medium hover:underline">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
