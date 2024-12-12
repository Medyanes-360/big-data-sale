import ButtonComponent from "@/globalElements/Button";
import Icons from "@/public/assets/icons/Icons";
import React from "react";
import ContentPlaceholder from "./contentPlaceHolder";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/globalElements/motion";

const Accardion = ({ i, expanded, setExpanded, title, content }) => {
  const isOpen = i === expanded;
  return (
    <div
      className={"mb-3 bg-white-default p-3 md:px-4 rounded-xl"}
      onClick={() => setExpanded(isOpen ? false : i)}
    >
      <div className="flex w-full px-3 justify-between gap-x-10 bg-white rounded-xl h-[54px] items-center text-midnight-950 font-medium text-sm md:text-lg">
        {title}
        <ButtonComponent
          initial={false}
          className="w-10 h-10 rounded-xl flex items-center bg-tertiary-500 justify-center"
        >
          {isOpen ? <Icons.Minus /> : <Icons.Plus />}
        </ButtonComponent>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <MotionDiv
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="max-h-[60px] md:max-h-[120px] overflow-y-auto scrollbar font-normal text-[10px] md:text-[18px] leading-4 md:leading-6 font-Inter"
            variants={{
              open: { opacity: 1, height: "auto", padding: "12px" },
              collapsed: { opacity: 0, height: 0, padding: "0" },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder content={content} />
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accardion;
