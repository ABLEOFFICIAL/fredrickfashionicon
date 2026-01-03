// // frontend/app/profile/payment/page.jsx
// "use client";
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   CreditCard,
//   Plus,
//   Trash2,
//   Star,
//   Calendar,
//   DollarSign,
//   ArrowUpRight,
//   ArrowDownRight,
//   CheckCircle,
//   XCircle,
//   Clock,
//   Download,
//   Search,
//   Wallet,
//   Edit2,
//   AlertCircle,
//   X,
// } from "lucide-react";
// import { cardAPI } from "@/lib/api";
// import { deleteCard, fetchCards, setDefaultCard } from "@/app/utils/helper";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// const Receipt = React.forwardRef(({ txn }, ref) => {
//   if (!txn) return null;

//   return (
//     <div
//       ref={ref}
//       style={{
//         width: "400px",
//         padding: "20px",
//         background: "#ffffff",
//         color: "#000000",
//         fontSize: "14px",
//       }}
//     >
//       <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>Payment Receipt</h2>

//       <p>
//         <strong>Order Number:</strong> {txn.orderNumber}
//       </p>
//       <p>
//         <strong>Transaction ID:</strong> {txn._id}
//       </p>
//       <p>
//         <strong>Status:</strong> {txn.orderStatus}
//       </p>
//       <p>
//         <strong>Payment Status:</strong> {txn.paymentStatus}
//       </p>
//       <p>
//         <strong>Date:</strong> {new Date(txn.createdAt).toLocaleString()}
//       </p>

//       <hr />

//       <p style={{ fontSize: "16px", fontWeight: "bold" }}>
//         Total: ₦{txn.totalAmount.toLocaleString()}
//       </p>

//       <p style={{ marginTop: "20px", fontSize: "12px" }}>
//         Thank you for shopping with us ❤️
//       </p>
//     </div>
//   );
// });

// const PaymentMethodsPage = () => {
//   const { user, cards } = useSelector((state) => state.auth);
//   const [activeTab, setActiveTab] = useState("methods");
//   const [showAddCardModal, setShowAddCardModal] = useState(false);
//   const [showEditCardModal, setShowEditCardModal] = useState(false);
//   const [editingCard, setEditingCard] = useState(null);
//   const [filter, setFilter] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const receiptRef = React.useRef(null);
//   const [selectedTransaction, setSelectedTransaction] = useState(null);

//   const dispatch = useDispatch();

//   // Local state for cards (synced with Redux)
//   const [savedCards, setSavedCards] = useState([]);
//   // const [transactions, setTransactions] = useState([]);
//   const { orders } = useSelector((state) => state.context);

//   // Form states
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardName, setCardName] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvv, setCvv] = useState("");

//   // Load cards and transactions on mount
//   useEffect(() => {
//     loadInitialData();
//   }, []);

//   // Sync with Redux cards
//   useEffect(() => {
//     if (cards && cards.length > 0) {
//       setSavedCards(cards);
//     }
//   }, [cards]);

//   const STATUS_MAP = {
//     processing: "pending",
//     delivered: "success",
//     cancelled: "failed",
//   };

//   const mapOrderStatusToTxnStatus = (status) => STATUS_MAP[status] || "pending";

//   const transactionsHistory = (orders || []).map((order) => ({
//     id: order._id,
//     orderNumber: order.orderNumber,
//     amount: order.totalAmount,
//     date: order.createdAt,
//     method: "Card",
//     type: order.orderStatus === "cancelled" ? "refund" : "payment",
//     description:
//       order.orderStatus === "cancelled" ? "Order cancelled" : "Order payment",
//     status: mapOrderStatusToTxnStatus(order.orderStatus),
//   }));

//   // Replace your downloadReceipt function with this:
//   const downloadReceipt = async () => {
//     if (!selectedTransaction) {
//       alert("No transaction selected");
//       return;
//     }

//     try {
//       // Make sure the receipt element is visible for html2canvas
//       const receiptElement = receiptRef.current;

//       if (!receiptElement) {
//         throw new Error("Receipt element not found");
//       }

//       // Temporarily make it visible but off-screen
//       receiptElement.style.position = "fixed";
//       receiptElement.style.left = "-9999px";
//       receiptElement.style.display = "block";

//       // Wait a bit for React to render
//       await new Promise((resolve) => setTimeout(resolve, 300));

//       // Take a snapshot of the element
//       const canvas = await html2canvas(receiptElement, {
//         scale: 2,
//         backgroundColor: "#ffffff",
//         logging: false,
//         useCORS: true,
//         allowTaint: true,
//         width: 400,
//         height: receiptElement.scrollHeight,
//       });

//       // Hide it again
//       receiptElement.style.display = "none";
//       receiptElement.style.position = "";
//       receiptElement.style.left = "";

//       // Validate canvas dimensions
//       if (!canvas || canvas.width === 0 || canvas.height === 0) {
//         throw new Error("Invalid canvas dimensions");
//       }

//       // Get the image data as JPEG
//       const imgData = canvas.toDataURL("image/jpeg", 1.0);

//       // Create a new PDF
//       const pdf = new jsPDF({
//         orientation: "portrait",
//         unit: "mm",
//         format: "a4",
//       });

//       // Get PDF page dimensions
//       const pageWidth = pdf.internal.pageSize.getWidth();
//       const pageHeight = pdf.internal.pageSize.getHeight();

//       // Calculate image dimensions with margins
//       const margin = 10;
//       const maxWidth = pageWidth - 2 * margin;
//       const maxHeight = pageHeight - 2 * margin;

//       // Calculate scaled dimensions maintaining aspect ratio
//       let imgWidth = maxWidth;
//       let imgHeight = (canvas.height * imgWidth) / canvas.width;

//       // If height exceeds page, scale down based on height
//       if (imgHeight > maxHeight) {
//         imgHeight = maxHeight;
//         imgWidth = (canvas.width * imgHeight) / canvas.height;
//       }

//       // Validate calculated dimensions
//       if (
//         isNaN(imgWidth) ||
//         isNaN(imgHeight) ||
//         imgWidth <= 0 ||
//         imgHeight <= 0
//       ) {
//         throw new Error("Invalid image dimensions calculated");
//       }

