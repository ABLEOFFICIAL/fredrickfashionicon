"use client";
import MyBtn from "@/app/components/MyBtn";
import React from "react";
import { useSelector } from "react-redux";

export default function page() {
  const { user, wishList } = useSelector((state) => state.auth);
  return (
    <div className="min-h-[500px] bg-white rounded-sm p-3 text-[#4a4741]">
      <div className="border-b border-neutral-500/30">
        <h2 className="text-2xl font-medium py-3">Wishlist</h2>
      </div>

      {/* 🔁 Add loading and auth-based fallbacks */}
      {!user ? (
        <div className="flex justify-center items-center my-10 text-center w-full">
          <p className="text-neutral-500">
            Please log in to view your wishlist.
          </p>
        </div>
      ) : wishList?.length === 0 ? (
        <div className="flex justify-center items-center my-10 text-center w-full">
          <p className="text-neutral-500">Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-5 my-10">
          {wishList.map((item, idx) => (
            <div key={idx} className="bg-[#f7f1e8] rounded-2xl p-4 flex gap-8">
              <img
                src={item.image}
                alt={item.title}
                className="w-14 rounded-sm object-contain"
              />
              <div className="flex-1">
                <h4 className="font-semibold">
                  <span className="hidden md:block">{item.title}</span>
                </h4>
                <p className="text-sm">
                  <span className="font-semibold">
                    ₦{(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="hidden md:flex gap-3 justify-center items-center p-5">
                <MyBtn to={"/"}>Remove</MyBtn>
                <MyBtn
                  to={"/"}
                  classname="bg-[#4a4741] px-4 py-2 text-base rounded-3xl text-[#f7f1e8]"
                >
                  Add to Cart
                </MyBtn>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
