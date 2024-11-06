import ButtonComponent from "@/globalElements/Button";
import React from "react";

const NavigationButton = () => {
  return (
    <ul className="flex items-center gap-x-4">
      <ButtonComponent
        type="button"
        className="h-[44px] rounded-[5px] max-w-[129px] w-full py-0 px-2 text-sm  text-tertiary500 bg-tertiary50 flex items-center justify-center cursor-pointer"
      >
        Giriş / Kaydol
      </ButtonComponent> 
      <ButtonComponent className="h-[44px] rounded-[5px] w-[152px] py-0   px-2 text-sm  text-white bg-tertiary500 flex items-center justify-center cursor-pointer">
        Request a Demo
      </ButtonComponent>
    </ul>
  );
};

export default NavigationButton;
