import PageContainer from "@/containers/PageContainers";
import React from "react";
import PageTitle from "./pageTitle";
import PaketBoxContainer from "./paketBoxContainer";

const HowItWorks = () => {
  return (
    <section className="py-10">
      <PageContainer>
        <PageTitle />
        <PaketBoxContainer />
      </PageContainer>
    </section>
  );
};

export default HowItWorks;
