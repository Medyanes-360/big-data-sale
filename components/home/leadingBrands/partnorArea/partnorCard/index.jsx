import Image from "next/image";
import React from "react";

const PartnorCard = ({ src, name }) => {
  return (
    <div className="w-auto h-[45px] lg:w-[225px] lg:h-[62px] flex items-center justify-center">
      <Image
        src={src}
        alt={name}
        width={222}
        height={62}
        loading="lazy"
        className="w-full h-fit"
      />
    </div>
  );
};

export default PartnorCard;
