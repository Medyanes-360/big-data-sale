"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export function SectionPackagesCarousel({ children, slides, options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className="embla w-full" ref={emblaRef}>
      <div className="embla__container px-[40px] flex justify-start gap-[30px]">
        {children}
      </div>
    </div>
  );
}
