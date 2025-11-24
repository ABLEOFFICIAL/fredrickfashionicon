"use client";
import React, { useState } from "react";
import {
  Mail,
  Clock,
  Star,
  Trash2,
  Archive,
  MailOpen,
  Inbox,
} from "lucide-react";

const InboxPage = () => {
  // Mock messages data - replace with real data from your Redux store
  const [messages, setMessages] = useState([
    // Empty array for now - will show empty state
  ]);

  const [filter, setFilter] = useState("all"); // all, unread, starred

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

  const filteredMessages = messages.filter((msg) => {
    if (filter === "unread") return !msg.read;
    if (filter === "starred") return msg.starred;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Inbox</h1>
          <p className="text-gray-600">
            Stay updated with your messages and notifications
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
          <div className="flex">
            {[
              { key: "all", label: "All Messages", icon: Mail },
              { key: "unread", label: "Unread", icon: MailOpen },
              { key: "starred", label: "Starred", icon: Star },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-medium transition-colors ${
                    filter === tab.key
                      ? "bg-gray-900 text-white"
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

        {/* Messages List or Empty State */}
        {filteredMessages.length === 0 ? (
          // Empty State
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
            <div className="max-w-md mx-auto text-center">
              <div className="w-24 h-24 bg-linear-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Inbox className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {filter === "all" && "No Messages Yet"}
                {filter === "unread" && "All Caught Up!"}
                {filter === "starred" && "No Starred Messages"}
              </h3>
              <p className="text-gray-600 mb-6">
                {filter === "all" &&
                  "You don't have any messages yet. We'll notify you here when you receive updates about your orders, promotions, and important announcements."}
                {filter === "unread" &&
                  "You've read all your messages. Great job staying organized!"}
                {filter === "starred" &&
                  "Star important messages to find them quickly later."}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Messages will appear here when available</span>
              </div>
            </div>
          </div>
        ) : (
          // Messages List (when messages exist)
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${
                    !message.read ? "bg-blue-50/30" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        message.read ? "bg-gray-100" : "bg-blue-100"
                      }`}
                    >
                      <Mail
                        className={`w-5 h-5 ${
                          message.read ? "text-gray-600" : "text-blue-600"
                        }`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4
                          className={`font-semibold text-gray-900 ${
                            !message.read ? "font-bold" : ""
                          }`}
                        >
                          {message.subject}
                        </h4>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-sm text-gray-500">
                            {formatDate(message.date)}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              // Toggle starred
                            }}
                            className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            <Star
                              className={`w-4 h-4 ${
                                message.starred
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-400"
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {message.preview}
                      </p>
                      {message.category && (
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-md">
                          {message.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">
                Stay Connected
              </h4>
              <p className="text-sm text-blue-800">
                We'll send you important updates about your orders, exclusive
                offers, and special announcements. Make sure your email
                notifications are enabled in settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
