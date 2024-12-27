"use client";
import React from "react";
import { useField, ErrorMessage } from "formik";

function FileUpload({ text = "Upload File", ...props }) {
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
    </div>
  );
}

export default FileUpload;
