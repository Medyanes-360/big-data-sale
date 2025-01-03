"use client";
import React from "react";
import ChooseUs from "./chooseUs";
import LoginForm from "./loginForm";
import Icons from "@/public/assets/icons/Icons";
import wellnes from "@/public/assets/logo/welness_black.webp";
import Image from "next/image";

function SignInPage() {
  return (
    <div className="flex flex-col-reverse h-full items-center gap-[61px] pt-11 px-4  lg:flex-row lg:justify-between  lg:h-screen lg:p-[24px] lg:pt-[24px] lg:pl-[24px] lg:pb-[20px] lg:pr-[48px]">
      <ChooseUs />
      <LoginForm />
      <Image
        src={wellnes}
        alt="Welness"
        width={110}
        className="block md:!hidden"
        height={43.9}
      />
      <div className="fixed z-50 right-8 bottom-8 flex justify-center items-center rounded-full bg-tertiary-800 w-20 h-20 cursor-pointer">
        <Icons.MailIcon />
      </div>
    </div>
  );
}

export default SignInPage;
