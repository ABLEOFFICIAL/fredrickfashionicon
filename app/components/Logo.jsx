import Image from "next/image";
import React from "react";

const Logo = () => {
  return <Image src={"/logo.png"} alt="logo" height={60} width={60} />;
};

export default Logo;
