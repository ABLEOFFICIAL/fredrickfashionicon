// File: frontend/app/discover/components/FilterBlock.jsx
import React, { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setproductCategory,
  filterProducts,
  setProductFilter,
} from "@/app/store/contextSlice";

const FilterBlock = () => {
  const { productCategory, productFilter } = useSelector(
    (state) => state.context
  );
  const dispatch = useDispatch();
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Categories and filters
  const categories = ["All", "Clothes", "Shoes", "Jewelry", "Bags"];
  const filters = ["All", "Trending", "Popular", "New Arrivals", "Sales"];

  // Handle category selection
  const handleCategoryClick = (category) => {
    dispatch(setproductCategory(category));
    dispatch(setProductFilter("All")); // reset filters when category changes
    dispatch(filterProducts());
  };

  // Handle filter selection
  const handleFilterClick = (filter) => {
    dispatch(setProductFilter(filter));
    dispatch(filterProducts());
  };

  // Clear all filters
  const clearFilters = () => {
    dispatch(setproductCategory("All"));
    dispatch(setProductFilter("All"));
    dispatch(filterProducts());
  };

  return (
    <>
      {/* Mobile/Tablet Filters - Hidden on lg screens and above */}
      <div className="lg:hidden px-3 sm:px-4 py-3 sm:py-4  sticky top-0 z-20 ">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Filter Modal Button */}
          <button
            onClick={() => setShowMobileFilters(true)}
            className="flex items-center gap-2 bg-[#4a4741] text-[#f7f1e8] px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-[#3a3631] transition-colors shadow-md"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Filters</span>
            {(productCategory !== "All" || productFilter !== "All") && (
              <span className="bg-[#f7f1e8] text-[#4a4741] text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-bold">
                {(productCategory !== "All" ? 1 : 0) +
                  (productFilter !== "All" ? 1 : 0)}
              </span>
            )}
          </button>

          {/* Horizontal Scroll Categories */}
          <div
            className="flex gap-2 overflow-x-auto flex-1 pb-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  productCategory === category
                    ? "bg-[#4a4741] text-[#f7f1e8] shadow-md"
                    : "bg-white text-[#4a4741] border border-[#4a4741]/30 hover:border-[#4a4741] hover:shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters Badge */}
        {(productCategory !== "All" || productFilter !== "All") && (
          <div className="mt-2 sm:mt-3 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-600 font-medium">Active:</span>
            {productCategory !== "All" && (
              <span className="inline-flex items-center gap-1.5 bg-[#4a4741]/10 text-[#4a4741] px-2.5 py-1 rounded-full text-xs font-medium">
                {productCategory}
                <button
                  onClick={() => handleCategoryClick("All")}
                  className="hover:bg-[#4a4741]/20 rounded-full p-0.5 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {productFilter !== "All" && (
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium">
                {productFilter}
                <button
                  onClick={() => handleFilterClick("All")}
                  className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-xs text-red-600 hover:text-red-700 font-medium underline ml-1"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[85vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-200 sticky top-0 bg-white">
              <h3 className="text-base sm:text-lg font-semibold text-[#4a4741]">
                Filters & Categories
              </h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto flex-1 p-4 sm:p-5">
              <div className="space-y-5 sm:space-y-6">
                {/* Category Section */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Category
                  </h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          handleCategoryClick(category);
                          if (window.innerWidth < 640) {
                            setShowMobileFilters(false);
                          }
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium text-sm ${
                          productCategory === category
                            ? "bg-[#4a4741] text-[#f7f1e8] shadow-md"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter Section */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Filter By
                  </h4>
                  <div className="space-y-2">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => {
                          handleFilterClick(filter);
                          if (window.innerWidth < 640) {
                            setShowMobileFilters(false);
                          }
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium text-sm ${
                          productFilter === filter
                            ? "bg-[#4a4741] text-[#f7f1e8] shadow-md"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-gray-200 bg-white sticky bottom-0">
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    clearFilters();
                    setShowMobileFilters(false);
                  }}
                  className="flex-1 py-3 text-sm font-medium text-[#4a4741] bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="flex-1 py-3 text-sm font-medium text-white bg-[#4a4741] hover:bg-[#3a3631] rounded-lg transition-colors shadow-md"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterBlock;
