import ButtonComponent from "@/globalElements/Button";
import React from "react";

const FormHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-10">
      <h1 className="pt-5 font-bold font-Inter text-2xl text-gray-700">
        Book demo
      </h1>
      <div className="flex lg:gap-[1px] w-full items-center justify-center">
        <ButtonComponent className="bg-tertiary-400 h-8 w-full ml-2 md:w-[178px] rounded-l-md [clip-path:_polygon(95%_0%,_100%_50%,_95%_100%,_0%_100%,_0%_0%)]">
          <span className="font-Inter font-medium text-white-default text-center text-sm">
            1.contact info
          </span>
        </ButtonComponent>

        <div className="relative w-full md:w-[175.5px]">
          <ButtonComponent className="bg-custom-gradient border-tertiary-400 border-[1px] h-8 w-full md:w-[175.5px] rounded-r-sm [clip-path:polygon(100%_0,_100%_100%,_0%_100%,_5%_50%,_0%_0%)] -ml-2 md:-ml-1">
            <span className="font-Inter font-medium text-tertiary-400 text-center text-sm">
              2.calender
            </span>
          </ButtonComponent>
          <div
            className="opacity-0 md:opacity-100 absolute left-0 top-0 h-[17px] border-l border-tertiary-400 transform translate-x-0 -rotate-[28deg]"
          />
          <div
            className="opacity-0 md:opacity-100 absolute left-0 bottom-0 h-[17px] border-l border-tertiary-400 transform translate-x-0 rotate-[28deg]"
          />
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
