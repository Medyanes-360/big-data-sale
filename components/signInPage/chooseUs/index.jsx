"use client";
import Logo from "@/globalElements/Logo";
import React from "react";
import Avatar from "@/public/assets/images/avatar.png";
import Image from "next/image";

const tempArray = [0, 1, 2, 3, 4, 5, 6];

function ChooseUs() {
  return (
    <div className="flex flex-col justify-center gap-6 items-center w-[480px] h-full rounded-xl bg-lavanta py-[30px]">
      <Logo
        white={false}
        border={false}
        className="w-[110px] h-[44px] border-0"
      />
      <h3 className="text-lg font-bold font-lexend text-tertiary900">
        Bizi Tercih Edenler
      </h3>

      <div className="card bg-tertiary-900 w-[384px] signCard h-[475px] rounded-2xl	p-6 gap-2">
        <div className="flex items-center border border-gray600 p-3 rounded-xl gap-3">
          <Image
            src={Avatar}
            width={48}
            height={48}
            alt="Picture of the author"
          />
          <div className="flex flex-col gap-1">
            <span className="text-white-default font-lexend font-light text-sm text-light200">
              Amanda L.
            </span>
            <span className="font-Inter font-normal text-[10px] leading-[15px] text-tertiary-50">
              Yerel Restoranlarla Çalışan Bir Grafik Tasarımcı
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center h-[147px] p-3 gap-3 border-b border-gray600 ">
          <span className="font-lexend font-normal text-xs text-light200">
            <strong className="font-lexend font-normal text-xs text-tertiary400">
              Sektör:
            </strong>{" "}
            Grafik Tasarım
          </span>
          <span className="font-lexend font-normal text-xs text-light200">
            <strong className="font-lexend font-normal text-xs text-tertiary400">
              Hedef:
            </strong>{" "}
            Restoran menüleri ve marka kimliği için tasarım projeleri yapmak.
          </span>
          <span className="font-lexend font-normal text-xs text-light200">
            <strong className="font-lexend font-normal text-xs text-tertiary400">
              Çözüm:
            </strong>{" "}
            Eksik görsel kimlikleri olan restoranları tespit ederek onlara
            ulaşmaya başladı.
          </span>
        </div>
        <div>
          <p className="font-Inter font-normal text-base text-white-default">
            "Benim işim görsel tasarımla restoranların marka değerini artırmak.
            Sunduğunuz verilerle web sitesi olmayan veya dijital görünürlüğü
            zayıf restoranlarla çalışmaya başladım. 7 ayda 35 farklı restoran
            için projeler yaptım. Bu işletmelere ihtiyacını net bir şekilde
            gösterince hemen ilgilendiler."— Amanda L.
          </p>
        </div>
      </div>
      <div className="flex gap-1">
        {tempArray.map((item, index) => {
          return (
            <div
              className={`${
                0 == index
                  ? "w-[16px] h-[8px] bg-tertiary-500 rounded-[22px]"
                  : "w-[8px] h-[8px] bg-[#E6DBFF] rounded-[22px]"
              }`}
              key={index + 1}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ChooseUs;
