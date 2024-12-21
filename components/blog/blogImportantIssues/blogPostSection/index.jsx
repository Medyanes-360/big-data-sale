"use client";
import BlogCard from "./blogCard";

const BlogImportantPostSection = ({ data }) => {
  return (
    <div className="h-full w-full sm:w-1/2 lg:w-[32%] sm:px-2 mt-2 sm:mt-0">
      <BlogCard
        title={data.title}
        summary={data.summary}
        likes={data.likes}
        date={data.date}
        image={data.image}
      />
    </div>
  );
};

export default BlogImportantPostSection;
