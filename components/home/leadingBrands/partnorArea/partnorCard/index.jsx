import Image from "next/image";
import React from "react";

const PartnorCard = ({ src, name }) => {
  return (
    <div className="w-auto px-4 rounded-xl bg-white shadow-leadingBrands h-[45px] lg:w-[225px] lg:h-[62px] flex items-center justify-center">
      <Image
        src={src}
        alt={name}
        height={50}
        loading="lazy"
        className="object-contain h-full w-auto"
      />
    </div>
  );
};

export default PartnorCard;
