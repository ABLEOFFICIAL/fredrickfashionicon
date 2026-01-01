import DarkLogo from "@/app/components/DarkLogo";
import {
  setproductCategory,
  filterProducts,
  setProductFilter,
} from "@/app/store/contextSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

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

  return (
    <div className="min-h-screen sticky top-0 w-80 bg-[#4a4741] text-[#f7f1e8] z-30 px-5 hidden md:block">
      {/* Header */}
      <div className="flex items-center gap-1 border-b h-28">
        <DarkLogo className={"w-10"} />
        <span className="text-base font-semibold border-l pl-2">
          Fredrick Fashion Icon
        </span>
      </div>

      <div className="my-5">
        {/* Category Section */}
        <div className="text-sm border-b border-[#80776f] pb-4 mb-3">
          <h3 className="font-bold">Category</h3>
          <div className="flex flex-col pl-4 gap-2 py-2">
            {categories.map((item, idx) => (
              <span
                key={idx}
                onClick={() => handleCategoryClick(item)}
                className={`transition-colors duration-200 ${
                  item === productCategory
                    ? "bg-[#f7f1e8] p-2 rounded-sm text-[#4a4741] font-semibold"
                    : "text-[#f7f1e8] cursor-pointer hover:text-[#c9c3b9]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="text-sm border-b border-[#80776f] pb-4 mb-3">
          <h3 className="font-bold">Filter by</h3>
          <div className="flex flex-col pl-4 gap-2 py-2">
            {filters.map((item, idx) => (
              <span
                key={idx}
                onClick={() => handleFilterClick(item)}
                className={`transition-colors duration-200 ${
                  item === productFilter
                    ? "bg-[#f7f1e8] p-2 rounded-sm text-[#4a4741] font-semibold"
                    : "text-[#f7f1e8] cursor-pointer hover:text-[#c9c3b9]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
