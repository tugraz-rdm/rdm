import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    services: require('public/locales/en/services.json'),
  },
  de: {
    services: require('public/locales/de/services.json'),
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    ns: ['services'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: resources,
  });

export default i18n;
