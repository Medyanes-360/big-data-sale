import React from "react";

function FileUpload({ text = "Upload File", ...props }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => document.getElementById("file-input").click()}
        {...props}
      >
        {text}
        <input type="file" className="hidden invisible" id="file-input" />
      </button>
    </div>
  );
}

export default FileUpload;
