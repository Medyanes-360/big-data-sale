import React from "react";
import Icons from "@/public/assets/icons/Icons";
import ButtonComponent from "@/globalElements/Button/index.jsx";
import Image from "next/image";

const BlogCard = ({ title, summary, author, likes, comments, date }) => {
  return (
    <div className="md:p-4 px-[100px] ">
      <div className="flex space-x-0 md:space-x-4 items-center w-full ">
        <div className="flex items-center space-x-2">
          <Icons.Calendar className="ml-4 mr-1" />
          <p className=" text-[#061C3D] font-Inter font-normal text-[14px] leading-[24px]">
            {date}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Icons.Like className="mr-1" />
          <p className=" text-[#061C3D] font-Inter font-extrabold  text-[14px] leading-[24px]">
            {likes} Like
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Icons.Chat className="ml-4 mr-1" />
          <p className=" text-[#061C3D] font-Inter font-normal text-[14px] leading-[24px]">
            {comments} Comments
          </p>
        </div>
      </div>
      <div className="mt-[24px]  mb-[12px]">
        <h2 className="text-[ #061C3D] font-extrabold text-[18px] font-Inter">
          {title}
        </h2>
      </div>
      <p className="text-[15px] text-[#42526B] font-normal mb-[24px]">
        {summary}
      </p>
      <div className="flex items-center gap-4">
        <ButtonComponent className="!py-[14px] flex items-center gap-[11px] !px-[20px]  bg-tertiary-500 rounded-[9.52px]">
          <span className="text-[#FFFFFF] text-[13.9px] font-Inter    font-medium">
            Daha Fazla
          </span>
          <Icons.ArrowRight className="w-4 h-4" color="#FFFFFF" />
        </ButtonComponent>
        <div className="w-[0.9px] h-8 block bg-[#CDD2D8]"></div>
        <div className="flex space-x-2 items-start ">
          <Image
            src={author.profileImage}
            alt={author.name}
            className="w-[44px] h-[44px] rounded-full mr-2"
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
