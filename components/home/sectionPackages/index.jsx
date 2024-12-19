"use client";
import React from "react";
import PageContainer from "../../../containers/PageContainers";
import Card from "../../../globalElements/Card";
import { SectionPackagesCarousel } from "@/globalElements/EmblaCarousel/SectionPackges";
import { PackagesData } from "@/public/sectionPackagesMockData";

const OPTIONS = {
  slidesToScroll: "auto",
  loop: false,
  slidesToScroll: 1,
};

const cardData = [
  {
    packageName: "Başlangıç",
    totalData: "50 Adet",
    price: "50$",
    frequency: "Veri / $2",
    bgColor: "#915DFF",
    items: [
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
    ],
  },
  {
    packageName: "Girişimci",
    totalData: "1.000 Adet",
    price: "100$",
    frequency: "Veri / $1",
    bgColor: "#8A33B9",

    items: [
      { iconType: "CheckSuccess", text: "🌍 Ülke Seçimi: 1 Ülke" },
      { iconType: "CheckSuccess", text: "🏭 Sektör Seçimi: 2 Sektör" },
      {
        iconType: "CheckSuccess",
        text: "📊 Toplam Erişilen Veri Adedi: 1.000 Adet Veri",
      },
      {
        iconType: "CheckSuccess",
        text: "⚡ Ekstra Hizmetler: Temel e-posta desteği (1-7 gün içinde yanıt)",
      },
      {
        iconType: "CheckSuccess",
        text: "🚀 Öne Çıkan Avantajlar: Hızlı başlangıç, düşük maliyet, temel analiz.",
      },
    ],
  },
  {
    packageName: "Profosyonel",
    totalData: "3.000 Adet",
    price: "200$",
    frequency: "Veri / $0.5",
    bgColor: "#2B7300",
    recommended: true, // Önerilen paketi işaretlemek için
    items: [
      { iconType: "CheckSuccess", text: "🌍 Ülke Seçimi: 2 Ülke" },
      { iconType: "CheckSuccess", text: "🏭 Sektör Seçimi: 2 Sektör" },
      {
        iconType: "CheckSuccess",
        text: "🎯 Hedef: Büyük Projeler için uygun",
      },
      {
        iconType: "CheckSuccess",
        text: "⚡ Ekstra Hizmetler: Hızlı destek (24 saat içinde yanıt), satış ortalığıyla %5 ekstra.",
      },
      {
        iconType: "CheckSuccess",
        text: "🚀 Öne Çıkan Avantajlar: Daha geniş veri analizi, sektör hedeflemeleri, uzun vadeli stratejiler.",
      },
    ],
  },
  {
    packageName: "Business",
    totalData: "Tüm Veriler",
    price: "500$",
    frequency: "Veri / $0.5",
    bgColor: "#E00083",
    items: [
      { iconType: "CheckSuccess", text: "🌍 Ülke Seçimi: 4 Ülke" },
      { iconType: "CheckSuccess", text: "🏭🏭🏭🏭 Sektör Seçimi: 4 Sektör" },
      {
        iconType: "CheckSuccess",
        text: "📦 Veri Adedi: Seçilen sektörlerde tüm veriler",
      },
      {
        iconType: "CheckSuccess",
        text: "Öne Çıkan Avantajlar: Tüm Verilere Erişim",
      },
      {
        iconType: "CheckSuccess",
        text: "⚡ Ekstra Hizmetler: Hızlı destek, satış ortalığındaki %10 ekstra.",
      },
      {
        iconType: "CheckSuccess",
        text: "🚀 Öne Çıkan Avantajlar: Tüm Verilere Erişim.",
      },
    ],
  },
  {
    packageName: "Platinum",
    totalData: "∞ Sınırsız",
    price: "500$",
    frequency: "",
    bgColor: "#FFA108",
    items: [
      { iconType: "CheckSuccess", text: "♾️🌍 Ülke Seçimi: Sınırsız" },
      { iconType: "CheckSuccess", text: "♾️🏭 Sektör Seçimi: Sınırsız" },
      {
        iconType: "CheckSuccess",
        text: "🔥 Ekstra Hizmetler: Anlık canlı destek, satış ortaklığında %25 ekstra.",
      },
      {
        iconType: "CheckSuccess",
        text: "🚀 Öne Çıkan Avantajlar: Sınırsız erişim, düzenli veri güncellemeleri, premium strateji danışmanlığı.",
      },
    ],
  },
  {
    packageName: "Ortak Çalışma ve İş Birliği",
    bgColor: "#C8905F",
    items: [
      {
        iconType: "CheckSuccess",
        text: "🌍 Ülke Seçimi: İş birliği için küresel erişim",
      },
      {
        iconType: "CheckSuccess",
        text: "🏢 Hedef: İşletmeler arası iş birliği ve ortak proje geliştirme.",
      },
      {
        iconType: "CheckSuccess",
        text: "✉️ Başvuru Formu: İlgili firmaların başvurularını alabileceğiniz yönlendirme.",
      },
      {
        iconType: "CheckSuccess",
        text: "	•	📄 Açıklama:Bu paket işletmelere, kendilerine uygun iş ortaklarıyla hızlı bir iletişim imkânı tanır.",
      },
      {
        iconType: "CheckSuccess",
        text: "🚀 Öne Çıkan Avantajlar: \n•	Kolay iş birliği süreçleri.   \n •	Ortak projelerde hızlı başlangıç.  \n•	Verimli ve hedef odaklı iletişim.",
      },
    ],
    partner: true, //ortak çalışma ve iş birliği kısmı
  },
];

