"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function EditModal() {
  const { showEditModal } = useSelector((state) => state.context);
  return (
    showEditModal && (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full border px-3 py-2 rounded-md outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded-md outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
                className="w-full border px-3 py-2 rounded-md outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="flex items-center justify-end gap-3 mt-5">
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-black text-white hover:bg-black/90"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
