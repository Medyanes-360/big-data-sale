import Testimonials from "@/components/home/testimonials";
import SuccessStories from "@/components/successStories";

export default function SuccessStoryPageContainer() {


  return (
    <div className="min-h-screen flex flex-col items-center">
        <SuccessStories />
        <Testimonials />    
    </div>
  );
}
