import React from "react";
import PageContainer from "../../../containers/PageContainers";
import Card from "../../../globalElements/Card";
import ButtonComponent from "../../../globalElements/Button";
import Icons from "@/public/assets/icons/Icons";
import CardListContent from "./sectionCardListContent";

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
          <div className="section-header text-primary">
            İşletmenizi Büyütmek İçin
          </div>
          <div className="section-header text-secondary">
            En Doğru Veri Paketini Seçin
          </div>
        </div>
        <div className="flex items-center justify-center  flex-col">
          <p
            style={{ color: "rgba(66, 82, 107, 1)" }}
            className="text-[18px] mb-[32px]  leading-[24px] font-Inter "
          >
            Her sektöre, her ihtiyaca ve her bütçeye uygun veri çözümleriyle, iş
            hedeflerinizi kolayca gerçekleştirin.
          </p>
          <div
            className="w-[318px] mx-[px] my-[6px] h-[52px] px-[12px] border rounded-lg bg-[#ffffff]  shadow-custom2;
]  shadow-custom2 py-[12px]"
          >
            <span className="mr-[12px]  text-[#838E9E] text-[16px] font-lexend font-medium leading-[24px] ">
              Paketler
            </span>
            <span className="text-gradient-orange ">
              bu haftaya özel %25 indirim
            </span>
          </div>

          <div className="mt-[18px]">
            <div className="grid grid-cols-4 gap-[60px]">
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
              {/* <Card>
                <Card.Brand>
                  <span className="text-[15px] font-Inter font-medium">
                    basic:100 kayıt
                  </span>
                </Card.Brand>

                <div className=" text-cardTextColor1 mb-[40px] mt-[22px]  font-lexend font-medium text-[15.25px] leading-[22.86px] ">
                  Küçük işletmeler, asasdasdas sadasdsad sgirişimler, veya
                  kampanyalara yeni başlayanlar.
                </div>

                <div className="mx-[11.43px] mb-[11px] flex items-center space-x-3 ">
                  <span className=" font-bold text-tertiary800 text-[30.48px] leading-[51px]">
                    50$
                  </span>
                  <span className="font-medium text-[13.3px] leading-[20px] font-Inter ">
                    /Per year
                  </span>
                </div>

                <ButtonComponent className="!py-0 flex items-center gap-[11px] !px-[30px] w-full bg-tertiary500   rounded-[9.52px]">
                  <span className="text-cardTextColor text-[16.9px] font-lexend leading-[43px] font-medium">
                    Get Started
                  </span>
                  <Icons.ArrowRight color="#FFFFFF" />
                </ButtonComponent>

                <div className="my-[11.45px] bg-cardLineBackground h-[0.5px] w-full "></div>

                <CardListContent />
              </Card>
              <Card>
                <Card.Brand>
                  <span className="text-[15px] font-Inter font-medium">
                    basic:100 kayıt
                  </span>
                </Card.Brand>

                <div className=" text-cardTextColor1 mb-[40px] mt-[22px]  font-lexend font-medium text-[15.25px] leading-[22.86px] ">
                  Küçük işletmeler, girişimler, veya kampanyalara yeni
                  başlayanlar.
                </div>

                <div className="mx-[11.43px] mb-[11px] flex items-center space-x-3">
                  <span className=" font-bold text-tertiary800 text-[30.48px] leading-[51px]">
                    50$
                  </span>
                  <span className="font-medium text-[13.3px] leading-[20px] font-Inter ">
                    /Per year
                  </span>
                </div>

                <ButtonComponent className="!py-0 flex items-center gap-[11px] !px-[30px] w-full bg-tertiary500   rounded-[9.52px]">
                  <span className="text-cardTextColor text-[16.9px] font-lexend leading-[43px] font-medium">
                    Get Started
                  </span>
                  <Icons.ArrowRight color="#FFFFFF" />
                </ButtonComponent>

                <div className="my-[11.45px] bg-cardLineBackground h-[0.5px] w-full "></div>

                <CardListContent />
              </Card>
              <Card recommendBorder={true}>
                <Card.Recommend></Card.Recommend>

                <Card.Brand>
                  <span className="text-[15px] font-Inter font-medium">
                    basic:100 kayıt
                  </span>
                </Card.Brand>

                <div className=" text-cardTextColor1 mb-[40px] mt-[22px] font-lexend font-medium text-[15.25px] leading-[22.86px] ">
                  Küçük işletmeler, girişimler, veya kampanyalara yeni
                  başlayanlar.
                </div>

                <div className="mx-[11.43px] mb-[11px] flex items-center space-x-3">
                  <span className=" font-bold text-tertiary800 text-[30.48px] leading-[51px]">
                    50$
                  </span>
                  <span className="font-medium text-[13.3px] leading-[20px] font-Inter ">
                    /Per year
                  </span>
                </div>

                <ButtonComponent className="!py-0 flex items-center gap-[11px] !px-[30px] w-full bg-tertiary500   rounded-[9.52px]">
                  <span className="text-cardTextColor text-[16.9px] font-lexend leading-[43px] font-medium">
                    Get Started
                  </span>
                  <Icons.ArrowRight color="#FFFFFF" />
                </ButtonComponent>

                <div className="my-[11.45px] bg-cardLineBackground h-[0.5px] w-full "></div>

                <CardListContent />
              </Card>
              <Card>
                <Card.Brand>
                  <span className="text-[15px] font-Inter font-medium">
                    basic:100 kayıt
                  </span>
                </Card.Brand>

                <div className=" text-cardTextColor1 mb-[40px] mt-[22px]  font-lexend font-medium text-[15.25px] leading-[22.86px] ">
                  Küçük işletmeler, girişimler, veya kampanyalara yeni
                  başlayanlar.
                </div>

                <div className="mx-[11.43px] mb-[11px] flex items-center space-x-3">
                  <span className=" font-bold text-tertiary800 text-[30.48px] leading-[51px]">
                    50$
                  </span>
                  <span className="font-medium text-[13.3px] leading-[20px] font-Inter ">
                    /Per year
                  </span>
                </div>

                <ButtonComponent className="!py-0 flex items-center gap-[11px] !px-[30px] w-full bg-tertiary500   rounded-[9.52px]">
                  <span className="text-cardTextColor text-[16.9px] font-lexend leading-[43px] font-medium">
                    Get Started
                  </span>
                  <Icons.ArrowRight color="#FFFFFF" />
                </ButtonComponent>

                <div className="my-[11.45px] bg-cardLineBackground h-[0.5px] w-full "></div>

                <CardListContent />
              </Card> */}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default SectionPackages;
