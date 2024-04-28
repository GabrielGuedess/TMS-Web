'use client';

import OtpInput from 'react-otp-input';

import { InputOTP } from 'components/atoms/InputOtp';
import { WarningIcon } from 'components/atoms/WarningIcon';

import { type OTPProps } from './types';

export const OTP = ({
  errorMessage,
  isInvalid = false,
  ...props
}: OTPProps) => (
  <div className="relative">
    <OtpInput
      containerStyle={{
        gap: '12px',
        display: 'flex',
      }}
      renderInput={rest => (
        <InputOTP isInvalid={isInvalid} {...rest} placeholder="-" />
      )}
      inputType="number"
      inputStyle={{ width: '100%' }}
      {...props}
    />

    {isInvalid && !!errorMessage && (
      <div className="absolute -bottom-1/2 ml-[0.2rem] flex items-center text-danger-500">
        <WarningIcon size={16} />

        <span className="ml-[0.4rem] text-sm">{errorMessage}</span>
      </div>
    )}
  </div>
);
