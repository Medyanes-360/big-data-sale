"use client";

import Link from "next/link";
import BlogPostSection from "./blogPostSection";
import FormSection from "./formSection";
import blogAreaMockData from "@/public/blogAreaMockData";
import PageContainer from "@/containers/PageContainers";
import { useState } from "react";

const BlogImportantSection = () => {
  return (
    <section className="py-6 lg:py-20">
      <PageContainer>
        <div className="flex text-lg font-normal font-Inter">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("En son ekleyenler");
            }}
            className={`px-2 py-2 ${
              activeTab === "En son ekleyenler"
                ? "text-tertiary400 border-b-[3px] border-tertiary400"
                : "text-tertiary-800"
            }`}
          >
            En son ekleyenler
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("En Favoriler");
            }}
            className={`px-2 py-2 ${
              activeTab === "En Favoriler"
                ? "text-tertiary400 border-b-[3px] border-tertiary400"
                : "text-tertiary-800"
            }`}
          >
            En Favoriler
          </Link>
        </div>

        {currentTab?.map((item, index) => (
          <div key={item.id} className="py-8">
            <BlogPostSection data={item} />
            {(index + 1) % 2 === 0 && <FormSection />}
          </div>
        ))}
      </PageContainer>
    </section>
  );
};

export default BlogImportantSection;
