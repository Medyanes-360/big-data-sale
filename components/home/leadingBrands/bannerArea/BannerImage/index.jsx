import React from "react";
import Picture from "./Picture";
import ShowBtn from "./showBtn";
import Content from "./Content";

const BannerImage = ({ open, setOpen }) => {
  return (
    <div className="grid grid-cols-3 h-full  min-h-full items-center px-4 gap-x-3">
      <Picture />
      <ShowBtn setOpen={setOpen} open={open} />
      <Content />
    </div>
  );
};

export default BannerImage;
