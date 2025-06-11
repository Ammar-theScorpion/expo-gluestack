import { Stack } from 'expo-router';
import * as Sentry from '@sentry/react-native';
import { isRunningInExpoGo } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';

import { Box } from '@/components/ui/box';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { useAppTheme } from '@/hooks/useAppTheme';
import { useAuthStore } from '@/stores/auth-store';
import { initI18n } from '@/util/localization/i18n';
import { getStoredTheme } from '@/util/storage/AsyncStore';
import '@/global.css';

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: !isRunningInExpoGo(),
});

Sentry.init({
  dsn: 'https://88da03833374c114e4c0745c36812e84@o4509054532583425.ingest.us.sentry.io/4509390664695808',
  sendDefaultPii: true,
  debug: false,
  tracesSampleRate: 1.0,
  integrations: [navigationIntegration],
  enableNativeFramesTracking: !isRunningInExpoGo(),
});

function AppLayout() {
  const { currentScheme, applyTheme } = useAppTheme();
  const [isReady, setIsReady] = useState(false);
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    const LoadAssets = async () => {
      try {
        const storedTheme = await getStoredTheme();
        if (storedTheme && currentScheme !== storedTheme) applyTheme(storedTheme);
        await checkAuth();
        await initI18n();
      } catch (err) {
        console.error('App initialization error:', err);
        Sentry.captureException(err);
      } finally {
        setIsReady(true);
      }
    };

    LoadAssets();
  }, []);

  const onLayoutReady = useCallback(() => {
    if (isReady) {
      SplashScreen.hideAsync().catch(console.warn);
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <GluestackUIProvider mode={currentScheme}>
      <Box
        onLayout={() => {
          onLayoutReady();
        }}
        className="flex-1">
        <StatusBar
          translucent
          animated
          backgroundColor="transparent"
          style={currentScheme === 'dark' ? 'light' : 'dark'}
        />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: currentScheme === 'dark' ? '#000' : '#fff',
            },
          }}
        />
      </Box>
    </GluestackUIProvider>
  );
}

export default Sentry.wrap(AppLayout);
