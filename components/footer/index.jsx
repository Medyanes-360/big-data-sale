import PageContainer from "@/containers/PageContainers";
import React from "react";
import FooterExplanation from "./footer-explanation";
import FooterLinks from "./footer-links";
import FooterServices from "./footer-services";
const Footer = () => {
  return (
    <div className="bg-tertiary900  my-20 p-40">
      <PageContainer className="flex items-center ">
        <FooterExplanation />
        <FooterLinks />
        <FooterServices />
      </PageContainer>

      <PageContainer className="flex flex-col space-y-6 mt-20">
        <div className=" block h-[0.5px] w-full bg-tertiary50 "></div>
        <div className="flex mx-20 items-center justify-between">
          <p className="text-tertiary50 text-[16px]">2024</p>
          <p className="text-tertiary50 text-[16px] ">privacy</p>
        </div>
      </PageContainer>
    </div>
  );
};
export default Footer;
