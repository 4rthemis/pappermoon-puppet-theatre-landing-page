import React from "react";
import { NavigationButton } from "../../atoms/NavigationButton";
import { SectionTitle } from "../../atoms/SectionTitle";

export const SlideNavigation = ({
  title,
  subtitle,
  onPrevious,
  onNext,
  className = "",
  titleColor = "text-black",
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 ${className}`}>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        titleClassName={titleColor}
        subtitleClassName={titleColor}
      />

      <div className="flex items-center gap-6">
        <NavigationButton
          direction="left"
          onClick={onPrevious}
          variant="outline"
        />
        <NavigationButton
          direction="right"
          onClick={onNext}
        />
      </div>
    </div>
  );
};