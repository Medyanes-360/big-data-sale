import React from "react";
import Icons from "@/public/assets/icons/Icons";

const CardListContent = ({ items }) => {
  // Mock data: iconType ve text içeren array

  return (
    <>
      {items?.map((item, index) => (
        <div
          key={index}
          className="flex !items-start justify-start gap-[13px] mb-[10px]"
        >
          <div className="">
            {/* Dinamik icon seçimi */}
            {item.iconType === "CheckSuccess" ? (
              <Icons.CheckSuccess className="w-[18.81px] h-[18.81px] md:w-[24px] md:h-[24px]" />
            ) : item.iconType === "CheckError" ? (
              <Icons.CheckError className="w-[18.81px] h-[18.81px] md:w-[24px] md:h-[24px]" />
            ) : null}
          </div>
          <span className="text-[10.97px] flex-1 whitespace-pre-line leading-[16.46px] md:text-sm md:leading-[21px]	font-medium	 font-Inter  text-gray-700">
            {item.text}
          </span>
        </div>
      ))}
    </>
  );
};

export default CardListContent;
