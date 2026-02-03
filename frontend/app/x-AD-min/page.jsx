"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProduct } from "../utils/helper";

// Layout Components
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

// View Components
import DashboardView from "./components/views/DashboardView";
import ProductsView from "./components/views/ProductsView";
import UsersView from "./components/views/UsersView";
import OrdersView from "./components/views/OrdersView";
import BlogsView from "./components/views/BlogsView";

// Modal Components
import ProductModal from "./components/modals/ProductModal";
import BlogModal from "./components/modals/BlogModal";

// API Helper Functions
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002/api";

const api = {
  getToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
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
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  const openModal = (type, item = null) => {
    setModalType(type);
    setCurrentItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentItem(null);
    setModalType("");
  };

  const deleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const result = await api.deleteProduct(id);
      if (result.success) {
        alert("Product deleted successfully!");
        await fetchProduct();
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
        // Refresh blogs list
        window.location.reload();
      } else {
        throw new Error(result.message || "Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert(error.message || "An error occurred while deleting the blog");
    }
  };

  const deleteUser = (id) => {
    // Implement user deletion logic
    console.log("Delete user:", id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1">
          <Header activeTab={activeTab} />

          <div className="p-8">
            {activeTab === "dashboard" && (
              <DashboardView setActiveTab={setActiveTab} />
            )}
            {activeTab === "products" && (
              <ProductsView
                openModal={openModal}
                deleteProduct={deleteProduct}
                dataLoading={dataLoading}
              />
            )}
            {activeTab === "users" && (
              <UsersView openModal={openModal} deleteUser={deleteUser} />
            )}
            {activeTab === "orders" && <OrdersView />}
            {activeTab === "blogs" && (
              <BlogsView
                openModal={openModal}
                deleteBlog={deleteBlog}
                dataLoading={dataLoading}
              />
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && modalType === "product" && (
        <ProductModal
          currentItem={currentItem}
          closeModal={closeModal}
          loading={loading}
          setLoading={setLoading}
        />
      )}

      {showModal && modalType === "blog" && (
        <BlogModal
          currentItem={currentItem}
          closeModal={closeModal}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  );
};

export default AdminPanel;
