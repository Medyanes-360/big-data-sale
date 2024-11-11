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
        src="/assets/images/world-marker-anim.json"
        style={{ height: "100%", width: "100%" }}
      ></Player>
    </div>
  );
};

export default BlogImage;
