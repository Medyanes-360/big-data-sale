"use client";
import TestimonialsSection from "@/components/registerPage/testimonialsSection";
import Image from "next/image";
import React from "react";
import wellnes from "@/public/assets/logo/welness_black.webp";

function ChooseUs() {
  return (
    <>
      <div className="max-w-[480px] h-full flex flex-col-reverse lg:flex-row gap-8  items-center ">
        <div className="w-[383px] md:w-[480px] flex-[1]  bg-bg-gradient h-full flex flex-col items-center justify-center rounded-xl md:gap-6 py-12">
          <Image
            src={wellnes}
            alt="Welness"
            width={110}
            className="items-center md:block hidden"
            height={43.9}
          />
          <TestimonialsSection />
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
