import React from "react";
import AdvantagesArea from "./advantagesArea";
import PageContainer from "@/containers/PageContainers";
import PartnerArea from "./partnerArea";
import Banner from "./bannerArea";

const LeadingBrands = () => {
  return (
    <PageContainer className="flex flex-col gap-y-5">
      <AdvantagesArea />
      <Banner />
      <PartnerArea />
    </PageContainer>
  );
};

export default LeadingBrands;
