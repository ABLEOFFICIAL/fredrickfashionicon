// File: frontend/app/x-AD-min/components/modals/ProductModal.jsx
"use client";
import React, { useState, useEffect } from "react";
import { X, Plus, Trash2, Upload, Loader2 } from "lucide-react";
import { fetchProduct } from "@/app/utils/helper";
// import { fetchProduct } from "../../utils/helper";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002/api";

const api = {
  getToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
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
};

const ProductModal = ({ currentItem, closeModal, loading, setLoading }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    images: [],
    category: "Clothes",
    stock: 0,
    salePrice: "",
    salePercentage: "",
  });

  const [tempSizes, setTempSizes] = useState([]);
  const [tempColors, setTempColors] = useState([]);

  useEffect(() => {
    if (currentItem) {
      setFormData({
        name: currentItem?.name || "",
        description: currentItem?.description || "",
        price: currentItem?.price || "",
        images: currentItem?.images || [],
        category: currentItem?.category || "Clothes",
        stock: currentItem?.stock || 0,
        salePrice: currentItem?.salePrice || "",
        salePercentage: currentItem?.salePercentage || "",
      });
      setTempSizes(currentItem?.sizes || [{ size: "", stock: 0 }]);
      setTempColors(
        currentItem?.colors || [{ name: "", hexCode: "#000000", stock: 0 }]
      );
    }
  }, [currentItem]);

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

  const handleSubmit = async () => {
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
        await fetchProduct();
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-gray-800">
            {currentItem ? "Edit" : "Add"} Product
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
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
                setFormData({ ...formData, salePercentage: e.target.value })
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

          {/* Sizes Section */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center mb-3">
              <p className="font-semibold text-gray-700">Product Sizes</p>
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
                    onChange={(e) => updateSize(index, "size", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="Stock"
                    value={sizeObj.stock}
                    onChange={(e) => updateSize(index, "stock", e.target.value)}
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
            </div>
          </div>

          {/* Colors Section */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center mb-3">
              <p className="font-semibold text-gray-700">Product Colors</p>
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
                    onChange={(e) => updateColor(index, "name", e.target.value)}
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
            </div>
          </div>

          {/* Images Section */}
          <div>
            <p className="font-semibold mb-2 text-gray-700">Product Images</p>
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
          </div>

          {/* Tags Section */}
          <div>
            <p className="font-semibold mb-2 text-gray-700">Product Tags</p>
            <div className="grid grid-cols-2 gap-3">
              {["trending", "popular", "newArrival", "onSale"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={formData[option] || false}
                    onChange={(e) =>
                      setFormData({ ...formData, [option]: e.target.checked })
                    }
                    className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700 capitalize">
                    {option.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handleSubmit}
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
  );
};

export default ProductModal;
