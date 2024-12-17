"use client";

import howitworksMockData from "@/public/howitworksMockData";
import StepSection from "./stepSection";

const BoxContainer = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-12 gap-10 md:gap-4">
      {howitworksMockData?.map((item, index) => {
        return <StepSection key={index} item={item} />;
      })}
    </div>
  );
};

export default BoxContainer;
