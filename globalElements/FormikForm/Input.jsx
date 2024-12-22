import React from "react";
import { useField } from "formik";

function Input({ label, labelClassName, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label className={labelClassName}>{label}</label>
      <input {...field} {...props} />
    </>
  );
}

export default Input;
