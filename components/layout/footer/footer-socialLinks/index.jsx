import Link from "next/link";
import React from "react";
import Image from "next/image";

const FooterSocialLinks = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Sosyal Medya Linkleri */}
      <div className="flex items-center gap-2">
        {/* Telegram */}
        <Link href="/" passHref>
          <div className="w-[40px] h-[40px] rounded-full bg-[#EAEAEA]/[0.12] flex items-center justify-center cursor-pointer hover:bg-[#EAEAEA]/[0.2] transition">
            <Image
              src="/assets/icons/Telegram.svg"
              alt="Telegram"
              width={24}
              height={24}
            />
          </div>
        </Link>

        {/* WhatsApp */}
        <Link href="/" passHref>
          <div className="w-[40px] h-[40px] rounded-full bg-[#EAEAEA]/[0.12] flex items-center justify-center cursor-pointer hover:bg-[#EAEAEA]/[0.2] transition">
            <Image
              src="/assets/icons/Whatsapp.svg"
              alt="Whatsapp"
              width={24}
              height={24}
            />
          </div>
        </Link>

        {/* YouTube */}
        <Link href="/" passHref>
          <div className="w-[40px] h-[40px] rounded-full bg-[#EAEAEA]/[0.12] flex items-center justify-center cursor-pointer hover:bg-[#EAEAEA]/[0.2] transition">
            <Image
              src="/assets/icons/Youtube.svg"
              alt="Youtube"
              width={24}
              height={24}
            />
          </div>
        </Link>
      </div>

      {/* Istanbul/Turkey Metni */}
      <div>
        <p className="text-[#FFFFFF] text-[14px] leading-[20px] font-medium">
          Istanbul/Turkey
        </p>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
