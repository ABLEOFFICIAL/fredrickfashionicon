// const router = require("express").Router();
// const axios = require("axios");
// const crypto = require("crypto");
// const Payment = require("../models/Payment");
// const { protect } = require("../middleware/auth");

// // Initialize Payment
// router.post("/initialize", protect, async (req, res) => {
//   try {
//     const { amount, email, metadata } = req.body;

//     // Amount should be in kobo (1 Naira = 100 kobo)
//     const amountInKobo = Math.round(amount * 100);

//     const response = await axios.post(
//       "https://api.paystack.co/transaction/initialize",
//       {
//         email: email || req.user.email,
//         amount: amountInKobo,
//         currency: "NGN", // Nigerian Naira
//         callback_url: process.env.PAYSTACK_CALLBACK_URL,
//         metadata: {
//           userId: req.user._id.toString(),
//           userName: req.user.name,
//           ...metadata,
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // Save payment record
//     await Payment.create({
//       user: req.user._id,
//       reference: response.data.data.reference,
//       amount: amount,
//       currency: "NGN",
//       status: "pending",
//       metadata,
//     });

//     res.json({
//       success: true,
//       data: response.data.data,
//     });
//   } catch (error) {
//     console.error(
//       "Paystack Initialize Error:",
//       error.response?.data || error.message
//     );
//     res.status(500).json({
//       success: false,
//       message: error.response?.data?.message || "Payment initialization failed",
//     });
//   }
// });

// // Verify Payment
// router.get("/verify/:reference", protect, async (req, res) => {
//   try {
//     const { reference } = req.params;

//     const response = await axios.get(
//       `https://api.paystack.co/transaction/verify/${reference}`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//         },
//       }
//     );

//     const paymentData = response.data.data;

//     if (paymentData.status === "success") {
//       // Update payment record
//       await Payment.findOneAndUpdate(
//         { reference },
//         {
//           status: "success",
//           channel: paymentData.channel,
//           paidAt: new Date(paymentData.paid_at),
//         }
//       );

//       // Get cart and create order
//       const cart = await Cart.findOne({ user: req.user._id }).populate(
//         "items.product"
//       );

//       if (cart && cart.items.length > 0) {
//         // Get shipping address (default or from metadata)
//         const user = await User.findById(req.user._id);
//         const defaultAddress = user.addresses.find((addr) => addr.isDefault);

//         const orderNumber = `ORD-${Date.now()}-${Math.random()
//           .toString(36)
//           .substr(2, 9)
//           .toUpperCase()}`;

//         const order = await Order.create({
//           user: req.user._id,
//           orderNumber,
//           items: cart.items.map((item) => ({
//             product: item.product._id,
//             name: item.product.name,
//             price: item.price,
//             quantity: item.quantity,
//             image: item.product.images?.[0],
//           })),
//           totalAmount: cart.totalAmount,
//           shippingAddress: defaultAddress,
//           paymentReference: reference,
//           paymentStatus: "paid",
//           orderStatus: "processing",
//         });

//         // Clear cart
//         cart.items = [];
//         cart.totalAmount = 0;
//         await cart.save();

//         // Create notification
//         await createNotification({
//           user: req.user._id,
//           type: "order",
//           title: "Order Placed Successfully",
//           message: `Your order ${orderNumber} has been placed and is being processed`,
//           link: `/orders/${order._id}`,
//         });

//         return res.json({
//           success: true,
//           message: "Payment verified and order created",
//           data: {
//             reference: paymentData.reference,
//             amount: paymentData.amount / 100,
//             currency: paymentData.currency,
//             paidAt: paymentData.paid_at,
//             channel: paymentData.channel,
//             order: {
//               id: order._id,
//               orderNumber: order.orderNumber,
//             },
//           },
//         });
//       }

//       res.json({
//         success: true,
//         message: "Payment verified successfully",
//         data: {
//           reference: paymentData.reference,
//           amount: paymentData.amount / 100,
//           currency: paymentData.currency,
//           paidAt: paymentData.paid_at,
//           channel: paymentData.channel,
//         },
//       });
//     } else {
//       await Payment.findOneAndUpdate({ reference }, { status: "failed" });

