import React from "react";

const MyInput = ({ type, name, value, placeholder, onChange, classname }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={classname}
      />
    </>
  );
};

export default MyInput;
