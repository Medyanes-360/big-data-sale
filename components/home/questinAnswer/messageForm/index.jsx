import Image from "next/image";
import React from "react";
import questionImage from "@/public/assets/images/havequestion.png";
import ClearButton from "@/globalElements/ClearButton";
import ButtonComponent from "@/globalElements/Button";
const MessageForm = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-4">
      <h3 className="text-gray-600 md:text-2xl">Sorularınız mı var?</h3>
      <Image
        src={questionImage}
        alt="Do you have any question"
        width={156}
        height={156}
        className="w-[156.78px] h-[156.78px]"
      />
      <form action="" className="flex flex-wrap space-y-3">
        <span className="text-gray-600 text-base font-Inter text-center">
          Geribildirim hakkında bilmek istediğiniz her şeyi sorabilirsiniz.
        </span>
        <label htmlFor="text" className="flex items-center relative w-full">
          <input
            id="text"
            type="text"
            name="text"
            placeholder="Buraya yazın"
            className="bg-white-default w-full outline-none rounded-xl shadow-[ 0px 1px 2px rgba(145, 158, 171, 0.16)] p-3 h-[48px]"
          />
          <ClearButton />
        </label>
        <ButtonComponent className="max-w-[127px] bg-tertiary-500  rounded-xl text-sm w-full text-white-default h-[44px] mx-auto">
          Göndər
        </ButtonComponent>
      </form>
    </div>
  );
};

export default MessageForm;
