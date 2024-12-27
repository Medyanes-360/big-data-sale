import Icons from "@/public/assets/icons/Icons";
import React from "react";

const followData = [
  { component: <Icons.Facebook /> },
  { component: <Icons.Linkedin /> },
  { component: <Icons.Instagram /> },
  { component: <Icons.Whatsapp /> },
];

function FollowUs() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-7  bg-softBreeze gap-3 lg:w-[1200px]">
      <h1 className="font-lexend font-bold text-lg text-black text-center">
        Bizi Takip Edin
      </h1>
      <div className="flex flex-row justify-between items-center gap-2 w-[197.5px]">
        {followData?.map((item, index) => {
          return (
            <div
              className="w-[44px] h-[44px] flex justify-center items-center"
              key={index + 1}
            >
              {item?.component}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FollowUs;
