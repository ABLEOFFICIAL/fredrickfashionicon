"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Heart, Trash2, ShoppingCart, Plus, X } from "lucide-react";
import { fetchCart, fetchWishlist } from "@/app/utils/helper";
import { cartAPI, productAPI } from "@/lib/api";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const { user, wishList } = useSelector((state) => state.auth);
  const [removingItem, setRemovingItem] = useState(null);

  const handleRemoveFromWishlist = (itemId) => {
    setRemovingItem(itemId);
    // Add your remove from wishlist logic here
    // dispatch(removeFromWishlist(itemId));
    setTimeout(() => setRemovingItem(null), 300);
  };

  const handleAddToCart = async (item) => {
    try {
      // Default quantity = 1
      await cartAPI.addItem(item._id, 1);

      // Remove from wishlist after adding to cart
      await productAPI.wishlist(item._id);

      alert(`${item.name} added to cart!`);

      dispatch(fetchCart());
      dispatch(fetchWishlist());
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.log("ADD TO CART ERROR →", error);
      alert(error.response?.data?.message || "Failed to add to cart");
    }
  };

  const handleMoveAllToCart = async () => {
    try {
      for (const item of wishList) {
        // Add to cart (default size & color from index 0)
        await cartAPI.addItem(item._id, 1);

        // Remove from wishlist
        await productAPI.wishlist(item._id);
      }

      alert("All items moved to cart!");

      dispatch(fetchCart());
      dispatch(fetchWishlist());
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.log("MOVE ALL ERROR →", error);
      alert("Failed to move all items");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                My Wishlist
              </h1>
              <p className="text-gray-600">
                {wishList?.length > 0
                  ? `${wishList.length} ${
                      wishList.length === 1 ? "item" : "items"
                    } saved`
                  : "Save your favorite items"}
              </p>
            </div>
            {wishList?.length > 0 && (
              <button
                onClick={handleMoveAllToCart}
                className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#4a4741] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Move All to Cart
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        {!user ? (
          // Not Logged In State
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
            <div className="max-w-md mx-auto text-center">
              <div className="w-24 h-24 bg-linear-to-br from-red-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Please Log In
              </h3>
              <p className="text-gray-600 mb-8">
                Log in to view and manage your wishlist. Save your favorite
                items and access them from any device.
              </p>
              <button
                onClick={() => (window.location.href = "/login")}
                className="px-8 py-3 bg-[#4a4741] text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Log In
              </button>
            </div>
          </div>
        ) : wishList?.length === 0 ? (
          // Empty Wishlist State
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
            <div className="max-w-md mx-auto text-center">
              <div className="w-24 h-24 bg-linear-to-br from-red-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Your Wishlist is Empty
              </h3>
              <p className="text-gray-600 mb-8">
                Start adding items to your wishlist by clicking the heart icon
                on products you love. They'll be saved here for easy access.
              </p>
              <button
                onClick={() => (window.location.href = "/")}
                className="px-8 py-3 bg-[#4a4741] text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          </div>
        ) : (
          // Wishlist Items
          <div className="space-y-4">
            {wishList.map((item) => (
              <div
                key={item._id || item.id}
                className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all ${
                  removingItem === item._id ? "opacity-50 scale-95" : ""
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-6">
                    {/* Product Image */}
                    <div className="relative shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-32 h-32 object-cover rounded-xl"
                      />
                      <button
                        onClick={() => handleRemoveFromWishlist(item._id)}
                        className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-50 transition-colors group"
                      >
                        <X className="w-4 h-4 text-gray-600 group-hover:text-red-600" />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {item.title || item.name}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                      <div className="flex items-center gap-4">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            ₦
                            {(
                              (item.price || 0) * (item.quantity || 1)
                            ).toLocaleString()}
                          </span>
                          {item.originalPrice &&
                            item.originalPrice > item.price && (
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                ₦{item.originalPrice.toLocaleString()}
                              </span>
                            )}
                        </div>
                        {item.inStock !== undefined && !item.inStock && (
                          <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                            Out of Stock
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex flex-col gap-3">
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={item.inStock === false}
                        className="flex items-center gap-2 px-6 py-3 bg-[#4a4741] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleRemoveFromWishlist(item._id)}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Mobile Actions */}
                  <div className="md:hidden mt-4 flex gap-3">
                    <button
                      onClick={() => handleAddToCart(item)}
                      disabled={item.inStock === false}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#4a4741] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-300"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(item._id)}
                      className="px-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Box */}
        {wishList?.length > 0 && (
          <div className="mt-8 bg-linear-to-br from-pink-50 to-red-50 rounded-xl p-6 border border-pink-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Save Your Favorites
                </h4>
                <p className="text-sm text-gray-700">
                  Items in your wishlist are saved across all your devices. Get
                  notified when prices drop or items are back in stock.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Move All Button */}
        {wishList?.length > 0 && (
          <button
            onClick={handleMoveAllToCart}
            className="md:hidden fixed bottom-6 right-6 flex items-center gap-2 px-6 py-4 bg-[#4a4741] text-white rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all z-10"
          >
            <ShoppingCart className="w-5 h-5" />
            Move All to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
