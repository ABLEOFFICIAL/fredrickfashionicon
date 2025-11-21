import { X } from "lucide-react";
import React from "react";

const XBar = ({ classname, onclick }) => {
  return <X onClick={onclick} className={classname} />;
};

export default XBar;
