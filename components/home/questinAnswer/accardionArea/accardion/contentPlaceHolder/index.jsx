import { MotionDiv } from "@/globalElements/motion";
import React from "react";

const ContentPlaceholder = ({ content }) => {
  return (
    <MotionDiv
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
    >
      {content}
    </MotionDiv>
  );
};

export default ContentPlaceholder;
