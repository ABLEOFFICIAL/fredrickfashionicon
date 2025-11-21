import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Liked({ onClick, className }) {
  return <FaHeart onClick={onClick} className={className} />;
}
