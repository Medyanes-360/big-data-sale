"use client";
import { useState } from "react";
import Image from "next/image";
import Testimonials from "@/components/home/testimonials";
import successStories from "@/public/successStoryMockData";

export default function SuccessStoryPageContainer() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleNext = () => {
    if (currentStoryIndex < successStories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const currentStory = successStories[currentStoryIndex];

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      {/* Üst Bölüm */}
      <div className="relative w-[1200px] h-[768px] gap-6 rounded-tl-[24px] bg-white shadow-[0px_12px_32px_0px_rgba(160,160,160,0.12)] flex p-8">
        <div className="absolute top-6 right-6 flex space-x-2">
          <Image
            src="/assets/icons/9.svg"
            alt="9 Icon"
            width={31}
            height={55}
            className="object-contain"
          />
          <Image
            src="/assets/icons/9.svg"
            alt="9 Icon"
            width={31}
            height={55}
            className="object-contain"
          />
        </div>

        {/* Görsel Alanı */}
        <div>
          <Image
            src={currentStory.image}
            alt={currentStory.name}
            width={556}
            height={768}
            className="rounded-lg object-cover h-full"
          />
        </div>

        {/* Metin Alanı */}
        <div
          className="absolute flex flex-col gap-3 px-8"
          style={{
            top: "117px",
            left: "598px",
          }}
        >
          <h1
            className="font-inter text-[32px] font-bold leading-[54px] tracking-[-0.015em] text-left"
            style={{
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            {currentStory.name}
          </h1>

          <p
            className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left"
            style={{
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            {currentStory.sector}
          </p>

          <div className="mt-6 space-y-4">
            <p
              className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              <strong className="text-tertiary-400 font-lexend font-medium leading-6 text-[18px]">
                Sektör:
              </strong>{" "}
              {currentStory.sector}
            </p>
            <p
              className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              <strong className="text-tertiary-400 font-lexend font-medium leading-6 text-[18px]">
                Hedef:
              </strong>{" "}
              {currentStory.goal}
            </p>
            <p
              className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              <strong className="text-tertiary-400 font-lexend font-medium leading-6 text-[18px]">
                Çözüm:
              </strong>{" "}
              {currentStory.solution}
            </p>
            <p
              className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              <strong className="text-tertiary-400 font-lexend font-medium leading-6 text-[18px]">
                Yorum:
              </strong>{" "}
              {currentStory.comment}
            </p>
          </div>
        </div>

        {/* Alt Avatar ve Sektör Bilgisi ile Prev/Next Butonları */}
        <div className="absolute bottom-12 px-8 left-[50%] right-0 flex justify-between items-center">
          {/* Sector Bilgisi */}
          <div className="flex items-center">
            <Image
              src={currentStory.image}
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span
              className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left ml-2"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              {currentStory.sector}
            </span>
          </div>

          {/* Next/Previous İşaretleri */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevious}
              disabled={currentStoryIndex === 0}
            >
              <Image
                src="/assets/icons/success-arrow-left.svg"
                alt="Previous"
                width={24}
                height={24}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={currentStoryIndex === successStories.length - 1}
            >
              <Image
                src="/assets/icons/success-arrow-right.svg"
                alt="Next"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Bileşeni */}
      <div className="w-[100vw] mt-8">
        <Testimonials />
      </div>
    </div>
  );
}
