import React from "react";
import Picture from "./Picture";
import ShowBtn from "./showBtn";
import Content from "./Content";

const BannerImage = ({ open, setOpen }) => {
  return (
    <div className="grid grid-cols-2 h-full  min-h-full  items-start py-5 overflow-hidden px-4 gap-x-3 ">
      <Picture />
      <div className="flex items-center gap-x-16 pt-36  lg:-translate-x-[50px]">
        <ShowBtn setOpen={setOpen} open={open} />
        <Content />
      </div>
    </div>
  );
};

export default BannerImage;
