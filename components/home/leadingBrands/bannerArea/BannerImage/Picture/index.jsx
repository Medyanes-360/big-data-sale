import Image from "next/image";
import React from "react";
import girlImage from "@/public/assets/girl-image.png";
import Icons from "@/public/assets/icons/Icons";
const Picture = () => {
  return (
    <figure className="relative h-full w-full">
      <Icons.Key className="absolute top-1/2 -translatey-1/2 z-2 right-1/2" />
      <Image
        src={girlImage}
        alt="girl"
        width={660}
        height={660}
        className="w-full h-full object-cover"
      />
    </figure>
  );
};

export default Picture;
