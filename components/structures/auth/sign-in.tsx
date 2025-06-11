import { useState } from 'react';
import { Image, View } from 'react-native';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { z } from 'zod';

import { Box } from '@/components/ui/box';
import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button';
import { FullLogo, Icon } from '@/components/ui/icon';
import { Input, InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { authService } from '@/lib/service';
import { i18n } from '@/util/localization/i18n';

const emailSchema = z.object({
  email: z.string().email('Invalid email'),
});

export function SignInHeader() {
  return (
    <View className="mt-44 items-center">
      <Icon as={FullLogo} className="h-10 w-fit text-primary-500" width={110} />

      <Text className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Sign in to Coinbits
      </Text>
      <Text className="mb-4 text-sm text-secondary-900">
        {i18n.t('subtitle')} <Text className="text-primary-500">{i18n.t('transaction')}</Text>
      </Text>
    </View>
  );
}

interface SignInFormProps {
  onSuccess: (email: string) => void;
}
export function SignInForm({ onSuccess }: SignInFormProps) {
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');

  const isDisabled = () => {
    return isSubmitting || error !== null || !emailSchema.safeParse({ email }).success;
  }

  const handleSubmit = async () => {
    if (!email) {
      setError('auth.empty');
      setTimeout(() => setError(null), 2000);
      return;
    }
    const emailValidation = emailSchema.safeParse({ email });
    if (!emailValidation.success) {
      setError('auth.invalid');
      setTimeout(() => setError(null), 2000);
      return;
    }

    try {
      setSubmitting(true);
      await authService.signin(email);
      onSuccess(email);
    } catch (error) {
      console.error('Error signing in:', error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <View className="w-full max-w-sm ">
      <View className="mb-[16]">
        <VStack space="xs">
          <Text className=" mb-[1] text-[15px] font-semibold text-[#222] dark:text-white">
            Email
          </Text>
          <Input isInvalid={error !== null} className="min-w-[250px]">
            <InputField
              type="text"
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
              onSubmitEditing={handleSubmit}
              placeholder="example@coinbits.app"
              className=""
            />
          </Input>
        </VStack>
      </View>

      <Button onPress={handleSubmit} isDisabled={isDisabled()}>
        {isSubmitting ? (
          <ButtonSpinner />
        ) : (
          <Animated.View key={error ? error : 'login'} entering={FadeInDown} exiting={FadeOutUp}>
            <ButtonText className="text-white">{i18n.t(error ? error : 'auth.login')}</ButtonText>
          </Animated.View>
        )}
      </Button>
    </View>
  );
}

export function SignInTestimonial() {
  const insets = useSafeAreaInsets();

  return (
    <Box
      className="absolute bottom-0 left-0 right-0 items-center bg-primary-500 px-2"
      style={{ paddingBottom: insets.bottom + 16 }}>
      <Image
        source={require('@/assets/icon-light.png')}
        className="mt-2 h-20 w-20 rounded-full border border-white shadow-lg"
      />

      <Text className="mb-4 mt-4 max-w-xl text-start text-[16px]  font-bold">
        Coinbits introduced me to bitcoin. With my weekly savings over the past two years, I was
        able to transform my bitcoin into a beautiful beach house in North Carolina.
      </Text>
      <Text className="font-bold">— Mark, Electrical Engineer & Retired Naval Officer</Text>
    </Box>
  );
}
