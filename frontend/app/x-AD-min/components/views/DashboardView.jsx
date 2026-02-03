"use client";
import React from "react";
import { useSelector } from "react-redux";
import { DollarSign, ShoppingCart, Package, Users, Star } from "lucide-react";
import StatCard from "../layout/StatCard";

const DashboardView = ({ setActiveTab }) => {
  const { adminOrders } = useSelector((state) => state.admin);
  const { users } = useSelector((state) => state.admin);
  const { products } = useSelector((state) => state.context);

  const totalRevenue = adminOrders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<DollarSign className="w-6 h-6" />}
          title="Total Revenue"
          value={`₦${totalRevenue.toLocaleString()}`}
          trend="+16%"
          trendUp={true}
          color="from-blue-500 to-blue-600"
        />
        <StatCard
          icon={<ShoppingCart className="w-6 h-6" />}
          title="Total Orders"
          value={adminOrders.length}
          trend="+8%"
          trendUp={true}
          color="from-green-500 to-green-600"
        />
        <StatCard
          icon={<Package className="w-6 h-6" />}
          title="Total Products"
          value={products.length}
          trend="+2%"
          trendUp={true}
          color="from-purple-500 to-purple-600"
        />
        <StatCard
          icon={<Users className="w-6 h-6" />}
          title="Total Customers"
          value={users.length}
          trend="-0.4%"
          trendUp={false}
          color="from-orange-500 to-orange-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Orders
            </h3>
            <button
              onClick={() => setActiveTab("orders")}
              className="text-blue-600 text-sm hover:underline"
            >
              View All Orders
            </button>
          </div>
          <div className="space-y-3">
            {adminOrders.slice(0, 5).map((order) => (
              <div
                key={order._id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">
                      Order #{order.orderNumber}
                    </p>
                    <p className="text-xs text-gray-500">
                      {order.items?.length || 0} items
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    ₦{order.totalAmount?.toLocaleString()}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      order.orderStatus === "delivered"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                </div>
              </div>
            ))}
            {adminOrders.length === 0 && (
              <p className="text-center text-gray-500 py-4">No orders yet</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Top Products
            </h3>
            <button className="text-blue-600 text-sm hover:underline">
              View more
            </button>
          </div>
          <div className="space-y-3">
            {products.slice(0, 5).map((product) => (
              <div
                key={product._id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.images?.[0] || "/placeholder.jpg"}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-600">
                        {product.averageRating?.toFixed(1) || 0}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    ₦{product.price?.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    {product.stock} in stock
                  </p>
                </div>
              </div>
            ))}
            {products.length === 0 && (
              <p className="text-center text-gray-500 py-4">No products yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
