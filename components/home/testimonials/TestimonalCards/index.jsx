import React from "react";
import TestimonialSlider from "../TesrimonialSlider";
import imageOne from "@/public/assets/images/author.png";

const testimonialsData = [
  {
    image: imageOne,
    company: "Firma 1",
    title: "doctors in england",
    rating: "2",
    description:
      "Bir web sitesi ajansı, veri paketlerimizi kullanarak Türkiye'deki web sitesi olmayan doktorları hedefledi. 8.000 kayıtlık bir veri paketi ile başlayan ajans, doğrulanmış iletişim bilgileri sayesinde doğrudan doktorlarla iletişime geçerek %35 dönüşüm oranı elde etti. Sonuç olarak, ajans hem müşteri tabanını büyüttü hem de 6 ay içinde gelirini %50 artırdı.",
  },
  {
    image: imageOne,
    company: "Firma 1",
    title: "doctors in england",
    rating: "1",
    description:
      "Bir web sitesi ajansı, veri paketlerimizi kullanarak Türkiye'deki web sitesi olmayan doktorları hedefledi. 8.000 kayıtlık bir veri paketi ile başlayan ajans, doğrulanmış iletişim bilgileri sayesinde doğrudan doktorlarla iletişime geçerek %35 dönüşüm oranı elde etti. Sonuç olarak, ajans hem müşteri tabanını büyüttü hem de 6 ay içinde gelirini %50 artırdı.",
  },
  {
    image: imageOne,
    company: "Firma 1",
    title: "doctors in england",
    rating: "4.5",
    description:
      "Bir web sitesi ajansı, veri paketlerimizi kullanarak Türkiye'deki web sitesi olmayan doktorları hedefledi. 8.000 kayıtlık bir veri paketi ile başlayan ajans, doğrulanmış iletişim bilgileri sayesinde doğrudan doktorlarla iletişime geçerek %35 dönüşüm oranı elde etti. Sonuç olarak, ajans hem müşteri tabanını büyüttü hem de 6 ay içinde gelirini %50 artırdı.",
  },
  {
    image: imageOne,
    company: "Firma 1",
    title: "doctors in england",
    rating: "4.5",
    description:
      "Bir web sitesi ajansı, veri paketlerimizi kullanarak Türkiye'deki web sitesi olmayan doktorları hedefledi. 8.000 kayıtlık bir veri paketi ile başlayan ajans, doğrulanmış iletişim bilgileri sayesinde doğrudan doktorlarla iletişime geçerek %35 dönüşüm oranı elde etti. Sonuç olarak, ajans hem müşteri tabanını büyüttü hem de 6 ay içinde gelirini %50 artırdı.",
  },
  {
    image: imageOne,
    company: "Firma 2",
    title: "doctors in england",
    rating: "2",
    description:
      "Bir web sitesi ajansı, veri paketlerimizi kullanarak Türkiye'deki web sitesi olmayan doktorları hedefledi. 8.000 kayıtlık bir veri paketi ile başlayan ajans, doğrulanmış iletişim bilgileri sayesinde doğrudan doktorlarla iletişime geçerek %35 dönüşüm oranı elde etti. Sonuç olarak, ajans hem müşteri tabanını büyüttü hem de 6 ay içinde gelirini %50 artırdı.",
  },
  {
    image: imageOne,
    company: "Firma 3",
    title: "doctors in england",
    rating: "3",
    description:
      "Bir web sitesi ajansı, veri paketlerimizi kullanarak Türkiye'deki web sitesi olmayan doktorları hedefledi. 8.000 kayıtlık bir veri paketi ile başlayan ajans, doğrulanmış iletişim bilgileri sayesinde doğrudan doktorlarla iletişime geçerek %35 dönüşüm oranı elde etti. Sonuç olarak, ajans hem müşteri tabanını büyüttü hem de 6 ay içinde gelirini %50 artırdı.",
  },
];
const TestimonialCards = ({ setPrevClick, setNextClick }) => {
  return (
    <div className="mt-6">
      <TestimonialSlider
        testimonials={testimonialsData}
        setPrevClick={setPrevClick}
        setNextClick={setNextClick}
      />
    </div>
  );
};

export default TestimonialCards;
