import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="flex w-fit p-3 items-center  font-Inter font-medium bg-tertiary-800 text-[12px] sm:text-lg rounded-[10.38px] h-[41.53px] text-white-default">
      {title}
    </span>
  );
};

export default Badge;
