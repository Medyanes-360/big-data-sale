import Link from "next/link";
import React from "react";

const mainNavigation = [
  {
    path: "/",
    name: "Anasayfa",
  },
  {
    path: "/how-it-works",
    name: "Nasıl Çalışır? ",
  },
  {
    path: "/data-packages",
    name: "Veri Paketleri",
  },
  // {
  //   path: "/",
  //   name: "Hakkımızda",
  // },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/success-story",
    name: "Başarı Hikâyeleri",
  },
  {
    path: "/faq",
    name: "SSS",
  },
  {
    path: "/contact",
    name: "İletişim",
  },
];

const NavBar = () => {
  return (
    <div className="hidden lg:block">
      <ul className="flex items-center gap-x-5">
        {mainNavigation?.map((item, index) => {
          return (
            <li key={index} className="leading-[50px]">
              <Link
                href={item.path}
                className="text-sm bg font-medium font-Inter transition-colors  text-regentGray-60 hover:text-tertiary-500 block w-fit h-full"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
