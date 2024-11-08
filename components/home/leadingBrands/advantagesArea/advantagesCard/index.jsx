import React from "react";

const AdvantagesCard = ({ icon, title }) => {
  return (
    <div className="flex items-center justify-center gap-x-3 text-sm text-gray700 font-Inter font-medium">
      <span className="w-[44px] h-[44px]  bg-gray50 rounded-xl flex items-center justify-center">
        {icon}
      </span>
      {title}
    </div>
  );
};

export default AdvantagesCard;
