import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  en: {
    default: require('public/locales/en/services.json'),
  },
  de: {
    default: require('public/locales/de/services.json'),
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS: 'default',
    lng: 'en',
    ns: ['default'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: resources,
  });

export default i18n;
