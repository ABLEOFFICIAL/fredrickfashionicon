// app/Payment/page.jsx
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
import { paymentAPI } from "@/lib/api";

const PaymentPage = () => {
  const { user } = useSelector((state) => state.auth);

  // Retrieve data from localStorage
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderTotal, setOrderTotal] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("pending");
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.context);

  // Payment processing states
  const [isProcessing, setIsProcessing] = useState(false);
  const [paystackReference, setPaystackReference] = useState(null);

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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // FIXED: Helper function to safely extract product data
  const extractProductData = (item) => {
    // Try to get data from nested product object first, then fall back to item itself
    const productId = item.product?._id || item._id;
    const productName = item.product?.name || item.name;

    // CRITICAL FIX: Check multiple possible locations for images
    let productImages = [];
    if (item.product?.images && Array.isArray(item.product.images)) {
      productImages = item.product.images;
    } else if (item.images && Array.isArray(item.images)) {
      productImages = item.images;
    } else if (item.product?.image) {
      // Fallback for single image
      productImages = [item.product.image];
    } else if (item.image) {
      // Fallback for single image at root level
      productImages = [item.image];
    }

    return {
      productId,
      productName,
      productImages,
    };
  };

  const handleAddToOrders = async (paymentRef) => {
    try {
      if (!cart || cart.length === 0) {
        console.error("Cart is empty");
        throw new Error("Cart is empty");
      }

      // Prepare payload for API with consistent data extraction
      const payload = {
        cartItems: cart.map((item) => {
          const { productId, productName, productImages } =
            extractProductData(item);

          // Log for debugging
          console.log("Processing cart item:", {
            original: item,
            extracted: { productId, productName, productImages },
          });

          return {
            product: {
              _id: productId,
              name: productName,
              images: productImages,
            },
            price: item.price,
            quantity: item.quantity,
          };
        }),
        shippingAddress: deliveryAddress,
        paymentReference: paymentRef,
        totalAmount: orderTotal,
      };

      console.log("Order payload:", payload);

      const response = await fetch("/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create order");
      }

      const data = await response.json();
      console.log("Order created successfully:", data);

      return data;
    } catch (error) {
      console.error("Error adding order:", error);
      throw error;
    }
  };

  const handlePaystackPayment = async () => {
    try {
      setIsProcessing(true);
      setPaymentStatus("processing");

      // Initialize Paystack payment
      const initializeData = {
        amount: orderTotal,
        email: user.email,
        metadata: {
          cart_items: cart.map((item) => {
            const { productId, productName } = extractProductData(item);
            return {
              product_id: productId,
              name: productName,
              quantity: item.quantity,
              price: item.price,
            };
          }),
          delivery_address: deliveryAddress,
        },
      };

      console.log("Initializing Paystack payment...", initializeData);

      const initResponse = await paymentAPI.initialize(initializeData);

      if (!initResponse.data.success) {
        throw new Error("Failed to initialize payment");
      }

      const { authorization_url, reference } = initResponse.data.data;
      setPaystackReference(reference);

      console.log("Payment initialized:", { authorization_url, reference });

      // Redirect to Paystack payment page
      window.location.href = authorization_url;
    } catch (error) {
      console.error("Paystack payment error:", error);
      setPaymentStatus("failed");
      setIsProcessing(false);
      alert(error.message || "Failed to initialize payment. Please try again.");
    }
  };

  const handleMobileBankingConfirm = async () => {
    try {
      setIsProcessing(true);
      setPaymentStatus("processing");

      // Generate reference for mobile banking
      const reference = `BANK_${Date.now()}`;

      console.log("Creating order with mobile banking reference:", reference);
      console.log("Current cart state:", cart);

      // Create order with mobile banking reference
      await handleAddToOrders(reference);

      // Clear cart after successful order creation
      dispatch(clearCart());

      // Update UI
      setPaymentStatus("success");

      // Clear localStorage after successful payment
      localStorage.removeItem("selectedPaymentMethod");
      localStorage.removeItem("orderTotal");
      localStorage.removeItem("deliveryAddress");
    } catch (error) {
      console.error("Payment confirmation failed:", error);
      setPaymentStatus("failed");
      alert("Failed to process your order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle Paystack callback (when user returns from Paystack)
  useEffect(() => {
    const verifyPaystackPayment = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const reference = urlParams.get("reference");

      if (reference && paymentMethod === "paystack") {
        try {
          setIsProcessing(true);
          setPaymentStatus("processing");

          console.log("Verifying payment reference:", reference);

          // Verify payment with backend
          const verifyResponse = await paymentAPI.verify(reference);

          if (
            verifyResponse.data.success &&
            verifyResponse.data.data.status === "success"
          ) {
            console.log("Payment verified successfully");

            // Create order after successful payment
            await handleAddToOrders(reference);

            // Clear cart
            dispatch(clearCart());

            // Update UI
            setPaymentStatus("success");

            // Clear localStorage
            localStorage.removeItem("selectedPaymentMethod");
            localStorage.removeItem("orderTotal");
            localStorage.removeItem("deliveryAddress");
          } else {
            throw new Error("Payment verification failed");
          }
        } catch (error) {
          console.error("Payment verification error:", error);
          setPaymentStatus("failed");
          alert("Payment verification failed. Please contact support.");
        } finally {
          setIsProcessing(false);
        }
      }
    };

    verifyPaystackPayment();
  }, []);

  // Success screen
  if (paymentStatus === "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-yellow-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Received
          </h1>

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

  // Failed screen
  if (paymentStatus === "failed") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Failed
          </h1>

          <p className="text-gray-600 mb-8">
            Unfortunately, your payment could not be processed. Please try
            again.
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => window.history.back()}
              className="flex-1 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="flex-1 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              Home
            </button>
          </div>
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
              // Paystack Payment
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
                      Secure payment with Paystack
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Payment Details:
                    </h3>
                    <div className="space-y-2 text-sm text-blue-800">
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-bold">
                          ₦{orderTotal.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment Gateway:</span>
                        <span className="font-medium">Paystack</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600">
                      You will be redirected to Paystack to complete your
                      payment securely. Paystack accepts cards, bank transfers,
                      and USSD payments.
                    </p>
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
                      `Pay ₦${orderTotal.toLocaleString()} with Paystack`
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
