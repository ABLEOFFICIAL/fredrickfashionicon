"use client";

import { useState } from "react";
import { paymentAPI } from "@/lib/api";

export default function PaystackButton({ amount, metadata, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Initialize payment
      const { data } = await paymentAPI.initialize({
        amount, // Amount in Naira
        metadata,
      });

      // Redirect to Paystack payment page
      window.location.href = data.data.authorization_url;
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Failed to initialize payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors"
    >
      {loading ? "Processing..." : `Pay ₦${amount.toLocaleString()}`}
    </button>
  );
}
