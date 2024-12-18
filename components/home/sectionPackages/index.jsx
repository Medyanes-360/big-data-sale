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