//       res.status(400).json({
//         success: false,
//         message: "Payment verification failed",
//       });
//     }
//   } catch (error) {
//     console.error("Verification Error:", error.response?.data || error.message);
//     res.status(500).json({
//       success: false,
//       message: error.response?.data?.message || "Payment verification failed",
//     });
//   }
// });

// // Paystack Webhook
// router.post("/webhook", async (req, res) => {
//   try {
//     // Validate webhook signature
//     const hash = crypto
//       .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
//       .update(JSON.stringify(req.body))
//       .digest("hex");

//     if (hash !== req.headers["x-paystack-signature"]) {
//       return res.status(400).send("Invalid signature");
//     }

//     const event = req.body;

//     // Handle different event types
//     switch (event.event) {
//       case "charge.success":
//         await Payment.findOneAndUpdate(
//           { reference: event.data.reference },
//           {
//             status: "success",
//             channel: event.data.channel,
//             paidAt: new Date(event.data.paid_at),
//           }
//         );
//         console.log("Payment successful:", event.data.reference);
//         // Add your business logic here (update order, send email, etc.)
//         break;

//       case "charge.failed":
//         await Payment.findOneAndUpdate(
//           { reference: event.data.reference },
//           { status: "failed" }
//         );
//         console.log("Payment failed:", event.data.reference);
//         break;

//       default:
//         console.log("Unhandled event:", event.event);
//     }

//     res.status(200).send("Webhook received");
//   } catch (error) {
//     console.error("Webhook Error:", error);
//     res.status(500).send("Webhook error");
//   }
// });

// // Get Payment History
// router.get("/history", protect, async (req, res) => {
//   try {
//     const { page = 1, limit = 10 } = req.query;

//     const payments = await Payment.find({ user: req.user._id })
//       .sort({ createdAt: -1 })
//       .limit(limit * 1)
//       .skip((page - 1) * limit);

//     const count = await Payment.countDocuments({ user: req.user._id });

//     res.json({
//       success: true,
//       payments,
//       totalPages: Math.ceil(count / limit),
//       currentPage: page,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch payment history",
//     });
//   }
// });

// // Get Single Payment
// router.get("/:reference", protect, async (req, res) => {
//   try {
//     const payment = await Payment.findOne({
//       reference: req.params.reference,
//       user: req.user._id,
//     });

//     if (!payment) {
//       return res.status(404).json({
//         success: false,
//         message: "Payment not found",
//       });
//     }

//     res.json({ success: true, payment });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch payment",
//     });
//   }
// });

// module.exports = router;

// server/routes/paymentRoutes.js
// server/routes/paymentRoutes.js
const router = require("express").Router();
const axios = require("axios");
const crypto = require("crypto");
const Payment = require("../models/Payment");
const Cart = require("../models/Cart");
const User = require("../models/User");
const Order = require("../models/Order");
const { protect } = require("../middleware/auth");
const { createNotification } = require("../utils/notifications");

