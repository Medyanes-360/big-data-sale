import React from "react";
import Content from "./information-content";
import InformationImage from "./information-image";
import PageContainer from "@/containers/PageContainers";

const GetMoreInformation = () => {
  return (
    <PageContainer className="flex flex-col lg:flex-row gap-y-12 lg:gap-8 py-4 md:py-16">
      {/* Sol kısım (Content) */}
      <div
        className="order-2 lg:order-1"
        style={{
          flexBasis: "100%", 
          maxWidth: "100%", 
        }}
      >
        <div className="xl:max-w-[45%] lg:max-w-[40%] md:max-w-[30%]">
          <Content />
        </div>
      </div>

      {/* Sağ kısım (Image) */}
      <div className="order-1 lg:order-2 relative lg:flex-grow">
        <InformationImage />
      </div>
    </PageContainer>
  );
};

export default GetMoreInformation;
