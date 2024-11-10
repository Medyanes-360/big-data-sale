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
    <div className="w-[412px] relative h-[412px]  mx-auto border-[2.97px] border-dashed flex items-center justify-center rounded-full border-tertiary400">
      <Image
        src={imageOne}
        
        className="rounded-full w-[31.6px] h-[31.6px] border-[2.63px] border-solid border-white absolute left-[20px] top-[75%]"
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
      <div className="bg-customLightPurple relative w-[350px] h-[350px] rounded-full flex items-center justify-center">
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
        <div className="w-[247.57px] relative h-[247.57px] rounded-full bg-customPurple ] flex items-center justify-center border-[1.47px] border-solid border-white">
          <Image
            src={imageFive}
            className="rounded-full w-[48px] h-[48px] border-[2.63px] border-solid border-white absolute  right-[-20px]"
            alt="one-avatar"
            width={48}
            height={48}
          />
          <figure className="w-[158px] h-[158px] rounded-full border-[1.32px] border-solid border-white">
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
        icon={<Icons.CheckShield />}
        className=" absolute bottom-0 -left-[25%]"
      />
      <AdvertisingBox
        text={"Başarı Yolculuğunuzda Yanınızdayız"}
        icon={<Icons.Union />}
        className=" absolute bottom-[66px] -right-[25%]"
      />
    </div>
  );
};

export default InformationImage;