const SectionPackages = () => {
  const SLIDE_COUNT = PackagesData?.length;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="bg-packagesBackground">
      <PageContainer className="flex items-center justify-center flex-col">
        <div className="flex flex-col items-center font-Inter justify-center  mx-[120px] mb-[15px] md:mb-[32px] mt-[40px]">
          <div className="section-header font-lexend font-bold text-nowrap text-[#915DFF] text-base md:text-2xl">
            İşletmenizi Büyütmek İçin
          </div>
          <div className="section-header font-lexend font-bold  text-nowrap text-[#2F1566] text-base md:text-2xl">
            En Doğru Veri Paketini Seçin
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p
            style={{ color: "rgba(66, 82, 107, 1)" }}
            className="text-[12px] text-center font-medium leading-[16px] font-Inter mb-[32px] 
             whitespace-normal sm:whitespace-pre-line sm:leading-[24px] sm:text-lg sm:font-normal"
          >
            Her sektöre, her ihtiyaca ve her bütçeye uygun veri çözümleriyle, iş
            {"\n"}
            hedeflerinizi kolayca gerçekleştirin.
          </p>

          <div className="w-[318px] mx-[px] my-[6px] h-[52px] px-[12px] rounded-lg bg-[#ffffff] shadow-sectionPackages py-[12px]">
            <span className="mr-[12px] text-[#838E9E] text-[16px] font-lexend font-semibold leading-[24px] ">
              Paketler
            </span>
            <span className="text-gradient-orange text-[16px] font-Inter font-medium leading-[24px]">
              bu haftaya özel %25 indirim
            </span>
          </div>

          <div className="mt-[18px]  md:mt[30px]  w-full">
            <div className="grid grid-cols-1 justify-items-start md:hidden gap-[30px]">
              <SectionPackagesCarousel slides={SLIDES} options={OPTIONS}>
                {cardData.map((data, index) => (
                  <div className="embla__slide" key={index}>
                    <Card
                      key={index}
                      packageName={data?.packageName}
                      bgColor={data?.bgColor}
                      totalData={data?.totalData}
                      price={data?.price}
                      frequency={data?.frequency}
                      recommendBorder={data?.recommended}
                      items={data?.items}
                      partner={data?.partner}
                    />
                  </div>
                ))}
              </SectionPackagesCarousel>
            </div>
            <div className="hidden sm:grid md:grid-cols-3	 md:grid-cols-3 gap-[30px]">
              {cardData.map((data, index) => (
                <Card
                  key={index}
                  packageName={data?.packageName}
                  bgColor={data?.bgColor}
                  totalData={data?.totalData}
                  price={data?.price}
                  frequency={data?.frequency}
                  recommendBorder={data?.recommended}
                  items={data?.items}
                  partner={data?.partner}
                />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default SectionPackages;
