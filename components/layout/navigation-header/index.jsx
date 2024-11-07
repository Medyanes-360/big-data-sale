import PageContainer from "@/containers/PageContainers";
import Logo from "@/globalElements/Logo";
import React from "react";
import NavBar from "./main-navigation";
import NavigationButton from "./navigation-buttons";

const Header = () => {
  return (
    <header className="h-[80px] flex items-center">
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
