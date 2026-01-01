"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Mail, Clock, Star, MailOpen, Inbox, Trash2 } from "lucide-react";
import {
  fetchNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
} from "@/app/store/notificationsSlice";

const InboxPage = () => {
  const dispatch = useDispatch();
  const { notifications, unreadCount, loading } = useSelector(
    (state) => state.notifications
  );

  const [filter, setFilter] = useState("all"); // all, unread, starred (optional starred feature)

  useEffect(() => {
    // Fetch notifications on component mount
    dispatch(fetchNotifications());
  }, [dispatch]);

  // Filter notifications
  const filteredNotifications = notifications.filter((n) => {
    if (filter === "unread") return !n.read;
    return true;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  const handleMarkAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteNotification(id));
  };

  const handleMarkAllRead = () => {
    dispatch(markAllNotificationsAsRead());
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Inbox</h1>
            <p className="text-gray-600">
              Stay updated with your notifications
            </p>
          </div>
          <button
            onClick={handleMarkAllRead}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-gray-700"
          >
            Mark All as Read ({unreadCount})
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
          <div className="flex">
            {[
              { key: "all", label: "All Notifications", icon: Mail },
              { key: "unread", label: "Unread", icon: MailOpen },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-medium transition-colors ${
                    filter === tab.key
                      ? "bg-[#4a4741] text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notifications List or Empty State */}
        {loading ? (
          <div className="text-center py-12 text-gray-600">Loading...</div>
        ) : filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
            <div className="max-w-md mx-auto text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Inbox className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {filter === "all" && "No Notifications Yet"}
                {filter === "unread" && "All Caught Up!"}
              </h3>
              <p className="text-gray-600 mb-6">
                {filter === "all" &&
                  "You don't have any notifications yet. You'll see updates about your orders, promotions, and important announcements here."}
                {filter === "unread" && "You've read all your notifications."}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Notifications will appear here when available</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification._id}
                  onClick={() => handleMarkAsRead(notification._id)}
                  className={`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${
                    !notification.read ? "bg-blue-50/30" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        notification.read ? "bg-gray-100" : "bg-blue-100"
                      }`}
                    >
                      <Mail
                        className={`w-5 h-5 ${
                          notification.read ? "text-gray-600" : "text-blue-600"
                        }`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4
                          className={`font-semibold text-gray-900 ${
                            !notification.read ? "font-bold" : ""
                          }`}
                        >
                          {notification.title}
                        </h4>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-sm text-gray-500">
                            {formatDate(notification.createdAt)}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(notification._id);
                            }}
                            className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      {notification.type && (
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-md">
                          {notification.type.toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InboxPage;
