import { router } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';

import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type AssetCardProps = {
  name: string;
  balance: string;
  fiatValue: string;
  route: string;
};

function AssetCard({ name, balance, fiatValue, route }: AssetCardProps) {
  return (
    <Card pressable onPress={() => router.push(route)} size="md" variant="outline">
      <HStack className="mb-2 items-center justify-between">
        <Heading size="md" className="mb-1">
          {name}
        </Heading>
        <Icon className="text-secondary-900" size="lg" as={ChevronRight} />
      </HStack>

      <VStack className="flex-row items-baseline">
        <Text className="mr-2 text-xl font-bold text-black dark:text-white">{balance}</Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">{fiatValue}</Text>
      </VStack>
    </Card>
  );
}

function Bitcoin() {
  return (
    <AssetCard name="Bitcoin" balance="฿ 0.00359878" fiatValue="$303.65" route="assets/bitcoin" />
  );
}

function Cash() {
  return <AssetCard name="Cash" balance="$1,234.56" fiatValue="$1,234.56" route="assets/cash" />;
}

export function Balance() {
  return (
    <Box className="mt-2 gap-4">
      <Bitcoin />
      <Cash />
    </Box>
  );
}
