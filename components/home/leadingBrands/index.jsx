import React from "react";
import AdvantagesArea from "./advantagesArea";
import PageContainer from "@/containers/PageContainers";
import PartnorArea from "./partnorArea";
import Banner from "./bannerArea";

const LeadingBrands = () => {
  return (
    <PageContainer className="flex flex-col gap-y-5">
      <AdvantagesArea />
      <Banner />
      <PartnorArea />
    </PageContainer>
  );
};

export default LeadingBrands;
