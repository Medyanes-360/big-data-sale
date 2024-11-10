import PageContainer from "@/containers/PageContainers";
import { MotionDiv } from "@/globalElements/motion";
import Link from "next/link";
import React from "react";

const HeaderTopBar = () => {
  return (
    <MotionDiv className="bg-amber py-3 flex items-center h-[44px] absolute w-full">
      <PageContainer className="flex items-center justify-center">
        <div className="max-w-[80%] mx-auto text-white">
          🌴🥥 If you like ---, closing deals every day... get{" "}
          <Link href="/" className="underline">
            25% off
          </Link>{" "}
          ANY annual plan 🍹😎
        </div>
      </PageContainer>
    </MotionDiv>
  );
};

export default HeaderTopBar;
