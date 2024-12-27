"use client";
import React, { memo, useState } from "react";
import { useField, ErrorMessage } from "formik";

function FileUpload({ text = "Upload File", errorClassName, ...props }) {
  const [field, meta, helpers] = useField(props?.name);
  const [dragActive, setDragActive] = useState(false);

  const { setValue } = helpers;

  const handleFileChanged = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue(file); // Formik'in `value` alanına dosya ekleniyor
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      setValue(file); // Dosyayı Formik'in state'ine ekle
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <button
        type="button"
        name="file"
        onClick={() => document.getElementById("file-input").click()}
        className={`${props.className} ${
          meta.value
            ? "!bg-green-500 !text-white-default"
            : "bg-white-default border-gray-300"
        }`}
      >
        {meta.value ? `Yüklenen Dosya: ${meta.value.name}` : text}
      </button>

      {/* Gizli input */}
      <input
        type="file"
        id="file-input"
        className="hidden"
        accept=".jpg,.png,.pdf"
        onChange={handleFileChanged}
      />

      {/* Hata Mesajı */}
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

export default memo(FileUpload);
