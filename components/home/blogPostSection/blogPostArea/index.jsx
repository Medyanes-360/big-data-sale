import React from "react";
import BlogContent from "./BlogPostContent";
import BlogImage from "./BlogPostImage";


const BlogPostArea = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-[40px] justify-between relative shadow-blog px-3 md:px-4 py-2 rounded-[32px]">
      <BlogImage />
      <BlogContent />
    </div>
  );
};

export default BlogPostArea;
