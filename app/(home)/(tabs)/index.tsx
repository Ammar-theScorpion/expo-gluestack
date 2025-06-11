import { ScrollView } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { AutomationsScreen } from '@/components/structures/dashboard/automation';
import { Balance } from '@/components/structures/dashboard/balance';
import { Header } from '@/components/structures/dashboard/header';

export default function HomeScreen() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const onOpen = () => {
    scale.value = withSpring(0.95, { damping: 15 });
  };
  const onClose = () => {
    scale.value = withSpring(1);
  };

  return (
    <Animated.View style={animatedStyle} className="flex-1 bg-background-0">
      <Header onSheetOpen={onOpen} onSheetClose={onClose} />
      <ScrollView className="px-2 py-4" showsVerticalScrollIndicator={false}>
        <Balance />
        <AutomationsScreen />
      </ScrollView>
    </Animated.View>
  );
}
