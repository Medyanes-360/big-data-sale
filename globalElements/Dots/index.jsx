import React from "react";

function SliderDots({ index }) {
  return (
    <>
      <div
        className={`${
          0 == index
            ? "w-[16px] h-[8px] bg-tertiary-500 rounded-[22px]"
            : "w-[8px] h-[8px] bg-[#E6DBFF] rounded-[22px]"
        }`}
        key={index + 1}
      ></div>
    </>
  );
}

export default SliderDots;
