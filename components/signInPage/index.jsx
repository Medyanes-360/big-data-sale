"use client";
import React from "react";
import ChooseUs from "./chooseUs";
import LoginForm from "./loginForm";

function SignInPage() {
  return (
    <div className="flex justify-between items-center h-screen p-[24px] pt-[24px] pl-[24px] pb-[20px] pr-[48px]">
      <ChooseUs />

      <LoginForm />
    </div>
  );
}

export default SignInPage;
