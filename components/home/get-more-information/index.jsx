import React from "react";
import Content from "./information-content";
import InformationImage from "./information-image";
import PageContainer from "@/containers/PageContainers";

const GetMoreInformation = () => {
  return (
    <PageContainer className="grid grid-cols-2 gap-x-3 py-5">
      <div className="grid-cols-1">
        <Content />
      </div>
      <div className="grid-cols-1">
        <InformationImage />
      </div>
    </PageContainer>
  );
};

export default GetMoreInformation;
