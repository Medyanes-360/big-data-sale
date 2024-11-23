import Icons from "@/public/assets/icons/Icons";
import React from "react";

const ShowBtn = ({ setOpen, open }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-[60px] h-[60px] lg:w-[100px] lg:mx-auto lg:h-[100px] flex-shrink-0 mb-2 lg:mb-0  flex items-center justify-center rounded-full border-[7px] border-solid border-[#FFFFFF66] backdrop-blur-[44px] bg-[#FFFFFF3D]"
    >
      <Icons.PlayBtn className="w-[26px] h-[26px] lg:w-[44px] lg:h-[44px]" />
    </button>
  );
};

export default ShowBtn;