//       // Center the image on the page
//       const xOffset = (pageWidth - imgWidth) / 2;
//       const yOffset = margin;

//       // Add image to PDF
//       pdf.addImage(imgData, "JPEG", xOffset, yOffset, imgWidth, imgHeight);

//       // Save the PDF
//       const filename = `receipt_${
//         selectedTransaction.orderNumber || Date.now()
//       }.pdf`;
//       pdf.save(filename);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       alert(`Failed to download receipt: ${error.message}`);
//     }
//   };

//   const loadInitialData = async () => {
//     await loadCards();
//   };

//   const loadCards = async () => {
//     try {
//       setLoading(true);
//       await fetchCards(); // This will update Redux store
//       // The useEffect above will sync savedCards with Redux
//     } catch (err) {
//       console.error("Error fetching cards:", err);
//       setError("Failed to load cards");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const loadTransactions = async () => {
//   //   try {
//   //     setLoading(true);

//   //     // Replace with your actual API call
//   //     // const { data } = await transactionAPI.getAll();
//   //     // setTransactions(data);

//   //     // Mock data for demonstration - Replace this with real API call
//   //     const mockTransactions = [
//   //       {
//   //         id: "TXN-2025-001",
//   //         orderNumber: "ORD-1763977314604",
//   //         type: "payment",
//   //         amount: 120000,
//   //         status: "success",
//   //         method: "Paystack - Visa ****4242",
//   //         date: "2024-12-04T09:41:54.610Z",
//   //         description: "Order payment for 5 items",
//   //         items: [
//   //           "Product A",
//   //           "Product B",
//   //           "Product C",
//   //           "Product D",
//   //           "Product E",
//   //         ],
//   //       },
//   //       {
//   //         id: "TXN-2025-002",
//   //         orderNumber: "ORD-1763977314605",
//   //         type: "payment",
//   //         amount: 45000,
//   //         status: "success",
//   //         method: "Mobile Banking - GTBank",
//   //         date: "2024-12-03T14:30:00.000Z",
//   //         description: "Order payment for 2 items",
//   //         items: ["Product F", "Product G"],
//   //       },
//   //       {
//   //         id: "TXN-2025-003",
//   //         orderNumber: "ORD-1763977314606",
//   //         type: "refund",
//   //         amount: 28000,
//   //         status: "success",
//   //         method: "Paystack - Mastercard ****8888",
//   //         date: "2024-12-02T10:15:00.000Z",
//   //         description: "Refund for cancelled order",
//   //         items: ["Product H"],
//   //       },
//   //       {
//   //         id: "TXN-2025-004",
//   //         orderNumber: "ORD-1763977314607",
//   //         type: "payment",
//   //         amount: 89000,
//   //         status: "pending",
//   //         method: "Mobile Banking - GTBank",
//   //         date: "2024-12-01T16:45:00.000Z",
//   //         description: "Order payment pending verification",
//   //         items: ["Product I", "Product J", "Product K"],
//   //       },
//   //       {
//   //         id: "TXN-2025-005",
//   //         orderNumber: "ORD-1763977314608",
//   //         type: "payment",
//   //         amount: 56000,
//   //         status: "failed",
//   //         method: "Paystack - Visa ****4242",
//   //         date: "2024-11-30T11:20:00.000Z",
//   //         description: "Payment failed - Insufficient funds",
//   //         items: ["Product L"],
//   //       },
//   //     ];

//   //     setTransactions(mockTransactions);
//   //   } catch (err) {
//   //     console.error("Error fetching transactions:", err);
//   //     setError("Failed to load transactions");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   const getCardIcon = (type) => {
//     const colors = {
//       visa: "from-blue-500 to-blue-600",
//       mastercard: "from-red-500 to-orange-500",
//       amex: "from-green-500 to-green-600",
//       default: "from-gray-700 to-gray-900",
//     };
//     return colors[type?.toLowerCase()] || colors.default;
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "success":
//         return "bg-green-100 text-green-700 border-green-200";
//       case "failed":
//         return "bg-red-100 text-red-700 border-red-200";
//       case "pending":
//         return "bg-yellow-100 text-yellow-700 border-yellow-200";
//       default:
//         return "bg-gray-100 text-gray-700 border-gray-200";
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "success":
//         return <CheckCircle className="w-4 h-4" />;
//       case "failed":
//         return <XCircle className="w-4 h-4" />;
//       case "pending":
//         return <Clock className="w-4 h-4" />;
//       default:
//         return <Clock className="w-4 h-4" />;
//     }
//   };

//   const detectCardType = (number) => {
//     const sanitized = number.replace(/\s/g, "");
//     if (/^4/.test(sanitized)) return "visa";
//     if (/^5[1-5]/.test(sanitized)) return "mastercard";
//     if (/^3[47]/.test(sanitized)) return "amex";
//     return "visa"; // default
//   };

//   const formatCardNumber = (value) => {
//     const sanitized = value.replace(/\s/g, "").replace(/\D/g, "");
//     const matches = sanitized.match(/.{1,4}/g);
//     return matches ? matches.join(" ") : sanitized;
//   };

//   const formatExpiryDate = (value) => {
//     const sanitized = value.replace(/\D/g, "");
//     if (sanitized.length >= 2) {
//       return sanitized.slice(0, 2) + "/" + sanitized.slice(2, 4);
//     }
//     return sanitized;
//   };

//   const resetForm = () => {
//     setCardNumber("");
//     setCardName("");
//     setExpiryDate("");
//     setCvv("");
//     setError("");
//   };

//   const validateCard = () => {
//     const sanitizedNumber = cardNumber.replace(/\s/g, "");

//     if (!sanitizedNumber || sanitizedNumber.length < 13) {
//       setError("Invalid card number (minimum 13 digits)");
//       return false;
//     }
//     if (!cardName || cardName.trim().length < 3) {
//       setError("Cardholder name is required (minimum 3 characters)");
//       return false;
//     }
//     if (!expiryDate || !expiryDate.includes("/")) {
//       setError("Invalid expiry date (use MM/YY format)");
//       return false;
//     }

//     const [month, year] = expiryDate.split("/");
//     const currentYear = new Date().getFullYear() % 100;
//     const currentMonth = new Date().getMonth() + 1;

//     if (parseInt(month) < 1 || parseInt(month) > 12) {
//       setError("Invalid month (must be 01-12)");
//       return false;
//     }

