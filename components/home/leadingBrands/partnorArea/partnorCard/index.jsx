import Image from "next/image";
import React from "react";

const PartnorCard = ({ src, name }) => {
  return (
    <div className="w-full  border-none rounded-xl bg-white shadow-leadingBrands flex items-center justify-center h-[60px] lg:w-[220px]">
      <Image
        src={src}
        alt={name}
        layout="fixed"
        width={100}
        height={40}
        loading="lazy"
        className="object-contain"
      />
    </div>
  );
};

export default PartnorCard;
