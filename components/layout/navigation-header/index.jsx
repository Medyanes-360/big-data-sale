import PageContainer from "@/containers/PageContainers";
import Logo from "@/globalElements/Logo";
import React from "react";
import NavBar from "./main-navigation";
import NavigationButton from "./navigation-buttons";

const Header = () => {
  return (
    <header className="h-[80px] flex items-center">
      <PageContainer className="flex items-center justify-between">
        <Logo white={false} className="w-[110px]"/>
        <NavBar />
        <NavigationButton />
      </PageContainer>
    </header>
  );
};

export default Header;
