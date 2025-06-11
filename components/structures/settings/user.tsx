import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { Link, router } from 'expo-router';
import {
  Bell,
  BookOpen,
  Building,
  ChevronRight,
  Computer,
  Dot,
  FileText,
  Headset,
  LogOut,
  MessageCircleMore,
  Moon,
  ShieldCheck,
  ShoppingCart,
  Sun,
  User2,
  X,
} from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
  ActionsheetIcon,
  ActionsheetScrollView,
} from '@/components/ui/actionsheet';
import AlertDialogGlue from '@/components/ui/alert-dialog/alert';
import { Box } from '@/components/ui/box';
import { Button, ButtonIcon } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { ArrowStackUp, FullLogo, Icon, LinkedIn, Twitter } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { VStack } from '@/components/ui/vstack';
import { useAppTheme } from '@/hooks/useAppTheme';
import { useAuthStore } from '@/stores/auth-store';
import { HStack } from '@/components/ui/hstack';

function ShareInvite() {
  return (
    <Card size="md" variant="outline">
      <Text className="mb-2 text-base font-semibold text-black dark:text-white">
        Share Your Invite Link
      </Text>
      <Text className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        Earn a bitcoin reward every time your referrals buy bitcoin.
      </Text>

      <Button>
        <Text className="text-center text-sm font-semibold text-white">Copy referral link</Text>
      </Button>
    </Card>
  );
}

function Footer() {
  const [alertVisible, setAlertVisible] = useState(false);

  const { logout } = useAuthStore();
  const handleLogout = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    logout();
    router.push('/sign-in');
    setAlertVisible(false);
  };
  return (
    <Box>
      <Box className="gap-3">
        <ActionsheetItem
          className="rounded-lg bg-background-50"
          onPress={() => setAlertVisible(true)}>
          <ActionsheetIcon size="lg" className="text-error-600" as={LogOut} />
          <ActionsheetItemText className="text-error-600">Log Out</ActionsheetItemText>
        </ActionsheetItem>
        <Box className="flex-col items-center gap-5">
          <Icon as={FullLogo} className="h-9 w-full text-primary-500" />
          <Box className="flex-row justify-center gap-2">
            <Link href="https://coinbits.app/legal/user-agreement">
              <Text size="sm" className="text-typography-500">
                Legal & Privacy
              </Text>
            </Link>
            <Icon size="xl" as={Dot} className="text-typography-500" />
            <Link href="https://coinbits.app/legal/risk-disclosures">
              <Text size="sm" className="text-typography-500">
                Disclosures
              </Text>
            </Link>
          </Box>

          <Box className="flex-row items-center justify-center gap-4">
            <Link
              className="rounded-full border border-outline-200 bg-typography-100 p-3"
              href="https://coinbits.app/legal/user-agreement">
              <Icon as={Twitter} className="fill-typography-900" size="2xl" />
            </Link>
            <Link
              className="rounded-full border border-outline-200 bg-typography-100 p-3"
              href="https://linkedin.com">
              <Icon as={LinkedIn} className="fill-typography-900" size="2xl" />
            </Link>
          </Box>
          <Text size="sm" className="text-typography-500">
            v1.0.0
          </Text>
        </Box>
      </Box>
      <AlertDialogGlue
        visible={alertVisible}
        title="Log Out"
        setVisible={setAlertVisible}
        message="Do you want to logout?"
        action={handleLogout}
        icon={LogOut}
      />
    </Box>
  );
}

function CoinbitLinks() {
  return (
    <Box>
      <Heading>Available on coinbits.app</Heading>
      <ActionsheetItem
        onPress={() => Linking.openURL('https://my.coinbits.app/settings/personal-information')}>
        <ActionsheetIcon size="lg" className="text-typography-900" as={User2} />
        <ActionsheetItemText bold size="lg">
          Personal
        </ActionsheetItemText>
      </ActionsheetItem>

      <ActionsheetItem
        onPress={() => Linking.openURL('https://my.coinbits.app/accounts/external-accounts')}>
        <ActionsheetIcon size="lg" className="text-typography-900" as={Building} />
        <ActionsheetItemText>Linked Banks</ActionsheetItemText>
      </ActionsheetItem>

      <ActionsheetItem onPress={() => Linking.openURL('https://my.coinbits.app/settings/billing')}>
        <ActionsheetIcon size="lg" className="text-typography-900" as={ArrowStackUp} />
        <ActionsheetItemText>Billing</ActionsheetItemText>
      </ActionsheetItem>

      <ActionsheetItem onPress={() => Linking.openURL('https://my.coinbits.app/settingsn')}>
        <ActionsheetIcon size="lg" className="text-typography-900" as={ShieldCheck} />
        <ActionsheetItemText>Privacy & Security</ActionsheetItemText>
      </ActionsheetItem>

      <ActionsheetItem
        onPress={() => Linking.openURL('https://my.coinbits.app/settings/communication')}>
        <ActionsheetIcon size="lg" className="text-typography-900" as={Bell} />
        <ActionsheetItemText>Notifications</ActionsheetItemText>
      </ActionsheetItem>

      <ActionsheetItem
        onPress={() => Linking.openURL('https://my.coinbits.app/settings/documents')}>
        <ActionsheetIcon size="lg" className="text-typography-900" as={FileText} />
        <ActionsheetItemText>Documents</ActionsheetItemText>
      </ActionsheetItem>

      <ActionsheetItem onPress={() => Linking.openURL('https://coinbits.app/help-center')}>
        <ActionsheetIcon size="lg" className="text-typography-900" as={Headset} />
        <ActionsheetItemText>Support</ActionsheetItemText>
      </ActionsheetItem>

      <ActionsheetItem
        onPress={() => Linking.openURL('https://my.coinbits.app/dashboard/feedback')}>
        <ActionsheetIcon size="lg" className="text-typography-900" as={MessageCircleMore} />
        <ActionsheetItemText>Help Us Improve</ActionsheetItemText>
      </ActionsheetItem>
    </Box>
  );
}

