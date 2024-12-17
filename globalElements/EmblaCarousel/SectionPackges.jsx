"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function SectionPackagesCarousel({ children, slides, options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap(); //aktif olan card
      setActiveIndex(selectedIndex);
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className=" w-full" ref={emblaRef}>
      <div className="px-[20px] flex justify-start gap-[30px]">{children}</div>

      <div className="flex gap-1 mb-[20px] md:hidden">
        {slides?.map((item, index) => {
          return (
            <div
              className={`${
                activeIndex == index
                  ? "w-[30px] h-[8px] bg-tertiary-500 rounded-[22px]"
                  : "w-[8px] h-[8px] bg-[#E6DBFF] rounded-[22px]"
              }`}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
