import React from "react";
import Image from "next/image";
import Icons from "@/public/assets/icons/Icons";
import ButtonComponent from "@/globalElements/Button/index.jsx";

const BlogCard = ({ title, summary, likes, date, image }) => {
  return (
    <div
      className="flex flex-col bg-[#2C1338] rounded-[12px] p-4 w-full h-[351.11px] shadow-lg overflow-hidden gap-1 mx-auto z-15"
    >
      {/* Üst Bilgiler */}
      <div className="flex justify-between w-full items-center gap-4">
        <div className="flex items-center gap-2">
          <Icons.Calendar size={18.7} />
          <p className="text-[#fff] font-lexend font-semibold text-[12.46px] leading-[18px]">
            {date}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Icons.Like />
          <p className="text-[#fff] font-lexend font-semibold text-[12.46px] leading-[18px]">
            {likes} Like
          </p>
        </div>
      </div>

      {/* Görsel */}
      <div className="w-full h-[155.8px]">
        <Image
          src={image}
          alt={title}
          width={345.87}
          height={155.8}
          className="rounded-[12px] object-cover w-full h-full"
        />
      </div>

      {/* Başlık ve İçerik */}
      <h2 className="text-[#fff] font-bold leading-[22px] font-Inter truncate">
        {title}
      </h2>
      <p className="text-[12.46px] leading-[14px] text-[#ddd] font-normal tracking-[-0.015em] truncate">
        {summary}
      </p>

      {/* Buton ve Etiketler */}
      <div className="flex flex-row w-full items-stretch justify-between gap-4 mt-auto">
        <ButtonComponent className="flex-1 flex items-center gap-2 bg-[#451E99] text-white rounded-[6px] px-4 py-2">
          <p className="text-[13.24px] font-Inter font-medium text-[#fff]">Hemen Oku</p>
          <Icons.ArrowRight size={18.7} className="text-[#fff]" />
        </ButtonComponent>
        <div className="flex-1 flex flex-col items-start gap-2 bg-[#E6DBFF30] p-2 rounded-[6px]">
          <p className="text-[#fff] text-left font-Inter font-medium text-[12.46px]">
            #Başarıya Giden
          </p>
          <p className="text-[#fff] text-left font-Inter font-medium text-[12.46px]">
            #Başarıya Giden
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
