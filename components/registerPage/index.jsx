import PageContainer from "@/containers/PageContainers";
import React from "react";
import RegisterForm from "./registerForm";
import TestimonialsSection from "./testimonialsSection";
import wellnes from "@/public/assets/logo/welness_black.webp";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <PageContainer className="py-6 !px-6">
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row gap-8 md:gap-32 items-center justify-center">
        <div className="w-full md:max-w-[480px] md:h-[1032px] bg-bg-gradient flex flex-col items-center justify-center rounded-xl md:gap-6 py-12">
          <Image
            src={wellnes}
            alt="Welness"
            width={110}
            className="items-center md:block hidden"
            height={43.9}
          />
          <TestimonialsSection />
        </div>
        <div className="w-full lg:w-1/2 items-center justify-center flex flex-col">
          <Image
            src={wellnes}
            alt="Welness"
            width={110}
            className="items-center md:hidden block"
            height={43.9}
          />
          <RegisterForm />
        </div>
      </div>
    </PageContainer>
  );
};

export default RegisterPage;
