"use client";
import Image from "next/image";
import React from "react";
import SupportImg from "../../../public/assets/images/support.png";
import PartnerImg from "../../../public/assets/images/partnership.png";
import SupportCard from "./supportCard";

const support = [
  {
    title: "Support",
    btntitle: "Contact Support",
    img: SupportImg,
  },
  { title: "PartnerShip", btntitle: "Email Adress", img: PartnerImg },
];

function SupportSection() {
  return (
    <div className="flex flex-col items-center w-full h-full lg:h-[456px] gap-8 lg:gap-16 lg:w-[1200px]">
      <div className="text-center">
        <h1 className="text-tertiary400 font-Inter font-bold text-[32px] leading-[54px]">
          İletişim
        </h1>
        <span className="font-Inter text-lg text-gray-500 font-normal">
          size yardım etmeye hazırız
        </span>
      </div>
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        {support?.map((item, index) => {
          return (
            <SupportCard
              key={index + 1}
              title={item.title}
              btntitle={item.btntitle}
              img={item.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SupportSection;
