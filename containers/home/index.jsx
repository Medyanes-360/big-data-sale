import GetMoreInformation from "@/components/home/get-more-information";
import LeadingBrands from "@/components/home/leadingBrands";
import SectionPackages from "@/components/home/sectionPackages";
import BlogPostSection from "@/components/home/BlogPostSection";
import HowItWorks from "@/components/home/howItWorks";
import Faq from "@/components/home/questinAnswer";
import Testimonials from "@/components/home/testimonials";
import InfoSection from "@/components/home/infoSection";

export default function HomePageContainer() {
  return (
    <>
      <GetMoreInformation />
      <LeadingBrands />
      {/* <SectionPackages />
      <HowItWorks />
      <Faq />
      <Testimonials/>
      <BlogPostSection />
      <InfoSection/> */}
    </>
  );
}
