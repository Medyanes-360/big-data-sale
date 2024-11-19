import React from "react";
import Badge from "./badge";
import ButtonComponent from "@/globalElements/Button";
import Icons from "@/public/assets/icons/Icons";
const GetStartFree = () => {
  return (
    <ButtonComponent className="flex items-center gap-x-3 w-full lg:w-fit bg-lavenderGray p-2 mb-10 rounded-[15.57px]">
      <Badge title="Yeni🎉" />
      <span className="text-gray-700 text-lg font-Inter font-medium">
        Ücretsiz Denemeye Başla
      </span>
      <Icons.ArrowRight color="#2F1566" />
    </ButtonComponent>
  );
};

export default GetStartFree;
