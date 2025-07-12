import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  return { t, currentLanguage };
};