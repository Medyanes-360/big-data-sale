"use client";
import React from "react";
import Accardion from "./accardion";

const AccardionArea = () => {
  const data = [
    {
      id: Math.random(10),
      name: "Veri Paketleri Nasıl Çalışır?",
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, hic
      porro! Fugit vitae corrupti, reiciendis rem iusto iste. Aut, quam
      perspiciatis labore aspernatur consectetur veniam illo sunt officiis ipsum
      rerum quidem laudantium eum vel minus odio. Sed voluptates sapiente
      soluta, quasi ea quisquam! Ex, id! Quibusdam soluta dignissimos commodi
      accusamus reiciendis reprehenderit officia quos, molestias mollitia! Fugit
      corporis aspernatur accusantium repudiandae itaque esse, consequuntur ad
      suscipit, doloribus nam architecto, ab odio. Praesentium hic nesciunt nam
      at fugiat atque, est id officiis distinctio explicabo illum exercitationem
      quas nobis, veritatis ullam porro. Doloremque eligendi quos consequatur
      quaerat tenetur amet nulla sapiente iusto.`,
    },
    {
      id: Math.random(10),
      name: "Veri Paketleri Nasıl Çalışır?",
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, hic
      porro! Fugit vitae corrupti, reiciendis rem iusto iste. Aut, quam
      perspiciatis labore aspernatur consectetur veniam illo sunt officiis ipsum
      rerum quidem laudantium eum vel minus odio. Sed voluptates sapiente
      soluta, quasi ea quisquam! Ex, id! Quibusdam soluta dignissimos commodi
      accusamus reiciendis reprehenderit officia quos, molestias mollitia! Fugit
      corporis aspernatur accusantium repudiandae itaque esse, consequuntur ad
      suscipit, doloribus nam architecto, ab odio. Praesentium hic nesciunt nam
      at fugiat atque, est id officiis distinctio explicabo illum exercitationem
      quas nobis, veritatis ullam porro. Doloremque eligendi quos consequatur
      quaerat tenetur amet nulla sapiente iusto.`,
    },
    {
      id: Math.random(10),
      name: "Veri Paketleri Nasıl Çalışır?",
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, hic
      porro! Fugit vitae corrupti, reiciendis rem iusto iste. Aut, quam
      perspiciatis labore aspernatur consectetur veniam illo sunt officiis ipsum
      rerum quidem laudantium eum vel minus odio. Sed voluptates sapiente
      soluta, quasi ea quisquam! Ex, id! Quibusdam soluta dignissimos commodi
      accusamus reiciendis reprehenderit officia quos, molestias mollitia! Fugit
      corporis aspernatur accusantium repudiandae itaque esse, consequuntur ad
      suscipit, doloribus nam architecto, ab odio. Praesentium hic nesciunt nam
      at fugiat atque, est id officiis distinctio explicabo illum exercitationem
      quas nobis, veritatis ullam porro. Doloremque eligendi quos consequatur
      quaerat tenetur amet nulla sapiente iusto.`,
    },
    {
      id: Math.random(10),
      name: "Veri Paketleri Nasıl Çalışır?",
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, hic
      porro! Fugit vitae corrupti, reiciendis rem iusto iste. Aut, quam
      perspiciatis labore aspernatur consectetur veniam illo sunt officiis ipsum
      rerum quidem laudantium eum vel minus odio. Sed voluptates sapiente
      soluta, quasi ea quisquam! Ex, id! Quibusdam soluta dignissimos commodi
      accusamus reiciendis reprehenderit officia quos, molestias mollitia! Fugit
      corporis aspernatur accusantium repudiandae itaque esse, consequuntur ad
      suscipit, doloribus nam architecto, ab odio. Praesentium hic nesciunt nam
      at fugiat atque, est id officiis distinctio explicabo illum exercitationem
      quas nobis, veritatis ullam porro. Doloremque eligendi quos consequatur
      quaerat tenetur amet nulla sapiente iusto.`,
    },
  ];
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div>
      {data?.map((item, index) => {
        return (
          <Accardion
            content={item.content}
            title={item.name}
            key={index}
            setExpanded={setExpanded}
            i={index}
            expanded={expanded}
          />
        );
      })}
    </div>
  );
};

export default AccardionArea;
