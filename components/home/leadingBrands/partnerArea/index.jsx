"use client";
import React from "react";
import PartnerCard from "./partnerCard";
import { partnerData, partnerWebData } from "@/public/partnerMockData";

const PartnerArea = () => {
  return (
    <div className="w-full py-10">
      {/* desktop view */}
      <div className="grid-cols-4 sm:grid-cols-5 sm:gap-4 md:py-10 hidden md:grid">
        {partnerWebData?.map((item) => (
          <PartnerCard src={item.image} name={item.name} key={item.id} />
        ))}
      </div>
      {/* mobile view */}

      <div className="w-full md:hidden flex sm:gap-4 md:py-10">
        {partnerData?.map((item) => (
          <PartnerCard src={item.image} name={item.name} key={item.id} />
        ))}
      </div>
      <div className="col-span-4 sm:col-span-5 flex items-center justify-center">
        <button className="bg-tertiary-800 p-2 px-4 flex justify-center rounded-[9.08px]">
          <span
            className="text-white text-center font-Inter font-medium text-lg"
            style={{ color: "#fff" }}
          >
            Daha Fazla Göster
          </span>
        </button>
      </div>
    </div>
  );
};

export default PartnerArea;
