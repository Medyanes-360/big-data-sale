import React from "react";
import FormSection from "./formSection";
import Calendar from "./calendar";
import CardCarousel from "./cardSection";
import Testimonials from "../home/testimonials";

const BookDemo = () => {
    return (
        <div className="flex flex-col justify-between items-center min-h-screen bg-gray-100">
            {/* Form ve Card Bölümü */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12 lg:gap-2 lg:min-h-screen">
                <div className="block lg:hidden w-full mb-4 mt-4">
                    <Calendar />
                </div>
                <div className="lg:w-1/2">
                    <FormSection />
                </div>
                <div className="relative lg:w-1/2 flex flex-col items-center">
                    {/* Calendar Masaüstü */}
                    <div className="hidden absolute top-0 left-[10%] mt-16 lg:block">
                        <Calendar />
                    </div>
                    <div className="mt-[92px] ">
                    <CardCarousel />
                    </div>
                    
                </div>
            </div>
            {/* Testimonials Bölümü */}
            <div className="w-full">
                <Testimonials />
            </div>
        </div>
    );
};

export default BookDemo;
