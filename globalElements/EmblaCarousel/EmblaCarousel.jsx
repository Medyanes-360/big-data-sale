import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import BlogCard from "@/components/home/blogPostSection/blogPostArea/BlogPostContent/BlogCard";
const EmblaCarousel = (props) => {
  const { slides, options, blogData } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-full md:max-w-[472px] md:embla flex justify-center">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {blogData.map((blogData, index) => (
            <div className="embla__slide md:py-3 px-1" key={index}>
              <BlogCard
                title={blogData.title}
                summary={blogData.summary}
                author={blogData.author}
                likes={blogData.likes}
                comments={blogData.comments}
                date={blogData.date}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="md:embla__buttons absolute flex rounded-md shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.16)] top-[-90px] md:top-[-105px] right-0 bg-[#f3f3f6] px-1 gap-2 cursor-pointer">
          <PrevButton
            className="hover:text-tertiary400 text-[#838E9E]"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className="hover:text-tertiary400 text-[#838E9E]"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
