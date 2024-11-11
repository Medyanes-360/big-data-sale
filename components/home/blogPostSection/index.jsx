import React from "react";
import PageContainer from "@/containers/PageContainers";
import BlogPostArea from "./blogPostArea";
import BlogHeader from "./blogPostHeader";

const BlogPostSection = () => {
  return (
    <PageContainer className="flex flex-col gap-y-5">
      <BlogHeader />
      <BlogPostArea />
    </PageContainer>
  );
};

export default BlogPostSection;
