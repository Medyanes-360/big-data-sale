import Image from "next/image";
import React from "react";
import PersonImage from "@/public/assets/images/person.webp";
import imageOne from "@/public/assets/images/image-1.webp";
import imageTwo from "@/public/assets/images/image-2.webp";
import imageThree from "@/public/assets/images/image-3.webp";
import imageFour from "@/public/assets/images/image-4.webp";
import imageFive from "@/public/assets/images/image-5.webp";
import EmailBox from "./emailBox";
import AdvertisingBox from "./advertisingBox";
import Icons from "@/public/assets/icons/Icons";
const InformationImage = () => {
  return (
    <div className="relative w-[223px] h-[223px] sm:w-[412px] sm:h-[412px]  mx-auto border-[2.97px] border-dashed flex items-center justify-center rounded-full border-tertiary400">
      <Image
        src={imageOne}
        className="rounded-full w-[31.6px] h-[31.6px] border-[2.63px] border-solid border-white absolute left-[10px] sm:left-[20px] top-[75%]"
        alt="one-avatar"
        width={32}
        height={32}
      />
      <Image
        src={imageTwo}
        className="rounded-full w-[26.34px] h-[26.34px] border-[2.63px] border-solid border-white absolute right-[-12px] top-[40%]"
        alt="two-avatar"
        width={27}
        height={27}
      />
      <div className="bg-purple-38 relative w-[181px] h-[181px] sm:w-[350px] sm:h-[350px] rounded-full flex items-center justify-center">
        <Image
          src={imageThree}
          className="rounded-full w-[31.6px] h-[31.6px] border-[2.63px] border-solid border-white absolute  top-[85%] right-[60px]"
          alt="one-avatar"
          width={32}
          height={32}
        />
        <Image
          src={imageFour}
          className="rounded-full w-[15.8px] h-[15.8px] border-[2.63px] border-solid border-white absolute  top-[-8px]"
          alt="two-avatar"
          width={16}
          height={16}
        />
        <div className="relative w-[128px] h-[128px] sm:w-[247.57px] sm:h-[247.57px] rounded-full bg-purple-44 flex items-center justify-center border-[1.47px] border-solid border-white-900 drop-shadow-custom-combined-2">
          <Image
            src={imageFive}
            className="rounded-full w-[25px] h-[25px] sm:w-[48px] sm:h-[48px] border-[2.63px] border-solid border-white absolute right-[-10px] sm:right-[-20px]"
            alt="one-avatar"
            width={48}
            height={48}
          />
          <figure className="w-[81.9] h-[81.9] sm:w-[158px] sm:h-[158px] rounded-full border-[1.32px] border-solid border-white">
            <Image
              src={PersonImage}
              alt="Person"
              width={158}
              height={158}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </figure>
        </div>
      </div>

      <EmailBox />
      <AdvertisingBox
        text={"Doğrulanmış Veri Erişimi"}
        icon={<Icons.CheckShield className="w-3 h-3 lg:w-5 lg:h-5" />}
        className=" absolute bottom-[-30px] sm:bottom-0  -left-[25%]"
      />
      <AdvertisingBox
        text={"Başarı Yolculuğunuzda Yanınızdayız"}
        icon={<Icons.Union className="w-3 h-3 lg:w-5 lg:h-5" />}
        className="absolute bottom-[30px] sm:bottom-[66px] -right-[25%]"
      />
    </div>
  );
};

export default InformationImage;
