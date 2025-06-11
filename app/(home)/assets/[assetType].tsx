import { useLocalSearchParams } from 'expo-router';

import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

export default function AssetDetailScreen() {
  const { assetType } = useLocalSearchParams();
  return (
    <Box className="flex-1 bg-background-0 p-4">
      <Card className="space-y-4 p-4 " size="md" variant="outline">
        <Heading size="md" className="capitalize">
          {assetType}
        </Heading>

        <Text className="mt-2 text-xl font-bold">₿ 0.00032312</Text>
        <Text className="text-sm">$20.21</Text>

        <VStack className="mt-4 space-y-2">
          <HStack className="justify-between">
            <Text className="text-gray-500">Available to withdraw</Text>
            <Text className="font-medium">₿ 0.00012312</Text>
          </HStack>
          <HStack className="justify-between">
            <Text className="text-gray-500">Available to convert</Text>
            <Text className="font-medium">₿ 0.00020000</Text>
          </HStack>
        </VStack>

        <Text className="mt-4 text-xs text-gray-400">
          This balance does not include funds set aside for Target Orders.
        </Text>
      </Card>
    </Box>
  );
}
