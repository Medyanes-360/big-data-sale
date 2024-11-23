import Icons from "@/public/assets/icons/Icons";
import React from "react";

const ClearButton = ({ onClick }) => {
  return (
    <button
      className="absolute right-2 text-cinder-950 cursor-pointer z-[3] bg-transparent border-none"
      onClick={onClick}
    >
      <Icons.Cancle />
    </button>
  );
};

export default ClearButton;
