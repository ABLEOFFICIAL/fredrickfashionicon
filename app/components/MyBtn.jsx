import Link from "next/link";
import React from "react";

const MyBtn = ({ children, classname, to, onClick }) => {
  return (
    <Link onClick={onClick} href={to} className={`${classname} cursor-pointer`}>
      {children}
    </Link>
  );
};

export default MyBtn;
