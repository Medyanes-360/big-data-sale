"use client";
import React from "react";
import { useAnimationFrame } from "framer-motion";
import { MotionImage } from "@/globalElements/motion";

import Image from "next/image";

const AnimationBox = () => {
  const [angle, setAngle] = React.useState(0);

  useAnimationFrame((t) => {
    setAngle((prev) => (prev + 0.02) % (2 * Math.PI));
  });

  const calculatePosition = (angle, radius, offset) => {
    const x = Math.cos(angle + offset) * radius;
    const y = Math.sin(angle + offset) * radius;
    return { x, y };
  };
  return (
    <>
      {/* Outer orbiting avatars */}
      <MotionImage
        src="/api/placeholder/32/32"
        alt="one-avatar"
        width={32}
        height={32}
        style={{
          translateX: calculatePosition(angle, 160, 0).x,
          translateY: calculatePosition(angle, 160, 0).y,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-8 h-8 border-2 border-white shadow-lg"
      />

      <MotionImage
        src="/api/placeholder/27/27"
        alt="two-avatar"
        width={27}
        height={27}
        style={{
          translateX: calculatePosition(angle, 160, Math.PI / 2).x,
          translateY: calculatePosition(angle, 160, Math.PI / 2).y,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-7 h-7 border-2 border-white shadow-lg"
      />

      {/* First inner circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-customLightPurple">
        <MotionImage
          src="/api/placeholder/32/32"
          alt="three-avatar"
          width={32}
          height={32}
          style={{
            translateX: calculatePosition(angle, 140, Math.PI / 4).x,
            translateY: calculatePosition(angle, 140, Math.PI / 4).y,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-8 h-8 border-2 border-white shadow-lg"
        />

        <MotionImage
          src="/api/placeholder/16/16"
          alt="four-avatar"
          width={16}
          height={16}
          style={{
            translateX: calculatePosition(angle, 140, -Math.PI / 3).x,
            translateY: calculatePosition(angle, 140, -Math.PI / 3).y,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-4 h-4 border-2 border-white shadow-lg"
        />

        {/* Second inner circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[248px] h-[248px] rounded-full bg-customPurple border-2 border-white">
          <MotionImage
            src="/api/placeholder/48/48"
            alt="five-avatar"
            width={48}
            height={48}
            style={{
              translateX: calculatePosition(angle, 100, Math.PI / 6).x,
              translateY: calculatePosition(angle, 100, Math.PI / 6).y,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 border-2 border-white shadow-lg"
          />

          {/* Central avatar */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[158px] h-[158px] rounded-full border-2 border-white overflow-hidden">
            <Image
              src="/api/placeholder/158/158"
              alt="Person"
              width={158}
              height={158}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationBox;
