// Bar.jsx
"use client";

import { FaBars } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setDropDown } from "../store/contextSlice";

const Bar = ({ classname }) => {
  const screenWidth = useSelector((state) => state.width.screenWidth);
  const dispatch = useDispatch();

  // stop click from bubbling up to window
  const openDropdown = (e) => {
    e.stopPropagation();
    dispatch(setDropDown(true));
  };

  return (
    <div
      onClick={openDropdown}
      className="flex gap-3 items-center cursor-pointer"
    >
      <span className={`${screenWidth < 1020 ? "hidden" : "block"}`}>Menu</span>

      <FaBars className={classname} />
    </div>
  );
};

export default Bar;
