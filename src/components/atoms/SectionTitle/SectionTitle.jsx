import React from "react";

export const SectionTitle = ({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}) => {
  return (
    <div className={`flex flex-col items-start gap-3 ${className}`}>
      <h2 className={`font-['Playfair_Display',Helvetica] font-semibold text-[44px] tracking-[-0.88px] leading-normal ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-['Plus_Jakarta_Sans',Helvetica] font-normal text-xl tracking-[-0.40px] leading-normal ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};