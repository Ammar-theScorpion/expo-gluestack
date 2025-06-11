import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

import { ModeType } from '@/components/ui/gluestack-ui-provider/types';

const THEME_KEY = 'APP_THEME';
const LANG_KEY = 'APP_LANG';

export const storeTheme = async (theme: ModeType): Promise<void> => {
  try {
    await AsyncStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.error('Error storing theme:', error);
  }
};

export const getStoredTheme = async (): Promise<ModeType | null> => {
  try {
    const theme = await AsyncStorage.getItem(THEME_KEY);
    return theme as 'light' | 'dark' | null;
  } catch (error) {
    console.error('Error reading stored theme:', error);
    return null;
  }
};

export const storeLanguage = async (lang: 'en' | 'fr'): Promise<void> => {
  try {
    await AsyncStorage.setItem(LANG_KEY, lang);
  } catch (error) {
    console.error('Error storing theme:', error);
  }
};

export const getStoredLanguage = async (): Promise<string | null> => {
  try {
    const storedLanguage = await AsyncStorage.getItem(LANG_KEY);
    const fallbackLang = Localization.getLocales()[0]?.languageCode;
    return (storedLanguage || fallbackLang) as 'en' | 'fr' | null;
  } catch (e) {
    console.error(e);
    return Localization.getLocales()[0].languageCode;
  }
};
