import React from "react";
import NavBar from "../Navigation";
import NavigationButton from "../navigationButtons";
import PageContainer from "@/containers/PageContainers";
import Logo from "@/globalElements/Logo";
import { MotionNav } from "@/globalElements/motion";
import ButtonComponent from "@/globalElements/Button";
import Icons from "@/public/assets/icons/Icons";

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
      className={`bg-white-900 h-[80px] flex items-center w-full z-[999] ${
        isScrolled ? "fixed  shadow-md" : "absolute"
      }`}
    >
      <PageContainer className="flex items-center justify-between lg:justify-normal">
        <Logo white={false} className="w-[110px]" />
        <div className="hidden lg:flex items-center justify-between flex-1 ml-5">
          <NavBar />
          <NavigationButton />
        </div>
        <ButtonComponent className="w-12 h-12 flex bg-tertiary-50 items-center justify-center lg:hidden  drop-shadow-custom-hamburger">
          <Icons.Hamburger />
        </ButtonComponent>
      </PageContainer>
    </MotionNav>
  );
};

export default MainNavbar;
