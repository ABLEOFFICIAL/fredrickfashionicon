import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setproductCategory,
  filterProducts,
  setProductFilter,
} from "@/app/store/contextSlice";
import { Store, TrendingUp, Sparkles, Tag, Star } from "lucide-react";
import DarkLogo from "@/app/components/DarkLogo";

const Category = () => {
  const { productCategory, productFilter } = useSelector(
    (state) => state.context
  );
  const dispatch = useDispatch();

  // Handle category click (Clothes, Bags, Shoes...)
  const handleCategoryClick = (category) => {
    dispatch(setproductCategory(category));
    dispatch(setProductFilter("All")); // reset filters when category changes
    dispatch(filterProducts());
  };

  // Handle filter click (Trending, Popular, Sales...)
  const handleFilterClick = (filter) => {
    dispatch(setProductFilter(filter));
    dispatch(filterProducts());
  };

  // Lists
  const categories = ["All", "Clothes", "Shoes", "Jewelry", "Bags"];
  const filters = ["All", "Trending", "Popular", "New Arrivals", "Sales"];

  // Icons mapping for filters
  const filterIcons = {
    Trending: TrendingUp,
    Popular: Star,
    "New Arrivals": Sparkles,
    Sales: Tag,
  };

  return (
    <div className="min-h-screen sticky top-0 w-72 bg-[#4a4741] text-[#f7f1e8] z-30 hidden md:block shadow-2xl">
      {/* Header */}
      {/* <div className="flex items-center gap-2 border-b border-[#80776f]/30 h-28 px-6 bg-[#4a4741]/50 backdrop-blur-sm">
        <DarkLogo className="w-12 h-12" />
        <div className="border-l border-[#80776f]/50 pl-3">
          <span className="text-base font-bold block leading-tight">
            Fredrick
          </span>
          <span className="text-xs font-light opacity-90">Fashion Icon</span>
        </div>
      </div> */}

      <div className="p-6 space-y-6">
        {/* Category Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-1 bg-[#f7f1e8] rounded-full"></div>
            <h3 className="font-bold text-sm uppercase tracking-wider">
              Category
            </h3>
          </div>

          <div className="space-y-1.5">
            {categories.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryClick(item)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                  item === productCategory
                    ? "bg-[#f7f1e8] text-[#4a4741] font-semibold shadow-lg transform scale-[1.02]"
                    : "text-[#f7f1e8] hover:bg-[#5a5451] hover:pl-5"
                }`}
              >
                {item === "All" && (
                  <Store
                    className={`w-4 h-4 ${
                      item === productCategory
                        ? "text-[#4a4741]"
                        : "text-[#f7f1e8]/70 group-hover:text-[#f7f1e8]"
                    }`}
                  />
                )}
                {item === "Jewelry" && (
                  <Sparkles
                    className={`w-4 h-4 ${
                      item === productCategory
                        ? "text-[#4a4741]"
                        : "text-[#f7f1e8]/70 group-hover:text-[#f7f1e8]"
                    }`}
                  />
                )}
                <span className="text-sm">{item}</span>
                {item === productCategory && (
                  <div className="ml-auto w-1.5 h-1.5 bg-[#4a4741] rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-[#80776f] to-transparent"></div>

        {/* Filter Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-1 bg-[#f7f1e8] rounded-full"></div>
            <h3 className="font-bold text-sm uppercase tracking-wider">
              Filter by
            </h3>
          </div>

          <div className="space-y-1.5">
            {filters.map((item, idx) => {
              const Icon = filterIcons[item];
              return (
                <button
                  key={idx}
                  onClick={() => handleFilterClick(item)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                    item === productFilter
                      ? "bg-[#f7f1e8] text-[#4a4741] font-semibold shadow-lg transform scale-[1.02]"
                      : "text-[#f7f1e8] hover:bg-[#5a5451] hover:pl-5"
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`w-4 h-4 ${
                        item === productFilter
                          ? "text-[#4a4741]"
                          : "text-[#f7f1e8]/70 group-hover:text-[#f7f1e8]"
                      }`}
                    />
                  )}
                  <span className="text-sm">{item}</span>
                  {item === productFilter && (
                    <div className="ml-auto w-1.5 h-1.5 bg-[#4a4741] rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="mt-8 bg-linear-to-br from-[#f7f1e8] to-[#e5dfd6] p-5 rounded-xl text-[#4a4741] shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="w-5 h-5" />
            <h4 className="font-bold text-sm">Special Offer</h4>
          </div>
          <p className="text-xs mb-3 opacity-80">
            Get up to 50% off on selected items this week!
          </p>
          <button className="w-full bg-[#4a4741] text-[#f7f1e8] py-2 px-4 rounded-lg text-xs font-semibold hover:bg-[#3a3631] transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
