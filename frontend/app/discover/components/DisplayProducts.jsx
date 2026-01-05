"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ShoppingCart, Eye } from "lucide-react";
import { useSelector } from "react-redux";

const DisplayProducts = () => {
  const { filteredProducts } = useSelector((state) => state.context);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Check if in wishlist
  // useEffect(() => {
  //   if (product?._id) checkIfInWishlist();
  // }, [product?._id]);

  const checkIfInWishlist = async () => {
    try {
      const { data } = await userAPI.getWishlist();
      const inWishlist = data.wishlist.some((item) => item._id === product._id);
      setIsInWishlist(inWishlist);
    } catch (error) {
      console.error("Error checking wishlist:", error);
    }
  };

  // ✅ Toggle Wishlist
  const toggleWishlist = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setLoading(true);
      await productAPI.wishlist(product._id);
      setIsInWishlist(!isInWishlist);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update wishlist");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add to Cart Function
  // const addToCart = async () => {
  //   if (!selectedSize) {
  //     alert("Please select a size before adding to cart.");
  //     return;
  //   }
  //   if (!selectedColor) {
  //     alert("Please select a color before adding to cart.");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     await cartAPI.addItem(product._id, quantity);
  //     alert("✅ Added to cart!");
  //     dispatch(fetchCart());
  //     // Trigger global cart update event
  //     window.dispatchEvent(new Event("cartUpdated"));
  //   } catch (error) {
  //     alert(error.response?.data?.message || "Failed to add to cart");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <nav className="text-xs sm:text-sm">
            <Link
              href="/"
              className="text-[#4a4741] font-semibold hover:underline"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Shop</span>
          </nav>

          <span className="text-xs sm:text-sm text-gray-600">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-16 sm:py-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-sm text-gray-600">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {filteredProducts.map((product) => (
              <Link
                href={`/discover/${product._id}`}
                key={product._id}
                className="group"
              >
                <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        {/* <button className="p-1.5 sm:p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"> */}
                        <button
                          className="p-1.5 sm:p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                          onClick={toggleWishlist}
                        >
                          {isInWishlist ? (
                            <FaHeart className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
                          ) : (
                            <FaRegHeart className="text-gray-500 size-6 hover:text-red-400" />
                          )}
                        </button>
                        {/* <CiHeart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" /> */}
                        {/* </button> */}
                        <button className="p-1.5 sm:p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                        </button>
                      </div>
                    </div>

                    {/* Quick Add Button - Hidden on mobile */}
                    {/* <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hidden sm:block">
                      <button
                        onClick={addToCart}
                        className="w-full bg-[#4a4741] text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Quick Add
                      </button>
                    </div> */}
                  </div>

                  {/* Product Info */}
                  <div className="p-2.5 sm:p-3 lg:p-4">
                    <h3 className="text-xs sm:text-sm lg:text-base font-medium text-gray-900 mb-1 sm:mb-2 line-clamp-2 group-hover:text-[#4a4741] transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm sm:text-base lg:text-lg font-bold text-[#4a4741]">
                          ₦{Number(product.price).toLocaleString()}
                        </p>
                        {product.originalPrice && (
                          <p className="text-xs text-gray-400 line-through">
                            ₦{Number(product.originalPrice).toLocaleString()}
                          </p>
                        )}
                      </div>

                      {product.discount && (
                        <span className="bg-red-500 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium">
                          -{product.discount}%
                        </span>
                      )}
                    </div>

                    {/* Rating - Optional */}
                    {product.rating && (
                      <div className="flex items-center gap-1 mt-1 sm:mt-2">
                        <div className="flex text-yellow-400 text-xs sm:text-sm">
                          {"★".repeat(Math.floor(product.rating))}
                          {"☆".repeat(5 - Math.floor(product.rating))}
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500">
                          ({product.reviews || 0})
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayProducts;
