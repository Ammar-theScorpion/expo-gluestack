import { ChevronRight, Star } from 'lucide-react-native';
import { FlatList } from 'react-native';

import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { Automation } from '@/types/dashboard';

export const automations: Automation[] = [
  {
    id: 1,
    title: '1 Active Saving Habit',
    iconType: 'saving',
  },
  {
    id: 2,
    title: 'Next Round Up',
    subtitle: '$15.95 / $ 20.00',
    hasProgress: true,
    current: 15.95,
    target: 20,
    iconType: 'roundUp',
  },
  {
    id: 3,
    title: '1 Active Target Order',
    subtitle: 'Buy or sell bitcoin when it hits a target price you specify',
    iconType: 'target',
  },
  {
    id: 4,
    title: 'Set up self-custody',
    subtitle: 'Use recurring withdrawals to take control of your bitcoin',
    iconType: 'custody',
  },
  {
    id: 5,
    title: '1 Active Price Alert',
    subtitle: 'Receive email alerts with the price of bitcoin',
    iconType: 'priceAlert',
  },
  {
    id: 6,
    title: '1 Active Price Alert',
    subtitle: 'Receive email alerts with the price of bitcoin',
    iconType: 'priceAlert',
  },
];

type Props = {
  item: Automation;
};

export function AutomationItem({ item }) {
  let progressPercent = 0;
  if (item.hasProgress && item.current && item.target) {
    progressPercent = (item.current / item.target) * 100;
  }

  return (
    <Box className="flex-row items-center justify-between gap-4 py-2">
      <Box className="flex-1 flex-row items-center justify-center gap-3">
        <Box className="rounded-full bg-green-50 p-2">
          <Icon size="xl" as={Star} className="text-primary-500" />
        </Box>
        <Box className="flex-1 justify-center gap-2">
          <Text bold>{item.title}</Text>
          <Box className="flex w-full flex-row items-center gap-3">
            {item.subtitle && (
              <Text bold className="text-xs">
                {item.subtitle}
              </Text>
            )}
            <Box className="flex-1">
              {item.hasProgress && item.current && item.target && (
                <Progress value={progressPercent} size="md" orientation="horizontal">
                  <ProgressFilledTrack />
                </Progress>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Icon className="text-secondary-900" size="lg" as={ChevronRight} />
    </Box>
  );
}

export function AutomationsScreen() {
  return (
    <Box className="px-4 py-4">
      <HStack className="mb-6 flex-row items-center justify-between">
        <Text className="text-lg font-semibold text-black dark:text-white">Automations</Text>
        <Button onPress={() => console.log('View all automations')}>
          <Text className="text-sm font-medium text-white">View All</Text>
        </Button>
      </HStack>

      <FlatList
        scrollEnabled={false}
        data={automations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AutomationItem item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Box className="border-t border-outline-100" />}
      />
    </Box>
  );
}
