import ButtonComponent from "@/globalElements/Button";
import Icons from "@/public/assets/icons/Icons";
import React from "react";

const ChooseDataContent = () => {
  const dataList = [
    {
      description: "İş Hedeflerinize Ulaşmak İçin Doğru Veri",
    },
    {
      description: "Doğrulanmış ve Güncel İşletme Verileri",
    },
    {
      description: "Küçükten Büyüğe Her Proje İçin Uygun",
    },
    {
      description: "Esnek Fiyat Seçenekleri",
    },
  ];
  return (
    <div className="py-5">
      <h4 className="text-base lg:text-2xl font-Inter font-semibold  text-center mb-10 text-tertiary-800">
        İhtiyacınıza{" "}
        <span className="text-tertiary-400 text-base lg:text-2xl">
          En Uygun Paketi
        </span>{" "}
        Belirleyin
      </h4>
      <div className="grid gap-6 md:gap-3 lg:grid-cols-2">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-tertiary-800 	font-lexend font-bold  text-lg">
            Tam İhtiyacınıza Göre Seçim
          </h1>
          <article className="font-normal font-Inter text-base text-tertiary-800">
            İşinizi bir adım ileri taşımak için en uygun veri paketini seçin.
            Küçük projelerden büyük kampanyalara kadar doğrulanmış ve güncel
            işletme verilerimizle başarıya ulaşın.
          </article>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-tertiary-800 font-lexend font-bold text-lg">
            Planlı Yatırım, Büyük Kazanç
          </h1>
          <article className="font-normal font-Inter text-base text-tertiary-800">
            Her bütçeye uygun paketlerimiz, işletmeniz ne kadar büyük ya da
            küçük olursa olsun, ihtiyaçlarınıza çözüm sunar. Doğru veriye
            ulaşarak iş hedeflerinizi gerçekleştirmenin ilk adımını atın.
          </article>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {dataList?.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-x-2 text-tertiary-800 text-sm leading-4"
                >
                  <Icons.CheckTertioary /> {item.description}
                </li>
              );
            })}
          </ul>
          <ButtonComponent className="w-[244px] text-[17px] leading-[38px] text-white-default h-[53px] flex items-center justify-center gap-x-2 bg-tertiary-500 rounded-[10px]">
            All Services{" "}
            <Icons.ArrowRight
              width="24"
              height="24"
              color="#fff"
              className="text-white-default"
            />
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default ChooseDataContent;
