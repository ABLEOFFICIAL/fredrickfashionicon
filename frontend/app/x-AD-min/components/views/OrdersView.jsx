"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Package,
  Bell,
  CheckCheck,
  Eye,
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002/api";

const OrdersView = () => {
  const { adminOrders, newOrdersCount: reduxNewOrdersCount } = useSelector(
    (state) => state.admin
  );
  const { users } = useSelector((state) => state.admin);

  const [newOrdersCount, setNewOrdersCount] = useState(
    reduxNewOrdersCount || 0
  );
  const [updatingOrderId, setUpdatingOrderId] = useState(null);

  const getToken = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  };

  // Sync Redux newOrdersCount with local state
  useEffect(() => {
    setNewOrdersCount(reduxNewOrdersCount || 0);
  }, [reduxNewOrdersCount]);

  // Fetch new orders count on component mount
  useEffect(() => {
    fetchNewOrdersCount();
  }, []);

  const fetchNewOrdersCount = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${API_URL}/admin/orders?limit=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setNewOrdersCount(data.newOrdersCount || 0);
      }
    } catch (error) {
      console.error("Error fetching new orders count:", error);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    setUpdatingOrderId(orderId);

    try {
      const response = await fetch(
        `${API_URL}/admin/orders/${orderId}/update-status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify({ orderStatus: newStatus }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(`Order ${newStatus} successfully!`);
        window.location.reload();
      } else {
        throw new Error(data.message || "Failed to update order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      alert(error.message || "Failed to update order status");
    } finally {
      setUpdatingOrderId(null);
    }
  };

  const markOrderAsRead = async (orderId) => {
    try {
      const token = getToken();
      const response = await fetch(
        `${API_URL}/admin/orders/${orderId}/mark-read`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      if (data.success) {
        setNewOrdersCount(data.newOrdersCount || 0);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error marking order as read:", error);
    }
  };

  const markAllOrdersAsRead = async () => {
    if (!confirm("Mark all orders as read?")) return;

    try {
      const token = getToken();
      const response = await fetch(`${API_URL}/admin/orders/mark-all-read`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setNewOrdersCount(0);
        alert(`${data.modifiedCount} orders marked as read`);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error marking all orders as read:", error);
      alert("Failed to mark orders as read");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Orders Management
          </h2>

          {newOrdersCount > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full animate-pulse">
              <Bell className="w-5 h-5" />
              <span className="font-bold">{newOrdersCount} New</span>
            </div>
          )}
        </div>

        {newOrdersCount > 0 && (
          <button
            onClick={markAllOrdersAsRead}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <CheckCheck className="w-4 h-4" />
            Mark All as Read
          </button>
        )}
      </div>

      {/* Orders List */}
      {adminOrders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No orders yet</p>
        </div>
      ) : (
        adminOrders.map((order) => {
          const userProfile = users.find((user) => user._id === order.user);

          return (
            <div
              key={order._id}
              className={`bg-white border rounded-xl p-6 space-y-5 transition-all ${
                order.isNewOrder
                  ? "border-red-300 ring-2 ring-red-200 shadow-lg"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-gray-800">
                      {order.orderNumber}
                    </h3>

                    {order.isNewOrder && (
                      <span className="px-2 py-1 text-xs font-bold bg-red-500 text-white rounded-full animate-pulse">
                        NEW
                      </span>
                    )}

                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        order.orderStatus === "delivered"
                          ? "bg-green-100 text-green-700"
                          : order.orderStatus === "cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {order.orderStatus.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right space-y-1">
                    <p className="font-semibold text-gray-800">
                      ₦{order.totalAmount.toLocaleString()}
                    </p>

                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600 font-medium">
                      {order.paymentStatus}
                    </span>
                  </div>

                  {order.isNewOrder && (
                    <button
                      onClick={() => markOrderAsRead(order._id)}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                      title="Mark as read"
                    >
                      <Eye className="w-4 h-4" />
                      Mark Read
                    </button>
                  )}
                </div>
              </div>

              {/* Items */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  Items Ordered ({order.items?.length || 0})
                </h4>

                <div className="space-y-3">
                  {order.items?.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg"
                    >
                      <img
                        src={item.images?.[0] || "/placeholder.png"}
                        alt={item.name}
                        className="w-14 h-14 rounded-md object-cover border"
                      />

                      <div className="flex-1">
                        <p className="font-medium text-gray-800 text-sm">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          ₦{item.price?.toLocaleString()} × {item.quantity}
                          {item.selectedSize && item.selectedSize !== "N/A" && (
                            <> • Size: {item.selectedSize}</>
                          )}
                        </p>
                      </div>

                      <p className="font-semibold text-gray-800 text-sm">
                        ₦
                        {(
                          (item.price || 0) * (item.quantity || 0)
                        ).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer & Shipping Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">
                    Customer Profile
                  </h4>
                  {userProfile ? (
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">{userProfile.name}</span>
                      </p>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Mail className="w-3 h-3" />
                        <span>{userProfile.email}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Phone className="w-3 h-3" />
                        <span>{userProfile.phone || "N/A"}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">
                      Customer details not available
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">
                    Shipping Address
                  </h4>
                  <div className="flex items-start gap-1">
                    <MapPin className="w-3 h-3 mt-0.5 text-gray-500" />
                    <p className="text-sm text-gray-600">
                      {order.shippingAddress?.street || "N/A"},<br />
                      {order.shippingAddress?.city},{" "}
                      {order.shippingAddress?.state},<br />
                      {order.shippingAddress?.country || "Nigeria"} —{" "}
                      {order.shippingAddress?.zipCode || "N/A"}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">
                    Payment Info
                  </h4>
                  <p className="text-sm text-gray-600">
                    Reference:{" "}
                    <span className="font-medium font-mono text-xs">
                      {order.paymentReference}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Status:{" "}
                    <span className="font-medium">{order.paymentStatus}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              {order.orderStatus === "processing" && (
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => updateOrderStatus(order._id, "delivered")}
                    disabled={updatingOrderId === order._id}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
                  >
                    {updatingOrderId === order._id ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Mark as Delivered
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => updateOrderStatus(order._id, "cancelled")}
                    disabled={updatingOrderId === order._id}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
                  >
                    {updatingOrderId === order._id ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5" />
                        Cancel Order
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Status Message */}
              {order.orderStatus !== "processing" && (
                <div
                  className={`px-4 py-3 rounded-lg ${
                    order.orderStatus === "delivered"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  <p className="text-sm font-medium">
                    {order.orderStatus === "delivered"
                      ? "✓ This order has been delivered"
                      : "✗ This order has been cancelled"}
                  </p>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default OrdersView;
