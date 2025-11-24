"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CheckCircle,
  ArrowLeft,
  Copy,
  Check,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { clearCart } from "../utils/helper";

const PaymentPage = () => {
  const { user } = useSelector((state) => state.auth);

  // Retrieve data from localStorage
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderTotal, setOrderTotal] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("pending"); // pending, processing, success, failed
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.context);
  // Payment processing states
  const [isProcessing, setIsProcessing] = useState(false);

  // Paystack card details
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");

  // Bank details for mobile banking
  const bankDetails = {
    accountName: "Your Store Name",
    accountNumber: "0123456789",
    bankName: "GTBank",
    amount: orderTotal,
  };

  useEffect(() => {
    // Load data from localStorage
    const method = localStorage.getItem("selectedPaymentMethod");
    const total = localStorage.getItem("orderTotal");
    const address = localStorage.getItem("deliveryAddress");

    setPaymentMethod(method || "paystack");
    setOrderTotal(parseFloat(total) || 0);
    setDeliveryAddress(address ? JSON.parse(address) : null);
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s/g, "");
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || cleaned;
    return formatted;
  };

  const formatExpiry = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const handlePaystackPayment = async () => {
    // Validate card details
    if (!cardNumber || !cardExpiry || !cardCvv || !cardName) {
      alert("Please fill in all card details");
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus("processing");

      // Simulate successful payment after 2 seconds
      setTimeout(() => {
        setPaymentStatus("success");
        setIsProcessing(false);

        // Clear localStorage after successful payment
        localStorage.removeItem("selectedPaymentMethod");
        localStorage.removeItem("orderTotal");
        localStorage.removeItem("deliveryAddress");
      }, 2000);
    }, 1500);
  };

  const handleAddToOrders = async () => {
    try {
      if (cart.length === 0) return;

      // Prepare payload for API
      const payload = {
        cartItems: cart.map((item) => ({
          product: {
            _id: item.id, // adjust if your product id is differently named
            name: item.name,
            images: item.images,
          },
          price: item.price,
          quantity: item.quantity,
        })),
        shippingAddress: deliveryAddress,
        paymentReference: `ref_${Date.now()}`, // generate a reference or use your payment gateway ref
        totalAmount: orderTotal,
      };

      const response = await fetch("/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const data = await response.json();
      console.log("Order created successfully:", data);

      // Clear cart after successful order creation
      dispatch(clearCart());
      // localStorage.removeItem("cartItems");
    } catch (error) {
      console.error("Error adding order:", error);
      alert("There was an error creating your order. Please try again.");
    }
  };

  const handleMobileBankingConfirm = () => {
    setIsProcessing(true);
    setPaymentStatus("processing");

    // Simulate payment verification
    setTimeout(() => {
      dispatch(clearCart());
      setPaymentStatus("success");
      handleAddToOrders();
      setIsProcessing(false);

      // Clear localStorage after successful payment
      localStorage.removeItem("selectedPaymentMethod");
      localStorage.removeItem("orderTotal");
      localStorage.removeItem("deliveryAddress");
    }, 3000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Success screen
  if (paymentStatus === "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md w-full text-center">
          {/* Change icon background to yellow for pending */}
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-yellow-600" />
          </div>

          {/* Updated title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Received
          </h1>

          {/* Updated message */}
          <p className="text-gray-600 mb-8">
            Your payment has been received and is pending verification. Our
            management team will review your order and send a notification to
            your inbox once it is approved.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Order Total</span>
              <span className="font-bold text-gray-900">
                ₦{orderTotal.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium text-gray-900">
                {paymentMethod === "paystack" ? "Paystack" : "Mobile Banking"}
              </span>
            </div>
          </div>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Checkout
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Complete Payment
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Payment Form */}
          <div className="lg:col-span-2">
            {paymentMethod === "paystack" ? (
              // Paystack Payment Form
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-cyan-300 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Paystack Payment
                    </h2>
                    <p className="text-sm text-gray-500">
                      Enter your card details
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Card Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\s/g, "");
                        if (value.length <= 16 && /^\d*$/.test(value)) {
                          setCardNumber(formatCardNumber(value));
                        }
                      }}
                      maxLength={19}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 font-mono"
                    />
                  </div>

                  {/* Card Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={cardName}
                      onChange={(e) =>
                        setCardName(e.target.value.toUpperCase())
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardExpiry}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          if (value.length <= 4) {
                            setCardExpiry(formatExpiry(value));
                          }
                        }}
                        maxLength={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cardCvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          if (value.length <= 3) {
                            setCardCvv(value);
                          }
                        }}
                        maxLength={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 font-mono"
                      />
                    </div>
                  </div>

                  {/* Card Preview */}
                  <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-8 bg-yellow-400 rounded"></div>
                      <span className="text-sm opacity-75">DEBIT</span>
                    </div>
                    <div className="mb-6">
                      <p className="text-lg font-mono tracking-wider">
                        {cardNumber || "•••• •••• •••• ••••"}
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs opacity-75 mb-1">Cardholder</p>
                        <p className="font-medium">{cardName || "YOUR NAME"}</p>
                      </div>
                      <div>
                        <p className="text-xs opacity-75 mb-1">Expires</p>
                        <p className="font-medium font-mono">
                          {cardExpiry || "MM/YY"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handlePaystackPayment}
                    disabled={isProcessing}
                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </span>
                    ) : (
                      `Pay ₦${orderTotal.toLocaleString()}`
                    )}
                  </button>
                </div>
              </div>
            ) : (
              // Mobile Banking Payment
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Mobile Banking
                    </h2>
                    <p className="text-sm text-gray-500">
                      Transfer to the account below
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <p className="text-sm text-gray-600 mb-4 font-medium">
                      Transfer ₦{orderTotal.toLocaleString()} to:
                    </p>

                    {/* Account Details */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">
                            Bank Name
                          </p>
                          <p className="font-semibold text-gray-900">
                            {bankDetails.bankName}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-white rounded-lg p-3">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">
                            Account Number
                          </p>
                          <p className="font-mono font-bold text-gray-900 text-lg">
                            {bankDetails.accountNumber}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(bankDetails.accountNumber)
                          }
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          {copied ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">
                            Account Name
                          </p>
                          <p className="font-semibold text-gray-900">
                            {bankDetails.accountName}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-white rounded-lg p-3">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Amount</p>
                          <p className="font-bold text-gray-900 text-xl">
                            ₦{orderTotal.toLocaleString()}
                          </p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(orderTotal.toString())}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          {copied ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Instructions:
                    </h3>
                    <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                      <li>Open your mobile banking app</li>
                      <li>Select "Transfer" or "Send Money"</li>
                      <li>Enter the account details above</li>
                      <li>Complete the transfer</li>
                      <li>Click "I've Made the Transfer" below</li>
                    </ol>
                  </div>

                  <button
                    onClick={handleMobileBankingConfirm}
                    disabled={isProcessing}
                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Verifying Payment...
                      </span>
                    ) : (
                      "I've Made the Transfer"
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-8">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  Order Summary
                </h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Order Total</span>
                  <span className="font-bold text-gray-900">
                    ₦{orderTotal.toLocaleString()}
                  </span>
                </div>

                {deliveryAddress && (
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Delivery Address
                    </p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="font-medium text-gray-900">
                        {deliveryAddress.label}
                      </p>
                      <p>{deliveryAddress.street}</p>
                      <p>
                        {deliveryAddress.city}, {deliveryAddress.state}
                      </p>
                      <p>
                        {deliveryAddress.country} - {deliveryAddress.zipCode}
                      </p>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </p>
                  <p className="text-sm text-gray-900 font-medium">
                    {paymentMethod === "paystack"
                      ? "Paystack (Card Payment)"
                      : "Mobile Banking Transfer"}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Your payment is secure and encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
