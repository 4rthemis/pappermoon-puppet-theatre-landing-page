import React from "react";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Logo } from "../../atoms/Logo";
import { Separator } from "../../ui/separator";
import { siteData } from "../../../data/data";

export const Footer = () => {
  const { footer } = siteData;

  const renderSocialIcon = (social) => {
    if (social.customIcon) {
      return (
        <img
          className="w-6 h-6"
          alt={social.alt}
          src={social.icon}
        />
      );
    }

    switch (social.icon) {
      case "linkedin":
        return <LinkedinIcon className="w-6 h-6 text-white" />;
      case "instagram":
        return <InstagramIcon className="w-6 h-6 text-white" />;
      case "twitter":
        return <TwitterIcon className="w-6 h-6 text-white" />;
      default:
        return null;
    }
  };

  return (
    <footer className="flex flex-col w-full items-center gap-16 lg:gap-[100px] py-8 lg:py-16 px-4 sm:px-8">
      <div className="flex flex-col lg:flex-row w-full max-w-[1320px] items-start justify-between gap-8">
        <div className="flex flex-col w-full max-w-[412px] items-start gap-6">
          <Logo />
          <p className="font-['Plus_Jakarta_Sans',Helvetica] font-light text-[#777777] text-base leading-relaxed">
            {footer.description}
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1320px]">
        <Separator className="w-full mb-6 lg:mb-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 px-0 sm:px-[60px]">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-['Inter',Helvetica] font-normal text-black text-lg tracking-[-0.72px]">
              {footer.copyright}
            </span>
          </div>

          <div className="flex gap-3">
            {footer.socialMedia.map((social, index) => (
              <div
                key={`social-${index}`}
                className="w-10 h-10 bg-[#251b18] rounded-[20px] flex items-center justify-center cursor-pointer hover:bg-[#251b18]/80 transition-colors"
              >
                {renderSocialIcon(social)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};