import Image from "next/image";
import React from "react";

const PartnorCard = ({ src, name }) => {
  return (
    <div className="w-[225px] h-[62px] flex items-center justify-center">
      <Image src={src} alt={name} width={222} height={62} loading="lazy" />
    </div>
  );
};

export default PartnorCard;
