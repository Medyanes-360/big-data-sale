import React from "react";
import Content from "./information-content";
import InformationImage from "./information-image";
import PageContainer from "@/containers/PageContainers";

const GetMoreInformation = () => {
  return (
    <PageContainer className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-[40px] lg:gap-y-24 py-[35px] md:py-[60px] ">
      <div className="grid-cols-1 order-2 lg:order-1">
        <Content />
      </div>
      <div className="grid-cols-1 order-1 lg:order-2">
        <InformationImage />
      </div>
    </PageContainer>
  );
};

export default GetMoreInformation;
