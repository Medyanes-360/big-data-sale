"use client";
import React, { useRef } from "react";
import ImportantIssuesHeader from "./importantIssuesHeader";
import PageContainer from "../../../containers/PageContainers/index";
import BlogImportantPostSection from "./blogPostSection";
import blogAreaMockData from "@/public/blogAreaMockData";

const BlogImportantIssues = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -365, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 365, behavior: "smooth" });
    }
  };

  return (
    <PageContainer>
      <div className="relative h-auto py-6 px-4 rounded-[24px] bg-gradient-to-r from-[#170A33] via-[#451E99] to-[#451E99] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/assets/images/blogBg.png')] bg-center bg-cover opacity-30 z-0"></div>

        <div className="relative z-10">
          <ImportantIssuesHeader onPrevClick={scrollLeft} onNextClick={scrollRight} />

          <div
            ref={sliderRef}
            className="flex lg:flex-nowrap scroll-smooth gap-4 w-full"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {blogAreaMockData?.map((item, index) => (
              <BlogImportantPostSection key={item.id} data={item} />
            ))}

            <style>
              {`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default BlogImportantIssues;
