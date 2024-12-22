"use client";
import React from "react";
import { useField, ErrorMessage } from "formik";

function Textarea({ label, labelClassName, ...props }) {
  const [field, meta, helpers] = useField(props?.name);

  return (
    <>
      <label className={labelClassName}>{label}</label>
      <textarea {...field} {...props} />
      <ErrorMessage
        component="span"
        name={props?.name}
        className="text-red-500 text-sm font-medium"
      />
    </>
  );
}

export default Textarea;
