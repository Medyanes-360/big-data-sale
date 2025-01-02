"use client";
import Image from "next/image";

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-tertiary-900 rounded-2xl gap-2 flex flex-col p-6 shadow-card embla__slide !ps-6 w-full h-full">
      <div className="border border-gray600 rounded-xl p-3 flex items-center gap-3 mb-2">
        <div className="relative w-12 h-12 rounded-full shrink-0">
          <Image alt={item.name} src={item.image} fill />
        </div>
        <div>
          <div className="text-light200 text-sm font-light font-Lexend mb-1">
            {item.name}
          </div>
          <div className="text-tertiary-50 text-[10px] leading-4 font-normal font-Inter">
            {item.desc}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center border-b-[1px] border-gray600 p-3 pb-6 gap-2">
        <div className="text-tertiary-400 font-lexend font-normal text-[12px] leading-5">
          Sektör:<span className="text-white-default pl-1">{item.sector}</span>
        </div>
        <div className="text-tertiary-400 font-lexend font-normal text-[12px] leading-5">
          Hedef:<span className="text-white-default pl-1">{item.goal}</span>
        </div>
        <div className="text-tertiary-400 font-lexend font-normal text-[12px] leading-5">
          Çözüm:<span className="text-white-default pl-1">{item.solution}</span>
        </div>
      </div>
      <p className="flex flex-col text-white-default text-[12px] leading-5 md:text-base p-0 font-normal font-Inter">
        "{item.comment}"<div>— {item.name}</div>
      </p>
    </div>
  );
};

export default TestimonialCard;
