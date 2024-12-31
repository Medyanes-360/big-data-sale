"use client";
import PageContainer from "@/containers/PageContainers";
import React from "react";
import SupportSection from "./supportSection";
import FollowUs from "./followUs";
import ContactForm from "./contactForm";

function Contact() {
  return (
    <>
      <PageContainer className="flex flex-col items-center py-6 !px-0 gap-3 lg:!py-[80px] lg:gap-[64px]">
        <SupportSection />
        <FollowUs />
        <ContactForm />
      </PageContainer>
    </>
  );
}

export default Contact;
