import React from "react";
import Badge from "./badge";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";
import Image from "next/image";
import ButtonComponent from "@/globalElements/Button";
const GetStartFree = () => {
  return (
    <ButtonComponent className="flex items-center gap-x-3 w-fit bg-lavenderGray p-2 mb-10 rounded-[15.57px]">
      <Badge title="Yeni🎉" />
      <span className="text-gray-700 text-lg font-Inter font-medium">
        Ücretsiz Denemeye Başla{" "}
      </span>
     <Image src={ArrowRight} width={32} height={32} alt="ArrowRight"/>
    </ButtonComponent>
  );
};

export default GetStartFree;
