import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const duration = 500;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

interface LoadingProp {
  loadingText: string;
  size: number;
  customClass: string;
}
const Loading = ({ loadingText, size = 15, customClass }: LoadingProp) => {
  const sv1 = useSharedValue(0);
  const sv2 = useSharedValue(0);
  const sv3 = useSharedValue(0);

  useEffect(() => {
    setTimeout(() => {
      sv1.value = withRepeat(withTiming(1, { duration: duration * 2, easing }), -1);
    }, 100);
    setTimeout(() => {
      sv2.value = withRepeat(withTiming(1, { duration: duration * 2, easing }), -1);
    }, 200);
    setTimeout(() => {
      sv3.value = withRepeat(withTiming(1, { duration: duration * 2, easing }), -1);
    }, 300);
  }, []);

  const opacity1 = useAnimatedStyle(() => ({
    opacity: sv1.value,
  }));
  const opacity2 = useAnimatedStyle(() => ({
    opacity: sv2.value,
  }));
  const opacity3 = useAnimatedStyle(() => ({
    opacity: sv3.value,
  }));
  return (
    <View className="flex-row gap-[4px]">
      <Text className={`${customClass}`}>{loadingText}</Text>
      <Animated.Text
        className={`${customClass}`}
        style={[opacity1, { fontSize: 16, fontWeight: '900' }]}>
        .
      </Animated.Text>
      <Animated.Text
        className={`${customClass}`}
        style={[opacity2, { fontSize: 16, fontWeight: '900' }]}>
        .
      </Animated.Text>
      <Animated.Text
        className={`${customClass}`}
        style={[opacity3, { fontSize: 16, fontWeight: '900' }]}>
        .
      </Animated.Text>
    </View>
  );
};

export default Loading;
