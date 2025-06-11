import i18n from 'i18next';
import 'intl-pluralrules';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import fr from './fr.json';
import { getStoredLanguage } from '../storage/AsyncStore';

const initI18n = async () => {
  const initialLanguage = await getStoredLanguage();

  i18n.use(initReactI18next).init({
    lng: initialLanguage || 'en',
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    interpolation: {
      escapeValue: false,
    },
  });

  return initialLanguage;
};

export { i18n, initI18n };
