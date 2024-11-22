import ButtonComponent from "@/globalElements/Button";
import React from "react";

const EmailBox = () => {
  return (
    <div className="shadow-custom backdrop-blur-custom absolute left-[-20%] sm:left-[-50%] md:left-auto -top-[40px] w-fit min-h-[36.69px] sm:min-h-[56.14px] flex items-center justify-center gap-x-2 px-3 bg-white-24 border border-solid border-gray-19 rounded-[10px] sm:rounded-[16px]">
      <input
        type="email"
        className="text-black text-sm font-Inter border-none outline-none h-full p-3"
        placeholder="Enter your email adress"
      />
      <ButtonComponent className="bg-tertiary-800 h-[32px] min-w-[84px] text-white-900 text-sm">
        Reach us
      </ButtonComponent>
    </div>
  );
};

export default EmailBox;
