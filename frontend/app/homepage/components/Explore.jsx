"use client";
import Loading from "@/app/components/Loadiing";
import MyBtn from "@/app/components/MyBtn";
import {
  filterProducts,
  setproductCategory,
  setProductFilter,
} from "@/app/store/contextSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Explore = () => {
  //   const { productCategory, setproductCategory } = useContext(WidthContext);
  const dispatch = useDispatch();
  const router = useRouter();
  const { screenWidth } = useSelector((state) => state.width);
  const [isLoading, setIsLoading] = useState(false);
  const explores = [
    {
      bg: "/explore-1.png",
      header: "FFI Bags",
      text: "From 349",
      category: "Bags",
      id: "692606b924e0b307b67184cb",
    },
    {
      bg: "/explore-4.PNG",
      header: "FFI Foot-wears",
      text: "From 349",
      category: "Shoes",
      id: "6926064524e0b307b67184b3",
    },
  ];
  const handleExplore = (category) => {
    router.push("/discover");
    dispatch(setproductCategory(category));
  };
  return (
    <div
      id="explore-section"
      className="grid grid-cols-1 gap-5 my-5 px-5 md:grid-cols-2 md:w-[85%] md:m-auto  md:py-10 md:h-[70vh]"
    >
      {explores.map((item, index) => {
        return (
          <div
            key={index}
            className="md:w-full md:m-auto md:h-[60vh] relative "
          >
            <img
              src={`${item.bg}`}
              className="h-72 w-full m-auto rounded-2xl object-bottom object-cover md:h-full"
            />
            <div className="absolute h-full w-full bg-linear-to-b from-neutral-950/0 to-neutral-950/70 top-0 left-0 rounded-2xl hidden md:block"></div>
            <div className="flex w-full justify-between items-center py-3 md:absolute md:bottom-0 md:p-10 ">
              <div className="">
                <h2 className="text-2xl text-[#4a4741]  md:text-[#f7f1e8]">
                  {item.header}
                </h2>
                <p className="text-base font-semibold text-[#4a4741]  md:text-[#f7f1e8]">
                  {item.text}
                </p>
              </div>
              <div className="flex gap-5 items-center ">
                <span
                  onClick={() => {
                    setIsLoading(true);
                    router.push("/discover");
                    dispatch(setproductCategory(item.category));
                    dispatch(setProductFilter("All"));
                    dispatch(filterProducts());
                  }}
                  className={`${
                    screenWidth < 768
                      ? "hidden"
                      : "block cursor-pointer bg-transparent border border-[#f7f1e8] text-[#f7f1e8] px-5 py-3 rounded-3xl hover:bg-[#3a3631]"
                  }`}
                >
                  {isLoading ? <Loading /> : "Explore"}
                </span>
                <Link
                  href={`/discover/${item.id}`}
                  className="bg-[#4a4741] px-5 py-3 rounded-3xl md:text-[#4a4741] md:bg-[#f7f1e8] cursor-pointer hover:bg-[#3a3631] md:hover:bg-[#e0dcca]"
                >
                  Shop
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
