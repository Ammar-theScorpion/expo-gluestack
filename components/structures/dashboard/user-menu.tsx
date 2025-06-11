import { Feather } from '@expo/vector-icons';
import {
  BookOpen,
  HelpCircle,
  LanguagesIcon,
  LogOutIcon,
  ShoppingCartIcon,
  SunIcon,
  User2,
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Button, ButtonIcon } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Menu, MenuItem, MenuItemLabel, MenuSeparator } from '@/components/ui/menu';
import { storeTheme } from '@/util/storage/AsyncStore';

interface DropdownMenuProps {
  visible: boolean;
  onClose: () => void;
  onLogout: () => void;
  toggleLanguage: () => void;
}

const TOGGLE_WIDTH = 75;
const THUMB_WIDTH = 30;
export const DropdownMenu = ({ onLogout, toggleLanguage }: DropdownMenuProps) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { t, i18n } = useTranslation();

  const handleToggleTheme = async () => {
    const newTheme = colorScheme === 'dark' ? 'light' : 'dark';
    toggleColorScheme();
    await storeTheme(newTheme);
  };

  const offset = useSharedValue(isDark ? TOGGLE_WIDTH - THUMB_WIDTH : 5);

  useEffect(() => {
    offset.value = withTiming(isDark ? TOGGLE_WIDTH - THUMB_WIDTH - 5 : 5, { duration: 250 });
  }, [isDark]);

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <Menu
      offset={5}
      trigger={({ ...triggerProps }) => {
        return (
          <Button
            action=""
            variant="solid"
            className="z-20 h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800"
            {...triggerProps}>
            <ButtonIcon color={colorScheme === 'dark' ? '#F9FAFB' : '#111827'} as={User2} />
          </Button>
        );
      }}>
      <MenuItem key="shop" textValue="shop">
        <Icon as={ShoppingCartIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">{t('dashboard.shop')}</MenuItemLabel>
      </MenuItem>
      <MenuItem key="help-center" textValue="help-center">
        <Icon as={HelpCircle} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">{t('dashboard.help-center')}</MenuItemLabel>
      </MenuItem>
      <MenuItem key="learn-more" textValue="learn-more">
        <Icon as={BookOpen} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">{t('dashboard.learn-more')}</MenuItemLabel>
      </MenuItem>

      <MenuSeparator />
      <MenuItem closeOnSelect={false} onPress={handleToggleTheme} key="theme" textValue="theme">
        <HStack className="flex-1 flex-row items-center justify-between">
          <HStack>
            <Icon as={SunIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">
              {t('dashboard.theme')}: {i18n.language?.toUpperCase()}
            </MenuItemLabel>
          </HStack>
          <HStack className="relative h-10 w-[75] flex-row items-center overflow-hidden rounded-full bg-gray-200 px-1 dark:bg-gray-700">
            <Animated.View
              style={[
                {
                  width: THUMB_WIDTH,
                  height: '90%',
                  backgroundColor: 'white',
                  borderRadius: 999,
                  position: 'absolute',
                  zIndex: 0,
                },
                animatedThumbStyle,
              ]}
            />
            <Pressable
              className="z-10 flex-1 items-center justify-center"
              onPress={() => isDark && handleToggleTheme()}>
              <Feather name="sun" size={18} color={!isDark ? '#10B981' : '#6B7280'} />
            </Pressable>

            <Pressable
              className="z-10 flex-1 items-center justify-center"
              onPress={() => !isDark && handleToggleTheme()}>
              <Feather name="moon" size={18} color={isDark ? '#10B981' : '#6B7280'} />
            </Pressable>
          </HStack>
        </HStack>
      </MenuItem>

      <MenuItem closeOnSelect={false} onPress={toggleLanguage} key="language" textValue="language">
        <Icon as={LanguagesIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">
          {t('dashboard.language')}: {i18n.language.toUpperCase()}
        </MenuItemLabel>
      </MenuItem>
      <MenuSeparator />

      <MenuItem onPress={onLogout} key="signout" textValue="signout">
        <Icon as={LogOutIcon} size="sm" color="#EF4444" className="mr-2" />
        <MenuItemLabel className="font-semibold text-red-500 dark:text-red-400" size="sm">
          {t('dashboard.signout')}
        </MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};
