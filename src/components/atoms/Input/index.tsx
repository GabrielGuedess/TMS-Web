'use client';

import MaskedInput from 'react-text-mask';
import {
  useId,
  useState,
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { EyeIcon } from '../EyeIcon';
import { WarningIcon } from '../WarningIcon';
import { EyeSlashIcon } from '../EyeSlashIcon';

import { type InputProps } from './types';

const InputRef: ForwardRefRenderFunction<
  ElementRef<'input'> & MaskedInput,
  InputProps
> = (
  {
    type,
    mask,
    label,
    className,
    icon: Icon,
    errorMessage,
    isInvalid = false,
    isDisabled = false,
    containerClassName,
    isFullWidth = false,
    ...props
  },
  ref,
) => {
  const id = useId();

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={twMerge(
        clsx('relative flex h-min flex-col', {
          'w-full': isFullWidth,
        }),
        containerClassName,
      )}
    >
      <div className="relative">
        {mask ? (
          <MaskedInput
            {...props}
            className={twMerge(
              clsx(
                'peer w-full rounded-lg border-2 bg-transparent font-normal text-comet-500 outline-none transition-all placeholder:opacity-0 dark:border-shark-950 dark:text-white-lilac-50',
                {
                  'p-3': !Icon && type !== 'password',
                  'opacity-50 cursor-not-allowed': isDisabled,
                  'py-3 pb-3 pl-3 pr-8': !!Icon || type === 'password',
                  'border-danger-500 dark:border-danger-500': isInvalid,
                  'focus:border-primary-300 dark:focus:border-primary-400 focus:placeholder:opacity-100':
                    !isInvalid,
                },
              ),
              className,
            )}
            id={id}
            ref={ref}
            mask={mask}
            autoComplete="on"
            disabled={isDisabled}
            type={isVisible ? 'text' : type}
          />
        ) : (
          <input
            className={twMerge(
              clsx(
                'peer w-full rounded-lg border-2 bg-transparent font-normal text-comet-500 outline-none transition-all placeholder:opacity-0 dark:border-shark-950 dark:text-white-lilac-50',
                {
                  'p-3': !Icon && type !== 'password',
                  'opacity-50 cursor-not-allowed': isDisabled,
                  'py-3 pb-3 pl-3 pr-8': !!Icon || type === 'password',
                  'border-danger-500 dark:border-danger-500': isInvalid,
                  'focus:border-primary-300 dark:focus:border-primary-400 focus:placeholder:opacity-100':
                    !isInvalid,
                },
              ),
              className,
            )}
            id={id}
            ref={ref}
            autoComplete="on"
            disabled={isDisabled}
            type={isVisible ? 'text' : type}
            {...props}
          />
        )}
        {!!label && (
          <label
            className={clsx(
              'pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 px-[3px] text-sm text-comet-500 transition-all before:absolute before:inset-0 before:-z-10 before:block before:w-full before:bg-white-lilac-50 before:transition-all peer-valid:top-[-35%] peer-valid:translate-y-1/2 peer-read-only:top-[-35%] peer-read-only:translate-y-1/2 peer-focus:top-[-35%] peer-focus:translate-y-1/2 dark:text-dark-300 before:dark:bg-smoke-950',
              {
                'text-danger-500': isInvalid,
                'peer-focus:text-primary-400': !isInvalid,
              },
            )}
            htmlFor={id}
          >
            {label}
          </label>
        )}

        {type === 'password' && (
          <button
            type="button"
            aria-label="Visible Password"
            onClick={() => setIsVisible(previousState => !previousState)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-comet-500 outline-primary-400 transition-all hover:text-primary-400 focus:text-primary-400 dark:text-dark-300 hover:dark:text-primary-400 focus:dark:text-primary-400"
          >
            {isVisible ? <EyeIcon size={18} /> : <EyeSlashIcon size={18} />}
          </button>
        )}

        {!!Icon && type !== 'password' && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-comet-500 transition-all dark:text-dark-300">
            <Icon size={18} />
          </div>
        )}
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

export const Input = forwardRef(InputRef);
