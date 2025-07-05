import React from "react";
import { siteData } from "../../../data/data";

export const Logo = ({ className = "" }) => {
  const { logo } = siteData.navigation;
  
  return (
    <img
      className={`w-[85px] h-[50px] object-cover ${className}`}
      alt={logo.alt}
      src={logo.src}
    />
  );
};