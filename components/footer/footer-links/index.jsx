import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  return (
    <div className="w-[300px] h-[288px]">
      <div className="flex justify-center space-x-1 ">
        <div className=" flex-shrink-0 text-[rgba(6, 28, 61, 1)] text-[18px] ">
          Quick Links
        </div>
        <div className="flex flex-col mt-1 ">
          <Link
            href="/"
            className="text-tertiary400 w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            Anasayfa
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            Nasıl Çalışır?
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            Veri Paketleri
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            Hakkımızda
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            Başarı Hikayeleri
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            SSS
          </Link>
          <Link
            href="/"
            className="text-footerLink w-[200px] h-[36px] text-[14px] leading-[21px] "
          >
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
