import { type OTPInputProps } from 'react-otp-input';

export type OTPProps = {
  isInvalid?: boolean;
  errorMessage?: string;
} & Omit<OTPInputProps, 'renderInput'>;
