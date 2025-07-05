import React from "react";

export const HeroSection = ({
  title,
  subtitle,
  backgroundImage = "/Image/Logo.png",
  className = "",
}) => {
  return (
    <section 
      className={`w-full h-[400px] sm:h-[600px] lg:h-[860px] relative bg-cover bg-center flex items-center justify-center ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div  data-aos="fade-up"
              data-aos-duration="1000" className="relative z-10 text-center px-4 sm:px-8 max-w-4xl">
        <h1 className="font-['Playfair_Display',Helvetica] font-bold text-white text-4xl sm:text-5xl lg:text-7xl tracking-[-1.44px] leading-tight mb-6">
          {title}
        </h1>
        <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-lg sm:text-xl lg:text-2xl tracking-[0] leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};