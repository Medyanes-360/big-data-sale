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
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {blogData.map((blogData, index) => (
            <div className="embla__slide" key={index}>
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
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
