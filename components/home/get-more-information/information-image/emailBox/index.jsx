import ButtonComponent from "@/globalElements/Button";
import React from "react";

const EmailBox = () => {
  return (
    <div className="shadow-custom mb-4  backdrop-blur-custom absolute right-0  md:left-[-30] md:left-[-50%] lg:left-auto -top-[35px] w-fit min-h-[36.69px] sm:min-h-[56.14px] flex items-center justify-center gap-x-4 md:px-3 bg-white-50 border border-solid border-silver-400 rounded-[10px] sm:rounded-[16px]">
      <input
        type="email"
        className="text-black text-sm font-Inter bg-transparent border-none outline-none h-full p-3"
        placeholder="Enter your email adress"
      />
      <ButtonComponent className="bg-tertiary-800 rounded-lg	bo h-[32px] min-w-[84px] text-white-default text-sm">
        Reach us
      </ButtonComponent>
    </div>
  );
};

export default EmailBox;
