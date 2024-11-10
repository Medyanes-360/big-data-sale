"use client";
import { useScroll } from "framer-motion";
import HeaderTopBar from "./headerTopBar";
import MainNavbar from "./mainNavbar";
import { useEffect, useState } from "react";

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 0);
    });
    return () => unsubscribe();
  }, [scrollY]);
  return (
    <header>
      <HeaderTopBar />
      <MainNavbar isScrolled={isScrolled} />
    </header>
  );
};

export default Header;
