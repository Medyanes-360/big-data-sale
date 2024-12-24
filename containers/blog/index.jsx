import BlogImportantIssues from "@/components/blog/blogImportantIssues";
import BlogMustRead from "@/components/blog/blogMustRead";
import BlogSection from "@/components/blog/blogSection";

export default function BlogPageContainer() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <BlogImportantIssues />
        <BlogMustRead />
      </div>

      <BlogSection />
    </>
  );
}