// Initialize Payment
router.post("/initialize", protect, async (req, res, next) => {
  try {
    const { amount, email, metadata } = req.body;

    const amountInKobo = Math.round(amount * 100);

    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email: email || req.user.email,
        amount: amountInKobo,
        currency: "NGN",
        callback_url:
          process.env.PAYSTACK_CALLBACK_URL ||
          `http://localhost:3000/payment/verify`,
        metadata: {
          userId: req.user._id.toString(),
          userName: req.user.name,
          ...metadata,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    await Payment.create({
      user: req.user._id,
      reference: response.data.data.reference,
      amount: amount,
      currency: "NGN",
      status: "pending",
      metadata,
    });

    res.json({
      success: true,
      data: response.data.data,
    });
  } catch (error) {
    console.error(
      "Paystack Initialize Error:",
      error.response?.data || error.message
    );
    next(error);
  }
});

// Verify Payment
router.get("/verify/:reference", protect, async (req, res, next) => {
  try {
    const { reference } = req.params;

    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const paymentData = response.data.data;

    if (paymentData.status === "success") {
      await Payment.findOneAndUpdate(
        { reference },
        {
          status: "success",
          channel: paymentData.channel,
          paidAt: new Date(paymentData.paid_at),
        }
      );

      // ✅ FIXED: Get cart with proper population
      const cart = await Cart.findOne({ user: req.user._id }).populate(
        "items.product"
      );

      if (cart && cart.items.length > 0) {
        const user = await User.findById(req.user._id);
        const defaultAddress =
          user.addresses?.find((addr) => addr.isDefault) || user.addresses?.[0];

        const orderNumber = `ORD-${Date.now()}-${Math.random()
          .toString(36)
          .substr(2, 9)
          .toUpperCase()}`;

        // ✅ FIXED: Include selectedSize in order items
        const order = await Order.create({
          user: req.user._id,
          orderNumber,
          items: cart.items.map((item) => ({
            product: item.product._id,
            name: item.product.name,
            price: item.price,
            quantity: item.quantity,
            images: item.product.images || [],
            selectedSize: item.selectedSize || "N/A", // ✅ ADDED: Include selectedSize
          })),
          totalAmount: cart.totalAmount,
          shippingAddress: defaultAddress,
          paymentReference: reference,
          paymentStatus: "paid",
          orderStatus: "processing",
        });

        // Clear cart
        cart.items = [];
        cart.totalAmount = 0;
        await cart.save();

        if (typeof createNotification === "function") {
          try {
            await createNotification({
              user: req.user._id,
              type: "order",
              title: "Order Placed Successfully",
              message: `Your order ${orderNumber} has been placed and is being processed`,
              link: `/orders/${order._id}`,
            });
          } catch (notifError) {
            console.error("Notification error:", notifError);
          }
        }

        return res.json({
          success: true,
          message: "Payment verified and order created",
          data: {
            reference: paymentData.reference,
            amount: paymentData.amount / 100,
            currency: paymentData.currency,
            paidAt: paymentData.paid_at,
            channel: paymentData.channel,
            status: paymentData.status,
            order: {
              id: order._id,
              orderNumber: order.orderNumber,
            },
          },
        });
      }

      res.json({
        success: true,
        message: "Payment verified successfully",
        data: {
          reference: paymentData.reference,
          amount: paymentData.amount / 100,
          currency: paymentData.currency,
          paidAt: paymentData.paid_at,
          channel: paymentData.channel,
          status: paymentData.status,
        },
      });
    } else {
      await Payment.findOneAndUpdate({ reference }, { status: "failed" });

      res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }
  } catch (error) {
    console.error("Verification Error:", error.response?.data || error.message);
    next(error);
  }
});

// Paystack Webhook
router.post("/webhook", async (req, res, next) => {
  try {
    const hash = crypto
      .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
      .update(JSON.stringify(req.body))
      .digest("hex");

    if (hash !== req.headers["x-paystack-signature"]) {
      return res.status(400).send("Invalid signature");
    }

    const event = req.body;

    switch (event.event) {
      case "charge.success":
        await Payment.findOneAndUpdate(
          { reference: event.data.reference },
          {
            status: "success",
            channel: event.data.channel,
            paidAt: new Date(event.data.paid_at),
          }
        );
        console.log("Payment successful:", event.data.reference);
        break;

      case "charge.failed":
        await Payment.findOneAndUpdate(
          { reference: event.data.reference },
          { status: "failed" }
        );
        console.log("Payment failed:", event.data.reference);
        break;

      default:
        console.log("Unhandled event:", event.event);
    }

    res.status(200).send("Webhook received");
  } catch (error) {
    next(error);
  }
});

// Get Payment History
router.get("/history", protect, async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const payments = await Payment.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Payment.countDocuments({ user: req.user._id });

    res.json({
      success: true,
      payments,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    next(error);
  }
});

// Get Single Payment
router.get("/:reference", protect, async (req, res, next) => {
  try {
    const payment = await Payment.findOne({
      reference: req.params.reference,
      user: req.user._id,
    });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    res.json({ success: true, payment });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
