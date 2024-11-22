import React from "react";

const AdvertisingBox = ({ text, icon, className }) => {
  return (
    <div
      className={`drop-shadow-custom-combined backdrop-blur-custom w-fit h-[36.7px] sm:h-[56.14px] flex items-center justify-center gap-x-2 lg:gap-x-5 px-3 lg:px-5 bg-white-24 border border-solid border-gray-19 rounded-[16px] ${className}`}
    >
      <span className="text-black text-[9px] leading-4 md:text-sm font-Inter">
        {text}
      </span>
      <span className="w-5 h-5 lg:w-8 bg-white-900 lg:h-8 flex items-center justify-center rounded-[6px] rotate-[0.24deg] drop-shadow-custom-combined-1">
        {icon}
      </span>
    </div>
  );
};

export default AdvertisingBox;
