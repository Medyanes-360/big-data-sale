"use client";
import React from "react";
import ChooseUs from "./chooseUs";
import LoginForm from "./loginForm";

function SignInPage() {
  return (
    <div className="flex flex-col-reverse items-center gap-[61px] pt-11 px-4  lg:flex-row lg:justify-between  h-screen lg:p-[24px] lg:pt-[24px] lg:pl-[24px] lg:pb-[20px] lg:pr-[48px]">
      <ChooseUs />
      <LoginForm />
    </div>
  );
}

export default SignInPage;
