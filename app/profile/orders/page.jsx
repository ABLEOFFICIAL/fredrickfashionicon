"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Package,
  Calendar,
  CreditCard,
  MapPin,
  ChevronRight,
  ShoppingBag,
  Clock,
  CheckCircle,
  XCircle,
  Truck,
} from "lucide-react";

const OrdersPage = () => {
  const { orders } = useSelector((state) => state.context);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filter, setFilter] = useState("all"); // all, processing, delivered, cancelled

  // Mock orders data based on the structure you provided
  const mockOrders = [
    {
      _id: "6924286244cb1b9f22612dc0",
      orderNumber: "ORD-1763977314604-RPRSR18QT",
      createdAt: "2025-11-24T09:41:54.610Z",
      orderStatus: "processing",
      paymentStatus: "paid",
      paymentReference: "ref_1763977314253",
      totalAmount: 120000,
      items: [
        {
          _id: "6924286244cb1b9f22612dc1",
          name: "Sarai Black Pointed-Toe Ankle Booties",
          price: 24000,
          quantity: 5,
          imageUrl: "/bag1.jpg",
        },
      ],
      shippingAddress: {
        street: "6 ibekwe Drive",
        city: "Nnewi",
        state: "Anambra",
        country: "Nigeria",
        zipCode: "100001",
      },
    },
  ];

  // Use real orders from Redux or fallback to mock
  const displayOrders = orders?.length > 0 ? orders : mockOrders;

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
        return <CheckCircle className="w-4 h-4" />;
      case "processing":
        return <Clock className="w-4 h-4" />;
      case "pending":
        return <Package className="w-4 h-4" />;
      case "cancelled":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
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

  const filteredOrders = displayOrders.filter((order) => {
    if (filter === "all") return true;
    return order.orderStatus?.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage your orders</p>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
          <div className="flex overflow-x-auto">
            {[
              { key: "all", label: "All Orders" },
              { key: "processing", label: "Processing" },
              { key: "delivered", label: "Delivered" },
              { key: "cancelled", label: "Cancelled" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex-1 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                  filter === tab.key
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No orders found
            </h3>
            <p className="text-gray-600 mb-6">
              {filter === "all"
                ? "You haven't placed any orders yet"
                : `No ${filter} orders found`}
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  {/* Order Header */}
                  <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-100">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          Order #{order.orderNumber}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                            order.orderStatus
                          )}`}
                        >
                          {getStatusIcon(order.orderStatus)}
                          {order.orderStatus?.charAt(0).toUpperCase() +
                            order.orderStatus?.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {formatDate(order.createdAt)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Package className="w-4 h-4" />
                          {order.items?.length}{" "}
                          {order.items?.length === 1 ? "item" : "items"}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">
                        ₦{order.totalAmount?.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
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
                  <div className="space-y-3 mb-4">
                    {order.items?.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"
                      >
                        <img
                          src={item.imageUrl || "/placeholder.png"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            Qty: {item.quantity} × ₦
                            {item.price?.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            ₦{(item.price * item.quantity)?.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Address & Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Delivery Address
                        </p>
                        <p>
                          {order.shippingAddress?.street},{" "}
                          {order.shippingAddress?.city}
                        </p>
                        <p>
                          {order.shippingAddress?.state},{" "}
                          {order.shippingAddress?.country}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">
                Order Details
              </h2>
              <p className="text-gray-600 mt-1">#{selectedOrder.orderNumber}</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Status & Date */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Order Status</p>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                      selectedOrder.orderStatus
                    )}`}
                  >
                    {getStatusIcon(selectedOrder.orderStatus)}
                    {selectedOrder.orderStatus?.charAt(0).toUpperCase() +
                      selectedOrder.orderStatus?.slice(1)}
                  </span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Order Date</p>
                  <p className="font-semibold text-gray-900">
                    {formatDate(selectedOrder.createdAt)}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Order Items
                </h3>
                <div className="space-y-3">
                  {selectedOrder.items?.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <img
                        src={item.imageUrl || "/placeholder.png"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm text-gray-600">
                          Price: ₦{item.price?.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">
                          ₦{(item.price * item.quantity)?.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Info */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Payment Information
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Reference</span>
                    <span className="font-mono text-gray-900">
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
                    <span className="font-bold text-xl text-gray-900">
                      ₦{selectedOrder.totalAmount?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Shipping Address
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>{selectedOrder.shippingAddress?.street}</p>
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

            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
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
