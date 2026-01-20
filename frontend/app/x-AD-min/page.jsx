"use client";
import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Package,
  Users,
  FileText,
  Plus,
  Edit2,
  Trash2,
  Search,
  DollarSign,
  ShoppingCart,
  X,
  Star,
  TrendingUp,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Loader2,
  Upload,
  ListOrdered,
  ArrowDownAZ,
  Bell,
  Eye,
  CheckCheck,
} from "lucide-react";
import { useSelector } from "react-redux";

// API Helper Functions
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002/api";

const api = {
  getToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  },

  getProducts: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const res = await fetch(`${API_URL}/products?${queryString}`);
    return res.json();
  },

  createProduct: async (data) => {
    const res = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api.getToken()}`,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  updateProduct: async (id, data) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api.getToken()}`,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  deleteProduct: async (id) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${api.getToken()}`,
      },
    });
    return res.json();
  },

  getUsers: async () => {
    const res = await fetch(`${API_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${api.getToken()}`,
      },
    });
    return res.json();
  },

  getAllUsers: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const res = await fetch(`${API_URL}/users?${queryString}`, {
      headers: {
        Authorization: `Bearer ${api.getToken()}`,
      },
    });
    return res.json();
  },

  getOrders: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const res = await fetch(`${API_URL}/orders?${queryString}`, {
      headers: {
        Authorization: `Bearer ${api.getToken()}`,
      },
    });
    return res.json();
  },

  getBlogs: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const res = await fetch(`${API_URL}/blogs?${queryString}`);
    return res.json();
  },

  createBlog: async (data) => {
    const res = await fetch(`${API_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api.getToken()}`,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  updateBlog: async (id, data) => {
    const res = await fetch(`${API_URL}/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api.getToken()}`,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  deleteBlog: async (id) => {
    const res = await fetch(`${API_URL}/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${api.getToken()}`,
      },
    });
    return res.json();
  },
};

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [formData, setFormData] = useState({});
  const [tempSizes, setTempSizes] = useState([]);
  const [tempColors, setTempColors] = useState([]);
  const [newOrdersCount, setNewOrdersCount] = useState(0);
  const { blogs, orders, products } = useSelector((state) => state.context);
  // const [stats, setStats] = useState({
  //   totalRevenue: 0,
  //   totalOrders: 0,
  //   totalProducts: 0,
  //   totalCustomers: 0,
  // });

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentItem, setCurrentItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const { users } = useSelector((state) => state.admin);
  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  const fetchNewOrdersCount = async () => {
    try {
      const token = api.getToken();
      // ✅ FIXED: Added missing parentheses
      const response = await fetch(`${API_URL}/admin/orders?limit=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setNewOrdersCount(data.newOrdersCount || 0);
      }
    } catch (error) {
      console.error("Error fetching new orders count:", error);
    }
  };

  const markOrderAsRead = async (orderId) => {
    try {
      const token = api.getToken();
      const response = await fetch(
        `${API_URL}/admin/orders/${orderId}/mark-read`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      if (data.success) {
        setNewOrdersCount(data.newOrdersCount || 0);
        // Refresh orders to update the UI
        window.location.reload(); // Simple refresh, or you can implement a better state update
      }
    } catch (error) {
      console.error("Error marking order as read:", error);
    }
  };

  const markAllOrdersAsRead = async () => {
    if (!confirm("Mark all orders as read?")) return;

    try {
      const token = api.getToken();
      const response = await fetch(`${API_URL}/admin/orders/mark-all-read`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setNewOrdersCount(0);
        alert(`${data.modifiedCount} orders marked as read`);
        window.location.reload(); // Simple refresh
      }
    } catch (error) {
      console.error("Error marking all orders as read:", error);
      alert("Failed to mark orders as read");
    }
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    setCurrentItem(item);

    if (type === "product") {
      setFormData({
        name: item?.name || "",
        description: item?.description || "",
        price: item?.price || "",
        images: item?.images || [],
        category: item?.category || "Clothes",
        stock: item?.stock || 0,
        salePrice: item?.salePrice || "",
        salePercentage: item?.salePercentage || "",
      });
      setTempSizes(item?.sizes || [{ size: "", stock: 0 }]);
      setTempColors(
        item?.colors || [{ name: "", hexCode: "#000000", stock: 0 }]
      );
    } else if (type === "blog") {
      setFormData({
        title: item?.title || "",
        content: item?.content || "",
        image: item?.image || "",
        tags: item?.tags || [],
        published: item?.published || false,
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentItem(null);
    setFormData({});
    setTempSizes([]);
    setTempColors([]);
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    for (const file of files) {
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          setFormData((prev) => ({
            ...prev,
            images: [...(prev.images || []), base64String],
          }));
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleProductSubmit = async () => {
    setLoading(true);
    try {
      const validSizes = tempSizes.filter((s) => s.size && s.stock >= 0);
      const validColors = tempColors.filter((c) => c.name && c.stock >= 0);

      const productData = {
        name: formData.name,
        description: formData.description,
        price: Number(formData.price),
        category: formData.category,
        images: formData.images?.length ? formData.images : [],
        sizes: validSizes,
        colors: validColors,
        stock: Number(formData.stock) || 0,
        tags: {
          isTrending: formData.trending || false,
          isPopular: formData.popular || false,
          isOnSale: formData.onSale || false,
          isNewArrival: formData.newArrival || false,
        },
        salePrice: formData.salePrice ? Number(formData.salePrice) : undefined,
        salePercentage: formData.salePercentage
          ? Number(formData.salePercentage)
          : undefined,
      };

      let result;
      if (currentItem) {
        result = await api.updateProduct(currentItem._id, productData);
      } else {
        result = await api.createProduct(productData);
      }

      if (result.success) {
        alert(`Product ${currentItem ? "updated" : "created"} successfully!`);
        await fetchProducts();
        closeModal();
      } else {
        throw new Error(result.message || "Failed to save product");
      }
    } catch (error) {
      console.error("Error saving product:", error);
      alert(error.message || "An error occurred while saving the product");
    } finally {
      setLoading(false);
    }
  };

  const handleBlogSubmit = async () => {
    setLoading(true);
    try {
      const blogData = {
        title: formData.title,
        content: formData.content,
        image: formData.image,
        tags: formData.tags || [],
        published: formData.published || false,
      };

      let result;
      if (currentItem) {
        result = await api.updateBlog(currentItem._id, blogData);
      } else {
        result = await api.createBlog(blogData);
      }

      if (result.success) {
        alert(`Blog ${currentItem ? "updated" : "created"} successfully!`);
        await fetchBlogs();
        closeModal();
      } else {
        throw new Error(result.message || "Failed to save blog");
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      alert(error.message || "An error occurred while saving the blog");
    } finally {
      setLoading(false);
    }
  };

  // const handleSendNotification = async () => {
  //   setLoading(true);
  //   try {
  //     const notificationData = {
  //       userId: formData.userId,
  //       title: formData.title,
  //       message: formData.message,
  //     };

  //     const result = await api.sendNotification(notificationData);
  //     if (result.success) {
  //       alert("Notification sent successfully!");
  //       closeModal();
  //     } else {
  //       throw new Error(result.message || "Failed to send notification");
  //     }
  //   } catch (error) {
  //     console.error("Error sending notification:", error);
  //     alert(error.message || "An error occurred while sending notification");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleConfirmPayment = async (orderId) => {
  //   setLoading(true);
  //   try {
  //     const result = await api.confirmPayment(orderId, {
  //       paymentStatus: "paid",
  //       paymentMethod: "admin_confirmed",
  //     });
  //     if (result.success) {
  //       alert("Payment confirmed successfully!");
  //       await fetchOrders();
  //       closeModal();
  //     } else {
  //       throw new Error(result.message || "Failed to confirm payment");
  //     }
  //   } catch (error) {
  //     console.error("Error confirming payment:", error);
  //     alert(error.message || "An error occurred while confirming payment");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const deleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const result = await api.deleteProduct(id);
      if (result.success) {
        alert("Product deleted successfully!");
        await fetchProducts();
      } else {
        throw new Error(result.message || "Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert(error.message || "An error occurred while deleting the product");
    }
  };

  const deleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const result = await api.deleteBlog(id);
      if (result.success) {
        alert("Blog deleted successfully!");
        await fetchBlogs();
      } else {
        throw new Error(result.message || "Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert(error.message || "An error occurred while deleting the blog");
    }
  };

  const addSize = () => {
    setTempSizes([...tempSizes, { size: "", stock: 0 }]);
  };

  const removeSize = (index) => {
    setTempSizes(tempSizes.filter((_, i) => i !== index));
  };

  const updateSize = (index, field, value) => {
    const newSizes = [...tempSizes];
    newSizes[index][field] = field === "stock" ? parseInt(value) || 0 : value;
    setTempSizes(newSizes);
  };

  const addColor = () => {
    setTempColors([...tempColors, { name: "", hexCode: "#000000", stock: 0 }]);
  };

  const removeColor = (index) => {
    setTempColors(tempColors.filter((_, i) => i !== index));
  };

  const updateColor = (index, field, value) => {
    const newColors = [...tempColors];
    newColors[index][field] = field === "stock" ? parseInt(value) || 0 : value;
    setTempColors(newColors);
  };

  const toggleArrayItem = (field, value) => {
    const currentArray = formData[field] || [];
    const exists = currentArray.includes(value);
    setFormData({
      ...formData,
      [field]: exists
        ? currentArray.filter((v) => v !== value)
        : [...currentArray, value],
    });
  };

  const UsersView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
        <button
          onClick={() => openModal("user")}
          className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all flex items-center gap-2 font-medium"
        >
          <Plus className="w-5 h-5" />
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {users.map((user, idx) => {
          const userOrders = orders.filter((order) => order.user === user._id);

          return (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {user.name}
                      </h3>
                      {user.signedIn && (
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
                          Online
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      Member since {user.joinDate}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal("user", user)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Last active: {user.lastActive}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ListOrdered className="w-4 h-4" />
                  <span>Orders: {userOrders.length}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ArrowDownAZ className="w-4 h-4" />
                  <span>
                    Total Spent:{" "}
                    {userOrders
                      .reduce((acc, order) => acc + order.totalAmount, 0)
                      .toLocaleString()}
                  </span>
                </div>
              </div>

              {/* <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-700">Order History</h4>
                  <span className="text-sm font-semibold text-blue-600">
                    Total: ${user.totalSpent.toFixed(2)}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="space-y-2">
                    {userOrders.length > 0 ? (
                      userOrders.map((order, idx) => (
                        <div
                          key={order._id}
                          className="bg-gray-50 p-3 rounded-lg flex justify-between items-center"
                        >
                          <div>
                            <p className="font-medium text-gray-800 text-sm">
                              {order.orderNumber}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="text-sm font-semibold text-gray-800">
                              ₦{order.totalAmount.toLocaleString()}
                            </p>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                order.orderStatus === "processing"
                                  ? "bg-blue-100 text-blue-600"
                                  : "bg-green-100 text-green-600"
                              }`}
                            >
                              {order.orderStatus}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-2">
                        No orders yet
                      </p>
                    )}
                  </div>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<DollarSign className="w-6 h-6" />}
          title="Total Revenue"
          value={`₦${totalRevenue.toLocaleString()}`}
          trend="+16%"
          trendUp={true}
          color="from-blue-500 to-blue-600"
        />
        <StatCard
          icon={<ShoppingCart className="w-6 h-6" />}
          title="Total Orders"
          value={orders.length}
          trend="+8%"
          trendUp={true}
          color="from-green-500 to-green-600"
        />
        <StatCard
          icon={<Package className="w-6 h-6" />}
          title="Total Products"
          value={products.length}
          trend="+2%"
          trendUp={true}
          color="from-purple-500 to-purple-600"
        />
        <StatCard
          icon={<Users className="w-6 h-6" />}
          title="Total Customers"
          value={users.length}
          trend="-0.4%"
          trendUp={false}
          color="from-orange-500 to-orange-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Orders
            </h3>
            <button
              onClick={() => setActiveTab("orders")}
              className="text-blue-600 text-sm hover:underline"
            >
              View All Orders
            </button>
          </div>
          <div className="space-y-3">
            {orders.slice(0, 5).map((order) => (
              <div
                key={order._id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">
                      Order #{order.orderNumber}
                    </p>
                    <p className="text-xs text-gray-500">
                      {order.items?.length || 0} items
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    ₦{order.totalAmount?.toLocaleString()}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      order.orderStatus === "delivered"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                </div>
              </div>
            ))}
            {orders.length === 0 && (
              <p className="text-center text-gray-500 py-4">No orders yet</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Top Products
            </h3>
            <button className="text-blue-600 text-sm hover:underline">
              View more
            </button>
          </div>
          <div className="space-y-3">
            {products.slice(0, 5).map((product) => (
              <div
                key={product._id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.images?.[0] || "/placeholder.jpg"}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-600">
                        {product.averageRating?.toFixed(1) || 0}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    ₦{product.price?.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    {product.stock} in stock
                  </p>
                </div>
              </div>
            ))}
            {products.length === 0 && (
              <p className="text-center text-gray-500 py-4">No products yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const ProductsView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          onClick={() => openModal("product")}
          className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all flex items-center gap-2 font-medium"
        >
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      {dataLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((p) =>
              p.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={product.images?.[0] || "/placeholder.jpg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-semibold text-gray-700 capitalize">
                    {product.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">
                        {product.averageRating?.toFixed(1) || 0}
                      </span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-600">
                      {product.totalReviews || 0} reviews
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <p className="text-2xl font-bold text-gray-900">
                      ₦{product.price?.toLocaleString()}
                    </p>
                    <span className="text-sm text-gray-600">
                      Stock: {product.stock}
                    </span>
                  </div>

                  {product.sizes && product.sizes.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-1">Sizes:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.map((sizeObj, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          >
                            {sizeObj.size} ({sizeObj.stock})
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.colors && product.colors.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-1">Colors:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map((colorObj, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs"
                          >
                            <div
                              className="w-4 h-4 rounded-full border border-gray-300"
                              style={{ backgroundColor: colorObj.hexCode }}
                            />
                            <span className="text-gray-700">
                              {colorObj.name} ({colorObj.stock})
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags?.isTrending && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                        Trending
                      </span>
                    )}
                    {product.tags?.isPopular && (
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                    {product.tags?.isNewArrival && (
                      <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
                        New
                      </span>
                    )}
                    {product.tags?.isOnSale && (
                      <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">
                        Sale
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal("product", product)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );

  const OrdersView = () => (
    <div className="space-y-6">
      {/* New Orders Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Orders Management
          </h2>

          {/* New Orders Badge */}
          {newOrdersCount > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full animate-pulse">
              <Bell className="w-5 h-5" />
              <span className="font-bold">{newOrdersCount} New</span>
            </div>
          )}
        </div>

        {/* Mark All as Read Button */}
        {newOrdersCount > 0 && (
          <button
            onClick={markAllOrdersAsRead}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <CheckCheck className="w-4 h-4" />
            Mark All as Read
          </button>
        )}
      </div>

      {/* Orders List */}
      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No orders yet</p>
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className={`bg-white border rounded-xl p-6 space-y-5 transition-all ${
              order.isNewOrder
                ? "border-red-300 ring-2 ring-red-200 shadow-lg"
                : "border-gray-200 shadow-sm"
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-gray-800">
                    {order.orderNumber}
                  </h3>

                  {/* NEW Badge */}
                  {order.isNewOrder && (
                    <span className="px-2 py-1 text-xs font-bold bg-red-500 text-white rounded-full animate-pulse">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right space-y-1">
                  <p className="font-semibold text-gray-800">
                    ₦{order.totalAmount.toLocaleString()}
                  </p>

                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600 font-medium">
                      {order.paymentStatus}
                    </span>

                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
                      {order.orderStatus}
                    </span>
                  </div>
                </div>

                {/* Mark as Read Button */}
                {order.isNewOrder && (
                  <button
                    onClick={() => markOrderAsRead(order._id)}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    title="Mark as read"
                  >
                    <Eye className="w-4 h-4" />
                    Mark Read
                  </button>
                )}
              </div>
            </div>

            {/* Items */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Items Ordered ({order.items?.length || 0})
              </h4>

              <div className="space-y-3">
                {order.items?.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg"
                  >
                    <img
                      src={item.images?.[0] || "/placeholder.png"}
                      alt={item.name}
                      className="w-14 h-14 rounded-md object-cover border"
                    />

                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ₦{item.price?.toLocaleString()} × {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-gray-800 text-sm">
                      ₦
                      {(
                        (item.price || 0) * (item.quantity || 0)
                      ).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address & Payment Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Customer Profile */}
              {(() => {
                const userProfile = users.find(
                  (user) => user._id === order.user
                );
                return (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      Customer Profile
                    </h4>
                    {userProfile ? (
                      <>
                        <p className="text-sm text-gray-600">
                          Name:{" "}
                          <span className="font-medium">
                            {userProfile.name}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600">
                          Email:{" "}
                          <span className="font-medium">
                            {userProfile.email}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600">
                          Phone:{" "}
                          <span className="font-medium">
                            {userProfile.phone || "N/A"}
                          </span>
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-gray-500">
                        Customer details not available
                      </p>
                    )}
                  </div>
                );
              })()}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-1">
                  Shipping Address
                </h4>
                <p className="text-sm text-gray-600">
                  {order.shippingAddress?.street || "N/A"},<br />
                  {order.shippingAddress?.city}, {order.shippingAddress?.state},
                  <br />
                  {order.shippingAddress?.country || "Nigeria"} —{" "}
                  {order.shippingAddress?.zipCode || "N/A"}
                </p>
              </div>

              {/* Payment Info */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-1">
                  Payment Info
                </h4>
                <p className="text-sm text-gray-600">
                  Reference:{" "}
                  <span className="font-medium font-mono text-xs">
                    {order.paymentReference}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Status:{" "}
                  <span className="font-medium">{order.paymentStatus}</span>
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const BlogsView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Blog Management</h2>
        <button
          onClick={() => openModal("blog")}
          className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all flex items-center gap-2 font-medium"
        >
          <Plus className="w-5 h-5" />
          Add Blog
        </button>
      </div>

      {dataLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {blog.image && (
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.content}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  <span
                    className={`px-2 py-1 rounded ${
                      blog.published
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {blog.published ? "Published" : "Draft"}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openModal("blog", blog)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteBlog(blog._id)}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          {blogs.length === 0 && (
            <p className="col-span-2 text-center text-gray-500 py-12">
              No blogs yet. Create your first blog!
            </p>
          )}
        </div>
      )}
    </div>
  );

  const StatCard = ({ icon, title, value, trend, trendUp, color }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-12 h-12 bg-linear-to-br ${color} rounded-lg flex items-center justify-center text-white`}
        >
          {icon}
        </div>
        <div
          className={`flex items-center gap-1 text-sm font-medium ${
            trendUp ? "text-green-600" : "text-red-600"
          }`}
        >
          <TrendingUp className={`w-4 h-4 ${!trendUp && "rotate-180"}`} />
          {trend}
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );

  useEffect(() => {
    if (activeTab === "orders") {
      fetchNewOrdersCount();

      // Poll every 30 seconds when on orders tab
      const interval = setInterval(() => {
        fetchNewOrdersCount();
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <div className="w-64 bg-white shadow-sm min-h-screen border-r border-gray-200">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg"></div>
              <h1 className="text-xl font-bold text-gray-800">FFI</h1>
            </div>

            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
              Menu
            </p>

            <nav className="space-y-1">
              {[
                { id: "dashboard", icon: LayoutDashboard, label: "Overview" },
                { id: "products", icon: Package, label: "Product" },
                { id: "users", icon: Users, label: "Customer" },
                { id: "orders", icon: ListOrdered, label: "Orders" },
                { id: "blogs", icon: FileText, label: "Blogs" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                    activeTab === item.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800">
                {activeTab === "dashboard" && "Dashboard"}
                {activeTab === "products" && "Products"}
                {activeTab === "users" && "Customers"}
                {activeTab === "orders" && "Orders"}
                {activeTab === "blogs" && "Blogs"}
              </h1>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  />
                </div>
                <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer">
                  A
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {activeTab === "dashboard" && <DashboardView />}
            {activeTab === "products" && <ProductsView />}
            {activeTab === "users" && <UsersView />}
            {activeTab === "blogs" && <BlogsView />}
            {activeTab === "orders" && <OrdersView />}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-2xl font-bold text-gray-800">
                {currentItem ? "Edit" : "Add"}{" "}
                {modalType === "product"
                  ? "Product"
                  : modalType === "user"
                  ? "User"
                  : "Blog"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {modalType === "product" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      value={formData.name || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Product Name"
                      className="col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <select
                      value={formData.category || "Clothes"}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Clothes">Clothes</option>
                      <option value="Shoes">Shoes</option>
                      <option value="Bags">Bags</option>
                      <option value="Jewelry">Jewelry</option>
                    </select>

                    <input
                      type="number"
                      step="0.01"
                      value={formData.price || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      placeholder="Price"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <input
                      type="number"
                      value={formData.stock || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, stock: e.target.value })
                      }
                      placeholder="Stock Quantity (if no sizes/colors)"
                      className="col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <input
                      type="number"
                      step="0.01"
                      value={formData.salePrice || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, salePrice: e.target.value })
                      }
                      placeholder="Sale Price (optional)"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <input
                      type="number"
                      value={formData.salePercentage || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          salePercentage: e.target.value,
                        })
                      }
                      placeholder="Sale % (optional)"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <textarea
                    value={formData.description || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Description"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="3"
                  />

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <p className="font-semibold text-gray-700">
                        Product Sizes
                      </p>
                      <button
                        type="button"
                        onClick={addSize}
                        className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-1"
                      >
                        <Plus className="w-4 h-4" />
                        Add Size
                      </button>
                    </div>
                    <div className="space-y-2">
                      {tempSizes.map((sizeObj, index) => (
                        <div
                          key={index}
                          className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"
                        >
                          <input
                            type="text"
                            placeholder="Size (e.g., M, 40, 42)"
                            value={sizeObj.size}
                            onChange={(e) =>
                              updateSize(index, "size", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="number"
                            placeholder="Stock"
                            value={sizeObj.stock}
                            onChange={(e) =>
                              updateSize(index, "stock", e.target.value)
                            }
                            className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => removeSize(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      {tempSizes.length === 0 && (
                        <p className="text-sm text-gray-500 text-center py-2">
                          No sizes added. Click "Add Size" to start.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <p className="font-semibold text-gray-700">
                        Product Colors
                      </p>
                      <button
                        type="button"
                        onClick={addColor}
                        className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center gap-1"
                      >
                        <Plus className="w-4 h-4" />
                        Add Color
                      </button>
                    </div>
                    <div className="space-y-2">
                      {tempColors.map((colorObj, index) => (
                        <div
                          key={index}
                          className="flex gap-2 items-center bg-gray-50 p-3 rounded-lg"
                        >
                          <input
                            type="text"
                            placeholder="Color name"
                            value={colorObj.name}
                            onChange={(e) =>
                              updateColor(index, "name", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="color"
                            value={colorObj.hexCode}
                            onChange={(e) =>
                              updateColor(index, "hexCode", e.target.value)
                            }
                            className="w-16 h-10 border border-gray-300 rounded-lg cursor-pointer"
                            title="Pick color"
                          />
                          <input
                            type="number"
                            placeholder="Stock"
                            value={colorObj.stock}
                            onChange={(e) =>
                              updateColor(index, "stock", e.target.value)
                            }
                            className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => removeColor(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      {tempColors.length === 0 && (
                        <p className="text-sm text-gray-500 text-center py-2">
                          No colors added. Click "Add Color" to start.
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-700">
                      Product Images
                    </p>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {(formData.images || []).map((img, idx) => (
                        <div key={idx} className="relative group">
                          <img
                            src={img}
                            alt={`Product ${idx + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newImages = formData.images.filter(
                                (_, i) => i !== idx
                              );
                              setFormData({ ...formData, images: newImages });
                            }}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <label className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors cursor-pointer flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100">
                      <Upload className="w-5 h-5 text-gray-500" />
                      <span className="text-sm font-medium text-gray-600">
                        Upload Product Images
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      Click to upload product images (supports multiple files)
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-700">
                      Product Tags
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {["trending", "popular", "newArrival", "onSale"].map(
                        (option) => (
                          <label
                            key={option}
                            className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={formData[option] || false}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  [option]: e.target.checked,
                                })
                              }
                              className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm font-medium text-gray-700 capitalize">
                              {option.replace(/([A-Z])/g, " $1").trim()}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                </>
              )}

              {modalType === "blog" && (
                <>
                  <input
                    value={formData.title || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="Blog Title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <textarea
                    value={formData.content || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    placeholder="Blog Content"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="5"
                  />

                  <input
                    value={formData.image || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    placeholder="Featured Image URL"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  )}

                  <div>
                    <p className="font-semibold mb-2 text-gray-700">Tags</p>
                    <input
                      value={(formData.tags || []).join(", ")}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tags: e.target.value.split(",").map((t) => t.trim()),
                        })
                      }
                      placeholder="Tags (comma-separated)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.published || false}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          published: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                    />
                    <span className="font-medium text-gray-700">
                      Publish Blog
                    </span>
                  </label>
                </>
              )}

              <button
                onClick={() => {
                  if (modalType === "product") {
                    handleProductSubmit();
                  } else if (modalType === "blog") {
                    handleBlogSubmit();
                  }
                }}
                disabled={loading}
                className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>{currentItem ? "Update" : "Create"}</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
