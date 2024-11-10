import React from "react";
import NavBar from "../Navigation";
import NavigationButton from "../navigationButtons";
import PageContainer from "@/containers/PageContainers";
import Logo from "@/globalElements/Logo";
import { MotionNav } from "@/globalElements/motion";

const MainNavbar = ({ isScrolled }) => {
  return (
    <MotionNav
      initial="visible"
      animate={isScrolled ? "scrolled" : "visible"}
      variants={{
        visible: {
          transition: { duration: 0.3 },
          top: 44,
        },
        scrolled: {
          top: 0,
          y: 0,
          transition: { duration: 0.3 },
        },
      }}
      className={`bg-white h-[80px] flex items-center w-full z-[999] ${
        isScrolled ? "fixed  shadow-md" : "absolute"
      }`}
    >
      <PageContainer className="flex items-center">
        <Logo white={false} className="w-[110px]" />
        <div className="flex items-center justify-between flex-1 ml-5">
          <NavBar />
          <NavigationButton />
        </div>
      </PageContainer>
    </MotionNav>
  );
};

export default MainNavbar;
