import Icons from '@/public/assets/icons/Icons';
import React from 'react';
const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating); 
  return (
    <div className="flex mb-5">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <Icons.Rating key={`full-${i}`} />
        ))}
    </div>
  );
};

export default RatingStars;
