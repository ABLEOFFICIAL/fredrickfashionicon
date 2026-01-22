"use client";
import { Search } from "lucide-react";
import React, { useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  setSearchProduct,
  setShowSearchModal,
  setproductCategory,
  setProductFilter,
} from "../store/contextSlice";
import { usePathname, useRouter } from "next/navigation";

export default function SearchModal() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchProduct, filteredProducts, showSearchModal, productCategory } =
    useSelector((state) => state.context);
  const pathname = usePathname();
  const modalRef = useRef(null);

  // Define categories
  const categories = [
    { name: "Clothes", category: "Clothes" },
    { name: "Shoes", category: "Shoes" },
    { name: "Bags", category: "Bags" },
  ];

  const handleCloseModal = () => {
    dispatch(setShowSearchModal(false));
    dispatch(setSearchProduct(""));
  };

  // Close when clicking outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    if (showSearchModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchModal, dispatch]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    if (showSearchModal) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [showSearchModal, dispatch]);

  // Close on route change
  useEffect(() => {
    dispatch(setShowSearchModal(false));
  }, [pathname, dispatch]);

  useEffect(() => {
    if (showSearchModal) {
      dispatch(filterProducts());
    }
  }, [searchProduct, dispatch, showSearchModal]);

  useEffect(() => {
    dispatch(filterProducts());
  }, [productCategory, dispatch]);

  // Handle search input change
  const handleSearchChange = (e) => {
    dispatch(setSearchProduct(e.target.value));
    dispatch(setproductCategory("All"));
    dispatch(setProductFilter("All"));
  };

  // Check if search matches a category
  const matchedCategory = useMemo(() => {
    if (!searchProduct) return null;

    const searchLower = searchProduct.toLowerCase().trim();
    return categories.find((cat) =>
      cat.name.toLowerCase().includes(searchLower)
    );
  }, [searchProduct]);

  // Handle category click - ONE CLICK goes to discover page
  const handleCategoryClick = (category) => {
    dispatch(setproductCategory(category));
    dispatch(setProductFilter("All"));
    router.push("/discover");
    handleCloseModal();
  };

  // Handle product click
  const handleProductClick = (productId) => {
    router.push(`/discover/${productId}`);
    handleCloseModal();
  };

  if (!showSearchModal) return null;

  const showCategoryResult = matchedCategory && searchProduct;
  const showProductResults =
    !matchedCategory && filteredProducts.length > 0 && searchProduct;
  const showNoResults =
    searchProduct && !matchedCategory && filteredProducts.length === 0;
  const showSuggestions = !searchProduct;

  return (
    <main className="fixed inset-0 z-50">
      {/* Transparent backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"></div>

      {/* Modal content */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-11/12 sm:w-3/4 md:w-2/5 max-w-2xl">
        <div
          ref={modalRef}
          className="bg-[#f7f1e8] rounded-sm shadow-lg border border-black/10 max-h-[70vh] overflow-hidden flex flex-col"
        >
          {/* Search Input Section */}
          <div className="p-6 flex items-center gap-4 border-b border-black/10">
            <div className="flex-1 relative">
              <Search
                size={18}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={searchProduct}
                onChange={handleSearchChange}
                placeholder="search for clothes, shoes, bags or products..."
                className="pl-7 pr-3 py-3 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent"
                autoFocus
              />
            </div>
            <button
              onClick={handleCloseModal}
              className="underline font-bold text-sm cursor-pointer hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
          </div>

          {/* Results/Suggestions Section */}
          <div className="p-6 flex flex-col gap-4 overflow-y-auto">
            {/* Category Result - ONE CLICK to discover */}
            {showCategoryResult && (
              <>
                <span className="font-bold text-base">Category</span>
                <ul className="flex flex-col gap-3">
                  <li
                    onClick={() =>
                      handleCategoryClick(matchedCategory.category)
                    }
                    className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-black/5 transition-colors group border border-black/10"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Search size={18} className="text-blue-600" />
                    </div>
                    <span className="font-semibold text-base capitalize group-hover:text-blue-600">
                      {matchedCategory.name}
                    </span>
                  </li>
                </ul>
              </>
            )}

            {/* Product Results - No price display */}
            {showProductResults && (
              <>
                <span className="font-bold text-base">Products</span>
                <ul className="flex flex-col gap-3">
                  {filteredProducts.map((product) => (
                    <li
                      key={product._id}
                      onClick={() => handleProductClick(product._id)}
                      className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-black/5 transition-colors group"
                    >
                      <Search
                        size={16}
                        className="text-gray-400 group-hover:text-blue-600"
                      />
                      <span className="font-medium text-sm group-hover:text-blue-600">
                        {product.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* No Results */}
            {showNoResults && (
              <div className="text-center py-8">
                <p className="text-sm text-gray-500 mb-2">
                  No products found for "{searchProduct}"
                </p>
                <p className="text-xs text-gray-400">
                  Try searching for clothes, shoes, or bags
                </p>
              </div>
            )}

            {/* Suggestions - Categories when search is empty */}
            {showSuggestions && (
              <>
                <span className="font-bold text-base">Categories</span>
                <ul className="flex flex-col gap-3">
                  {categories.map((cat) => (
                    <li
                      key={cat.category}
                      onClick={() => handleCategoryClick(cat.category)}
                      className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-black/5 transition-colors group"
                    >
                      <Search
                        size={16}
                        className="text-gray-400 group-hover:text-blue-600"
                      />
                      <span className="font-medium text-sm capitalize group-hover:text-blue-600">
                        {cat.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
