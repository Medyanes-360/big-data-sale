"use client";
import React from "react";
import { useField } from "formik";

function Textarea({ label, labelClassName, ...props }) {
  const [field, meta, helpers] = useField(props?.name);

  return (
    <>
      <label className={labelClassName}>{label}</label>
      <textarea {...field} {...props} />
    </>
  );
}

export default Textarea;
