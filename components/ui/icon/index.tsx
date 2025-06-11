'use client';
import { createIcon, PrimitiveIcon, IPrimitiveIcon, Svg } from '@gluestack-ui/icon';
import { VariantProps } from '@gluestack-ui/nativewind-utils';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { cssInterop } from 'nativewind';
import React from 'react';
import { Circle, Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

export const UIIcon = createIcon({
  Root: PrimitiveIcon,
}) as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof PrimitiveIcon> &
  React.RefAttributes<React.ComponentRef<typeof Svg>>
>;

const iconStyle = tva({
  base: 'text-typography-950 fill-none pointer-events-none',
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      xs: 'h-3.5 w-3.5',
      sm: 'h-4 w-4',
      md: 'h-[18px] w-[18px]',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
      '2xl': 'h-8 w-8',
    },
  },
});

cssInterop(UIIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});

type IIConProps = IPrimitiveIcon &
  VariantProps<typeof iconStyle> &
  React.ComponentPropsWithoutRef<typeof UIIcon>;

const Icon = React.forwardRef<React.ComponentRef<typeof UIIcon>, IIConProps>(function Icon(
  { size = 'md', className, ...props },
  ref
) {
  if (typeof size === 'number') {
    return <UIIcon ref={ref} {...props} className={iconStyle({ class: className })} size={size} />;
  } else if ((props.height !== undefined || props.width !== undefined) && size === undefined) {
    return <UIIcon ref={ref} {...props} className={iconStyle({ class: className })} />;
  }
  return <UIIcon ref={ref} {...props} className={iconStyle({ size, class: className })} />;
});

export { Icon };

type ParameterTypes = Omit<Parameters<typeof createIcon>[0], 'Root'>;

