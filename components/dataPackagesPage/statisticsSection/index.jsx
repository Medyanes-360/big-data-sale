import Icons from "@/public/assets/icons/Icons";
import React from "react";

const staticSectionData = [
  { title: "2024", mass: "Year founded" },
  { title: "300", mass: "Employees" },
  { title: "1000K", mass: "Users" },
  { title: "220M", mass: "Data entries" },
];

function StaticsSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-6 gap-6 px-[16px] lg:px-[120px]  lg:h-[405px] ">
      <div className="w-[131px] h-[131px] flex items-center justify-center">
        <Icons.Glasses />
      </div>
      <div className="text-center font-Inter font-bold text-[32px] leading-[54px]">
        Temel <span className="text-tertiary400">değerlerimiz</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:h-[124px]">
        {staticSectionData?.map((item, index) => {
          return (
            <div
              className="w-[343px] lg:w-[282px] flex items-center gap-[20px] p-[20px]"
              key={index + 1}
            >
              <div className="w-[72px] h-[72px] rounded bg-tertiary-50 flex items-center justify-center">
                <Icons.Users />
              </div>
              <div className="flex flex-col justify-center gap-1.5">
                <span className="font-Inter  font-bold text-[32px] leading-[54px] !text-[#18191C]">
                  {item?.title}
                </span>
                <span className="font-poppins text-base text-tertiary-800 font-normal">
                  {item?.mass}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StaticsSection;
