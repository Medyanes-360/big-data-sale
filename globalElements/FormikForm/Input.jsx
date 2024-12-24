"use client";
import React from "react";
import { useField, ErrorMessage } from "formik";

function Input({ label, as = "span", labelClassName, ...props }) {
  const [field, meta, helpers] = useField(props?.name);

  return (
    <>
      <label className={labelClassName}>{label}</label>
      <input {...field} {...props} />
      <ErrorMessage
        component={as}
        name={props?.name}
        className="text-red-500 text-sm font-medium h-[15px]"
      />
    </>
  );
}

export default Input;
