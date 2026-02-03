"use client";
import React from "react";
import {
  LayoutDashboard,
  Package,
  Users,
  FileText,
  ListOrdered,
} from "lucide-react";
import DarkLogo from "@/app/components/DarkLogo";
// import DarkLogo from "../../components/DarkLogo";

const MENU_ITEMS = [
  { id: "dashboard", icon: LayoutDashboard, label: "Overview" },
  { id: "products", icon: Package, label: "Product" },
  { id: "users", icon: Users, label: "Customer" },
  { id: "orders", icon: ListOrdered, label: "Orders" },
  { id: "blogs", icon: FileText, label: "Blogs" },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-white shadow-sm min-h-screen border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-center gap-2 mb-8">
          <DarkLogo />
        </div>

        <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
          Menu
        </p>

        <nav className="space-y-1">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                activeTab === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
