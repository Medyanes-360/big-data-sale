import Image from "next/image";
import Link from "next/link";
import React from "react";
import whiteLogo from "@/public/assets/logo/welness_white.png";
import blackLogo from "@/public/assets/logo/welness_black.webp";
const Logo = ({ white, className, border = true }) => {
  return (
    <Link
      href="/"
      className={`block w-fit h-fit ${
        !border ? "" : "pr-6 border-r border-solid border-r-lightMist"
      }`}
    >
      <Image
        src={white ? whiteLogo : blackLogo}
        alt="Welness"
        width={220}
        className={className}
        height={88}
      />
    </Link>
  );
};

export default Logo;
