import Icons from "@/public/assets/icons/Icons";
import React from "react";
import AdvantagesCard from "./advantagesCard";

const AdvantagesArea = () => {
  const advantagesData = [
    {
      id: 1,
      title: "İleri Düzey Kişiselleştirme",
      icon: <Icons.UserPlus />,
    },
    {
      id: 2,
      title: "Hızlı ve Doğru Sonuçlar",
      icon: <Icons.Hours />,
    },
    {
      id: 3,
      title: "Yasal ve Güvenli Veri İşleme",
      icon: <Icons.DataCheck />,
    },
    {
      id: 4,
      title: "4.6star onG2",
      icon: <Icons.Star />,
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-x-4 max-w-[95%] mx-auto">
      {advantagesData?.map((item, _) => {
        return (
          <AdvantagesCard title={item.title} key={item.id} icon={item.icon} />
        );
      })}
    </div>
  );
};

export default AdvantagesArea;
