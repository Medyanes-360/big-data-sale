import PageContainer from "@/containers/PageContainers";
import { MotionDiv } from "@/globalElements/motion";
import Link from "next/link";
import React from "react";

const HeaderTopBar = () => {
  return (
    <MotionDiv className="bg-amber-900 py-3 flex items-center min-h-[44px] absolute w-full">
      <PageContainer className="flex items-center justify-center">
        <div className="max-w-[80%] text-center text-[10px] leading-3 sm:text-[15px] sm:leading-4 lg:text-base mx-auto text-white-900">
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
