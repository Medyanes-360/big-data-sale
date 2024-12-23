import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="flex  w-1/4 p-3 justify-center items-center  font-Inter font-medium bg-tertiary-800 text-[12px] sm:text-[18px] rounded-[10.38px] h-[41.53px] text-white-default">
      {title}
    </span>
  );
};

export default Badge;
