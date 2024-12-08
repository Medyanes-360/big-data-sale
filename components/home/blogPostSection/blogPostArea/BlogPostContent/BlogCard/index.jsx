import React from "react";
import Icons from "@/public/assets/icons/Icons";
import ButtonComponent from "@/globalElements/Button/index.jsx";
import Image from "next/image";

const BlogCard = ({ title, summary, author, likes, comments, date }) => {
  return (
    <div className="flex flex-col justify-between h-full px-4 md:px-3">
      <div className="flex flex-wrap justify-start items-center w-full gap-3 md:gap-2">
        <div className="flex items-center space-x-1">
          <Icons.Calendar/>
          <p className=" text-[#061C3D] font-Inter font-semibold text-sm md:text-base">
            {date}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <Icons.Like/>
          <p className=" text-[#061C3D] font-Inter font-medium text-sm md:text-base">
            <span className="font-semibold">{likes}</span> Like
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <Icons.Chat />
          <p className=" text-[#061C3D] font-Inter font-medium text-sm md:text-base">
          <span className="font-semibold">{comments}</span> Comments
          </p>
        </div>
      </div>
      <div className="mt-6 mb-3">  
        {/* kontol ett mt-2 mb-4 dene c */}
        <h2 className="text-[#061C3D] font-extrabold text-[16px] md:text-[20px] leading-4 md:leading-6 font-Inter">
          {title}
        </h2>
      </div>
      <p className="text-[14px] md:text-[18px] leading-4 md:leading-6 text-[#42526B] font-normal mb-[24px]">
        {summary}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-2">
        <ButtonComponent className="w-full md:max-w-[190px] flex items-center gap-[12px] !px-4 bg-tertiary-500 rounded-[7px]">
          <span className="text-[#FFFFFF] text-[13.9px] font-Inter font-medium">
            Daha Fazla
          </span>
          <Icons.ArrowRight className="w-6 h-6 text-white-default" />
        </ButtonComponent>
        <div className="flex space-x-2 items-start">
          <Image
            src={author.profileImage}
            alt={author.name}
            className="h-11 w-11 rounded-full mr-2"
            width={200}
            height={200}
          />
          <div className="flex flex-col items-start">
            <p className="mb-1">{author.name}</p>
            <p className="text-xs text-[#6A778B]">5 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
