"use client";
import React, { useState } from 'react';
import PageContainer from "@/containers/PageContainers";
import TestimonialsHeader from "./testimonialsHeader";
import TestimonialCards from './TestimonalCards';


const Testimonials = () => {
  const [prevClick, setPrevClick] = useState(null);
  const [nextClick, setNextClick] = useState(null);

  return (
    <div className="bg-testimonials-pattern py-10 bg-cover bg-center z-50 relative overflow-hidden">
      <PageContainer>
        <TestimonialsHeader onPrevClick={prevClick} onNextClick={nextClick} />
        <TestimonialCards
          setPrevClick={setPrevClick}
          setNextClick={setNextClick}
          />
      </PageContainer>
    </div>
  );
};

export default Testimonials;
