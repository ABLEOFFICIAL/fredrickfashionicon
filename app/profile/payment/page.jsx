"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
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
} from "lucide-react";

const PaymentMethodsPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("methods");
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [savedCards, setSavedCards] = useState([
    {
      id: 1,
      type: "visa",
      last4: "4242",
      expiryMonth: "12",
      expiryYear: "25",
      cardholderName: "John Doe",
      isDefault: true,
    },
    {
      id: 2,
      type: "mastercard",
      last4: "8888",
      expiryMonth: "06",
      expiryYear: "26",
      cardholderName: "John Doe",
      isDefault: false,
    },
  ]);

  const [transactions] = useState([
    {
      id: "TXN-2025-001",
      orderNumber: "ORD-1763977314604",
      type: "payment",
      amount: 120000,
      status: "success",
      method: "Paystack - Visa ****4242",
      date: "2025-11-24T09:41:54.610Z",
      description: "Order payment for 5 items",
    },
    {
      id: "TXN-2025-002",
      orderNumber: "ORD-1763977314605",
      type: "payment",
      amount: 45000,
      status: "success",
      method: "Mobile Banking - GTBank",
      date: "2025-11-23T14:30:00.000Z",
      description: "Order payment for 2 items",
    },
    {
      id: "TXN-2025-003",
      orderNumber: "ORD-1763977314606",
      type: "refund",
      amount: 28000,
      status: "success",
      method: "Paystack - Mastercard ****8888",
      date: "2025-11-22T10:15:00.000Z",
      description: "Refund for cancelled order",
    },
    {
      id: "TXN-2025-004",
      orderNumber: "ORD-1763977314607",
      type: "payment",
      amount: 89000,
      status: "pending",
      method: "Mobile Banking - GTBank",
      date: "2025-11-21T16:45:00.000Z",
      description: "Order payment pending verification",
    },
    {
      id: "TXN-2025-005",
      orderNumber: "ORD-1763977314608",
      type: "payment",
      amount: 56000,
      status: "failed",
      method: "Paystack - Visa ****4242",
      date: "2025-11-20T11:20:00.000Z",
      description: "Payment failed - Insufficient funds",
    },
  ]);

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

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
      default: "from-gray-700 to-gray-900",
    };
    return colors[type] || colors.default;
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

  const handleAddCard = () => {
    setShowAddCardModal(false);
    alert("Card added successfully!");
  };

  const handleRemoveCard = (cardId) => {
    setSavedCards(savedCards.filter((card) => card.id !== cardId));
  };

  const handleSetDefaultCard = (cardId) => {
    setSavedCards(
      savedCards.map((card) => ({
        ...card,
        isDefault: card.id === cardId,
      }))
    );
  };

  const filteredTransactions = transactions.filter((txn) => {
    const matchesFilter = filter === "all" || txn.status === filter;
    const matchesSearch =
      txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalSpent = transactions
    .filter((txn) => txn.type === "payment" && txn.status === "success")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const totalRefunded = transactions
    .filter((txn) => txn.type === "refund" && txn.status === "success")
    .reduce((sum, txn) => sum + txn.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment & Transactions
          </h1>
          <p className="text-gray-600">
            Manage your payment methods and view transaction history
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
          <div className="flex">
            {[
              { key: "methods", label: "Payment Methods", icon: CreditCard },
              {
                key: "transactions",
                label: "Transaction History",
                icon: DollarSign,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.key
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {activeTab === "methods" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600">Total Spent</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  ₦{totalSpent.toLocaleString()}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ArrowDownRight className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-600">Total Refunded</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  ₦{totalRefunded.toLocaleString()}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-600">Saved Cards</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {savedCards.length}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Saved Payment Methods
                </h2>
                <button
                  onClick={() => setShowAddCardModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add Card
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedCards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`h-2 bg-linear-to-r ${getCardIcon(card.type)}`}
                    ></div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 bg-linear-to-br ${getCardIcon(
                              card.type
                            )} rounded-lg flex items-center justify-center`}
                          >
                            <CreditCard className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 capitalize">
                              {card.type}
                            </p>
                            <p className="text-sm text-gray-600">
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

                      <div className="mb-4 text-sm text-gray-600">
                        <p className="mb-1">
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
                            onClick={() => handleSetDefaultCard(card.id)}
                            className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                          >
                            Set Default
                          </button>
                        )}
                        <button
                          onClick={() => handleRemoveCard(card.id)}
                          className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "transactions" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <div className="flex gap-2">
                  {["all", "success", "pending", "failed"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilter(status)}
                      className={`px-4 py-3 rounded-xl font-medium transition-colors capitalize ${
                        filter === status
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {filteredTransactions.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No transactions found
                </h3>
                <p className="text-gray-600">
                  {filter === "all"
                    ? "You haven't made any transactions yet"
                    : `No ${filter} transactions found`}
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {filteredTransactions.map((txn) => (
                    <div
                      key={txn.id}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                            txn.type === "refund"
                              ? "bg-blue-100"
                              : "bg-green-100"
                          }`}
                        >
                          {txn.type === "refund" ? (
                            <ArrowDownRight className="w-6 h-6 text-blue-600" />
                          ) : (
                            <ArrowUpRight className="w-6 h-6 text-green-600" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {txn.description}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {txn.id} • {txn.orderNumber}
                              </p>
                            </div>
                            <div className="text-right">
                              <p
                                className={`text-xl font-bold ${
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

                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-medium border ${getStatusColor(
                                txn.status
                              )}`}
                            >
                              {getStatusIcon(txn.status)}
                              {txn.status.charAt(0).toUpperCase() +
                                txn.status.slice(1)}
                            </span>
                            <span className="text-gray-600 flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              {formatDate(txn.date)}
                            </span>
                            <span className="text-gray-600 flex items-center gap-1.5">
                              <Wallet className="w-4 h-4" />
                              {txn.method}
                            </span>
                          </div>
                        </div>

                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Download className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {showAddCardModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">
                  Add Payment Card
                </h2>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
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
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-3">
                <button
                  onClick={() => setShowAddCardModal(false)}
                  className="flex-1 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCard}
                  className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Add Card
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
