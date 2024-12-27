import Testimonials from "@/components/home/testimonials";
import SuccessStories from "@/components/successStories";

export default function SuccessStoryPageContainer() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div>
        <SuccessStories />
      </div>
      <div className="w-[100vw]">
        <Testimonials />
      </div>


    </div>
  );
}
