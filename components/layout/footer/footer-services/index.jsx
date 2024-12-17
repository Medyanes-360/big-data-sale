import Link from "next/link";
import React from "react";

const FooterServices = () => {
  return (
    <div className="md:w-[33%] h-[288px]">
      <div className="flex justify-center ">
        <div className="flex flex-col mt-1 ">
          <Link
            href="/"
            className="text-tertiary400 w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa]  transition"
          >
            Our Data
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition"
          >
            Data Transparency
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition"
          >
            Verify Company Data
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition "
          >
            People Search
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition"
          >
            Verify Profile Data
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition"
          >
            Company Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterServices;
