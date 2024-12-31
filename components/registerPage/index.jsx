import PageContainer from "@/containers/PageContainers";
import React from "react";
import RegisterForm from "./registerForm";

const RegisterPage = () => {
  return (
    <PageContainer>
      <div className="flex md:flex-row flex-col h-screen md:gap-32 m-auto">
        <RegisterForm />
      </div>
    </PageContainer>
  );
};

export default RegisterPage;
