import { type Mask } from 'react-text-mask';
import { type ElementType, type ComponentPropsWithoutRef } from 'react';

export type InputProps = {
  label?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  errorMessage?: string;
  containerClassName?: string;
  mask?: Mask | ((value: string) => Mask);
  icon?: ElementType<{ size?: number } & ComponentPropsWithoutRef<'svg'>>;
} & ComponentPropsWithoutRef<'input'>;
