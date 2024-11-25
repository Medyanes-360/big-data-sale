import React from "react";
import BlogContent from "./BlogPostContent";
import BlogImage from "./BlogPostImage";

const BlogPostArea = () => {
  return (
    <div className="md:flex flex-col items-center mb-[40px] justify-between relative shadow-blog p-4 rounded-[32px]">
      <BlogImage />
      <BlogContent />
    </div>
  );
};

export default BlogPostArea;
