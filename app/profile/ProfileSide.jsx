"use client";
import React, { useContext, useState } from "react";
import { BsBox2 } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { UserProfile } from "../components/NavBarMd";
import Like from "../components/Like";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { LogOut } from "lucide-react";

export const Order = () => {
  return <BsBox2 className="size-5 stroke-1" />;
};
export const Mail = () => {
  return <CiMail className="size-5 stroke-1" />;
};
export const Payment = () => {
  return <MdOutlinePayment className="size-5" />;
};

const ProfileSide = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop(); // gets the last segment
  const { categories } = useSelector((state) => state.context);

  return (
    <div className="h-[450px] w-1/4 bg-[#4a4741] rounded-sm">
      <div className="flex flex-col justify-between h-4/5">
        <div className="flex flex-col gap-7 p-5">
          {[
            { title: "Profile", icon: <UserProfile /> },
            { title: "Orders", icon: <Order /> },
            { title: "Inbox", icon: <Mail /> },
            {
              title: "Wishlist",
              icon: <Like className={"size-5 stroke-1"} />,
            },
            { title: "Payment", icon: <Payment /> },
          ].map((item, idx) => {
            return (
              <span
                onClick={() =>
                  router.push(
                    `/profile/${item.title.toLowerCase().replace(" ", "-")}`
                  )
                }
                key={idx}
                className={`flex items-center gap-3 ${
                  currentPath === item.title.toLowerCase().replace(" ", "-")
                    ? "bg-[#f7f1e8] text-[#4a4741] rounded-xl px-3 py-2"
                    : "cursor-pointer text-[#f7f1e8]"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </span>
            );
          })}
        </div>
        <div>
          <span className="text-base font-light pt-4 mx-start cursor-pointer w-max text-gray-300 flex items-center gap-2 px-5 py-2">
            <LogOut />
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSide;
