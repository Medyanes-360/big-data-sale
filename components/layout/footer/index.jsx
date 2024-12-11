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
    <div className="bg-tertiary-900">
      <PageContainer className="flex flex-col gap-12 px-[120px] py-[64px]">
        <div className="gap-3">
          <FooterNeedHelp />
        </div>

        <div className="flex flex-row">
          <div className="flex">
            <FooterExplanation />
          </div>

          <div className="flex flex-row justify-between">
            <FooterLinks />
            <FooterServices />
            <FooterContactUs />
          </div>
        </div>
      </PageContainer>

      <PageContainer className="flex flex-col px-[120px] pb-[32px]">
        <div className="flex flex-col gap-12">
          <FooterSocialLinks />
          <FooterCopyRight />
        </div>

      </PageContainer>
    </div>
  );
};

export default Footer;
