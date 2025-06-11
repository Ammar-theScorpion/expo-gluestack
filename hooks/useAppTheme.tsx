import { useColorScheme as useNativewindColorScheme } from 'nativewind';
import { useCallback, useRef, useState } from 'react';
import { useColorScheme as useDeviceColorScheme } from 'react-native';

import { ModeType } from '@/components/ui/gluestack-ui-provider/types';

export function useAppTheme() {
  const { colorScheme, setColorScheme } = useNativewindColorScheme();
  const [currentMode, setCurrentMode] = useState<ModeType>('system');
  const deviceColorScheme = useDeviceColorScheme();
  const initialDeviceScheme = useRef(deviceColorScheme);

  const applyTheme = useCallback(
    (mode: ModeType) => {
      const resolved = mode === 'system' ? (initialDeviceScheme.current ?? 'light') : mode;
      setColorScheme(resolved);
      setCurrentMode(mode);
    },
    [setColorScheme]
  );

  return {
    currentScheme: colorScheme,
    applyTheme,
    currentMode,
  };
}
