import React from "react";
import OrderCard from "../OrderCard";

export default function page() {
  return (
    <div className="min-h-[500px] bg-white rounded-sm p-3 text-[#4a4741]">
      <div className="border-b border-neutral-500/30">
        <h2 className="text-2xl font-medium py-3">Orders</h2>
      </div>
      <div className="flex flex-col gap-8 my-5">
        <OrderCard>
          <div className="flex items-center gap-3">
            <img src="/bag1.jpg" className="w-12 bg-cover bg-center" />
            <div className=" px-5 py-2 leading-7">
              <h3 className="font-normal text-lg">Loremipsum dolorsit amet</h3>
              <p className="text-neutral-600 text-sm">Order 1643872611102</p>
              <p className="text-base font-medium">On 26-10-2024</p>
            </div>
          </div>
          <span className="bg-green-400 rounded-sm p-2 text-xs text-white">
            Delivered
          </span>
          <span className="text-sm">See details</span>
        </OrderCard>
        <OrderCard>
          <div className="flex items-center gap-3">
            <img src="/bag1.jpg" className="w-12 bg-cover bg-center" />
            <div className=" px-5 py-2 leading-7">
              <h3 className="font-normal text-lg">Loremipsum dolorsit amet</h3>
              <p className="text-neutral-600 text-sm">Order 1643872611102</p>
              <p className="text-base font-medium">On 26-10-2024</p>
            </div>
          </div>
          <span className="bg-red-400 rounded-sm p-2 text-xs text-white">
            Pending
          </span>
          <span className="text-sm">See details</span>
        </OrderCard>
      </div>
    </div>
  );
}
