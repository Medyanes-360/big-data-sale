import React from "react";
import Icons from "@/public/assets/icons/Icons";

const CardListContent = () => {
  // Mock data: iconType ve text içeren array
  const items = [
    {
      iconType: "CheckSuccess",
      text: "Küçük işletmeler ve başlangıç projeleri için ekonomik veri çözümü.",
    },
    { iconType: "CheckError", text: "Başarıya ulaşılmadı, yeniden deneyin." },
    { iconType: "CheckSuccess", text: "Veri çözümü kullanımı kolay ve hızlı." },
    {
      iconType: "CheckError",
      text: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
    },
    {
      iconType: "CheckSuccess",
      text: "Yüksek güvenlik önlemleri ile veri koruma.",
    },
    { iconType: "CheckError", text: "Servis şu anda kullanılamıyor." },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-start gap-[13px] mb-[10px]"
        >
          <div className="w-[15.25px] h-[15.25px]">
            {/* Dinamik icon seçimi */}
            {item.iconType === "CheckSuccess" ? (
              <Icons.CheckSuccess />
            ) : item.iconType === "CheckError" ? (
              <Icons.CheckError />
            ) : null}
          </div>
          <p className="text-[9px] font-Inter font-normal text-card-textColor1">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardListContent;
