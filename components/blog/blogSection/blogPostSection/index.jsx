"use client";
import Image from "next/image";
import BlogCard from "./blogCard";

const BlogPostSection = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-20 gap-4 md:gap-12 shadow-blog rounded-[32px] px-4 lg:pr-8">
      <Image
        src={data?.image}
        width={520}
        height={380}
        alt={data?.title}
        className="rounded-2xl py-3 md:py-4 px-3 lg:px-4 md:px-2 md:w-[520px] md:h-[380px]"
      />

      <BlogCard
        title={data.title}
        summary={data.summary}
        likes={data.likes}
        date={data.date}
      />
    </div>
  );
};

export default BlogPostSection;
