import React from "react";
import Badge from "./badge";
import ButtonComponent from "@/globalElements/Button";
import Icons from "@/public/assets/icons/Icons";

const GetStartFree = () => {
  return (
    <ButtonComponent
      className="flex w-full rounded-xl items-center justify-between sm:!w-[424.74px] h-[72.68px] px-[15.57px] gap-[31.15px] mx-auto sm:max-w-[427px] lg:mx-0  lg:w-fit bg-[#F3F3F6] rounded-tl-[15.57px] shadow-[0px_0px_2.6px_#919EAB3D,-25.96px_25.96px_51.91px_-5.19px_#919EAB3D] opacity-100"
    >
      <Badge title="Yeni🎉" />
      <span className="text-fiord-700 text-[12px] leading-4 sm:text-lg font-Inter font-medium">
        Ücretsiz Denemeye Başla
      </span>
      <Icons.ArrowRight className="!text-[32px] text-tertiary-800 "  />
    </ButtonComponent>
  );
};

export default GetStartFree;
