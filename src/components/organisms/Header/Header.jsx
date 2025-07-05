import React from "react";
import { Logo } from "../../atoms/Logo";
import { Navigation } from "../../molecules/Navigation";

export const Header = ({ currentPage, onNavigate }) => {
  return (
    <header className="flex w-full h-[86px] items-center justify-between px-4 sm:px-8 py-5 bg-[#fefcf5] border-b border-gray-100 relative">
      <Logo />
      <Navigation currentPage={currentPage} onNavigate={onNavigate} />
    </header>
  );
};