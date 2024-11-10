import ButtonComponent from "@/globalElements/Button";
import React from "react";

const InformationFrame = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <h5 className="text-2xl font-Inter text-gray700">
        Doktorlar, Avukatlar, Yerel İşletmeler, Fabrikalar ve Daha Binlerce
        Sektör Datasına Erişin!
      </h5>
      <h1 className="font-Inter font-bold lg:text-[31.15px] lg:leading-[51.91px] text-tertiary800">
        <span className="text-tertiary400">
          Doğrulanmış İşletme Bilgileriyle Binlerce
        </span>{" "}
        Potansiyel Müşteri Verilerine Erişin!
      </h1>
      <div className="flex items-center gap-x-4">
        <ButtonComponent className="text-tertiary800 bg-softedWhite shadow-custom-combined  bg-white  w-full h-[52px] flex items-center justify-center max-w-[257px] rounded-[9.08px] font-Inter font-medium text-[18.17px] leading-[51.91px]">
          Daha Fazla Bilgi Al
        </ButtonComponent>
        <ButtonComponent className="bg-tertiary800 h-[52px] flex shadow-custom-combined-2   w-full items-center justify-center max-w-[257px] rounded-[9.08px] font-Inter font-medium text-[18.17px] leading-[51.91px] text-white">
          Hemen Başla
        </ButtonComponent>
      </div>
    </div>
  );
};

export default InformationFrame;
