import { useRouter } from 'expo-router';
import { Platform, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { SignInHeader, SignInForm, SignInTestimonial } from '@/components/structures/auth/sign-in';
import { Box } from '@/components/ui/box';
import { useAuthStore } from '@/stores/auth-store';
import { Text } from '@/components/ui/text';

export default function SignIn() {
  const { login } = useAuthStore();
  const router = useRouter();

  const onSuccess = (email: string) => {
    login(email);
    router.push({
      pathname: '/confirmation',
      params: { email },
    });
  };

  return (
    <View className="flex-1 bg-background-0">
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}>
        <Box className="items-center bg-background-0 px-4">
          <SignInHeader />
          <SignInForm onSuccess={onSuccess} />
          <Text size='sm' className='mt-4'>Don’t have an account?{' '}
            <Text size='sm' bold underline>Sign Up</Text>
          </Text>
        </Box>
        <SignInTestimonial />
      </KeyboardAwareScrollView>
    </View>
  );
}
