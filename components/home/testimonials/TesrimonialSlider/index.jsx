import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "../TestimonialCard";
import RatingStars from "../RatingStars"; // RatingStars bileşenini import edin

const TestimonialSlider = ({ testimonials, options, setPrevClick, setNextClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    slidesToShow: 3,
    align:"start",
    ...options,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    setPrevClick(() => scrollPrev);
    setNextClick(() => scrollNext);
  }, [scrollPrev, scrollNext, setPrevClick, setNextClick]);

  return (
    <div className="embla !w-screen" ref={emblaRef}>
      <div className="embla__container flex w-full gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard
              company={testimonial.company}
              title={testimonial.title}
              rating={testimonial.rating}
              description={testimonial.description}
              image={testimonial.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
