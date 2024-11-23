import PageContainer from "@/containers/PageContainers";
import React from "react";
import FooterExplanation from "./footer-explanation";
import FooterLinks from "./footer-links";
import FooterServices from "./footer-services";
const Footer = () => {
  return (
    <div className="bg-tertiary-900    ">
      <PageContainer className="flex items-center px-[120px] py-[124px] ">
        <FooterExplanation />
        <FooterLinks />
        <FooterServices />
      </PageContainer>

      <PageContainer className="flex flex-col space-y-6  px-[120px] pb-[32px]">
        <div className=" block h-[0.5px] w-full bg-tertiary-50 "></div>
        <div className="flex mx-20 items-center justify-between">
          <p className="text-tertiary-50 text-[16px]">2024</p>
          <p className="text-tertiary-50 text-[16px] ">privacy</p>
        </div>
      </PageContainer>
    </div>
  );
};
export default Footer;
