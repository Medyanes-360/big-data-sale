"use client";
import Icons from "@/public/assets/icons/Icons";
import React, { useState } from "react";
import PacketBox from "./packetsBox";
import ChooseDataContent from "./chooseDataContent";
import ChooseOtherContent from "./chooseOtherContent";
import PickDataContent from "./pickDataContent";
import TargetGoal from "./targetGoal";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/globalElements/motion";
const tabs = [
  {
    icons: <Icons.DataPackets />,
    label: "Veri Paketini Aktarin",
    render: () => {
      return <ChooseDataContent />;
    },
  },
  {
    icons: <Icons.ChoosePackets />,
    label: "Veri Paketini Seçin",
    render: () => {
      return <ChooseOtherContent />;
    },
  },
  {
    icons: <Icons.PickPackets />,
    label: "Verileri Toplayın",
    render: () => {
      return <PickDataContent />;
    },
  },
  {
    icons: <Icons.TargetPackets />,
    label: "Hedef Kitlenize Ulaşın",
    render: () => {
      return <TargetGoal />;
    },
  },
];
const tabContentVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};
const PaketBoxContainer = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  const isSelected = (tab) => activeTab.label === tab.label;
  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 shadow-lg bg-white">
        {tabs?.map((item, index) => {
          return (
            <PacketBox
              onClick={() => handleClick(item)}
              key={index}
              tabIndex={isSelected(item)}
              label={item.label}
              icon={item.icons}
            />
          );
        })}
      </div>
      <div>
        <AnimatePresence mode="wait">
          <MotionDiv
            key={activeTab.label || "empty"}
            variants={tabContentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.3,
            }}
          >
            {activeTab && activeTab?.render()}
          </MotionDiv>
        </AnimatePresence>
      </div>
    </>
  );
};

export default PaketBoxContainer;
