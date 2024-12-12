import React from "react";
import google from "@/public/assets/images/google.png";
import payooner from "@/public/assets/images/payooner.png";
import depositPhotos from "@/public/assets/images/depositPhotos.png";
import salesforce from "@/public/assets/images/salesforce.png";
import ibm from "@/public/assets/images/ibm.png";
import lenovo from "@/public/assets/images/lenovo.png";
import siemens from "@/public/assets/images/siemens.png";
import hubspot from "@/public/assets/images/hubspot.png";
import samsung from "@/public/assets/images/samsung.png";
import nestle from "@/public/assets/images/nestle.png";
import adobe from "@/public/assets/images/adobe.png";
import oracle from "@/public/assets/images/oracle.png";
import tencent from "@/public/assets/images/tencent.png";
import dell from "@/public/assets/images/dell.png";
import huawei from "@/public/assets/images/huawei.png";
import qualcom from "@/public/assets/images/qualcom.png";
import arcelik from "@/public/assets/images/arcelik.png";
import foxcon from "@/public/assets/images/foxcon.png";
import toshiba from "@/public/assets/images/toshiba.png";

import PartnorCard from "./partnorCard";
const PartnorArea = () => {
  const partnorData = [
    {
      id: "1",
      image: google,
      name: "google",
    },
    {
      id: "2",
      image: payooner,
      name: "payooner",
    },
    {
      id: "3",
      image: depositPhotos,
      name: "depositphotos",
    },
    {
      id: "4",
      image: salesforce,
      name: "salesforce",
    },
  ];

  const partnerWebData = [
    { id: "1", image: ibm, name: "IBM" },
    { id: "2", image: lenovo, name: "Lenovo" },
    { id: "3", image: siemens, name: "Siemens" },
    { id: "4", image: hubspot, name: "HubSpot" },
    { id: "5", image: samsung, name: "Samsung" },
    { id: "6", image: nestle, name: "Nestlé" },
    { id: "7", image: adobe, name: "Adobe" },
    { id: "8", image: oracle, name: "Oracle" },
    { id: "9", image: tencent, name: "Tencent" },
    { id: "10", image: dell, name: "Dell Technologies" },
    { id: "11", image: huawei, name: "Huawei" },
    { id: "12", image: qualcom, name: "Qualcomm" },
    { id: "13", image: arcelik, name: "Arçelik" },
    { id: "14", image: foxcon, name: "Foxcon" },
    { id: "15", image: toshiba, name: "Toshiba" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-5 py-5">
      {partnerWebData?.map((item, index) => {
        return <PartnorCard src={item.image} name={item.name} key={item.id} />;
      })}
      <button className="bg-tertiary-800 p-2 rounded-[9.08px]">
        <span className="text-red">Daha Fazla Göster</span>
      </button>
    </div>
  );
};

export default PartnorArea;
