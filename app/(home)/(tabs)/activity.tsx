import { TransactionsScreen } from '@/components/structures/dashboard/transaction';
import { Box } from '@/components/ui/box';

export default function Activity() {
  return (
    <Box className="flex-1 bg-background-0">
      <TransactionsScreen />
    </Box>
  );
}
