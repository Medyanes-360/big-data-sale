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
      {/* Ana yapıyı mobil ve tablet için responsive hale getiriyoruz */}
      <PageContainer className="flex flex-col gap-12 px-4 sm:px-8 md:px-[120px] py-[64px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <FooterNeedHelp />
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div className="flex flex-col sm:flex-1 sm:mr-8">
            <FooterExplanation />
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:flex-1 sm:justify-between">
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
