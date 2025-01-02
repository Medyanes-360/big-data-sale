import React from "react";
import RegisterForm from "./registerForm";
import TestimonialsSection from "./testimonialsSection";
import wellnes from "@/public/assets/logo/welness_black.webp";
import Image from "next/image";
import Icons from "@/public/assets/icons/Icons";

const RegisterPage = () => {
  return (
    <section className="container max-w-full lg:h-dvh px-4 lg:px-6 py-6 overflow-hidden">
      <div className="w-full h-full flex flex-col-reverse lg:flex-row gap-8  items-center ">
        <div className="w-full flex-[1]  bg-bg-gradient h-full flex flex-col items-center justify-center rounded-xl md:gap-6 py-12">
          <Image
            src={wellnes}
            alt="Welness"
            width={110}
            className="items-center md:block hidden"
            height={43.9}
          />
          <TestimonialsSection />
        </div>
        <div className="relative z-30 flex-[2] w-full items-center justify-center flex flex-col ">
          <Image
            src={wellnes}
            alt="Welness"
            width={110}
            className="items-center md:hidden block"
            height={43.9}
          />
          <div className="relative">
            <div className=" bg-[#915DFF52] block blur-custommobile md:blur-custom w-[128px] h-[128px] md:w-[256px] md:h-[256px] md:-top-32 md:-right-20 -top-20 -right-10 rounded-full absolute -z-10" />

            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="fixed z-50 right-10 bottom-10 flex justify-center items-center rounded-full bg-tertiary-800 w-20 h-20 cursor-pointer">
        <Icons.MailIcon />
      </div>
    </section>
  );
};

export default RegisterPage;
