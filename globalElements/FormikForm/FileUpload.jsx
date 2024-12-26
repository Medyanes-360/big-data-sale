"use client";
import React from "react";

function FileUpload({ text = "Upload File", ...props }) {
  const handleFileChanged = (e) => {
    console.log(e.target.files, "dosya yüklendi");
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => document.getElementById("file-input").click()}
        {...props}
      >
        {text}
        <input
          type="file"
          className="hidden invisible"
          id="file-input"
          onChange={handleFileChanged}
        />
      </button>
    </div>
  );
}

export default FileUpload;
