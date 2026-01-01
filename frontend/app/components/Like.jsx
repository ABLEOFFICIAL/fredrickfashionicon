import React from "react";
import { CiHeart } from "react-icons/ci";

export default function Like({ onClick, className }) {
  return <CiHeart onClick={onClick} className={className} />;
}
