"use client";
import React, { useState } from "react";
import BannerImage from "./BannerImage";
import { BannerVideo } from "./BannerVideo";

const Banner = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="lg:h-[492px] relative gap-x-5 items-center overflow-hidden royalVioletGradient rounded-[44px]">
      {open ? (
        <BannerVideo setOpen={setOpen} />
      ) : (
        <BannerImage open={open} setOpen={setOpen} />
      )}
    </section>
  );
};

export default Banner;
