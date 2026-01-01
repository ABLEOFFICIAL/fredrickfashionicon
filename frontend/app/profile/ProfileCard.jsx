import { Pen } from "lucide-react";
import React from "react";

const ProfileCard = ({ children }) => {
  return (
    <div className="border border-[#4a4741]/10 shadow-md rounded-xl h-[250px] w-full relative">
      {children}
    </div>
  );
};

export default ProfileCard;
