import React from "react";
import Picture from "./Picture";
import ShowBtn from "./showBtn";
import Content from "./Content";

const BannerImage = ({ open, setOpen }) => {
  return (
    <div className="grid grid-cols-2 h-full  min-h-full items-end  md:items-center lg:items-start py-5 overflow-hidden px-4 gap-x-3 ">
      <Picture />
      <div className="flex items-center flex-wrap  md:flex-nowrap gap-x-16 lg:pt-36 -translate-x-[30px] lg:-translate-x-[50px]">
        <ShowBtn setOpen={setOpen} open={open} />
        <Content />
      </div>
    </div>
  );
};

export default BannerImage;
