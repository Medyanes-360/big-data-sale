import Icons from "@/public/assets/icons/Icons";
import React from "react";

const ShowBtn = ({ setOpen, open }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-[100px] mx-auto h-[100px] flex-shrink-0   flex items-center justify-center rounded-full border-[7px] border-solid border-[#FFFFFF66] backdrop-blur-[44px] bg-[#FFFFFF3D]"
    >
      <Icons.PlayBtn />
    </button>
  );
};

export default ShowBtn;
