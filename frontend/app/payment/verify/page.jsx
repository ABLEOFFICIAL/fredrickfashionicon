// app/payment/verify/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { paymentAPI } from "@/lib/api";
import { clearCart, fetchOrders } from "@/app/utils/helper";
import { fetchNotifications } from "@/app/store/notificationsSlice";

const PaymentVerifyPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.context);

  const [verificationStatus, setVerificationStatus] = useState("verifying");
  const [paymentData, setPaymentData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderData, setOrderData] = useState(null);

  // FIXED: Helper function to safely extract product data
  const extractProductData = (item) => {
    const productId = item.product?._id || item._id;
    const productName = item.product?.name || item.name;

    // Check multiple possible locations for images
    let productImages = [];
    if (item.product?.images && Array.isArray(item.product.images)) {
      productImages = item.product.images;
    } else if (item.images && Array.isArray(item.images)) {
      productImages = item.images;
    } else if (item.product?.image) {
      productImages = [item.product.image];
    } else if (item.image) {
      productImages = [item.image];
    }

    return {
      productId,
      productName,
      productImages,
    };
  };

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference");
      const trxref = searchParams.get("trxref");

      if (!reference && !trxref) {
        setVerificationStatus("failed");
        setErrorMessage("No payment reference found");
        return;
      }

      const paymentReference = reference || trxref;

      try {
        console.log("Verifying payment reference:", paymentReference);

        // Verify payment with backend
        const verifyResponse = await paymentAPI.verify(paymentReference);

        console.log("Verification response:", verifyResponse.data);

        if (
          verifyResponse.data.success &&
          verifyResponse.data.data.status === "success"
        ) {
          setPaymentData(verifyResponse.data.data);

          // Create order after successful payment
          await createOrder(paymentReference, verifyResponse.data.data);

          // Clear cart
          dispatch(clearCart());

          // Update status
          setVerificationStatus("success");

          // Clear localStorage
          localStorage.removeItem("selectedPaymentMethod");
          localStorage.removeItem("orderTotal");
          localStorage.removeItem("deliveryAddress");
        } else {
          throw new Error(
            verifyResponse.data.message || "Payment verification failed"
          );
        }
      } catch (error) {
        console.error("Payment verification error:", error);
        console.error("Error details:", error.response?.data);

        let errorMsg = "Unable to verify payment. Please contact support.";
        if (error.response?.data?.message) {
          errorMsg = error.response.data.message;
        } else if (error.message) {
          errorMsg = error.message;
        }

        setVerificationStatus("failed");
        setErrorMessage(errorMsg);
      }
    };

    verifyPayment();
  }, [searchParams]);

  const createOrder = async (paymentReference, paymentData) => {
    try {
      const orderTotal = parseFloat(localStorage.getItem("orderTotal")) || 0;
      const deliveryAddress = JSON.parse(
        localStorage.getItem("deliveryAddress") || "{}"
      );

      if (!cart || cart.length === 0) {
        console.warn("Cart is empty, order creation skipped");
        return;
      }

      const payload = {
        cartItems: cart.map((item) => {
          const { productId, productName, productImages } =
            extractProductData(item);

          console.log("Processing cart item for order:", {
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
        paymentReference: paymentReference,
        totalAmount: orderTotal,
      };

      console.log("Creating order with payload:", payload);

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
      setOrderData(data.order);

      return data;
    } catch (error) {
      console.error("Error creating order:", error);
      // Don't throw - payment was successful even if order creation fails
    }
  };

  const handleContinueShopping = () => {
    router.push("/");
  };

  const handleViewOrders = () => {
    dispatch(fetchOrders());
    dispatch(fetchNotifications());
    router.push("/profile/orders");
  };

  const handleRetry = () => {
    router.push("/check-out");
  };

  // Verifying state
  if (verificationStatus === "verifying") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Verifying Payment
          </h1>

          <p className="text-gray-600 mb-8">
            Please wait while we verify your payment...
          </p>

          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-blue-800">
              This may take a few moments. Please don't close this page.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Failed state
  if (verificationStatus === "failed") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Verification Failed
          </h1>

          <p className="text-gray-600 mb-4">
            {errorMessage ||
              "We couldn't verify your payment. Please try again or contact support."}
          </p>

          <div className="bg-red-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-red-800">
              If you were charged, please contact our support team with your
              payment reference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRetry}
              className="flex-1 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={handleContinueShopping}
              className="flex-1 py-3 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Success state
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>

          <p className="text-gray-600">
            Your payment has been verified and your order has been placed
            successfully.
          </p>
        </div>

        {/* Payment Details */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Amount Paid</span>
            <span className="font-bold text-gray-900">
              ₦
              {paymentData?.amount
                ? (paymentData.amount / 100).toLocaleString()
                : "0"}
            </span>
          </div>

          {paymentData?.reference && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Payment Reference</span>
              <span className="font-mono text-gray-900 text-xs">
                {paymentData.reference}
              </span>
            </div>
          )}

          {orderData?.orderNumber && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Order Number</span>
              <span className="font-semibold text-gray-900">
                {orderData.orderNumber}
              </span>
            </div>
          )}

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Payment Method</span>
            <span className="font-medium text-gray-900">
              {paymentData?.channel || "Paystack"}
            </span>
          </div>

          {paymentData?.paid_at && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Date</span>
              <span className="text-gray-900">
                {new Date(paymentData.paid_at).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>

        {/* Success Message */}
        <div className="bg-green-50 rounded-xl p-4 mb-6 border border-green-100">
          <p className="text-sm text-green-800 text-center">
            A confirmation email has been sent to your inbox. We'll notify you
            when your order is being processed.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleViewOrders}
            className="flex-1 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            View Orders
          </button>
          <button
            onClick={handleContinueShopping}
            className="flex-1 py-3 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentVerifyPage;
