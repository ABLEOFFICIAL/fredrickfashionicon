"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Mail,
  Clock,
  Star,
  MailOpen,
  Inbox,
  Trash2,
  CheckCheck,
} from "lucide-react";
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

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

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
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
              Inbox
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Stay updated with your notifications
            </p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllRead}
              className="flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 bg-gray-200 rounded-lg sm:rounded-xl hover:bg-gray-300 text-gray-700 text-sm sm:text-base font-medium transition-colors w-full sm:w-auto"
            >
              <CheckCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Mark All as Read</span>
              <span className="sm:hidden">Mark All</span>
              <span className="px-2 py-0.5 bg-white rounded-full text-xs font-bold">
                {unreadCount}
              </span>
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 mb-4 sm:mb-6 overflow-hidden">
          <div className="flex">
            {[
              {
                key: "all",
                label: "All",
                fullLabel: "All Notifications",
                icon: Mail,
              },
              {
                key: "unread",
                label: "Unread",
                fullLabel: "Unread",
                icon: MailOpen,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 sm:px-6 py-3 sm:py-4 font-medium transition-colors ${
                    filter === tab.key
                      ? "bg-[#4a4741] text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">
                    <span className="sm:hidden">{tab.label}</span>
                    <span className="hidden sm:inline">{tab.fullLabel}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Notifications List or Empty State */}
        {loading ? (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-12">
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-gray-200 border-t-[#4a4741] rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 text-sm sm:text-base">
                Loading notifications...
              </p>
            </div>
          </div>
        ) : filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
            <div className="max-w-md mx-auto text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Inbox className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                {filter === "all" && "No Notifications Yet"}
                {filter === "unread" && "All Caught Up!"}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {filter === "all" &&
                  "You don't have any notifications yet. You'll see updates about your orders, promotions, and important announcements here."}
                {filter === "unread" && "You've read all your notifications."}
              </p>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Notifications will appear here when available</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification._id}
                  onClick={() => handleMarkAsRead(notification._id)}
                  className={`p-4 sm:p-6 hover:bg-gray-50 transition-colors cursor-pointer ${
                    !notification.read ? "bg-blue-50/30" : ""
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Icon */}
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${
                        notification.read ? "bg-gray-100" : "bg-blue-100"
                      }`}
                    >
                      <Mail
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          notification.read ? "text-gray-600" : "text-blue-600"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title and Actions Row */}
                      <div className="flex items-start justify-between gap-2 sm:gap-4 mb-2">
                        <h4
                          className={`text-sm sm:text-base text-gray-900 flex-1 min-w-0 ${
                            !notification.read ? "font-bold" : "font-semibold"
                          }`}
                        >
                          {notification.title}
                        </h4>
                        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                          <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                            {formatDate(notification.createdAt)}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(notification._id);
                            }}
                            className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
                            aria-label="Delete notification"
                          >
                            <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>

                      {/* Message */}
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2 sm:line-clamp-none">
                        {notification.message}
                      </p>

                      {/* Type Badge and Unread Indicator */}
                      <div className="flex items-center gap-2">
                        {notification.type && (
                          <span className="inline-block px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-md">
                            {notification.type.toUpperCase()}
                          </span>
                        )}
                        {!notification.read && (
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Stats (Optional) */}
        {filteredNotifications.length > 0 && (
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              Showing {filteredNotifications.length} of {notifications.length}{" "}
              notifications
              {unreadCount > 0 && ` • ${unreadCount} unread`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InboxPage;