//     if (
//       parseInt(year) < currentYear ||
//       (parseInt(year) === currentYear && parseInt(month) < currentMonth)
//     ) {
//       setError("Card has expired");
//       return false;
//     }

//     if (!cvv || cvv.length < 3) {
//       setError("Invalid CVV (minimum 3 digits)");
//       return false;
//     }

//     return true;
//   };

//   const handleAddCard = async () => {
//     setError("");
//     console.log("validateCard:", validateCard());

//     if (!validateCard()) return;

//     const [month, year] = expiryDate.split("/");
//     const cardType = detectCardType(cardNumber);
//     const sanitizedNumber = cardNumber.replace(/\s/g, "");

//     try {
//       setLoading(true);

//       const cardData = {
//         type: cardType,
//         last4: sanitizedNumber.slice(-4),
//         cardholderName: cardName.trim(),
//         expiryMonth: month,
//         expiryYear: year,
//         isDefault: savedCards.length === 0,
//       };

//       const { data } = await cardAPI.create(cardData);
//       console.log("Added card:", data);

//       // Refresh cards from server
//       dispatch(fetchCards());

//       setShowAddCardModal(false);
//       resetForm();

//       alert("Card added successfully!");
//     } catch (err) {
//       console.error("Error adding card:", err);
//       setError(
//         err.response?.data?.message || "Unable to add card. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditCard = (card) => {
//     setEditingCard(card);
//     setCardName(card.cardholderName);
//     setExpiryDate(`${card.expiryMonth}/${card.expiryYear}`);
//     setShowEditCardModal(true);
//     setError("");
//   };

//   const handleUpdateCard = async () => {
//     setError("");

//     if (!cardName || cardName.trim().length < 3) {
//       setError("Cardholder name is required (minimum 3 characters)");
//       return;
//     }
//     if (!expiryDate || !expiryDate.includes("/")) {
//       setError("Invalid expiry date (use MM/YY format)");
//       return;
//     }

//     const [month, year] = expiryDate.split("/");

//     const currentYear = new Date().getFullYear() % 100;
//     const currentMonth = new Date().getMonth() + 1;

//     if (parseInt(month) < 1 || parseInt(month) > 12) {
//       setError("Invalid month (must be 01-12)");
//       return;
//     }

//     if (
//       parseInt(year) < currentYear ||
//       (parseInt(year) === currentYear && parseInt(month) < currentMonth)
//     ) {
//       setError("Card has expired");
//       return;
//     }

//     try {
//       setLoading(true);

//       const updateData = {
//         cardholderName: cardName.trim(),
//         expiryMonth: month,
//         expiryYear: year,
//       };

//       await cardAPI.update(editingCard.id || editingCard._id, updateData);

//       // Refresh cards from server
//       await fetchCards();

//       setShowEditCardModal(false);
//       setEditingCard(null);
//       resetForm();

//       alert("Card updated successfully!");
//     } catch (err) {
//       console.error("Error updating card:", err);
//       setError(
//         err.response?.data?.message ||
//           "Unable to update card. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRemoveCard = async (cardId) => {
//     if (!confirm("Are you sure you want to remove this card?")) return;
//     dispatch(deleteCard(cardId));
//   };

//   const handleSetDefaultCard = async (cardId) => {
//     dispatch(setDefaultCard(cardId));
//   };

//   const downloadTransactionCSV = (transaction) => {
//     const csvRows = [
//       ["Transaction Details", ""],
//       ["", ""],
//       ["Transaction ID", transaction.id],
//       ["Order Number", transaction.orderNumber],
//       [
//         "Type",
//         transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1),
//       ],
//       ["Amount", `₦${transaction.amount.toLocaleString()}`],
//       [
//         "Status",
//         transaction.status.charAt(0).toUpperCase() +
//           transaction.status.slice(1),
//       ],
//       ["Payment Method", transaction.method],
//       ["Date", formatDate(transaction.date)],
//       ["Description", transaction.description],
//       ["", ""],
//     ];

//     if (transaction.items && transaction.items.length > 0) {
//       csvRows.push(["Items Purchased", ""]);
//       transaction.items.forEach((item, index) => {
//         csvRows.push([`${index + 1}. ${item}`, ""]);
//       });
//     }

//     const csvContent = csvRows
//       .map((row) => row.map((cell) => `"${cell}"`).join(","))
//       .join("\n");

//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `transaction_${transaction.id}_${
//       new Date().toISOString().split("T")[0]
//     }.csv`;
//     a.click();
//     window.URL.revokeObjectURL(url);
//   };

//   const downloadAllTransactionsCSV = () => {
//     const csvRows = [
//       [
//         "Transaction ID",
//         "Order Number",
//         "Type",
//         "Amount (₦)",
//         "Status",
//         "Payment Method",
//         "Date",
//         "Description",
//       ],
//     ];

//     filteredTransactions.forEach((txn) => {
//       csvRows.push([
//         txn.id,
//         txn.orderNumber,
//         txn.type.charAt(0).toUpperCase() + txn.type.slice(1),
//         txn.amount.toLocaleString(),
//         txn.status.charAt(0).toUpperCase() + txn.status.slice(1),
//         txn.method,
//         formatDate(txn.date),
//         txn.description,
//       ]);
//     });

//     const csvContent = csvRows
//       .map((row) => row.map((cell) => `"${cell}"`).join(","))
//       .join("\n");

//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `all_transactions_${
//       new Date().toISOString().split("T")[0]
//     }.csv`;
//     a.click();
//     window.URL.revokeObjectURL(url);
//   };

//   const filteredTransactions = transactionsHistory.filter((txn) => {
//     const matchesFilter = filter === "all" || txn.status === filter;
//     const matchesSearch =
//       txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       txn.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       txn.description.toLowerCase().includes(searchQuery.toLowerCase());

//     return matchesFilter && matchesSearch;
//   });

//   const totalSpent = orders
//     .filter(
//       (txn) =>
//         txn.paymentStatus === "paid" &&
//         (txn.orderStatus === "processing" || txn.orderStatus === "delivered")
//     )
//     .reduce((sum, txn) => sum + txn.totalAmount, 0);

