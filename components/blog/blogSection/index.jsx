import Link from "next/link";
import BlogPostSection from "./blogPostSection";
// import FormSection from "./formSection";
import blogAreaMockData from "@/public/blogAreaMockData";
import PageContainer from "@/containers/PageContainers";

const BlogSection = () => {
  return (
    <section className="py-10 lg:py-20">
      <PageContainer>
        <div className="flex text-lg font-normal font-Inter">
          <Link
            href=""
            className="px-2 py-2 text-tertiary400 border-b-[3px] border-tertiary400"
          >
            En son ekleyenler
          </Link>
          <Link href="" className="px-2 py-2 text-tertiary-800 ">
            En Favoriler
          </Link>
        </div>

        {blogAreaMockData?.map((item) => (
          <>
            <div key={item.id} className="py-8">
              <BlogPostSection data={item} />
              {/* {(index + 1) % 2 === 0 && <FormSection />} */}
            </div>
          </>
        ))}
      </PageContainer>
    </section>
  );
};

export default BlogSection;
