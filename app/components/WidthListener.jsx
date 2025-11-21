// components/WidthListener.jsx
"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScreenWidth } from "../store/widthSlice";

export default function WidthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateWidth = () => dispatch(setScreenWidth(window.innerWidth));

    updateWidth(); // initialize on mount
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [dispatch]);

  return null; // This component doesn’t render anything
}