//   const totalRefunded = orders
//     .filter(
//       (txn) => txn.orderStatus === "cancelled" && txn.paymentStatus === "paid"
//     )
//     .reduce((sum, txn) => sum + txn.totalAmount, 0);

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Payment & Transactions
//           </h1>
//           <p className="text-gray-600">
//             Manage your payment methods and view transaction history
//           </p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
//           <div className="flex">
//             {[
//               { key: "methods", label: "Payment Methods", icon: CreditCard },
//               {
//                 key: "transactions",
//                 label: "Transaction History",
//                 icon: DollarSign,
//               },
//             ].map((tab) => {
//               const Icon = tab.icon;
//               return (
//                 <button
//                   key={tab.key}
//                   onClick={() => setActiveTab(tab.key)}
//                   className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-medium transition-colors ${
//                     activeTab === tab.key
//                       ? "bg-[#4a4741] text-white"
//                       : "text-gray-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   <Icon className="w-5 h-5" />
//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Payment Methods Tab */}
//         {activeTab === "methods" && (
//           <div className="space-y-6">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
//                     <ArrowUpRight className="w-5 h-5 text-green-600" />
//                   </div>
//                   <span className="text-sm text-gray-600">Total Spent</span>
//                 </div>
//                 <p className="text-2xl font-bold text-gray-900">
//                   ₦{totalSpent.toLocaleString()}
//                 </p>
//               </div>

//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <ArrowDownRight className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <span className="text-sm text-gray-600">Total Refunded</span>
//                 </div>
//                 <p className="text-2xl font-bold text-gray-900">
//                   ₦{totalRefunded.toLocaleString()}
//                 </p>
//               </div>

//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
//                     <CreditCard className="w-5 h-5 text-purple-600" />
//                   </div>
//                   <span className="text-sm text-gray-600">Saved Cards</span>
//                 </div>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {savedCards.length}
//                 </p>
//               </div>
//             </div>

//             {/* Saved Cards Section */}
//             <div>
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-semibold text-gray-900">
//                   Saved Payment Methods
//                 </h2>
//                 <button
//                   onClick={() => {
//                     resetForm();
//                     setShowAddCardModal(true);
//                   }}
//                   className="flex items-center gap-2 px-4 py-2 bg-[#4a4741] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
//                   disabled={loading}
//                 >
//                   <Plus className="w-5 h-5" />
//                   Add Card
//                 </button>
//               </div>

//               {savedCards.length > 0 ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {savedCards.map((card) => (
//                     <div
//                       key={card.id || card._id}
//                       className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
//                     >
//                       <div
//                         className={`h-2 bg-gradient-to-r ${getCardIcon(
//                           card.type
//                         )}`}
//                       ></div>
//                       <div className="p-6">
//                         <div className="flex items-start justify-between mb-4">
//                           <div className="flex items-center gap-3">
//                             <div
//                               className={`w-12 h-12 bg-gradient-to-br ${getCardIcon(
//                                 card.type
//                               )} rounded-lg flex items-center justify-center`}
//                             >
//                               <CreditCard className="w-6 h-6 text-white" />
//                             </div>
//                             <div>
//                               <p className="font-semibold text-gray-900 capitalize">
//                                 {card.type}
//                               </p>
//                               <p className="text-sm text-gray-600">
//                                 •••• {card.last4}
//                               </p>
//                             </div>
//                           </div>
//                           {card.isDefault && (
//                             <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md flex items-center gap-1">
//                               <Star className="w-3 h-3 fill-current" />
//                               Default
//                             </span>
//                           )}
//                         </div>

//                         <div className="mb-4 text-sm text-gray-600">
//                           <p className="mb-1">
//                             <span className="font-medium">Cardholder:</span>{" "}
//                             {card.cardholderName}
//                           </p>
//                           <p>
//                             <span className="font-medium">Expires:</span>{" "}
//                             {card.expiryMonth}/{card.expiryYear}
//                           </p>
//                         </div>

//                         <div className="flex gap-2">
//                           {!card.isDefault && (
//                             <button
//                               onClick={() =>
//                                 handleSetDefaultCard(card.id || card._id)
//                               }
//                               disabled={loading}
//                               className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm disabled:opacity-50"
//                             >
//                               Set Default
//                             </button>
//                           )}
//                           <button
//                             onClick={() => handleEditCard(card)}
//                             disabled={loading}
//                             className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50"
//                             title="Edit card"
//                           >
//                             <Edit2 className="w-4 h-4" />
//                           </button>
//                           <button
//                             onClick={() =>
//                               handleRemoveCard(card.id || card._id)
//                             }
//                             disabled={loading}
//                             className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
//                             title="Remove card"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="w-full flex flex-col items-center justify-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
//                   <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                     <CreditCard className="w-12 h-12 text-gray-400" />
//                   </div>

//                   <h2 className="text-xl font-semibold mt-2 text-gray-800">
//                     No Card Added Yet
//                   </h2>

//                   <p className="text-gray-500 text-center mt-2 max-w-sm">
//                     You haven't added any payment card yet. Add a new card to
//                     pay easily next time.
//                   </p>

//                   <button
//                     onClick={() => {
//                       resetForm();
//                       setShowAddCardModal(true);
//                     }}
//                     className="mt-6 bg-[#4a4741] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-200 flex items-center gap-2"
//                   >
//                     <Plus className="w-5 h-5" />
//                     Add New Card
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Transactions Tab */}
//         {activeTab === "transactions" && (
//           <div className="space-y-6">
//             {/* Search and Filter */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Search transactions..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
//                   />
//                 </div>
//                 <div className="flex gap-2 flex-wrap">
//                   {["all", "success", "pending", "failed"].map((status) => (
//                     <button
//                       key={status}
//                       onClick={() => setFilter(status)}
//                       className={`px-4 py-3 rounded-xl font-medium transition-colors capitalize ${
//                         filter === status
//                           ? "bg-[#4a4741] text-white"
//                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                   {filteredTransactions.length > 0 && (
//                     <button
//                       onClick={downloadAllTransactionsCSV}
//                       className="px-4 py-3 rounded-xl font-medium bg-green-100 text-green-700 hover:bg-green-200 transition-colors flex items-center gap-2"
//                     >
//                       <Download className="w-4 h-4" />
//                       Export All
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Transactions List */}
//             {filteredTransactions.length === 0 ? (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
//                 <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <DollarSign className="w-8 h-8 text-gray-400" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   No transactions found
//                 </h3>
//                 <p className="text-gray-600">
//                   {searchQuery
//                     ? `No transactions match "${searchQuery}"`
//                     : filter === "all"
//                     ? "You haven't made any transactions yet"
//                     : `No ${filter} transactions found`}
//                 </p>
//               </div>
//             ) : (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//                 <div className="divide-y divide-gray-100">
//                   {filteredTransactions.map((txn) => (
//                     <div
//                       key={txn.id}
//                       className="p-6 hover:bg-gray-50 transition-colors"
//                     >
//                       <div className="flex items-start gap-4">
//                         <div
//                           className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
//                             txn.type === "refund"
//                               ? "bg-blue-100"
//                               : "bg-green-100"
//                           }`}
//                         >
//                           {txn.type === "refund" ? (
//                             <ArrowDownRight className="w-6 h-6 text-blue-600" />
//                           ) : (
//                             <ArrowUpRight className="w-6 h-6 text-green-600" />
//                           )}
//                         </div>

