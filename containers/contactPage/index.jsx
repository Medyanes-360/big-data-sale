import React from "react";
import Contact from "./../../components/contactPage/index";
import SupportSection from "./../../components/contactPage/supportSection/index";
import PageContainer from "../PageContainers";
import FollowUs from "@/components/contactPage/followUs";

function ContactPageContainer() {
  return (
    <>
      <PageContainer className="flex flex-col items-center py-6 px-4 gap-3 lg:!px-[120px] lg:!py-[80px] lg:gap-[64px]">
        <SupportSection />
        <FollowUs />
        <Contact />
      </PageContainer>
    </>
  );
}

export default ContactPageContainer;
