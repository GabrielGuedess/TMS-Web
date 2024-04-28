import { type ReactNode, type ComponentPropsWithoutRef } from 'react';

export type ButtonProps = {
  isLoading?: boolean;
  children?: ReactNode;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  iconFirst?: JSX.Element;
  iconSecond?: JSX.Element;
  iconAlign?: 'left' | 'right';
  size?: 'small' | 'large' | 'default';
  variant?: 'solid' | 'label' | 'outline';
  color?:
    | 'info'
    | 'dark'
    | 'danger'
    | 'primary'
    | 'success'
    | 'warning'
    | 'secondary';
} & ComponentPropsWithoutRef<'button'>;
