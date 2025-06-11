import { Stack } from 'expo-router';
import '../../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '@/components/ui/box';
import { Pressable } from 'react-native';
import { Icon } from '@/components/ui/icon';
import { ChevronLeft } from 'lucide-react-native';
import Constants from "expo-constants"
export default function Layout() {
  return (
    <Stack
      screenOptions={({ navigation, route }) => ({
        header:
          route.name === 'welcome'
            ? undefined
            : () => (
              <Box className="bg-background-0 p-4" style={{ paddingTop: Constants.statusBarHeight }}>
                <Pressable onPress={() => navigation.goBack()}>
                  <Icon as={ChevronLeft} size="lg" />
                </Pressable>
              </Box>
            ),
      })}>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
    </Stack>
  );
}
