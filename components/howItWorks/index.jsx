import PageTitle from "@/components/home/howItWorks/pageTitle";
import PageContainer from "@/containers/PageContainers";
import React from "react";
import BoxContainer from "./boxContainer";

const HowItWorks = () => {
  return (
    <section className="py-6">
      <PageContainer>
        <PageTitle/>
        <BoxContainer/>
      </PageContainer>
    </section>
  );
};

export default HowItWorks;
