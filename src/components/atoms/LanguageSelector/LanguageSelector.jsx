import React, { useState } from 'react';
import { ChevronDownIcon, GlobeIcon } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        <GlobeIcon className="w-5 h-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700 hidden sm:inline">
          {currentLang?.flag} {currentLang?.name}
        </span>
        <span className="text-sm font-medium text-gray-700 sm:hidden">
          {currentLang?.flag}
        </span>
        <ChevronDownIcon 
          className={`w-4 h-4 text-gray-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 min-w-[180px] z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                currentLanguage === language.code 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};