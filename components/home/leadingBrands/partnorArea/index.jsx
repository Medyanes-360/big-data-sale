import React from "react";
import google from "@/public/assets/google.png";
import payooner from "@/public/assets/payooner.png";
import depositPhotos from "@/public/assets/depositPhotos.png";
import salesforce from "@/public/assets/salesforce.png";
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
      image: google,
      name: "google",
    },
    {
      id: "4",
      image: depositPhotos,
      name: "depositphotos",
    },
    {
      id: "5",
      image: salesforce,
      name: "salesforce",
    },
  ];
  return (
    <div className="grid grid-cols-5 gap-x-5">
      {partnorData?.map((item, index) => {
        return <PartnorCard src={item.image} name={item.name} key={item.id} />;
      })}
    </div>
  );
};

export default PartnorArea;
