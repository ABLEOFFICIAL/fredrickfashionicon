// const nodemailer = require("nodemailer");

// const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   const message = {
//     from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_USER}>`,
//     to: options.email,
//     subject: options.subject,
//     html: options.html,
//   };

//   await transporter.sendMail(message);
// };

// module.exports = sendEmail;

// server/utils/sendEmail.js
const sendEmail = require("./sendEmail"); // Use your existing sendEmail utility

// Format currency
const formatCurrency = (amount) => {
  return `₦${parseFloat(amount).toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

// Send order notification email to admin
const sendOrderNotificationToAdmin = async (order, user) => {
  try {
    // Format order items for email
    const itemsHtml = order.items
      .map(
        (item) => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">
            ${item.name || "Product"}
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">
            ${item.quantity}
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">
            ${formatCurrency(item.price)}
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">
            ${formatCurrency(item.price * item.quantity)}
          </td>
        </tr>
      `
      )
      .join("");

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Order Notification</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🎉 New Order Received!</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0;">Order Details</h2>
              
              <table style="width: 100%; margin-bottom: 15px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Order Number:</td>
                  <td style="padding: 8px 0; text-align: right;">${
                    order.orderNumber
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Date:</td>
                  <td style="padding: 8px 0; text-align: right;">${new Date(
                    order.createdAt
                  ).toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Payment Reference:</td>
                  <td style="padding: 8px 0; text-align: right; font-family: monospace; font-size: 12px;">${
                    order.paymentReference
                  }</td>
                </tr>
              </table>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0;">Customer Information</h2>
              
              <table style="width: 100%;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Name:</td>
                  <td style="padding: 8px 0; text-align: right;">${
                    user?.name || "N/A"
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
                  <td style="padding: 8px 0; text-align: right;">${
                    user?.email || "N/A"
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Phone:</td>
                  <td style="padding: 8px 0; text-align: right;">${
                    user?.phone || "N/A"
                  }</td>
                </tr>
              </table>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0;">Shipping Address</h2>
              <p style="margin: 0; line-height: 1.8;">
                ${order.shippingAddress?.street || "N/A"}<br>
                ${order.shippingAddress?.city || ""}, ${
      order.shippingAddress?.state || ""
    }<br>
                ${order.shippingAddress?.country || "Nigeria"} ${
      order.shippingAddress?.zipCode || ""
    }
              </p>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0;">Order Items</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="background: #f5f5f5;">
                    <th style="padding: 12px 10px; text-align: left; border-bottom: 2px solid #ddd;">Product</th>
                    <th style="padding: 12px 10px; text-align: center; border-bottom: 2px solid #ddd;">Qty</th>
                    <th style="padding: 12px 10px; text-align: right; border-bottom: 2px solid #ddd;">Price</th>
                    <th style="padding: 12px 10px; text-align: right; border-bottom: 2px solid #ddd;">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" style="padding: 15px 10px; text-align: right; font-weight: bold; font-size: 16px; border-top: 2px solid #ddd;">Total:</td>
                    <td style="padding: 15px 10px; text-align: right; font-weight: bold; font-size: 18px; color: #667eea; border-top: 2px solid #ddd;">
                      ${formatCurrency(order.totalAmount)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50;">
              <p style="margin: 0; color: #2e7d32;">
                <strong>Action Required:</strong> Please process this order and update the order status in the admin dashboard.
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="${
                process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
              }/admin/orders" 
                 style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                View Order in Dashboard
              </a>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 5px 0;">This is an automated notification from ${
              process.env.EMAIL_FROM_NAME || "FFI"
            }.</p>
            <p style="margin: 5px 0;">&copy; ${new Date().getFullYear()} ${
      process.env.EMAIL_FROM_NAME || "FFI"
    }. All rights reserved.</p>
          </div>
        </body>
      </html>
    `;

    // Use your existing sendEmail function
    await sendEmail({
      email: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `🛍️ New Order #${order.orderNumber} - ${formatCurrency(
        order.totalAmount
      )}`,
      html: emailHtml,
    });

    console.log("✅ Admin notification email sent successfully");
    return { success: true };
  } catch (error) {
    console.error("❌ Error sending admin notification email:", error);
    throw error;
  }
};

// Send order confirmation email to customer
const sendOrderConfirmationToCustomer = async (order, user) => {
  try {
    const itemsHtml = order.items
      .map(
        (item) => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${
            item.name
          }</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${
            item.quantity
          }</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${formatCurrency(
            item.price * item.quantity
          )}</td>
        </tr>
      `
      )
      .join("");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Order Confirmation</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">✅ Order Confirmed!</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; margin-bottom: 20px;">Hi ${
              user?.name || "Customer"
            },</p>
            <p style="font-size: 16px; margin-bottom: 20px;">Thank you for your order! We've received it and will process it shortly.</p>

            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #667eea; margin-top: 0;">Order Details</h2>
              <p><strong>Order Number:</strong> ${order.orderNumber}</p>
              <p><strong>Order Date:</strong> ${new Date(
                order.createdAt
              ).toLocaleDateString()}</p>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #667eea; margin-top: 0;">Items Ordered</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="background: #f5f5f5;">
                    <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd;">Product</th>
                    <th style="padding: 10px; text-align: center; border-bottom: 2px solid #ddd;">Qty</th>
                    <th style="padding: 10px; text-align: right; border-bottom: 2px solid #ddd;">Price</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" style="padding: 15px 10px; text-align: right; font-weight: bold; border-top: 2px solid #ddd;">Total:</td>
                    <td style="padding: 15px 10px; text-align: right; font-weight: bold; color: #667eea; border-top: 2px solid #ddd;">
                      ${formatCurrency(order.totalAmount)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0; color: #1565c0;">
                <strong>What's Next?</strong><br>
                We'll send you another email when your order ships. You can track your order status anytime from your account.
              </p>
            </div>

            <div style="text-align: center;">
              <a href="${
                process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
              }/profile/orders" 
                 style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                View Order Status
              </a>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 5px 0;">Thank you for shopping with us!</p>
            <p style="margin: 5px 0;">&copy; ${new Date().getFullYear()} ${
      process.env.EMAIL_FROM_NAME || "FFI"
    }. All rights reserved.</p>
          </div>
        </body>
      </html>
    `;

    // Use your existing sendEmail function
    await sendEmail({
      email: user.email,
      subject: `Order Confirmation - #${order.orderNumber}`,
      html: emailHtml,
    });

    console.log("✅ Customer confirmation email sent successfully");
    return { success: true };
  } catch (error) {
    console.error("❌ Error sending customer confirmation email:", error);
    throw error;
  }
};

module.exports = {
  sendOrderNotificationToAdmin,
  sendOrderConfirmationToCustomer,
};
