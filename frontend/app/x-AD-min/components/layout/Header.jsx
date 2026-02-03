"use client";
import React from "react";
import { Search } from "lucide-react";

const TITLES = {
  dashboard: "Dashboard",
  products: "Products",
  users: "Customers",
  orders: "Orders",
  blogs: "Blogs",
};

const Header = ({ activeTab }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          {TITLES[activeTab] || "Dashboard"}
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
