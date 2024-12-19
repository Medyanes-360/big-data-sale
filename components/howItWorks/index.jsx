"use client";
import PageTitle from "@/components/home/howItWorks/pageTitle";
import PageContainer from "@/containers/PageContainers";
import React from "react";
import StepSection from "./stepSection";
import howitworksMockData from "@/public/howitworksMockData";
import { SectionCarousel } from "@/globalElements/EmblaCarousel/SectionCarousel";

const HowItWorks = () => {
  return (
    <section className="py-10">
      <PageContainer className="lg:!px-5">
        <PageTitle />
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-12">
          {howitworksMockData?.map((item, index) => (
            <StepSection key={index} item={item} />
          ))}
        </div>

        <div className="lg:hidden">
          <SectionCarousel
            slides={howitworksMockData}
            options={{ align: "start", containScroll: "trimSnaps" }}
          >
            {howitworksMockData?.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 py-4">
                <StepSection item={item} />
              </div>
            ))}
          </SectionCarousel>
        </div>
      </PageContainer>
    </section>
  );
};

export default HowItWorks;
