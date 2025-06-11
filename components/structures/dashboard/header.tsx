import { UserSettings } from '../settings/user';

import { Box } from '@/components/ui/box';
import { FullLogo, Icon } from '@/components/ui/icon';

export function Header({ onSheetOpen, onSheetClose }) {
  return (
    <Box className="flex flex-row items-center justify-between border-b border-primary-500 bg-background-0 px-4 pb-2 pt-4">
      <Icon as={FullLogo} className="h-6 w-fit text-primary-500" width={90} />
      <UserSettings onSheetOpen={onSheetOpen} onSheetClose={onSheetClose} />
    </Box>
  );
}
