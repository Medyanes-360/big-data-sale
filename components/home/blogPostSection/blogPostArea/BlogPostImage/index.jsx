"use client";

import Image from "next/image";
import WorldImage from "@/public/assets/images/world.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const BlogImage = () => {
  return (
    <div className="my-[24px] flex-1">
      <Player
        autoplay
        loop
        src="/assets/images/marker-anim.json"
        style={{ height: "100%", width: "100%" }}
      ></Player>
      {/* <Image
        src={WorldImage}
        alt="world"
        width={500}
        height={500}
        className="w-[500px] h-[500px] object-cover transform scale-x-[-1]"
      /> */}
    </div>
  );
};

export default BlogImage;
