import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  return (
    <div className="md:w-[33%] h-[288px]">
      <div className="flex justify-center space-x-1 ">
        <div className="flex flex-col mt-1 ">
          <Link
            href="/"
            className="text-tertiary400 w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition"
          >
            Anasayfa
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition "
          >
            Nasıl Çalışır?
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition "
          >
            Veri Paketleri
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition "
          >
            Hakkımızda
          </Link>
          <Link
            href="/success-story"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition "
          >
            Başarı Hikayeleri
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition "
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition"
          >
            SSS
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] hover:text-[#b2b1aa] transition"
          >
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
