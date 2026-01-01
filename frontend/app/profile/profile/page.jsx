"use client";
import React, { useState } from "react";
import ProfileCard from "../ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { userAPI } from "@/lib/api";
import { fetchUserAddresses, fetchUserProfile } from "@/app/utils/helper";
import { Pen, Trash2, Plus, MapPin, User, Mail, Phone } from "lucide-react";

export const DeleteModal = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-6">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Trash2 className="w-6 h-6 text-red-600" />
      </div>
      <h2 className="text-xl font-bold text-gray-900 text-center mb-2">
        Delete Address
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Are you sure you want to delete this address? This action cannot be
        undone.
      </p>
      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 px-4 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default function Page() {
  const { user, userAddresses } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const [showEditAddressModal, setShowEditAddressModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentAddressId, setCurrentAddressId] = useState(null);

  const [editName, setEditName] = useState(user?.name || "");
  const [editEmail, setEditEmail] = useState(user?.email || "");
  const [editPhone, setEditPhone] = useState(user?.phone || "");

  const [label, setLabel] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isDefault, setIsDefault] = useState(false);

  const fillEditAddress = (address) => {
    setLabel(address.label);
    setStreet(address.street);
    setCity(address.city);
    setStateName(address.state);
    setCountry(address.country);
    setZipCode(address.zipCode);
    setIsDefault(address.isDefault);
  };

  const resetAddressForm = () => {
    setLabel("");
    setStreet("");
    setCity("");
    setStateName("");
    setCountry("");
    setZipCode("");
    setIsDefault(false);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      await userAPI.updateProfile({
        name: editName,
        email: editEmail,
        phone: editPhone,
      });
      await dispatch(fetchUserProfile());
      setShowEditProfileModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddAddress = async (e) => {
    e.preventDefault();
    try {
      await userAPI.addAddress({
        label,
        street,
        city,
        state: stateName,
        country,
        zipCode,
        isDefault,
      });
      await dispatch(fetchUserAddresses());
      setShowAddAddressModal(false);
      resetAddressForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateAddress = async (e) => {
    e.preventDefault();
    try {
      await userAPI.updateAddress(currentAddressId, {
        label,
        street,
        city,
        state: stateName,
        country,
        zipCode,
        isDefault,
      });
      await dispatch(fetchUserAddresses());
      setShowEditAddressModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const confirmDeleteAddress = async () => {
    try {
      await userAPI.deleteAddress(currentAddressId);
      await dispatch(fetchUserAddresses());
      setShowDeleteModal(false);
      setCurrentAddressId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const ModalWrapper = ({ children, title, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );

  const FormInput = ({ label, value, onChange, type = "text" }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
      />
    </div>
  );

  return (
    user && (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Delete Modal */}
          {showDeleteModal && (
            <DeleteModal
              onConfirm={confirmDeleteAddress}
              onCancel={() => setShowDeleteModal(false)}
            />
          )}

          {/* Edit Profile Modal */}
          {showEditProfileModal && (
            <ModalWrapper
              title="Edit Profile"
              onClose={() => setShowEditProfileModal(false)}
            >
              <div className="p-6 space-y-4">
                <FormInput
                  label="Full Name"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <FormInput
                  label="Email Address"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  type="email"
                />
                <FormInput
                  label="Phone Number"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                />
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-3">
                <button
                  onClick={() => setShowEditProfileModal(false)}
                  className="flex-1 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => handleProfileSubmit(e)}
                  className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </ModalWrapper>
          )}

          {/* Add Address Modal */}
          {showAddAddressModal && (
            <ModalWrapper
              title="Add New Address"
              onClose={() => setShowAddAddressModal(false)}
            >
              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                {[
                  ["Label (e.g., Home, Office)", label, setLabel],
                  ["Street Address", street, setStreet],
                  ["City", city, setCity],
                  ["State", stateName, setStateName],
                  ["Country", country, setCountry],
                  ["Zip Code", zipCode, setZipCode],
                ].map(([labelText, value, setter], idx) => (
                  <FormInput
                    key={idx}
                    label={labelText}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                  />
                ))}
                <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isDefault}
                    onChange={(e) => setIsDefault(e.target.checked)}
                    className="w-5 h-5 accent-gray-900"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Set as default address
                  </span>
                </label>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-3">
                <button
                  onClick={() => setShowAddAddressModal(false)}
                  className="flex-1 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => handleAddAddress(e)}
                  className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Save Address
                </button>
              </div>
            </ModalWrapper>
          )}

          {/* Edit Address Modal */}
          {showEditAddressModal && (
            <ModalWrapper
              title="Edit Address"
              onClose={() => setShowEditAddressModal(false)}
            >
              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                {[
                  ["Label", label, setLabel],
                  ["Street Address", street, setStreet],
                  ["City", city, setCity],
                  ["State", stateName, setStateName],
                  ["Country", country, setCountry],
                  ["Zip Code", zipCode, setZipCode],
                ].map(([labelText, value, setter], idx) => (
                  <FormInput
                    key={idx}
                    label={labelText}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                  />
                ))}
                <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isDefault}
                    onChange={(e) => setIsDefault(e.target.checked)}
                    className="w-5 h-5 accent-gray-900"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Set as default address
                  </span>
                </label>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-3">
                <button
                  onClick={() => setShowEditAddressModal(false)}
                  className="flex-1 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => handleUpdateAddress(e)}
                  className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Update Address
                </button>
              </div>
            </ModalWrapper>
          )}

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Profile Overview
            </h1>
            <p className="text-gray-600">
              Manage your personal information and addresses
            </p>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4a4741] rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Profile Details
                  </h2>
                  <p className="text-sm text-gray-500">
                    Your personal information
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowEditProfileModal(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Pen className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Full Name</p>
                  <p className="font-medium text-gray-900">{user.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email Address</p>
                  <p className="font-medium text-gray-900">{user.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                  <p className="font-medium text-gray-900">
                    {user.phone || "Not provided"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Addresses Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Delivery Addresses
                </h2>
                <p className="text-gray-600">Manage your shipping addresses</p>
              </div>
              <button
                onClick={() => {
                  resetAddressForm();
                  setCurrentAddressId(null);
                  setShowAddAddressModal(true);
                }}
                className="flex items-center gap-2 px-4 py-3 bg-[#4a4741] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Address
              </button>
            </div>

            {userAddresses && userAddresses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userAddresses.map((address) => (
                  <div
                    key={address._id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {address.label}
                            </h3>
                            {address.isDefault && (
                              <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md mt-1">
                                Default
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              fillEditAddress(address);
                              setCurrentAddressId(address._id);
                              setShowEditAddressModal(true);
                            }}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <Pen className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            onClick={() => {
                              setCurrentAddressId(address._id);
                              setShowDeleteModal(true);
                            }}
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>{address.street}</p>
                        <p>
                          {address.city}, {address.state}
                        </p>
                        <p>
                          {address.country} - {address.zipCode}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No addresses yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Add your first delivery address to get started
                </p>
                <button
                  onClick={() => {
                    resetAddressForm();
                    setCurrentAddressId(null);
                    setShowAddAddressModal(true);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add Your First Address
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}
