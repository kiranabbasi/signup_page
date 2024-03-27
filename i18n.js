import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './src/translator/en.json';
import esTranslation from './src/translator/es.json';

// Set up i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation not found
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
