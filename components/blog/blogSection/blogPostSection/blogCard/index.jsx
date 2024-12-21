import React from "react";
import Icons from "@/public/assets/icons/Icons";
import ButtonComponent from "@/globalElements/Button/index.jsx";

const BlogCard = ({ title, summary, likes, date, label}) => {
  return (
    <div className="flex flex-col w-full lg:w-1/2 gap-3 lg:gap-4 ">
      <div className="flex flex-wrap w-full gap-3 md:gap-4">
        <div className="flex items-center space-x-1">
          <Icons.Calendar />
          <p className=" text-[#061C3D] font-Inter font-semibold text-sm md:text-base">
            {date}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <Icons.Like />
          <p className=" text-[#061C3D] font-Inter font-medium text-sm md:text-base">
            <span className="font-semibold">{likes}</span> Like
          </p>
        </div>
      </div>
      <h2 className="text-[#061C3D] font-semibold text-[16px] md:text-[20px] leading-4 md:leading-6 font-Inter">
        {title}
      </h2>
      <p className="text-[14px] md:text-[18px] leading-4 md:leading-6 text-[#42526B] font-normal">
        {summary}
      </p>
      <div className="flex flex-col md:flex-row w-full items-center gap-1 md:gap-2">
        <ButtonComponent className="w-full md:max-w-[190px] max-h-[44px] lg:max-h-[56px] flex items-center gap-3 bg-tertiary-500 rounded-[7px]">
          <span className="text-white-default text-[17px] font-Inter font-medium">
            Daha Fazla
          </span>
          <Icons.ArrowRight className="text-white-default" />
        </ButtonComponent>
        <div className="md:block hidden h-8 border-[1px] bg-[#CDD2D8]"></div>
        <div className="flex items-center rounded-[4px] bg-[#E6DBFF30] py-3 xl:py-4 w-full px-2 md:max-w-fit">
          <div className="flex flex-wrap items-center font-Inter font-medium gap-2 text-sm text-tertiary-500">
            {label.map((item,i) => {
              return (
                  <span key={i}>#{item}</span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
