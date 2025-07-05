import React from "react";
import { Button } from "../../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export const NavigationButton = ({
  direction,
  onClick,
  variant = "default",
  className = "",
}) => {
  const Icon = direction === "left" ? ChevronLeftIcon : ChevronRightIcon;
  
  return (
    <Button
      variant={variant}
      size="icon"
      onClick={onClick}
      className={`w-[60px] h-[60px] rounded-full ${
        variant === "outline" 
          ? "border border-solid border-[#261d1b] bg-transparent" 
          : "bg-[#f2c54a] hover:bg-[#f2c54a]/90"
      } ${className}`}
      aria-label={`${direction === "left" ? "Previous" : "Next"} item`}
    >
      <Icon className="w-7 h-[25px]" />
    </Button>
  );
};