const createIconUI = ({ ...props }: ParameterTypes) => {
  const UIIconCreateIcon = createIcon({
    Root: Svg,
    ...props,
  }) as React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof PrimitiveIcon> &
    React.RefAttributes<React.ComponentRef<typeof Svg>>
  >;

  return React.forwardRef<React.ComponentRef<typeof Svg>>(function UIIcon(
    {
      className,
      size,
      ...inComingProps
    }: VariantProps<typeof iconStyle> & React.ComponentPropsWithoutRef<typeof UIIconCreateIcon>,
    ref
  ) {
    return (
      <UIIconCreateIcon
        ref={ref}
        {...inComingProps}
        className={iconStyle({ size, class: className })}
      />
    );
  });
};
export { createIconUI as createIcon };
const AddIcon = createIcon({
  Root: Svg,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path d="M12 5V19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M5 12H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

AddIcon.displayName = 'AddIcon';
export { AddIcon };

const ArrowStackUp = createIcon({
  Root: Svg,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M7 9.5l-3 1.5l8 4l8-4l-3-1.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M4 15l8 4l8-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 11v-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M9 7l3-3l3 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

ArrowStackUp.displayName = 'ArrowStackUp';
export { ArrowStackUp };

const Twitter = createIcon({
  Root: Svg,
  viewBox: '0 0 512 512',
  path: (
    <>
      <Path
        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

Twitter.displayName = 'Twitter';
export { Twitter };

const LinkedIn = createIcon({
  Root: Svg,
  viewBox: '0 0 448 512',
  path: (
    <>
      <Path
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

LinkedIn.displayName = 'LinkedIn';
export { LinkedIn };

const FullLogo = createIcon({
  Root: Svg,
  viewBox: '0 0 108 26',
  path: (
    <>
      <Path
        d="M0 17.199C0 12.0201 4.15241 8.66089 8.8647 8.66089C11.7107 8.66089 13.9969 9.92061 15.4899 11.7869L12.6439 14.073C11.804 13.0466 10.4044 12.44 8.95801 12.44C6.11198 12.44 4.10576 14.4463 4.10576 17.199C4.10576 19.9051 6.11198 22.0046 8.95801 22.0046C10.4044 22.0046 11.804 21.3981 12.6439 20.3716L15.4899 22.6578C13.9969 24.524 11.6641 25.7837 8.8647 25.7837C4.15241 25.7837 0 22.3778 0 17.199Z"
        fill="#0EA473"
      />
      <Path
        d="M15.5366 17.199C15.5366 12.0201 19.5491 8.66089 24.2147 8.66089C28.8337 8.66089 32.8928 12.0668 32.8928 17.199C32.8928 22.3778 28.8337 25.7837 24.2147 25.7837C19.5491 25.7837 15.5366 22.3778 15.5366 17.199ZM28.787 17.199C28.787 14.3996 26.6875 12.44 24.168 12.44C21.6486 12.44 19.5957 14.4463 19.5957 17.199C19.5957 20.045 21.6486 22.0046 24.168 22.0046C26.6875 22.0512 28.787 20.0917 28.787 17.199Z"
        fill="#0EA473"
      />
      <Path
        d="M33.9658 3.34192C33.9658 1.89558 35.1789 0.869141 36.6252 0.869141C38.0716 0.869141 39.238 1.89558 39.238 3.34192C39.238 4.74161 38.0716 5.81471 36.6252 5.81471C35.1789 5.81471 33.9658 4.69496 33.9658 3.34192ZM34.5723 25.3637V9.08065H38.6314V25.3637H34.5723Z"
        fill="#0EA473"
      />
      <Path
        d="M56.9675 16.2192V25.3638H52.9084V16.4991C52.9084 13.8864 51.3221 12.4867 49.5025 12.4867C47.6363 12.4867 45.3501 13.5598 45.3501 16.7324V25.4105H41.291V9.0808H45.3501V11.6469C46.1899 9.59401 48.756 8.66089 50.389 8.66089C54.6347 8.66089 56.9675 11.5069 56.9675 16.2192Z"
        fill="#0EA473"
      />
      <Path
        d="M76.9829 17.199C76.9829 22.3778 73.2504 25.7837 68.958 25.7837C66.9985 25.7837 64.6657 24.8972 63.5459 23.171V25.3638H59.4868V0.216064H63.5459V11.227C64.6657 9.50067 66.9518 8.66085 69.0047 8.66085C73.2971 8.66085 76.9829 11.9735 76.9829 17.199ZM72.9238 17.199C72.9238 14.4929 70.8243 12.44 68.3049 12.44C65.972 12.44 63.5926 14.3063 63.5926 17.199C63.5926 20.0916 65.8321 22.0512 68.3049 22.0512C70.8243 22.0512 72.9238 19.905 72.9238 17.199Z"
        fill="#0EA473"
      />
      <Path
        d="M78.1025 3.34192C78.1025 1.89558 79.3156 0.869141 80.7619 0.869141C82.2083 0.869141 83.3747 1.89558 83.3747 3.34192C83.3747 4.74161 82.2083 5.81471 80.7619 5.81471C79.3156 5.81471 78.1025 4.69496 78.1025 3.34192ZM78.7091 25.3637V9.08065H82.7682V25.3637H78.7091Z"
        fill="#0EA473"
      />
      <Path
        d="M94.4789 9.08067V12.3H91.0263V25.4104H86.9672V12.3H84.0278V9.08067H86.9672V3.06201H91.0263V9.08067H94.4789Z"
        fill="#0EA473"
      />
      <Path
        d="M94.2456 20.3716H98.0714C98.0714 21.4914 99.0512 22.5178 100.777 22.5178C102.364 22.5178 103.437 21.7247 103.437 20.6516C103.437 19.7651 102.737 19.3452 101.524 19.0652L99.3778 18.5054C95.692 17.5256 94.7588 15.566 94.7588 13.5131C94.7588 10.947 97.2783 8.66089 100.824 8.66089C103.717 8.66089 106.983 10.1072 106.983 13.7464H103.11C103.11 12.6267 102.084 11.9268 100.964 11.9268C99.7044 11.9268 98.8179 12.6733 98.8179 13.6531C98.8179 14.4929 99.6111 14.9595 100.544 15.1928L103.157 15.8926C106.843 16.8257 107.496 19.1586 107.496 20.6516C107.496 23.9642 104.183 25.7837 100.871 25.7837C97.5582 25.7837 94.2923 23.8242 94.2456 20.3716Z"
        fill="#0EA473"
      />
    </>
  ),
});

FullLogo.displayName = 'FullLogo';
export { FullLogo };



import { } from 'react-native-svg';

const CircleLogo = createIcon({
  Root: Svg,
  viewBox: '0 0 41 41',
  path: (
    <>
      <Defs>
        <LinearGradient id="linearGradient-1" x1="94.5377604%" y1="0%" x2="9.53450521%" y2="100%">
          <Stop offset="0%" stopColor="#0EA473" />
          <Stop offset="100%" stopColor="#0EA473" />
        </LinearGradient>
      </Defs>
      <Circle cx="20.5" cy="20.5" r="20.5" fill="url(#linearGradient-1)" />
      <Path
        d="M21.4537815,15.9323017 C24.2521008,15.9323017 25.5,17.696325 25.9159664,19.2765957 L29.8487395,17.8800774 C29.092437,15.0135397 26.3697479,12 21.4159664,12 C16.1218487,12 12,15.9690522 12,21.4816248 C12,26.9206963 16.1218487,31 21.5294118,31 C26.3697479,31 29.1302521,27.9497099 30,25.1566731 L26.1428571,23.7969052 C25.7268908,25.1566731 24.4033613,27.1044487 21.5294118,27.1044487 C18.7689076,27.1044487 16.3865546,25.0831721 16.3865546,21.4816248 C16.3865546,17.8800774 18.7689076,15.9323017 21.4537815,15.9323017 Z"
        fill="#FFFFFF"
      />
    </>
  ),
});
CircleLogo.displayName = 'CircleLogo';
export { CircleLogo };