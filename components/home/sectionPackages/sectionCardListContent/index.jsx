import React from "react";
import Icons from "@/public/assets/icons/Icons";

const CardListContent = () => {
  // Mock data: iconType ve text içeren array
  const items = [
    {
      iconType: "CheckSuccess",
      text: "🌍 Ülke Seçimi: 1 Ülke",
    },
    { iconType: "CheckSuccess", text: "🏭 Sektör Seçimi: 1 Sektör" },
    { iconType: "CheckSuccess", text: "Hedef Kitle: Küçük Projeler" },
    {
      iconType: "CheckError",
      text: "⚡Ekstra Hizmetler: Destek Hizmeti Yok",
    },
    {
      iconType: "CheckSuccess",
      text: "🚀 Öne Çıkan Avantajlar: Hızlı başlangıç, düşük maliyet, temel analiz.",
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex !items-center justify-start gap-[13px] mb-[10px]"
        >
          <div className="">
            {/* Dinamik icon seçimi */}
            {item.iconType === "CheckSuccess" ? (
              <Icons.CheckSuccess className="w-[18.81px] h-[18.81px] md:w-[24px] md:h-[24px]" />
            ) : item.iconType === "CheckError" ? (
              <Icons.CheckError className="w-[18.81px] h-[18.81px] md:w-[24px] md:h-[24px]" />
            ) : null}
          </div>
          <span className="text-[10.97px] leading-[16.46px] md:text-sm md:leading-[21px]	font-medium	 font-Inter  text-gray-700">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CardListContent;
