import GetMoreInformation from "@/components/home/get-more-information";
import LeadingBrands from "@/components/home/leadingBrands";
import SectionPackages from "@/components/home/sectionPackages";
import BlogPostSection from "@/components/home/BlogPostSection";
import HowItWorks from "@/components/home/howItWorks";

export default function HomePageContainer() {
  return (
    <>
      <GetMoreInformation />
      <LeadingBrands />
      <SectionPackages />
      <HowItWorks />
      <BlogPostSection />
    </>
  );
}
