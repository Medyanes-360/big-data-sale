import PageContainer from "@/containers/PageContainers";
import React from "react";
import PageTitle from "./pageTitle";
import AccardionArea from "./accardionArea";

const Faq = () => {
  return (
    <section className="bg-softBreeze py-10">
      <PageContainer>
        <PageTitle />
        <div className="grid grid-cols-2">
          <AccardionArea />
          <div></div>
        </div>
      </PageContainer>
    </section>
  );
};

export default Faq;
