import Link from "next/link";
import React from "react";

const FooterServices = () => {
  return (
    <div className="w-[300px] h-[288px]">
      <div className="flex justify-center space-x-2 ">
        <div className="text-[rgba(6, 28, 61, 1)] text-[18px] ">Database</div>
        <div className="flex flex-col mt-1 ">
          <Link
            href="/"
            className="text-tertiary400 w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            Our Data
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            Data Transparency
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            Verify Company Data
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            People Search
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            Verify Profile Data
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            Company Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterServices;
