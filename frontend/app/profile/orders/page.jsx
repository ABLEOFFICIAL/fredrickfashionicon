"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Package,
  Calendar,
  MapPin,
  ChevronRight,
  ShoppingBag,
  Clock,
  CheckCircle,
  XCircle,
  X,
} from "lucide-react";

const OrdersPage = () => {
  const { orders } = useSelector((state) => state.context);
  console.log("Orders from Redux:", orders);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filter, setFilter] = useState("all");

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-700 border-green-200";
      case "processing":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case "processing":
        return <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case "pending":
        return <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case "cancelled":
        return <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      default:
        return <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Filter orders based on selected filter
  const filteredOrders = (orders || []).filter((order) => {
    if (filter === "all") return true;
    return order.orderStatus?.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
            My Orders
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            Track and manage your orders
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm border border-gray-100 mb-4 sm:mb-6 overflow-hidden">
          <div
            className="flex overflow-x-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {[
              { key: "all", label: "All Orders" },
              { key: "processing", label: "Processing" },
              { key: "delivered", label: "Delivered" },
              { key: "cancelled", label: "Cancelled" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex-1 min-w-22.5 sm:min-w-0 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  filter === tab.key
                    ? "bg-[#4a4741] text-white shadow-inner"
                    : "text-gray-600 hover:bg-gray-50 active:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State or Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 text-center">
            <div className="max-w-md mx-auto">
              {/* Empty State Icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <ShoppingBag
                  className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400"
                  strokeWidth={1.5}
                />
              </div>

              {/* Empty State Text */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                {filter === "all"
                  ? "No Orders Found"
                  : `No ${
                      filter.charAt(0).toUpperCase() + filter.slice(1)
                    } Orders`}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {filter === "all"
                  ? "Looks like you haven't made any purchases yet. Start exploring our amazing products!"
                  : `You don't have any ${filter} orders at the moment.`}
              </p>

              {/* Call to Action Button - Smaller */}
              <button
                onClick={() => (window.location.href = "/products")}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#4a4741] text-white rounded-xl text-sm font-medium hover:bg-gray-800 active:bg-gray-900 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                Start Shopping
              </button>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs sm:text-sm text-gray-500">
                  Need help?{" "}
                  <a
                    href="/support"
                    className="text-[#4a4741] hover:underline font-medium"
                  >
                    Contact Support
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4 lg:space-y-5">
            {filteredOrders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-200"
              >
                <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                  {/* Order Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-100 gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5 md:gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">
                          Order #{order.orderNumber}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 md:px-3 py-1 rounded-full text-xs font-medium border w-fit ${getStatusColor(
                            order.orderStatus
                          )}`}
                        >
                          {getStatusIcon(order.orderStatus)}
                          <span className="hidden sm:inline">
                            {order.orderStatus?.charAt(0).toUpperCase() +
                              order.orderStatus?.slice(1)}
                          </span>
                          <span className="sm:hidden">
                            {order.orderStatus?.charAt(0).toUpperCase() +
                              order.orderStatus?.slice(1, 4)}
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-600">
                        <span className="flex items-center gap-1 sm:gap-1.5">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 shrink-0" />
                          <span className="truncate">
                            {formatDate(order.createdAt)}
                          </span>
                        </span>
                        <span className="flex items-center gap-1 sm:gap-1.5">
                          <Package className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 shrink-0" />
                          {order.items?.length}{" "}
                          {order.items?.length === 1 ? "item" : "items"}
                        </span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                        ₦{order.totalAmount?.toLocaleString()}
                      </p>
                      <p className="text-xs sm:text-sm">
                        {order.paymentStatus === "paid" ? (
                          <span className="text-green-600 font-medium">
                            Paid
                          </span>
                        ) : (
                          <span className="text-yellow-600 font-medium">
                            Pending
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                    {order.items?.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-2.5 md:p-3 bg-gray-50 rounded-lg sm:rounded-xl"
                      >
                        {(item.images || item.imageUrl) && (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                            <img
                              src={
                                (item.images && item.images[0]) ||
                                item.imageUrl ||
                                "/placeholder.png"
                              }
                              alt={item.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src =
                                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='14' font-family='Arial'%3ENo Image%3C/text%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-xs sm:text-sm line-clamp-1 md:line-clamp-2">
                            {item.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                            Qty: {item.quantity} × ₦
                            {item.price?.toLocaleString()}
                          </p>
                          {item.selectedSize && (
                            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                              Size: {item.selectedSize}
                            </p>
                          )}
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">
                            ₦{(item.price * item.quantity)?.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Address & Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 flex-1 min-w-0">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" />
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 mb-0.5">
                          Delivery Address
                        </p>
                        <p className="break-words">
                          {order.shippingAddress?.street},{" "}
                          {order.shippingAddress?.city}
                        </p>
                        <p className="break-words">
                          {order.shippingAddress?.state},{" "}
                          {order.shippingAddress?.country}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-[#4a4741] text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:bg-gray-800 active:bg-gray-900 transition-all duration-200 w-full sm:w-auto shrink-0"
                    >
                      View Details
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
          <div className="bg-white w-full sm:max-w-2xl sm:rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] sm:max-h-[90vh] flex flex-col rounded-t-2xl sm:rounded-t-xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 lg:p-6 border-b border-gray-100 flex items-start justify-between gap-3 shrink-0">
              <div className="flex-1 min-w-0">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                  Order Details
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 truncate">
                  #{selectedOrder.orderNumber}
                </p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors shrink-0"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-5 lg:space-y-6 overflow-y-auto flex-1">
              {/* Status & Date */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    Order Status
                  </p>
                  <span
                    className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 md:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getStatusColor(
                      selectedOrder.orderStatus
                    )}`}
                  >
                    {getStatusIcon(selectedOrder.orderStatus)}
                    <span className="hidden sm:inline">
                      {selectedOrder.orderStatus?.charAt(0).toUpperCase() +
                        selectedOrder.orderStatus?.slice(1)}
                    </span>
                    <span className="sm:hidden">
                      {selectedOrder.orderStatus?.charAt(0).toUpperCase() +
                        selectedOrder.orderStatus?.slice(1, 4)}
                    </span>
                  </span>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    Order Date
                  </p>
                  <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">
                    {formatDate(selectedOrder.createdAt)}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  Order Items
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {selectedOrder.items?.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={
                            (item.images && item.images[0]) ||
                            item.imageUrl ||
                            "/placeholder.png"
                          }
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='14' font-family='Arial'%3ENo Image%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-xs sm:text-sm line-clamp-2 mb-1">
                          {item.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Price: ₦{item.price?.toLocaleString()}
                        </p>
                        {item.selectedSize && (
                          <p className="text-xs sm:text-sm text-gray-600">
                            Size: {item.selectedSize}
                          </p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">
                          ₦{(item.price * item.quantity)?.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Info */}
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  Payment Information
                </h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                    <span className="text-gray-600">Payment Reference</span>
                    <span className="font-mono text-gray-900 break-all sm:text-right">
                      {selectedOrder.paymentReference}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Status</span>
                    <span
                      className={`font-medium ${
                        selectedOrder.paymentStatus === "paid"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {selectedOrder.paymentStatus?.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="font-semibold text-gray-900">
                      Total Amount
                    </span>
                    <span className="font-bold text-base sm:text-lg md:text-xl text-gray-900">
                      ₦{selectedOrder.totalAmount?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  Shipping Address
                </h3>
                <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                  <p className="break-words">
                    {selectedOrder.shippingAddress?.street}
                  </p>
                  <p>
                    {selectedOrder.shippingAddress?.city},{" "}
                    {selectedOrder.shippingAddress?.state}
                  </p>
                  <p>
                    {selectedOrder.shippingAddress?.country} -{" "}
                    {selectedOrder.shippingAddress?.zipCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 lg:p-6 bg-gray-50 border-t border-gray-100 shrink-0">
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-full py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:bg-gray-800 active:bg-gray-700 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
