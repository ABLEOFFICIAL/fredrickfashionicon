"use client";
import React from "react";
import { TrendingUp } from "lucide-react";

const StatCard = ({ icon, title, value, trend, trendUp, color }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div
        className={`w-12 h-12 bg-linear-to-br ${color} rounded-lg flex items-center justify-center text-white`}
      >
        {icon}
      </div>
      <div
        className={`flex items-center gap-1 text-sm font-medium ${
          trendUp ? "text-green-600" : "text-red-600"
        }`}
      >
        <TrendingUp className={`w-4 h-4 ${!trendUp && "rotate-180"}`} />
        {trend}
      </div>
    </div>
    <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
    <p className="text-sm text-gray-600">{title}</p>
  </div>
);

export default StatCard;
