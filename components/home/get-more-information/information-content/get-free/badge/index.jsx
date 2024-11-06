import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="flex w-fit p-3 items-center gap-x-2 font-Inter font-medium bg-tertiary800 text-lg rounded-[10.38px] h-[41.53px] text-white">
      {title}
    </span>
  );
};

export default Badge;
