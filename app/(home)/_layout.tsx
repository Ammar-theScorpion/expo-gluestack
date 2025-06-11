import { Redirect, Stack } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { ActivityIndicator, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '@/components/ui/box';
import { Icon } from '@/components/ui/icon';
import { useAuthStore } from '@/stores/auth-store';

export default function HomeLayout() {
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (!user) return <Redirect href="/welcome" />;

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <Stack
        screenOptions={({ navigation, route }) => ({
          header:
            route.name === '(tabs)'
              ? undefined
              : () => (
                <Box className="bg-background-0 p-4">
                  <Pressable onPress={() => navigation.goBack()}>
                    <Icon as={ChevronLeft} size="lg" />
                  </Pressable>
                </Box>
              ),
        })}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
