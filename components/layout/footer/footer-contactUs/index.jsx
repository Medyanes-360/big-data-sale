import Link from "next/link";
import React from "react";

const FooterContactUs = () => {
  return (
    <div className="w-[300px] h-auto">
      <div className="flex flex-col mt-1 space-y-2">
        {/* Başlık */}
        <Link
            href="/"
            className="text-tertiary400 w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition"
          >
            Contact Us
          </Link>

        {/* İletişim Bilgileri */}
        <Link
          href="tel:+2121234556"
          className="text-footerLink text-[14px] leading-[21px] hover:text-[#b2b1aa] transition"
        >
          + (212) 123 4556
        </Link>
        <Link
          href="mailto:hello@logoipsum.com"
          className="text-footerLink text-[14px] leading-[21px] hover:text-[#b2b1aa] transition"
        >
          hello@logoipsum.com
        </Link>
        <p className="text-footerLink text-[14px] leading-[21px]">
          ISTANBUL.TURKEY
        </p>
      </div>
    </div>
  );
};

export default FooterContactUs;
