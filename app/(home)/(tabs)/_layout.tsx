import { Tabs } from 'expo-router';
import { Clock, HomeIcon } from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';
import { Easing } from 'react-native-reanimated';

import { Box } from '@/components/ui/box';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';

export default function TabLayout() {
  return (
    <Box className="flex-1 bg-background-0">
      <Tabs
        screenOptions={{
          headerShown: false,
          animation: 'shift',
          tabBarVariant: 'uikit',
          tabBarBackground: () => <View className="flex-1 bg-background-0" />,
          sceneStyle: {
            backgroundColor: 'transparent',
          },
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: Easing.inOut(Easing.ease),
            },
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            sceneStyleInterpolator: ({ current }) => ({
              sceneStyle: {
                backgroundColor: 'transparent',
                opacity: current.progress.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0, 1, 0],
                }),
              },
            }),
            tabBarLabel: ({ focused }) => (
              <Text size="xs" className={focused ? 'text-typography-950' : 'text-typography-500'}>
                Home
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Icon
                as={HomeIcon}
                fill="currentColor"
                size={focused ? 'xl' : 'md'}
                className={focused ? 'text-typography-950' : 'text-typography-500'}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="activity"
          options={{
            tabBarLabel: ({ focused }) => (
              <Text size="xs" className={focused ? 'text-typography-950' : 'text-typography-500'}>
                Activity
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Icon
                as={Clock}
                size={focused ? 'xl' : 'md'}
                className={focused ? 'text-typography-950' : 'text-typography-500'}
              />
            ),
          }}
        />
      </Tabs>
    </Box>
  );
}
