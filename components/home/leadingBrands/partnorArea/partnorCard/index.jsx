import Image from "next/image";
import React from "react";

const PartnorCard = ({ src, name }) => {
  return (
    <div className="w-full shadow-none  border-none md:rounded-xl bg-white md:shadow-leadingBrands md:flex items-center justify-center h-[60px] lg:w-[220px]">
      <Image
        src={src}
        alt={name}
        layout="fixed"
        width={100}
        height={40}
        loading="lazy"
        className="object-cover aspect-auto"
      />
    </div>
  );
};

export default PartnorCard;
