'use client'
import React, { useEffect, useState } from "react";
import PageContainer from "@/containers/PageContainers";
import Logo from "@/globalElements/Logo";
import NavBar from "./main-navigation";
import NavigationButton from "./navigation-buttons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white h-[80px] flex items-center shadow-header-shadow transition-all duration-1500 ${
        isScrolled ? "custom-animation fixed top-0 left-0 w-full  z-50 " : "relative"
      }`}
    >
      <PageContainer className="flex items-center">
        <Logo white={false} className="w-[110px]" />
        <div className="flex items-center justify-between flex-1 ml-5">
          <NavBar />
          <NavigationButton />
        </div>
      </PageContainer>
    </header>
  );
};

export default Header;
