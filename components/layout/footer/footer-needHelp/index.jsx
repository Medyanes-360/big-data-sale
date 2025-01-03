import Image from "next/image";
import React from "react";

const FooterNeedHelp = () => {
  return (
    <div className="relative w-full rounded-2xl bg-tertiary-900 text-white py-[32px] px-6 sm:pr-24 sm:pl-12 flex flex-col sm:flex-row justify-between items-start sm:items-center overflow-hidden">
  
      <div
        className="absolute w-[480px] h-[480px] bg-[#915DFF] opacity-[0.04] rounded-[50%]"
        style={{ top: "-150px", right: "-100px" }}
      ></div>
      

      <div className="flex flex-col gap-[10px] max-w-[491px] z-10">
        <h2 className="text-[20px] sm:text-[28px] font-medium leading-[28px] sm:leading-[33.6px] text-[#F9FAFB] tracking-[-0.01em]">
          Yardıma ihtiyacınız var mı?
        </h2>
        <p className="text-[14px] font-Inter leading-[19.6px] font-normal text-[#F9FAFB] opacity-[60%]">
          Hizmetlerimiz, iş türleriniz ve en iyi projelerimiz hakkında detaylı bilgi vereceğiz. 
          Maliyeti hesaplayıp ticari bir teklif hazırlayacağız.
        </p>
      </div>
      
  
      <div className="flex items-center gap-[24px] z-10 mt-4 sm:mt-0 sm:ml-auto">
        <span className="text-[#FFFFFF] text-[16px] sm:text-[20px] font-medium leading-[24px] sm:leading-[28px] font-Inter">
          Danışmanlık alın
        </span>
        <Image
          src="/assets/icons/arrow-right.svg"
          alt="Arrow Right"
          width={15}
          height={8}
          className="filter invert"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
    </div>
  );
};

export default FooterNeedHelp;
