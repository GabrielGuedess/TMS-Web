'use client';

import {
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as SelectRadix from '@radix-ui/react-select';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import { SelectItem } from 'components/atoms/SelectItem';
import { WarningIcon } from 'components/atoms/WarningIcon';

import { type SelectProps } from './types';

const SelectRef: ForwardRefRenderFunction<
  ElementRef<typeof SelectRadix.Root>,
  SelectProps
> = (
  {
    label,
    values,
    isInvalid,
    className,
    placeholder,
    errorMessage,
    hasHeight = false,
    ...props
  },
  ref,
) => (
  <SelectRadix.Root {...props}>
    <SelectRadix.Trigger
      className={twMerge(
        clsx(
          'group relative flex items-center justify-between rounded-lg border-2 border-zumthor-100 bg-white-lilac-50 px-3 py-1.5 text-sm font-medium text-comet-500 transition-all hover:bg-porcelain-50 focus:outline-none dark:border-shark-950 dark:bg-shark-950 dark:text-dark-300 dark:hover:opacity-60',
          {
            'border-danger-500 text-red-500 dark:border-danger-500': isInvalid,
            'focus:border-primary-300 dark:focus:border-primary-400 dark:data-[state="open"]:border-primary-400 data-[state="open"]:border-primary-300 focus:placeholder:opacity-100':
              !isInvalid,
          },
        ),
        className,
      )}
      ref={ref}
    >
      <SelectRadix.Value
        className={clsx('text-sm', {
          'text-danger-500': isInvalid,
          'group-focus:text-primary-400': !isInvalid,
        })}
        placeholder={placeholder}
      />
      <SelectRadix.Icon>
        <svg
          fill="none"
          aria-hidden="true"
          viewBox="0 0 10 6"
          className="ms-2.5 size-2.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="2"
            d="m1 1 4 4 4-4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SelectRadix.Icon>

      {!!label && (
        <label
          className={clsx(
            'pointer-events-none absolute left-4 top-[-47%] z-10 translate-y-1/2 px-[3px] text-sm text-comet-400 transition-all before:absolute before:inset-0 before:-z-10 before:block before:w-full before:bg-white-lilac-50 before:transition-all group-focus:text-primary-300 group-data-[state="open"]:text-primary-400 dark:text-dark-300 before:dark:bg-smoke-950',
            {
              'text-danger-500': isInvalid,
              'peer-focus:text-primary-400': !isInvalid,
            },
          )}
        >
          {label}
        </label>
      )}

      {isInvalid && !!errorMessage && (
        <div className="absolute bottom-[calc(calc(50%+0.3rem)*-1)] -ml-3 flex items-center text-danger-500">
          <WarningIcon size={16} />

          <span className="ml-[0.4rem] text-sm">{errorMessage}</span>
        </div>
      )}
    </SelectRadix.Trigger>

    <SelectRadix.Portal>
      <SelectRadix.Content
        className={clsx(
          'z-30 min-w-[var(--radix-select-trigger-width)] animate-slideDownAndFade overflow-auto rounded-md bg-white-lilac-50 shadow-md dark:bg-shark-950',
          {
            'h-auto': !hasHeight,
            'max-h-48': hasHeight,
          },
        )}
        side="bottom"
        sideOffset={5}
        position="popper"
      >
        <ScrollArea.Root type="auto" className="size-full">
          <SelectRadix.Viewport>
            <ScrollArea.Viewport className="size-full">
              {values.map(item => (
                <SelectItem key={item} value={String(item)}>
                  {item}
                </SelectItem>
              ))}
            </ScrollArea.Viewport>
          </SelectRadix.Viewport>
          <ScrollArea.Scrollbar
            orientation="vertical"
            className="w-1 px-[2px] py-[5px]"
          >
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </SelectRadix.Content>
    </SelectRadix.Portal>
  </SelectRadix.Root>
);

export const Select = forwardRef(SelectRef);
