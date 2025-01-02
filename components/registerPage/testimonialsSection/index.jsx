"use client";
import testimonialMockData from "@/public/testimonialMockData";
import React from "react";
import TestimonialCard from "./testimonialCard";
import { TestimonialCarousel } from "@/globalElements/EmblaCarousel/TestimonialCarousel";

const TestimonialsSection = () => {
  return (
    <section className="max-h-screen  w-full max-w-[480px]">
      <div className="gap-6 flex flex-col items-center">
        <h1 className="text-lg text-center font-semibold text-tertiary-900 font-lexend">
          Bizi Tercih Edenler
        </h1>
        <div className="flex flex-col items-center justify-center w-full">
          <TestimonialCarousel
            slides={testimonialMockData}
            options={{ align: "start", containScroll: "trimSnaps" }}
          >
            {testimonialMockData?.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] py-4 items-center justify-center px-4 sm:px-8 md:px-6 lg:px-3"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </TestimonialCarousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
