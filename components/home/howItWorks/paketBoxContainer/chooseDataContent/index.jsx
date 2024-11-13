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
      <h4 className="text-2xl font-Inter font-semibold  text-center mb-4 text-tertiary800">
        İhtiyacınıza <span className="text-tertiary400">En Uygun Paketi</span>{" "}
        Belirleyin
      </h4>
      <div className="grid gap-x-3 lg:grid-cols-2">
        <div className="flex flex-col gap-y-4">
          <article className="font-normal font-Inter text-base text-tertiary800">
            <b className="block font-bold">
              İşletmenizin İhtiyacına Göre En Uygun Paketi Belirleyin
            </b>
            İşinizi bir adım ileri taşımak için en uygun veri paketini seçin.
            Küçük projelerden büyük kampanyalara kadar doğrulanmış ve güncel
            işletme verilerimizle başarıya ulaşın.
          </article>
          <ButtonComponent className="w-[244px] text-[17px] leading-[38px] text-white h-[53px] flex items-center justify-center gap-x-2 bg-tertiary500 rounded-[10px]">
            All Services <Icons.ArrowRight width="24" height="24" />
          </ButtonComponent>
        </div>
        <div className="flex flex-col gap-y-4">
          <article className="font-normal font-Inter text-base text-tertiary800">
            <b className="block font-bold">
              Esnek Fiyat Seçenekleri ile Bütçenize Uygun Çözümler
            </b>
            Her bütçeye uygun paketlerimiz, işletmeniz ne kadar büyük ya da
            küçük olursa olsun, ihtiyaçlarınıza çözüm sunar. Doğru veriye
            ulaşarak iş hedeflerinizi gerçekleştirmenin ilk adımını atın.
          </article>
          <ul className="grid grid-cols-2 gap-3">
            {dataList?.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-x-2 text-gray600 text-[12px] leading-4"
                >
                  <Icons.CheckTertioary /> {item.description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChooseDataContent;
