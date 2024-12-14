"use client";
import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";

const StepSection = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="mb-6 relative rounded-full w-[240px] h-[240px] border-[3px] border-[#915DFF] flex items-center justify-center">
        <Image
          src="/assets/icons/EllipseDot.svg"
          className="absolute left-[-12px] top-auto"
          alt="dotIcon"
          width={21}
          height={21}
        />
        <Image
          src="/assets/icons/EllipseDot.svg"
          className="absolute right-[-12px] top-auto"
          alt="dotIcon"
          width={21}
          height={21}
        />
        <div
          className="w-[208px] h-[208px] flex justify-center items-center border-[25px] rounded-full"
          style={{ borderColor: item.color }}
        >
          <div
            className="w-[152px] h-[152px] flex justify-center items-center bg-white-default rounded-full"
            style={{ boxShadow: item.shadow }}
          >
            <div className="font-bold text-[#2E2E2E] font-lexend text-[32px] leading-10 flex flex-col items-center gap-2">
              {item.order}
              <span className="font-normal font-Inter text-[18px] leading-6 ">
                adım
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 gap-3 w-full h-max-[145px] items-center pb-12">
        <h2 className="text-tertiary-900 font-medium md:text-[14px] md:leading-[21px] font-Inter text-center">
          {item.title}
        </h2>
        <div className="text-tertiary-800 font-Inter font-medium text-xs text-center">
          {item.description}
        </div>
        <ButtonComponent className="bg-tertiary-500 w-full max-w-[193px] !px-5 rounded-[5px] gap-2 text-Inter font-medium text-[14px] text-white-default">
          <span>Paketleri İncele Ve Seç</span>
        </ButtonComponent>
      </div>

      <div className="flex flex-col gap-3 p-3 rounded-[4px] text-white-default shadow-[0px_12px_24px_-4px_#999498]">
        <h2 className="text-tertiary-400 tracking-tight font-medium md:text-[14px] md:leading-[21px] font-Inter text-center">
          {item.footerTitle}
        </h2>
        <div className="text-tertiary-800 font-Inter font-medium text-xs text-center">
          {item.footerDescription}
        </div>

        <div className="flex flex-col gap-2 items-center justify-center rounded-md p-3">
          <h2 className="text-tertiary-800 tracking-tight font-medium md:text-[14px] md:leading-[21px] font-Inter text-center">
            {item.listTitle}
          </h2>

          <div className="flex flex-col items-start gap-1">
            {item.dataList?.map((i, index) => {
              return (
                <li
                  key={index}
                  className="flex text-tertiary-800 text-[12px] font-medium font-Inter leading-4"
                >
                  ✅ {i.description}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
