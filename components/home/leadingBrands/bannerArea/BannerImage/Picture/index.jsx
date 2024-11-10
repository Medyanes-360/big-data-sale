import Image from "next/image";
import React from "react";
import girlImage from "@/public/assets/images/girl-image.png";
const Picture = () => {
  return (
    <figure className="relative h-full w-full">
      <Image
        src={girlImage}
        alt="girl"
        width={660}
        height={660}
        className="w-[660px] h-[660px] object-cover transform scale-x-[-1]"
      />
    </figure>
  );
};

export default Picture;
