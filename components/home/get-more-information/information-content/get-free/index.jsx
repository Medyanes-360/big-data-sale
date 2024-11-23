import React from "react";
import Badge from "./badge";
import ButtonComponent from "@/globalElements/Button";
import Icons from "@/public/assets/icons/Icons";
const GetStartFree = () => {
  return (
    <ButtonComponent className="flex items-center flex-wrap justify-center gap-x-3 mx-auto sm:max-w-[427px] lg:mx-0 w-full lg:w-fit bg-lavenderGray p-2 mb-0 lg:mb-10 rounded-[15.57px]">
      <Badge title="Yeni🎉" />
      <span className="text-gray-700  text-[12px] leading-4 sm:text-lg font-Inter font-medium">
        Ücretsiz Denemeye Başla
      </span>
      <Icons.ArrowRight className="w-4 h-4 md:w-8 md:h-8" color="#2F1566" />
    </ButtonComponent>
  );
};

export default GetStartFree;
