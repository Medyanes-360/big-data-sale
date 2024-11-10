import ButtonComponent from "@/globalElements/Button";
import React from "react";

const NavigationButton = () => {
  return (
    <ul className="flex items-center gap-x-4 justify-end">
      <ButtonComponent
        type="button"
        className="h-[44px] rounded-[5px] max-w-[129px] w-full  text-sm  text-tertiary500 bg-tertiary50 flex items-center justify-center cursor-pointer"
      >
        Giriş / Kaydol
      </ButtonComponent>
      <ButtonComponent className="h-[44px] rounded-[5px]  py-0   px-1 text-sm  text-white bg-tertiary500 flex items-center justify-center cursor-pointer w-[152px] ">
        Request a Demo
      </ButtonComponent>
    </ul>
  );
};

export default NavigationButton;
