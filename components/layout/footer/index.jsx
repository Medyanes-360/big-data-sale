import PageContainer from "@/containers/PageContainers";
import React from "react";
import FooterExplanation from "./footer-explanation";
import FooterLinks from "./footer-links";
import FooterServices from "./footer-services";
import FooterContactUs from "./footer-contactUs";
import FooterNeedHelp from "./footer-needHelp";
import FooterSocialLinks from "./footer-socialLinks";
import FooterCopyRight from "./footer-copyRight";

const Footer = () => {
  return (
    <div
      className="bg-[linear-gradient(136.55deg,#170A33_24.33%,#451E99_149.33%)]"
    >
      <PageContainer className="flex flex-col gap-12 px-4 sm:px-8 md:px-[120px] py-[64px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <FooterNeedHelp />
        </div>

        <div className="flex flex-col justify-between lg:flex-row">
          {/* Footer Explanation */}
          <div className="flex flex-col w-full sm:flex-1 sm:mr-8 lg:w-auto">
            <FooterExplanation />
          </div>

          {/* Footer Links, Services, Contact Us */}
          <div className="flex flex-col w-full gap-6 mt-8 sm:mt-0 sm:flex-row sm:flex-1 sm:justify-between ml-16 sm:ml-0 sm:items-start">
            <FooterLinks />
            <FooterServices />
            <FooterContactUs />
          </div>
        </div>
      </PageContainer>

      <PageContainer className="flex flex-col px-4 sm:px-8 md:px-[120px] pb-[32px]">
        <div className="flex flex-col gap-12">
          <FooterSocialLinks />
          <FooterCopyRight />
        </div>
      </PageContainer>
    </div>
  );
};

export default Footer;