//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-start justify-between gap-4 mb-2">
//                             <div>
//                               <h4 className="font-semibold text-gray-900">
//                                 {txn.description}
//                               </h4>
//                               <p className="text-sm text-gray-600 mt-1">
//                                 {txn.id} • {txn.orderNumber}
//                               </p>
//                             </div>
//                             <div className="text-right">
//                               <p
//                                 className={`text-xl font-bold ${
//                                   txn.type === "refund"
//                                     ? "text-blue-600"
//                                     : "text-gray-900"
//                                 }`}
//                               >
//                                 {txn.type === "refund" ? "+" : "-"}₦
//                                 {txn.amount.toLocaleString()}
//                               </p>
//                             </div>
//                           </div>

//                           <div className="flex flex-wrap items-center gap-3 text-sm">
//                             <span
//                               className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-medium border ${getStatusColor(
//                                 txn.status
//                               )}`}
//                             >
//                               {getStatusIcon(txn.status)}
//                               {txn.status.charAt(0).toUpperCase() +
//                                 txn.status.slice(1)}
//                             </span>
//                             <span className="text-gray-600 flex items-center gap-1.5">
//                               <Calendar className="w-4 h-4" />
//                               {formatDate(txn.date)}
//                             </span>
//                             <span className="text-gray-600 flex items-center gap-1.5">
//                               <Wallet className="w-4 h-4" />
//                               {txn.method}
//                             </span>
//                           </div>
//                         </div>

//                         <button
//                           onClick={() => {
//                             const originalOrder = orders.find(
//                               (order) => order._id === txn.id
//                             );

//                             setSelectedTransaction(originalOrder);

//                             setTimeout(() => {
//                               downloadReceipt();
//                             }, 100);
//                           }}
//                           className="p-2 hover:bg-gray-100 rounded-lg"
//                         >
//                           <Download className="w-5 h-5 text-gray-600" />
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {showAddCardModal && (
//           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//             <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
//               <div className="p-6 border-b border-gray-100">
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   Add Payment Card
//                 </h2>
//               </div>

//               <div className="p-6 space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Card Number
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="1234 5678 9012 3456"
//                     value={cardNumber}
//                     onChange={(e) => {
//                       let value = e.target.value.replace(/\D/g, ""); // remove non-digits
//                       value = value.match(/.{1,4}/g)?.join(" ") || value; // group in 4s
//                       setCardNumber(value);
//                     }}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Cardholder Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     value={cardName}
//                     onChange={(e) => setCardName(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Expiry Date
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="MM/YY"
//                       value={expiryDate}
//                       onChange={(e) => {
//                         let value = e.target.value.replace(/\D/g, ""); // only digits

//                         if (value.length > 2) {
//                           value = value.slice(0, 2) + "/" + value.slice(2, 4); // MM/YY
//                         }

//                         setExpiryDate(value);
//                       }}
//                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       CVV
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="123"
//                       value={cvv}
//                       onChange={(e) => setCvv(e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-3">
//                 <button
//                   onClick={() => setShowAddCardModal(false)}
//                   className="flex-1 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleAddCard}
//                   className="flex-1 px-6 py-3 bg-[#4a4741] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
//                 >
//                   Add Card
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
//         <Receipt ref={receiptRef} txn={selectedTransaction} />
//       </div>
//     </div>
//   );
// };

// export default PaymentMethodsPage;
// frontend/app/profile/payment/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CreditCard,
  Plus,
  Trash2,
  Star,
  Calendar,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Search,
  Wallet,
  Edit2,
  AlertCircle,
  X,
} from "lucide-react";
import { cardAPI } from "@/lib/api";
import { deleteCard, fetchCards, setDefaultCard } from "@/app/utils/helper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Receipt = React.forwardRef(({ txn }, ref) => {
  if (!txn) return null;

  return (
    <div
      ref={ref}
      style={{
        width: "400px",
        padding: "20px",
        background: "#ffffff",
        color: "#000000",
        fontSize: "14px",
      }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>Payment Receipt</h2>

      <p>
        <strong>Order Number:</strong> {txn.orderNumber}
      </p>
      <p>
        <strong>Transaction ID:</strong> {txn._id}
      </p>
      <p>
        <strong>Status:</strong> {txn.orderStatus}
      </p>
      <p>
        <strong>Payment Status:</strong> {txn.paymentStatus}
      </p>
      <p>
        <strong>Date:</strong> {new Date(txn.createdAt).toLocaleString()}
      </p>

      <hr />

      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
        Total: ₦{txn.totalAmount.toLocaleString()}
      </p>

      <p style={{ marginTop: "20px", fontSize: "12px" }}>
        Thank you for shopping with us ❤️
      </p>
    </div>
  );
});

