import Image from "next/image";
import React from "react";
import questionImage from "@/public/assets/images/havequestion.png";
import ClearButton from "@/globalElements/ClearButton";
import ButtonComponent from "@/globalElements/Button";
const MessageForm = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <h3 className="text-gray-600 text-[24px] leading-10 font-bold md:text-2xl">Sorularınız mı var?</h3>
      <Image
        src={questionImage}
        alt="Do you have any question"
        width={156}
        height={156}
        className="w-[156.78px] h-[156.78px]"
      />
      <form action="" className="flex flex-wrap space-y-3 justify-center">
        <span className="text-gray-600 text-base font-Inter text-center">
          Geribildirim hakkında bilmek istediğiniz her şeyi sorabilirsiniz.
        </span>
        <label htmlFor="text" className="flex items-center justify-center relative w-full">
          <input
            id="text"
            type="text"
            name="text"
            placeholder="Buraya yazın"
            className="bg-white-default w-full outline-none rounded-xl shadow-[0px 1px 2px rgba(145, 158, 171, 0.16)] p-3 max-h-[48px]"
          />
          <ClearButton />
        </label>
        <ButtonComponent className="max-w-[127px] bg-tertiary-500 rounded-lg text-[17px] leading-[56px] font-lexend w-full text-white-default h-[44px] mx-auto">
          Gönder
        </ButtonComponent>
      </form>
    </div>
  );
};

export default MessageForm;
