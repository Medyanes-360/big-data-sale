import ButtonComponent from "@/globalElements/Button";
import React from "react";

const InformationFrame = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <h5 className="text-base max-w-[343px] text-[#42526B] font-bold md:text-2xl lg:mb-6	 lg:text-xl md:font-normal md:text-[24px] font-Inter md:text-fiord-700 md:whitespace-nowrap whitespace-normal">
        Doktorlar, Avukatlar, Yerel İşletmeler,
        <span className="block">
          {" "}
          Fabrikalar ve Daha Binlerce Sektör Datasına Erişin!
        </span>
      </h5>
      <h1 className="text-base text-[#42526B] lg:font-Inter  lg:text-nowrap	 lg:text-[31.15px] lg:leading-[51.91px] md:text-tertiary-800  font-bold">
        <span className="text-tertiary400 text-base lg:font-Inter lg:text-nowrap	 lg:text-[31.15px]">
          Doğrulanmış İşletme Bilgileriyle Binlerce
        </span>{" "}
        <br />
        Potansiyel Müşteri Verilerine Erişin!
      </h1>
      <div className="flex items-center gap-4 flex-col md:flex-row">
        <ButtonComponent className="text-tertiary-800 bg-gray-24 shadow-custom-combined bg-white-default w-full h-[52px] flex items-center justify-center lg:max-w-[257px] rounded-[9.08px] font-Inter font-medium text-[18.17px] leading-[51.91px]">
          Daha Fazla Bilgi Al
        </ButtonComponent>
        <ButtonComponent className="bg-tertiary-800 h-[52px] flex drop-shadow-custom-combined-2 w-full items-center justify-center lg:max-w-[257px] rounded-[9.08px] font-Inter font-medium text-[18.17px] leading-[51.91px] text-white-default">
          Hemen Başla
        </ButtonComponent>
      </div>
    </div>
  );
};

export default InformationFrame;
