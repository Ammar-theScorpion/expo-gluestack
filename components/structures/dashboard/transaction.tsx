import { Lock, PiggyBank } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';

import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';

export interface Transaction {
  id: number;
  type: string;
  date: string;
  status: string;
  amount: string;
  btcAmount?: string;
}

export const transactions: Transaction[] = [
  {
    id: 1,
    type: 'Smart Transfer™',
    date: 'Mar 19 at 8:30 AM',
    status: 'On hold',
    amount: '$100.00',
  },
  {
    id: 2,
    type: 'Saving Habit',
    date: 'Mar 17 at 7:00 PM',
    status: 'Completed',
    amount: '$100.00',
    btcAmount: '฿ 0.00118239',
  },
  {
    id: 3,
    type: 'Smart Transfer™',
    date: 'Mar 12 at 8:30 AM',
    status: 'Completed',
    amount: '$100.00',
  },
  {
    id: 4,
    type: 'Saving Habit',
    date: 'Mar 10 at 7:30 AM',
    status: 'Completed',
    amount: '$100.00',
    btcAmount: '฿ 0.0012357',
  },
  {
    id: 5,
    type: 'Smart Transfer™',
    date: 'Mar 5 at 3:00 PM',
    status: 'Completed',
    amount: '$100.00',
  },
  {
    id: 6,
    type: 'Saving Habit',
    date: 'Mar 3 at 6:00 PM',
    status: 'Completed',
    amount: '$100.00',
    btcAmount: '฿ 0.0012839',
  },
];

type TransactionItemProps = {
  item: Transaction;
};

export const TransactionItem: React.FC<TransactionItemProps> = ({ item }) => {
  return (
    <Box className="flex-row items-center justify-between border-b border-gray-200 py-3 dark:border-gray-700">
      <HStack className="flex-row items-center gap-3">
        <Box className="rounded-full bg-green-100 p-2">
          <Icon as={PiggyBank} size="lg" className="text-primary-500" />
          <Box className="absolute -bottom-2 -right-2 rounded-full bg-primary-500 p-1">
            <Icon as={Lock} size="xs" className="text-white" />
          </Box>
        </Box>
        <Box>
          <Text className="text-sm font-semibold ">{item.type}</Text>
          <Text className="mt-1 text-xs">
            {item.date} • {item.status}
          </Text>
        </Box>
      </HStack>

      <Box className="items-end">
        {item.btcAmount ? (
          <>
            <Text className="text-sm font-bold ">{item.btcAmount}</Text>
            <Text className="text-xs">{item.amount}</Text>
          </>
        ) : (
          <Text className="text-sm font-bold">{item.amount}</Text>
        )}
      </Box>
    </Box>
  );
};

export function TransactionsScreen() {
  const { t } = useTranslation();

  return (
    <Box className="bg-background-0 px-4 pt-4">
      <HStack className="mb-4 flex-row items-center justify-between">
        <Text className="text-lg font-semibold">{t('dashboard.transactions')}</Text>
        <Button>
          <Text className="text-sm font-medium text-white">View All</Text>
        </Button>
      </HStack>

      <Text bold className="mb-2 text-sm">
        Recent
      </Text>

      <FlatList
        scrollEnabled={false}
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TransactionItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}
