import React from "react";

const Input = ({
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  className,
  ...props
}) => {
  return (
    <input
      type={type}
      className={className}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
