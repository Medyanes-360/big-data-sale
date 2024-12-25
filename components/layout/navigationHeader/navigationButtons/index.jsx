import ButtonComponent from "@/globalElements/Button";
import Link from "next/link";
import React from "react";

const NavigationButton = () => {
  return (
    <ul className="flex items-center gap-x-4 justify-end">
      <ButtonComponent
        type="button"
        className="h-[44px] rounded-[5px] max-w-[129px] w-full text-sm text-tertiary-500 bg-tertiary-50 flex items-center justify-center cursor-pointer"
      >
        Giriş / Kaydol
      </ButtonComponent>
      <ButtonComponent className="h-[44px] rounded-[5px] py-0 px-1 text-sm text-white-default bg-tertiary-500 flex items-center justify-center cursor-pointer w-[152px] ">
        <Link href="/book-demo">Request a Demo</Link>
      </ButtonComponent>
    </ul>
  );
};

export default NavigationButton;
