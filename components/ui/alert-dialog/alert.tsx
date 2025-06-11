import React, { useState } from 'react';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
} from '@/components/ui/alert-dialog';
import { Box } from '@/components/ui/box';
import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';

interface AlertDialogProps {
  visible: boolean;
  title: string;
  message: string;
  setVisible: (visible: boolean) => void;
  action: () => Promise<void> | void;
  icon: React.ElementType;
}

export default function AlertDialogGlue({
  visible,
  setVisible,
  title,
  message,
  action,
  icon,
}: AlertDialogProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handelAction = async () => {
    setIsLoading(true);
    try {
      await action();
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Action failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AlertDialog isOpen={visible} onClose={() => setVisible(false)}>
      <AlertDialogBackdrop />
      <AlertDialogContent className="items-center gap-2">
        <Box className="items-center justify-center rounded-full bg-background-error p-2">
          <Icon as={icon} size="2xl" className="stroke-error-500" />
        </Box>
        <AlertDialogHeader>
          <Heading className="font-semibold text-typography-950" size="lg">
            {title}
          </Heading>
        </AlertDialogHeader>
        <AlertDialogBody className="mb-4 mt-3">
          <Text>{message}</Text>
        </AlertDialogBody>
        <AlertDialogFooter className="gap-4">
          <Button
            className="flex-1"
            variant="outline"
            action="secondary"
            onPress={() => setVisible(false)}
            size="sm">
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            className="flex-1"
            disabled={isLoading}
            size="sm"
            action="negative"
            onPress={handelAction}>
            {isLoading ? <ButtonSpinner color="#6b7280" /> : <ButtonText>Continue</ButtonText>}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
