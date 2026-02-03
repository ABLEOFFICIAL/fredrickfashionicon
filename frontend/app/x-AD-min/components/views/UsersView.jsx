"use client";
import React from "react";
import { useSelector } from "react-redux";
import {
  Plus,
  Edit2,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ListOrdered,
  ArrowDownAZ,
} from "lucide-react";

const UsersView = ({ openModal, deleteUser }) => {
  const { users } = useSelector((state) => state.admin);
  const { adminOrders } = useSelector((state) => state.admin);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
        <button
          onClick={() => openModal("user")}
          className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all flex items-center gap-2 font-medium"
        >
          <Plus className="w-5 h-5" />
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {users.map((user, idx) => {
          const userOrders = adminOrders.filter(
            (order) => order.user === user._id
          );

          return (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {user.name}
                      </h3>
                      {user.signedIn && (
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
                          Online
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      Member since {user.joinDate}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal("user", user)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Last active: {user.lastActive}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ListOrdered className="w-4 h-4" />
                  <span>Orders: {userOrders.length}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ArrowDownAZ className="w-4 h-4" />
                  <span>
                    Total Spent:{" "}
                    {userOrders
                      .reduce((acc, order) => acc + order.totalAmount, 0)
                      .toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersView;
