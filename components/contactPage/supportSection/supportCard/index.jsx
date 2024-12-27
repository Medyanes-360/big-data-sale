import Image from "next/image";
import React from "react";

function SupportCard({ title, btntitle, img }) {
  return (
    <>
      <div className="flex flex-col w-full flex-1 items-center justify-center gap-[12px] rounded-[26px] shadow-supportCard h-full  p-6 pb-10 px-6">
        <Image src={img} alt="Picture of the author" />
        <span className="text-gray-700 text-2xl font-Inter font-medium">
          {title}
        </span>
        <button className="flex justify-center items-center w-full h-[56px] bg-tertiary400 px-8 text-white-default gap-3 rounded-[7px]">
          <span className="font-lexend text-[17px] font-medium leading-[56px]">
            {btntitle}
          </span>
        </button>
      </div>
    </>
  );
}

export default SupportCard;
