import { Pen } from "lucide-react";
import React from "react";

const OrderCard = ({ children }) => {
  return (
    <div className="w-full h-32 border border-[#4a4741]/10 shadow-md rounded-xl flex justify-between items-center gap-4 px-5">
      {children}
    </div>
  );
};

export default OrderCard;
