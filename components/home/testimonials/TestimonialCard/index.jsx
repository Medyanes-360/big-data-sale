import Image from "next/image";
import RatingStars from "../RatingStars";


const TestimonialCard = ({ company, title, rating, description,image }) => {
  return (
    <div className='bg-tertiary900 rounded-2xl p-4 shadow-card w-[384px] h-[400px] embla__slide !ps-4'>
      <div className='border border-gray600 rounded-lg p-3 flex items-center gap-3 mb-5'>
        <div className='relative w-12 h-12 rounded-full border border-gray-50 shrink-0'><Image alt={company} src={image} fill/></div>
        
        <div>
          <div className='text-light200 text-sm leading-5 font-light mb-1'>{company}</div>
          <div className='text-tertiary50 leading-6'>{title}</div>
        </div>
      </div>
      <RatingStars rating={parseFloat(rating)} />
      <p className='text-white leading-6 p-0'>
        {description}
      </p>
    </div>
  );
};

export default TestimonialCard;
