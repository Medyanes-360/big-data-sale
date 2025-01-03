import React from "react";

const PacketBox = ({ tabIndex, icon, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`md:border-b-4 md:border-solid text-lg h-[163px] font-normal text-tertiary-900 rounded-[4px] flex flex-col gap-y-6 justify-center items-center p-5 ${
        tabIndex ? "md:border-b-tertiary-500" : "md:border-b-transparent"
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default PacketBox;
