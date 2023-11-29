import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    services: require('public/locales/en/services.json'),
    header: require('public/locales/en/header.json'),
    dmp: require('public/locales/en/dmp-tool.json'),
  },
  de: {
    services: require('public/locales/de/services.json'),
    header: require('public/locales/de/header.json'),
    dmp: require('public/locales/de/dmp-tool.json'),
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    ns: ['services', 'header', 'dmp-tool'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: resources,
  });

export default i18n;
