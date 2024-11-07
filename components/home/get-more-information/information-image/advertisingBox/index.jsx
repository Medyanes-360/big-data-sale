import React from "react";

const AdvertisingBox = ({ text, icon, className }) => {
  return (
    <div
      className={`shadow-custom backdrop-blur-custom w-fit h-[56.14px] flex items-center justify-center gap-x-2 px-3 bg-softedWhite border border-solid border-customGray rounded-[16px] ${className}`}
    >
      <span className="text-black text-sm font-Inter">{text}</span>
      {icon}
    </div>
  );
};

export default AdvertisingBox;
