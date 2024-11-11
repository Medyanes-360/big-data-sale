"use client";
import React from "react";
import Author from "@/public/assets/images/author.png";
import EmblaCarousel from "@/globalElements/EmblaCarousel/EmblaCarousel";

// Örnek blog verisi
const blogData = [
  {
    id: 1,
    title: "Başarıya Giden Yolda Verinin Gücü: Müşteri Dönüşümünü Artırmak",
    summary:
      "Doğru verileri kullanarak müşteri dönüşüm oranlarınızı nasıl artırabileceğinizi ve bu süreçte hangi veri analiz araçlarının yardımcı olabileceğini inceleyen bir yazı.",
    author: {
      name: "Kevin Gilbert",
      profileImage: Author,
    },
    likes: 120,
    comments: 35,
    date: "15 Sep, 2021",
  },
  {
    id: 2,
    title: "Veri Bilimi ve Yapay Zeka: Geleceği Şekillendiren Güçler",
    summary:
      "Veri bilimi ve yapay zeka arasındaki ilişkiyi keşfederek, bu teknolojilerin iş dünyasında nasıl devrim yarattığını açıklıyoruz.",
    author: {
      name: "Jane Doe",
      profileImage: Author,
    },
    likes: 95,
    comments: 40,
    date: "20 Sep, 2021",
  },
  {
    id: 3,
    title: "Veri Bilimi ve Yapay Zeka: Geleceği Şekillendiren Güçler",
    summary:
      "Veri bilimi ve yapay zeka arasındaki ilişkiyi keşfederek, bu teknolojilerin iş dünyasında nasıl devrim yarattığını açıklıyoruz.",
    author: {
      name: "Jane Doe",
      profileImage: Author,
    },
    likes: 95,
    comments: 40,
    date: "20 Sep, 2021",
  },
  {
    id: 4,
    title: "Veri Bilimi ve Yapay Zeka: Geleceği Şekillendiren Güçler",
    summary:
      "Veri bilimi ve yapay zeka arasındaki ilişkiyi keşfederek, bu teknolojilerin iş dünyasında nasıl devrim yarattığını açıklıyoruz.",
    author: {
      name: "Jane Doe",
      profileImage: Author,
    },
    likes: 95,
    comments: 40,
    date: "20 Sep, 2021",
  },
];
const OPTIONS = {};

const BlogContent = () => {
  return <EmblaCarousel blogData={blogData} options={OPTIONS} />;
};

export default BlogContent;
