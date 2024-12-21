"use client";
import Image from "next/image";
import BlogCard from "./blogCard";

const BlogPostSection = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-10 shadow-blog md:rounded-[32px] rounded-xl px-4 xl:pr-14 py-2 md:py-4">
      <Image
        src={data?.image}
        width={520}
        height={380}
        alt={data?.title}
        className="rounded-2xl py-3 px-3 md:py-4 lg:px-4 md:px-2 md:w-[520px] md:h-[380px]"
      />

      <BlogCard
        title={data.title}
        summary={data.summary}
        likes={data.likes}
        date={data.date}
        label={data.label}
      />
    </div>
  );
};

export default BlogPostSection;
