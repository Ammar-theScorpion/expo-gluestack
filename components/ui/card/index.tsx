import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import React from 'react';
import { Pressable, View, ViewProps } from 'react-native';

import { cardStyle } from './styles';

type ICardProps = ViewProps &
  VariantProps<typeof cardStyle> & {
    className?: string;
    pressable?: boolean;
    onPress?: () => void;
  };

const Card = React.forwardRef<React.ComponentRef<typeof View>, ICardProps>(function Card(
  { className, size = 'md', variant = 'elevated', pressable = false, onPress, ...props },
  ref
) {
  const Component = pressable ? Pressable : View;
  return (
    <Component
      className={cardStyle({ size, variant, class: className })}
      {...props}
      onPress={onPress}
      ref={ref}
    />
  );
});

Card.displayName = 'Card';

export { Card };
