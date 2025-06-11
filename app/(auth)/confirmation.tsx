import { router, useLocalSearchParams } from 'expo-router';

import { Box } from '@/components/ui/box';
import { FullLogo, Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';

export default function ConfirmationScreen() {
  const { email } = useLocalSearchParams();

  setTimeout(() => {
    router.dismissAll();
    router.replace('/');
  }, 2000);
  return (
    <Box className="flex-1 items-center justify-center bg-background-0">
      <Box className="items-center gap-2 bg-background-0 px-4">
        <Icon as={FullLogo} className="h-10 w-fit text-primary-500" width={110} />
        <Box className="items-center justify-center gap-1">
          <Text className="text-lg font-semibold">Check your email</Text>
          <Text className="max-w-sm text-center text-sm dark:text-white">
            If an account for <Text className="font-semibold">{email}</Text> exists, you’ll receive
            a secure link.
          </Text>
        </Box>

        <Box className="mb-4 mt-6 w-full max-w-sm rounded border border-yellow-400 bg-yellow-50 p-4 dark:border-yellow-600 dark:bg-yellow-800">
          <Text className="mb-2 font-semibold">Can&apos;t find the email?</Text>
          <Text className="mb-2 text-sm leading-5">1. Check your Spam and Promotions folders.</Text>
          <Text className="mb-2 text-sm leading-5">
            2. Wait a minute, it may take time to arrive in your inbox.
          </Text>
          <Text className="mb-2 text-sm leading-5 text-gray-700 dark:text-gray-200">
            3. Before clicking the login link in the email, reply to the email with the word
            &quot;yes&quot; to make sure you receive our emails.
          </Text>
          <Text className="text-sm leading-5">
            You may not receive any of our emails if you don&apos;t do the steps above. Doing so
            will inform your email provider that you want to receive our emails.
          </Text>
        </Box>

        <Text bold className="text-sm">
          Still not seeing it?{' '}
          <Text onPress={() => router.back()} className="font-medium text-primary-500">
            Re-enter your email address
          </Text>{' '}
          or <Text className="font-medium text-primary-500">contact support</Text>.
        </Text>
      </Box>
    </Box>
  );
}
