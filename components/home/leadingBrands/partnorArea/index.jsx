import React from "react";
import google from "@/public/assets/images/google.png";
import payooner from "@/public/assets/images/payooner.png";
import depositPhotos from "@/public/assets/images/depositPhotos.png";
import salesforce from "@/public/assets/images/salesforce.png";
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
  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 gap-x-5 py-5">
      {partnorData?.map((item, index) => {
        return <PartnorCard src={item.image} name={item.name} key={item.id} />;
      })}
    </div>
  );
};

export default PartnorArea;