const PaymentMethodsPage = () => {
  const { user, cards } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("methods");
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [showEditCardModal, setShowEditCardModal] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const receiptRef = React.useRef(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const dispatch = useDispatch();

  // Local state for cards (synced with Redux)
  const [savedCards, setSavedCards] = useState([]);
  const { orders } = useSelector((state) => state.context);

  // Form states
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Load cards and transactions on mount
  useEffect(() => {
    loadInitialData();
  }, []);

  // Sync with Redux cards
  useEffect(() => {
    if (cards && cards.length > 0) {
      setSavedCards(cards);
    }
  }, [cards]);

  const STATUS_MAP = {
    processing: "pending",
    delivered: "success",
    cancelled: "failed",
  };

  const mapOrderStatusToTxnStatus = (status) => STATUS_MAP[status] || "pending";

  const transactionsHistory = (orders || []).map((order) => ({
    id: order._id,
    orderNumber: order.orderNumber,
    amount: order.totalAmount,
    date: order.createdAt,
    method: "Card",
    type: order.orderStatus === "cancelled" ? "refund" : "payment",
    description:
      order.orderStatus === "cancelled" ? "Order cancelled" : "Order payment",
    status: mapOrderStatusToTxnStatus(order.orderStatus),
  }));

  const downloadReceipt = async () => {
    if (!selectedTransaction) {
      alert("No transaction selected");
      return;
    }

    try {
      const receiptElement = receiptRef.current;

      if (!receiptElement) {
        throw new Error("Receipt element not found");
      }

      receiptElement.style.position = "fixed";
      receiptElement.style.left = "-9999px";
      receiptElement.style.display = "block";

      await new Promise((resolve) => setTimeout(resolve, 300));

      const canvas = await html2canvas(receiptElement, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true,
        allowTaint: true,
        width: 400,
        height: receiptElement.scrollHeight,
      });

      receiptElement.style.display = "none";
      receiptElement.style.position = "";
      receiptElement.style.left = "";

      if (!canvas || canvas.width === 0 || canvas.height === 0) {
        throw new Error("Invalid canvas dimensions");
      }

      const imgData = canvas.toDataURL("image/jpeg", 1.0);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const margin = 10;
      const maxWidth = pageWidth - 2 * margin;
      const maxHeight = pageHeight - 2 * margin;

      let imgWidth = maxWidth;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (imgHeight > maxHeight) {
        imgHeight = maxHeight;
        imgWidth = (canvas.width * imgHeight) / canvas.height;
      }

      if (
        isNaN(imgWidth) ||
        isNaN(imgHeight) ||
        imgWidth <= 0 ||
        imgHeight <= 0
      ) {
        throw new Error("Invalid image dimensions calculated");
      }

      const xOffset = (pageWidth - imgWidth) / 2;
      const yOffset = margin;

      pdf.addImage(imgData, "JPEG", xOffset, yOffset, imgWidth, imgHeight);

      const filename = `receipt_${
        selectedTransaction.orderNumber || Date.now()
      }.pdf`;
      pdf.save(filename);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert(`Failed to download receipt: ${error.message}`);
    }
  };

  const loadInitialData = async () => {
    await loadCards();
  };

  const loadCards = async () => {
    try {
      setLoading(true);
      await fetchCards();
    } catch (err) {
      console.error("Error fetching cards:", err);
      setError("Failed to load cards");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getCardIcon = (type) => {
    const colors = {
      visa: "from-blue-500 to-blue-600",
      mastercard: "from-red-500 to-orange-500",
      amex: "from-green-500 to-green-600",
      default: "from-gray-700 to-gray-900",
    };
    return colors[type?.toLowerCase()] || colors.default;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-700 border-green-200";
      case "failed":
        return "bg-red-100 text-red-700 border-red-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4" />;
      case "failed":
        return <XCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const detectCardType = (number) => {
    const sanitized = number.replace(/\s/g, "");
    if (/^4/.test(sanitized)) return "visa";
    if (/^5[1-5]/.test(sanitized)) return "mastercard";
    if (/^3[47]/.test(sanitized)) return "amex";
    return "visa";
  };

  const formatCardNumber = (value) => {
    const sanitized = value.replace(/\s/g, "").replace(/\D/g, "");
    const matches = sanitized.match(/.{1,4}/g);
    return matches ? matches.join(" ") : sanitized;
  };

  const formatExpiryDate = (value) => {
    const sanitized = value.replace(/\D/g, "");
    if (sanitized.length >= 2) {
      return sanitized.slice(0, 2) + "/" + sanitized.slice(2, 4);
    }
    return sanitized;
  };

  const resetForm = () => {
    setCardNumber("");
    setCardName("");
    setExpiryDate("");
    setCvv("");
    setError("");
  };

  const validateCard = () => {
    const sanitizedNumber = cardNumber.replace(/\s/g, "");

    if (!sanitizedNumber || sanitizedNumber.length < 13) {
      setError("Invalid card number (minimum 13 digits)");
      return false;
    }
    if (!cardName || cardName.trim().length < 3) {
      setError("Cardholder name is required (minimum 3 characters)");
      return false;
    }
    if (!expiryDate || !expiryDate.includes("/")) {
      setError("Invalid expiry date (use MM/YY format)");
      return false;
    }

    const [month, year] = expiryDate.split("/");
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (parseInt(month) < 1 || parseInt(month) > 12) {
      setError("Invalid month (must be 01-12)");
      return false;
    }

    if (
      parseInt(year) < currentYear ||
      (parseInt(year) === currentYear && parseInt(month) < currentMonth)
    ) {
      setError("Card has expired");
      return false;
    }

    if (!cvv || cvv.length < 3) {
      setError("Invalid CVV (minimum 3 digits)");
      return false;
    }

    return true;
  };

  const handleAddCard = async () => {
    setError("");
    console.log("validateCard:", validateCard());

    if (!validateCard()) return;

    const [month, year] = expiryDate.split("/");
    const cardType = detectCardType(cardNumber);
    const sanitizedNumber = cardNumber.replace(/\s/g, "");

    try {
      setLoading(true);

      const cardData = {
        type: cardType,
        last4: sanitizedNumber.slice(-4),
        cardholderName: cardName.trim(),
        expiryMonth: month,
        expiryYear: year,
        isDefault: savedCards.length === 0,
      };

      const { data } = await cardAPI.create(cardData);
      console.log("Added card:", data);

      dispatch(fetchCards());

      setShowAddCardModal(false);
      resetForm();

      alert("Card added successfully!");
    } catch (err) {
      console.error("Error adding card:", err);
      setError(
        err.response?.data?.message || "Unable to add card. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setCardName(card.cardholderName);
    setExpiryDate(`${card.expiryMonth}/${card.expiryYear}`);
    setShowEditCardModal(true);
    setError("");
  };

  const handleUpdateCard = async () => {
    setError("");

    if (!cardName || cardName.trim().length < 3) {
      setError("Cardholder name is required (minimum 3 characters)");
      return;
    }
    if (!expiryDate || !expiryDate.includes("/")) {
      setError("Invalid expiry date (use MM/YY format)");
      return;
    }

    const [month, year] = expiryDate.split("/");

    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (parseInt(month) < 1 || parseInt(month) > 12) {
      setError("Invalid month (must be 01-12)");
      return;
    }

    if (
      parseInt(year) < currentYear ||
      (parseInt(year) === currentYear && parseInt(month) < currentMonth)
    ) {
      setError("Card has expired");
      return;
    }

    try {
      setLoading(true);

      const updateData = {
        cardholderName: cardName.trim(),
        expiryMonth: month,
        expiryYear: year,
      };

      await cardAPI.update(editingCard.id || editingCard._id, updateData);

      await fetchCards();

      setShowEditCardModal(false);
      setEditingCard(null);
      resetForm();

      alert("Card updated successfully!");
    } catch (err) {
      console.error("Error updating card:", err);
      setError(
        err.response?.data?.message ||
          "Unable to update card. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveCard = async (cardId) => {
    if (!confirm("Are you sure you want to remove this card?")) return;
    dispatch(deleteCard(cardId));
  };

  const handleSetDefaultCard = async (cardId) => {
    dispatch(setDefaultCard(cardId));
  };

  const downloadTransactionCSV = (transaction) => {
    const csvRows = [
      ["Transaction Details", ""],
      ["", ""],
      ["Transaction ID", transaction.id],
      ["Order Number", transaction.orderNumber],
      [
        "Type",
        transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1),
      ],
      ["Amount", `₦${transaction.amount.toLocaleString()}`],
      [
        "Status",
        transaction.status.charAt(0).toUpperCase() +
          transaction.status.slice(1),
      ],
      ["Payment Method", transaction.method],
      ["Date", formatDate(transaction.date)],
      ["Description", transaction.description],
      ["", ""],
    ];

    if (transaction.items && transaction.items.length > 0) {
      csvRows.push(["Items Purchased", ""]);
      transaction.items.forEach((item, index) => {
        csvRows.push([`${index + 1}. ${item}`, ""]);
      });
    }

    const csvContent = csvRows
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transaction_${transaction.id}_${
      new Date().toISOString().split("T")[0]
    }.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const downloadAllTransactionsCSV = () => {
    const csvRows = [
      [
        "Transaction ID",
        "Order Number",
        "Type",
        "Amount (₦)",
        "Status",
        "Payment Method",
        "Date",
        "Description",
      ],
    ];

    filteredTransactions.forEach((txn) => {
      csvRows.push([
        txn.id,
        txn.orderNumber,
        txn.type.charAt(0).toUpperCase() + txn.type.slice(1),
        txn.amount.toLocaleString(),
        txn.status.charAt(0).toUpperCase() + txn.status.slice(1),
        txn.method,
        formatDate(txn.date),
        txn.description,
      ]);
    });

    const csvContent = csvRows
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `all_transactions_${
      new Date().toISOString().split("T")[0]
    }.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredTransactions = transactionsHistory.filter((txn) => {
    const matchesFilter = filter === "all" || txn.status === filter;
    const matchesSearch =
      txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const totalSpent = orders
    .filter(
      (txn) =>
        txn.paymentStatus === "paid" &&
        (txn.orderStatus === "processing" || txn.orderStatus === "delivered")
    )
    .reduce((sum, txn) => sum + txn.totalAmount, 0);

  const totalRefunded = orders
    .filter(
      (txn) => txn.orderStatus === "cancelled" && txn.paymentStatus === "paid"
    )
    .reduce((sum, txn) => sum + txn.totalAmount, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Payment & Transactions
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Manage your payment methods and view transaction history
          </p>
        </div>

        {/* Tab Navigation - Improved Mobile */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 mb-4 sm:mb-6 overflow-hidden">
          <div className="flex">
            {[
              { key: "methods", label: "Payment Methods", icon: CreditCard },
              {
                key: "transactions",
                label: "Transactions",
                icon: DollarSign,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 sm:px-6 py-3 sm:py-4 font-medium transition-colors text-sm sm:text-base ${
                    activeTab === tab.key
                      ? "bg-[#4a4741] text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">{tab.label}</span>
                  <span className="xs:hidden">
                    {tab.key === "methods" ? "Cards" : "History"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Payment Methods Tab */}
        {activeTab === "methods" && (
          <div className="space-y-4 sm:space-y-6">
            {/* Stats Cards - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    Total Spent
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  ₦{totalSpent.toLocaleString()}
                </p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    Total Refunded
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  ₦{totalRefunded.toLocaleString()}
                </p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    Saved Cards
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  {savedCards.length}
                </p>
              </div>
            </div>

            {/* Saved Cards Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Saved Cards
                </h2>
                <button
                  onClick={() => {
                    resetForm();
                    setShowAddCardModal(true);
                  }}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-[#4a4741] text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors"
                  disabled={loading}
                >
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">Add Card</span>
                  <span className="xs:hidden">Add</span>
                </button>
              </div>

              {savedCards.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  {savedCards.map((card) => (
                    <div
                      key={card.id || card._id}
                      className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div
                        className={`h-2 bg-linear-to-r ${getCardIcon(
                          card.type
                        )}`}
                      ></div>
                      <div className="p-4 sm:p-6">
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div
                              className={`w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br ${getCardIcon(
                                card.type
                              )} rounded-lg flex items-center justify-center`}
                            >
                              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 capitalize text-sm sm:text-base">
                                {card.type}
                              </p>
                              <p className="text-xs sm:text-sm text-gray-600">
                                •••• {card.last4}
                              </p>
                            </div>
                          </div>
                          {card.isDefault && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md flex items-center gap-1">
                              <Star className="w-3 h-3 fill-current" />
                              Default
                            </span>
                          )}
                        </div>

                        <div className="mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
                          <p className="mb-1 truncate">
                            <span className="font-medium">Cardholder:</span>{" "}
                            {card.cardholderName}
                          </p>
                          <p>
                            <span className="font-medium">Expires:</span>{" "}
                            {card.expiryMonth}/{card.expiryYear}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          {!card.isDefault && (
                            <button
                              onClick={() =>
                                handleSetDefaultCard(card.id || card._id)
                              }
                              disabled={loading}
                              className="flex-1 px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-xs sm:text-sm disabled:opacity-50"
                            >
                              <span className="hidden sm:inline">
                                Set Default
                              </span>
                              <span className="sm:hidden">Default</span>
                            </button>
                          )}
                          <button
                            onClick={() => handleEditCard(card)}
                            disabled={loading}
                            className="px-3 sm:px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50"
                            title="Edit card"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() =>
                              handleRemoveCard(card.id || card._id)
                            }
                            disabled={loading}
                            className="px-3 sm:px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                            title="Remove card"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full flex flex-col items-center justify-center py-12 sm:py-16 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 px-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
                  </div>

                  <h2 className="text-lg sm:text-xl font-semibold mt-2 text-gray-800 text-center">
                    No Card Added Yet
                  </h2>

                  <p className="text-sm sm:text-base text-gray-500 text-center mt-2 max-w-sm">
                    You haven't added any payment card yet. Add a new card to
                    pay easily next time.
                  </p>

                  <button
                    onClick={() => {
                      resetForm();
                      setShowAddCardModal(true);
                    }}
                    className="mt-6 bg-[#4a4741] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-gray-800 transition duration-200 flex items-center gap-2 text-sm sm:text-base"
                  >
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    Add New Card
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === "transactions" && (
          <div className="space-y-4 sm:space-y-6">
            {/* Search and Filter - Responsive */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-4">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {["all", "success", "pending", "failed"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilter(status)}
                      className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-colors capitalize text-xs sm:text-sm whitespace-nowrap ${
                        filter === status
                          ? "bg-[#4a4741] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                  {filteredTransactions.length > 0 && (
                    <button
                      onClick={downloadAllTransactionsCSV}
                      className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium bg-green-100 text-green-700 hover:bg-green-200 transition-colors flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap ml-auto"
                    >
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Export All</span>
                      <span className="sm:hidden">Export</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Transactions List - Mobile Optimized */}
            {filteredTransactions.length === 0 ? (
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  No transactions found
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {searchQuery
                    ? `No transactions match "${searchQuery}"`
                    : filter === "all"
                    ? "You haven't made any transactions yet"
                    : `No ${filter} transactions found`}
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {filteredTransactions.map((txn) => (
                    <div
                      key={txn.id}
                      className="p-4 sm:p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${
                            txn.type === "refund"
                              ? "bg-blue-100"
                              : "bg-green-100"
                          }`}
                        >
                          {txn.type === "refund" ? (
                            <ArrowDownRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 sm:gap-4 mb-2">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                                {txn.description}
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-600 mt-1 truncate">
                                {txn.id} • {txn.orderNumber}
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <p
                                className={`text-base sm:text-xl font-bold ${
                                  txn.type === "refund"
                                    ? "text-blue-600"
                                    : "text-gray-900"
                                }`}
                              >
                                {txn.type === "refund" ? "+" : "-"}₦
                                {txn.amount.toLocaleString()}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                            <span
                              className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-full font-medium border ${getStatusColor(
                                txn.status
                              )}`}
                            >
                              {getStatusIcon(txn.status)}
                              {txn.status.charAt(0).toUpperCase() +
                                txn.status.slice(1)}
                            </span>
                            <span className="text-gray-600 flex items-center gap-1 sm:gap-1.5">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="hidden sm:inline">
                                {formatDate(txn.date)}
                              </span>
                              <span className="sm:hidden">
                                {new Date(txn.date).toLocaleDateString()}
                              </span>
                            </span>
                            <span className="text-gray-600 flex items-center gap-1 sm:gap-1.5 truncate">
                              <Wallet className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                              <span className="truncate">{txn.method}</span>
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            const originalOrder = orders.find(
                              (order) => order._id === txn.id
                            );

                            setSelectedTransaction(originalOrder);

                            setTimeout(() => {
                              downloadReceipt();
                            }, 100);
                          }}
                          className="p-2 hover:bg-gray-100 rounded-lg shrink-0"
                          title="Download receipt"
                        >
                          <Download className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Add Card Modal - Responsive */}
        {showAddCardModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-lg rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Add Payment Card
                  </h2>
                  <button
                    onClick={() => setShowAddCardModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-2 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    maxLength="19"
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      value = value.match(/.{1,4}/g)?.join(" ") || value;
                      setCardNumber(value);
                    }}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiryDate}
                      maxLength="5"
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "");

                        if (value.length > 2) {
                          value = value.slice(0, 2) + "/" + value.slice(2, 4);
                        }

                        setExpiryDate(value);
                      }}
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      value={cvv}
                      maxLength="4"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setCvv(value);
                      }}
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex gap-3 sticky bottom-0">
                <button
                  onClick={() => setShowAddCardModal(false)}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-gray-200 text-gray-700 rounded-lg sm:rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCard}
                  disabled={loading}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#4a4741] text-white rounded-lg sm:rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {loading ? "Adding..." : "Add Card"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Card Modal - Responsive */}
        {showEditCardModal && editingCard && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-lg rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Edit Card
                  </h2>
                  <button
                    onClick={() => {
                      setShowEditCardModal(false);
                      setEditingCard(null);
                      resetForm();
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-2 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Card Number</p>
                  <p className="font-semibold text-gray-900">
                    •••• •••• •••• {editingCard.last4}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    maxLength="5"
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");

                      if (value.length > 2) {
                        value = value.slice(0, 2) + "/" + value.slice(2, 4);
                      }

                      setExpiryDate(value);
                    }}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex gap-3 sticky bottom-0">
                <button
                  onClick={() => {
                    setShowEditCardModal(false);
                    setEditingCard(null);
                    resetForm();
                  }}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-gray-200 text-gray-700 rounded-lg sm:rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateCard}
                  disabled={loading}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#4a4741] text-white rounded-lg sm:rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {loading ? "Updating..." : "Update Card"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hidden Receipt Component */}
      <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
        <Receipt ref={receiptRef} txn={selectedTransaction} />
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
