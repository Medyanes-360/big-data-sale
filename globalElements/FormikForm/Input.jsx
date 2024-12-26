"use client";
import React from "react";
import { useField, ErrorMessage } from "formik";

// as = aşağıdaki error componentinin olması istediğin etiket anlamına geliyor mesela div - span-vs.
//labelClassName = labele verilecek className
//kalan propslar inputa ekleniyor direk className vs
//label ise labelin alacağı text anlamına geliyor
function Input({ label, as = "span", labelClassName, ...props }) {
  const [field, meta, helpers] = useField(props?.name);

  return (
    <>
      <label className={labelClassName}>{label}</label>
      <input
        {...field}
        {...props}
        className={`${props.className} transition-all duration-500 ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        }`}
      />
      <ErrorMessage
        component={as}
        name={props?.name}
        className={`text-red-500 text-sm font-medium  transition-all duration-500 ${
          meta.touched && meta.error ? "visible" : "invisible"
        }`}
      />
    </>
  );
}

export default Input;
