import Image from "next/image";
import RatingStars from "../RatingStars";

const TestimonialCard = ({ company, title, rating, description, image }) => {
  return (
    <div className="bg-tertiary-900 rounded-2xl p-6 md:px-3 md:py-6 shadow-card embla__slide !ps-4 xl:w-[358px] lg:w-[300px] md:w-[336px] sm:w-[321px] w-[calc(100vw-48px)] h-full">
      <div className="border border-gray600 rounded-xl p-3 flex items-center gap-3 mb-2">
        <div className="relative w-12 h-12 rounded-full border border-blackHaze-50 shrink-0">
          <Image alt={company} src={image} fill />
        </div>
        <div>
          <div className="text-light200 text-sm font-light mb-1">
            {company}
          </div>
          <div className="text-tertiary-50 text-xs font-normal">{title}</div>
        </div>
      </div>
      <RatingStars rating={parseFloat(rating)} />
      <p className="text-white-default text-[12px] leading-5 md:text-[16px] md:leading-6 p-0">{description}</p>
    </div>
  );
};

export default TestimonialCard;
