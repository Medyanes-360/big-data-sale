import Image from "next/image";
import React from "react";
import girlImage from "@/public/assets/images/girl-image.png";
const Picture = () => {
  return (
    <figure className="relative lg:h-full translate-y-10 sm:translate-y-0 -translate-x-[50px] lg:-translate-x-[100px] lg:w-[660px] flex-shrink-0">
      <Image
        src={girlImage}
        alt="girl"
        width={660}
        height={660}
        className="w-[316px] h-[316px] lg:w-[660px] lg:h-[660px] object-cover transform scale-x-[-1]"
      />
    </figure>
  );
};

export default Picture;
