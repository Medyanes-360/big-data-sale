"use client";
import React from "react";
import { useField, ErrorMessage } from "formik";

function FileUpload({ text = "Upload File", errorClassName, ...props }) {
  const [field, meta, helpers] = useField(props?.name);

  const { setValue } = helpers;

  const handleFileChanged = (e) => {
    setValue(e.target.files);
  };

  console.log(meta);

  return (
    <div>
      <button
        type="button"
        onClick={() => document.getElementById("file").click()}
        className={props.className}
        {...props}
        {...field}
      >
        {meta?.value?.file ? "Dosya Yüklendi" : text}
        <input
          type="file"
          className="hidden invisible"
          id="file"
          accept=".jpg,.png,.pdf"
          onChange={handleFileChanged}
        />
      </button>
      <ErrorMessage
        component="span"
        name={text}
        className={`${errorClassName} ${
          meta.touched && meta.error ? "visible" : "invisible"
        }`}
      />
    </div>
  );
}

export default FileUpload;
