"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
} from "../utils/helper";
import { RiDeleteBinLine } from "react-icons/ri";
import MyBtn from "../components/MyBtn";
import { userAPI } from "@/lib/api";
import { fetchUserAddresses } from "../utils/helper";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { user, userAddresses } = useSelector((state) => state.auth);
  const { cart, loading, error } = useSelector((state) => state.context);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const [currentAddressId, setCurrentAddressId] = useState(null);
  const [label, setLabel] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("paystack");

  useEffect(() => {
    if (user) {
      dispatch(fetchCart());
      dispatch(fetchUserAddresses());
    }
  }, [user, dispatch]);

  const handleQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateCartQuantity({ itemId, quantity: newQuantity }));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleApplyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(0.1);
      alert("Coupon applied! 10% discount");
    } else {
      setDiscount(0);
      alert("Invalid coupon");
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal - subtotal * discount;

  const resetAddressForm = () => {
    setLabel("");
    setStreet("");
    setCity("");
    setStateName("");
    setCountry("");
    setZipCode("");
    setIsDefault(false);
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

  const handleProceedToPayment = () => {
    if (!deliveryAddress) {
      alert("Please add a delivery address before proceeding to payment.");
      return;
    }

    localStorage.setItem("selectedPaymentMethod", paymentMethod);
    localStorage.setItem("orderTotal", total.toString());
    localStorage.setItem("deliveryAddress", JSON.stringify(deliveryAddress));

    window.location.href = "/payment";
  };

  const deliveryAddress =
    userAddresses?.find((addr) => addr.isDefault) || userAddresses?.[0] || null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  Shopping Cart ({cart.length}{" "}
                  {cart.length === 1 ? "item" : "items"})
                </h2>
              </div>

              <div className="p-6">
                {loading ? (
                  <div className="text-center py-12">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-900 border-r-transparent"></div>
                    <p className="mt-4 text-gray-600">Loading cart...</p>
                  </div>
                ) : error ? (
                  <div className="text-center py-12">
                    <p className="text-red-500">{error}</p>
                  </div>
                ) : cart.length === 0 ? (
                  <div className="text-center py-12">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <p className="mt-4 text-gray-600">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <img
                          src={item.imageUrl || "/placeholder.png"}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />

                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 truncate">
                            {item.name}
                          </h3>
                          <p className="text-lg font-semibold text-gray-900 mt-1">
                            ₦{item.price.toLocaleString()}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2 border border-gray-200">
                          <button
                            onClick={() =>
                              handleQuantity(item._id, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
                          >
                            <span className="text-xl font-medium">−</span>
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantity(item._id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
                          >
                            <span className="text-xl font-medium">+</span>
                          </button>
                        </div>

                        <div className="text-right min-w-[100px]">
                          <p className="text-lg font-bold text-gray-900">
                            ₦{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>

                        <button
                          onClick={() => handleRemove(item._id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <RiDeleteBinLine className="text-red-600 w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Coupon Section */}
              {cart.length > 0 && (
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                    >
                      Apply Coupon
                    </button>
                  </div>
                  <button
                    onClick={handleClearCart}
                    className="mt-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                  >
                    Clear all items
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          {cart.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-8">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Order Summary
                  </h2>
                </div>

                <div className="p-6 space-y-6">
                  {/* Price Details */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-medium">
                        ₦{subtotal.toLocaleString()}
                      </span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span className="font-medium">
                          - ₦{(subtotal * discount).toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex justify-between text-xl font-bold text-gray-900">
                        <span>Total</span>
                        <span>₦{total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">
                        Delivery Address
                      </h3>
                      <button
                        onClick={() => {
                          resetAddressForm();
                          setShowAddAddressModal(true);
                        }}
                        className="text-sm text-gray-600 hover:text-gray-900 underline"
                      >
                        {deliveryAddress ? "Change" : "Add"}
                      </button>
                    </div>
                    {deliveryAddress ? (
                      <div className="p-4 bg-gray-50 rounded-xl space-y-1 text-sm">
                        <p className="font-semibold text-gray-900">
                          {deliveryAddress.label}
                        </p>
                        <p className="text-gray-600">
                          {deliveryAddress.street}
                        </p>
                        <p className="text-gray-600">
                          {deliveryAddress.city}, {deliveryAddress.state}
                        </p>
                        <p className="text-gray-600">
                          {deliveryAddress.country} - {deliveryAddress.zipCode}
                        </p>
                      </div>
                    ) : (
                      <div className="p-4 bg-red-50 rounded-xl text-center">
                        <p className="text-sm text-red-600">
                          No delivery address added
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Payment Method
                    </h3>
                    <div className="space-y-3">
                      <label
                        className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          paymentMethod === "paystack"
                            ? "border-gray-900 bg-gray-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paystack"
                          checked={paymentMethod === "paystack"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-5 h-5 accent-gray-900"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            Paystack
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            Card, Bank Transfer, USSD
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">
                            PS
                          </span>
                        </div>
                      </label>

                      <label
                        className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          paymentMethod === "mobile-banking"
                            ? "border-gray-900 bg-gray-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="mobile-banking"
                          checked={paymentMethod === "mobile-banking"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-5 h-5 accent-gray-900"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            Mobile Banking
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            Direct from banking app
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleProceedToPayment}
                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Address Modal */}
      {showAddAddressModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">
                Add Delivery Address
              </h2>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              {[
                ["Label (e.g., Home, Office)", label, setLabel],
                ["Street Address", street, setStreet],
                ["City", city, setCity],
                ["State", stateName, setStateName],
                ["Country", country, setCountry],
                ["Zip Code", zipCode, setZipCode],
              ].map(([labelText, value, setter], idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {labelText}
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
