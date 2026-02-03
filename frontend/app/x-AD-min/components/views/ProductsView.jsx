"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Search, Plus, Edit2, Trash2, Star, Loader2 } from "lucide-react";

const ProductsView = ({ openModal, deleteProduct, dataLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { products } = useSelector((state) => state.context);

  return (
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
};

export default ProductsView;
