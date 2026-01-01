"use client";

import { useEffect } from "react";

export default function PaystackPopup({
  email,
  amount,
  reference,
  metadata = {},
  onSuccess,
  onClose,
}) {
  useEffect(() => {
    // Load Paystack Inline JS
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: email,
      amount: amount * 100, // Convert to kobo
      currency: "NGN",
      ref: reference || `${Date.now()}`,
      metadata: {
        custom_fields: [
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: metadata.customerName || "",
          },
        ],
      },
      callback: function (response) {
        // Payment successful
        console.log("Payment successful:", response);
        if (onSuccess) onSuccess(response);
      },
      onClose: function () {
        // Payment popup closed
        console.log("Payment closed");
        if (onClose) onClose();
      },
    });

    handler.openIframe();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
    >
      Pay with Paystack
    </button>
  );
}
