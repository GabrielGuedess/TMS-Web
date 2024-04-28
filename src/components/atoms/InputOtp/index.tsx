'use client';

import { useId, forwardRef, type ForwardRefRenderFunction } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { WarningIcon } from '../WarningIcon';

import { type InputOTPProps } from './types';

const InputOTPRef: ForwardRefRenderFunction<HTMLInputElement, InputOTPProps> = (
  {
    isInvalid,
    className,
    isDisabled,
    errorMessage,
    containerClassName,
    ...props
  },
  ref,
) => {
  const id = useId();

  return (
    <div
      className={twMerge(
        clsx('relative flex h-min flex-col', {}),
        containerClassName,
      )}
    >
      <div className="relative">
        <input
          className={twMerge(
            clsx(
              'peer w-full rounded-lg border-2 bg-transparent p-3 text-center font-normal text-comet-500 outline-none transition-all dark:border-shark-950 dark:text-white-lilac-50',
              {
                'opacity-50 cursor-not-allowed': isDisabled,
                'border-danger-500 dark:border-danger-500': isInvalid,
                'focus:border-primary-300 dark:focus:border-primary-400':
                  !isInvalid,
              },
            ),
            className,
          )}
          id={id}
          ref={ref}
          type="number"
          placeholder="-"
          autoComplete="on"
          disabled={isDisabled}
          {...props}
        />
      </div>

      {isInvalid && !!errorMessage && (
        <div className="absolute -bottom-1/2 ml-[0.2rem] flex items-center text-danger-500">
          <WarningIcon size={16} />

          <span className="ml-[0.4rem] text-sm">{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export const InputOTP = forwardRef(InputOTPRef);
