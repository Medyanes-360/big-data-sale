"use client";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const BlogImage = () => {
  return (
    <div className="my-6 flex-1">
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
