import PageContainer from "@/containers/PageContainers";
import React from "react";
import PageTitle from "./pageTitle";
import AccardionArea from "./accardionArea";
import MessageForm from "./messageForm";

const Faq = () => {
  return (
    <section className="bg-softBreeze py-10">
      <PageContainer>
        <PageTitle />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <AccardionArea />
          <MessageForm />
        </div>
      </PageContainer>
    </section>
  );
};

export default Faq;
