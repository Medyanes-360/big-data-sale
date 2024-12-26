"use client";
import React from "react";
import { useField, ErrorMessage } from "formik";

function Textarea({ label, labelClassName, ...props }) {
  const [field, meta, helpers] = useField(props?.name);

  return (
    <>
      <label className={labelClassName}>{label}</label>
      <textarea
        {...field}
        {...props}
        className={`${props.className} transition-all duration-500 ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        }`}
      />
      <ErrorMessage
        component="span"
        name={props?.name}
        className={`text-red-500 text-sm font-medium  transition-all duration-500 ${
          meta.touched && meta.error ? "visible" : "invisible"
        }`}
      />
    </>
  );
}

export default Textarea;
