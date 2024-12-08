import React from "react";
import PageContainer from "../../../containers/PageContainers";
import Card from "../../../globalElements/Card";

const SectionPackages = () => {
  const cardData = [
    {
      packageName: "Basic:100 kayıt",
      description:
        "Küçük işletmeler, girişimler veya kampanyalara yeni başlayanlar.",
      price: "50$",
      frequency: "/Per year",
    },
    {
      packageName: "Standard:200 kayıt",
      description: "Orta ölçekli işletmeler için uygun çözümler.",
      price: "100$",
      frequency: "/Per year",
    },
    {
      packageName: "Premium:500 kayıt",
      description: "Büyük işletmeler için kapsamlı veri çözümleri.",
      price: "200$",
      frequency: "/Per year",
      recommended: true, // Önerilen paketi işaretlemek için
    },
    {
      packageName: "Enterprise:Sınırsız kayıt",
      description: "Özel çözümler ve kapsamlı destek sunar.",
      price: "500$",
      frequency: "/Per year",
    },
  ];

  return (
    <div className="bg-packagesBackground">
      <PageContainer className="flex items-center justify-center flex-col">
        <div className=" flex flex-col items-center font-Inter justify-center mx-[120px] mb-[32px] mt-[40px]">
          <div className="section-header font-lexend text-nowrap text-[#915DFF] text-base md:text-2xl">
            İşletmenizi Büyütmek İçin
          </div>
          <div className="section-header font-lexend font-bold  text-nowrap text-[#2F1566] text-base md:text-2xl">
            En Doğru Veri Paketini Seçin
          </div>
        </div>
        <div className="flex items-center justify-center  flex-col">
          <p
            style={{ color: "rgba(66, 82, 107, 1)" }}
            className="text-[18px]  text-center leading-[24px] font-Inter mb-[32px] 
             whitespace-normal sm:whitespace-pre-line sm:leading-[24px] sm:text-left"
          >
            Her sektöre, her ihtiyaca ve her bütçeye uygun veri çözümleriyle, iş
            {"\n"}
            hedeflerinizi kolayca gerçekleştirin.
          </p>

          <div className="w-[318px] mx-[px] my-[6px] h-[52px] px-[12px] rounded-lg bg-[#ffffff]  shadow-sectionPackages py-[12px]">
            <span className="mr-[12px]  text-[#838E9E] text-[16px] font-lexend font-semibold leading-[24px] ">
              Paketler
            </span>
            <span className="text-gradient-orange ">
              bu haftaya özel %25 indirim
            </span>
          </div>

          <div className="mt-[18px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[60px]">
              {cardData.map((data, index) => (
                <Card
                  key={index}
                  packageName={data.packageName}
                  description={data.description}
                  price={data.price}
                  frequency={data.frequency}
                  recommendBorder={data.recommended}
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
