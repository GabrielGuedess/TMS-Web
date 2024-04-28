import { type ComponentPropsWithoutRef } from 'react';

export type InputOTPProps = {
  isInvalid?: boolean;
  isDisabled?: boolean;
  errorMessage?: string;
  containerClassName?: string;
} & ComponentPropsWithoutRef<'input'>;
