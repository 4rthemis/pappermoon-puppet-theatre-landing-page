import React, { useState } from "react";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "../../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../ui/navigation-menu";
import { LanguageSelector } from "../../atoms/LanguageSelector";
import { useTranslation } from "../../../hooks/useTranslation";

export const Navigation = ({ 
  currentPage = "about", 
  onNavigate 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t('home'), key: "home" },
    { label: t('aboutUs'), key: "about" },
    { label: t('performance'), key: "performance" },
    {
      label: t('programs'),
      key: "programs",
      hasDropdown: true,
      subItems: [
        { label: t('puppetParty'), key: "Puppet Party" },
        { label: t('workshops'), key: "workshops" },
        { label: t('educationalTours'), key: "educational-tours" },
      ]
    },
  ].map(item => ({
    ...item,
    active: currentPage === item.key || 
            (item.hasDropdown && item.subItems?.some(sub => sub.key === currentPage))
  }));

  const handleNavigation = (key) => {
    onNavigate?.(key);
    setIsMenuOpen(false);
    setIsProgramsOpen(false);
  };

  return (
    <nav className="flex items-center gap-6">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4">
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.key} className="relative">
                <div
                  className={`flex items-center cursor-pointer ${
                    item.active ? "border-b-2 border-[#a58d6a] py-3" : ""
                  }`}
                  onClick={() => {
                    if (item.hasDropdown) {
                      setIsProgramsOpen(!isProgramsOpen);
                    } else {
                      handleNavigation(item.key);
                    }
                  }}
                >
                  <span
                    className={`font-['Plus_Jakarta_Sans',Helvetica] text-lg ${
                      item.active
                        ? "font-semibold text-[#967c5c]"
                        : "font-normal text-black hover:text-[#967c5c] transition-colors"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDownIcon 
                      className={`w-6 h-6 ml-2 transition-transform ${
                        isProgramsOpen ? "rotate-180" : ""
                      }`} 
                    />
                  )}
                </div>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && isProgramsOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 min-w-[200px] z-50">
                    {item.subItems?.map((subItem) => (
                      <div
                        key={subItem.key}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => handleNavigation(subItem.key)}
                      >
                        <span className={`font-['Plus_Jakarta_Sans',Helvetica] text-base ${
                          currentPage === subItem.key 
                            ? "font-semibold text-[#967c5c]" 
                            : "font-normal text-black"
                        }`}>
                          {subItem.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <LanguageSelector />
        <Button className="h-[52px] px-6 py-4 bg-[#f2c54a] text-black rounded-[100px] hover:bg-[#f2c54a]/90 transition-colors">
          <span className="font-medium text-lg tracking-[-0.36px]">
            {t('bookTicket')}
          </span>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </Button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 lg:hidden z-50">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.key}>
                <div
                  className={`flex items-center justify-between cursor-pointer py-2 ${
                    item.active ? "text-[#967c5c] font-semibold" : "text-black"
                  }`}
                  onClick={() => {
                    if (item.hasDropdown) {
                      setIsProgramsOpen(!isProgramsOpen);
                    } else {
                      handleNavigation(item.key);
                    }
                  }}
                >
                  <span className="font-['Plus_Jakarta_Sans',Helvetica] text-lg">
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDownIcon 
                      className={`w-6 h-6 transition-transform ${
                        isProgramsOpen ? "rotate-180" : ""
                      }`} 
                    />
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && isProgramsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.subItems?.map((subItem) => (
                      <div
                        key={subItem.key}
                        className={`cursor-pointer py-2 ${
                          currentPage === subItem.key 
                            ? "text-[#967c5c] font-semibold" 
                            : "text-gray-600"
                        }`}
                        onClick={() => handleNavigation(subItem.key)}
                      >
                        <span className="font-['Plus_Jakarta_Sans',Helvetica] text-base">
                          {subItem.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              <LanguageSelector />
            </div>
            
            <Button className="w-full h-[52px] px-6 py-4 bg-[#f2c54a] text-black rounded-[100px] hover:bg-[#f2c54a]/90 transition-colors mt-4">
              <span className="font-medium text-lg tracking-[-0.36px]">
                {t('bookTicket')}
              </span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};