function Explore() {
  return (
    <Box className="border-1 border-t">
      <Heading>More to Explore</Heading>
      <ActionsheetItem onPress={() => Linking.openURL('https://ygmi.shop')}>
        <ActionsheetIcon size="lg" className="text-typography-900" as={ShoppingCart} />
        <ActionsheetItemText>Shop</ActionsheetItemText>
      </ActionsheetItem>

      <ActionsheetItem onPress={() => Linking.openURL('https://coinbits.app/learn')}>
        <ActionsheetIcon size="lg" className="text-typography-900" as={BookOpen} />
        <ActionsheetItemText>Learn About Bitcoin</ActionsheetItemText>
      </ActionsheetItem>
    </Box>
  );
}
function ThemeToggle() {
  const { applyTheme, currentScheme, currentMode } = useAppTheme();
  const slidePosition = useSharedValue(0);

  const getThemeIndex = (theme: string) => {
    switch (theme) {
      case 'light':
        return 0;
      case 'dark':
        return 1;
      case 'system':
        return 2;
    }
  };

  useEffect(() => {
    const targetIndex = getThemeIndex(currentMode);
    slidePosition.value = withSpring(targetIndex, {
      damping: 20,
      stiffness: 150,
    });
  }, [currentMode, slidePosition]);

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    const leftPosition = interpolate(slidePosition.value, [0, 1, 2], [2, 37, 71]);

    return {
      left: `${leftPosition}%`,
    };
  });

  const handleThemePress = (theme: 'light' | 'dark' | 'system') => {
    applyTheme(theme);
  };

  return (
    <HStack className="h-10 flex-1 flex-row items-center justify-center rounded-sm bg-typography-100 px-2">
      <Animated.View
        className={`absolute h-8 rounded-sm border ${currentScheme === 'dark' ? 'bg-white' : 'bg-typography-800'
          }`}
        style={[
          {
            width: '31%',
          },
          animatedBackgroundStyle,
        ]}
      />

      <Pressable
        className="z-10 flex-1 items-center justify-center"
        onPress={() => handleThemePress('light')}>
        <Icon
          as={Sun}
          className={currentMode === 'light' ? 'text-typography-0' : 'text-typography-600'}
        />
      </Pressable>

      <Pressable
        className="z-10 flex-1 items-center justify-center border-l border-r border-outline-500"
        onPress={() => handleThemePress('dark')}>
        <Icon
          as={Moon}
          className={currentMode === 'dark' ? 'text-typography-0' : 'text-typography-600'}
        />
      </Pressable>

      <Pressable
        className="z-10 flex-1 items-center justify-center"
        onPress={() => handleThemePress('system')}>
        <Icon
          as={Computer}
          className={currentMode === 'system' ? 'text-typography-0' : 'text-typography-600'}
        />
      </Pressable>
    </HStack>
  );
}
export function UserSettings({ onSheetOpen, onSheetClose }) {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(false);

  const toggleSheet = () => {
    if (!showActionsheet) {
      onSheetOpen();
    } else {
      onSheetClose();
    }
    setShowActionsheet(!showActionsheet);
  };
  return (
    <>
      <Button
        variant="link"
        className="h-10 w-10 items-center justify-center rounded-full border border-outline-300"
        onPress={() => {
          toggleSheet();
        }}>
        <ButtonIcon as={User2} />
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={toggleSheet}>
        <ActionsheetBackdrop />
        <SafeAreaView edges={['top', 'bottom']} style={{ marginTop: Constants.statusBarHeight }}>
          <ActionsheetContent transition={{ type: 'spring' }}>
            <ActionsheetDragIndicatorWrapper className="flex items-start border-b border-typography-50">
              <Pressable className="h-7 w-7 rounded-full" onPress={toggleSheet}>
                <Icon as={X} size="xl" />
              </Pressable>
            </ActionsheetDragIndicatorWrapper>
            <ActionsheetScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1 }}>
              <VStack className="gap-4">
                <Box>
                  <Heading size="xl" className="my-3">
                    Ammar Assi
                  </Heading>
                  <Heading sub size="md" className="stroke-background-400">
                    @ammar
                  </Heading>
                </Box>

                <ShareInvite />
                <Box>
                  <Heading>Account & Settings</Heading>
                  <Box className="">
                    <ActionsheetItem
                      className="flex-1  justify-between"
                      onPress={() => {
                        handleClose();
                        router.push('/settings/account');
                      }}>
                      <ActionsheetItemText>Account</ActionsheetItemText>
                      <Icon className="text-secondary-900" size="lg" as={ChevronRight} />
                    </ActionsheetItem>

                    <View className="gap-2 p-3">
                      <Heading sub size="sm">
                        Theme
                      </Heading>
                      <ThemeToggle />
                    </View>
                  </Box>
                </Box>

                <CoinbitLinks />
                <Explore />

                <Footer />
              </VStack>
            </ActionsheetScrollView>
          </ActionsheetContent>
        </SafeAreaView>
      </Actionsheet>
    </>
  );
}
