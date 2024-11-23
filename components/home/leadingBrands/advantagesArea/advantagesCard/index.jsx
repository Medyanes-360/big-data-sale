import React from "react";

const AdvantagesCard = ({ icon, title }) => {
  return (
    <div className="flex w-full items-center lg:justify-center gap-x-3 text-[10px] leading-3 xl:text-sm text-gray700 font-Inter font-medium">
      <span className="w-[44px] h-[44px]  bg-b rounded-xl flex items-center justify-center">
        {icon}
      </span>
      {title}
    </div>
  );
};

export default AdvantagesCard;
