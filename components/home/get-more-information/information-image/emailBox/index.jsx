import ButtonComponent from "@/globalElements/Button";
import React from "react";

const EmailBox = () => {
  return (
    <div className="shadow-custom backdrop-blur-custom absolute -top-[40px] w-fit h-[56.14px] flex items-center justify-center gap-x-2 px-3 bg-softedWhite border border-solid border-customGray rounded-[16px]">
      <input
        type="email"
        className="text-black text-sm font-Inter border-none outline-none h-full p-3"
        placeholder="Enter your email adress"
      />
      <ButtonComponent className="bg-tertiary800 h-[32px] min-w-[84px] text-white text-sm">
        Reach us
      </ButtonComponent>
    </div>
  );
};

export default EmailBox;
