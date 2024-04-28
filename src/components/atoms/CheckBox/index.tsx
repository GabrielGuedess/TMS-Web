'use client';

import {
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';

import { type CheckBoxProps } from './types';

const CheckBoxRef: ForwardRefRenderFunction<
  ElementRef<typeof Checkbox.Root>,
  CheckBoxProps
> = ({ ...props }, ref) => (
  <Checkbox.Root
    ref={ref}
    className="relative size-5 cursor-pointer appearance-none rounded-md border border-gray-200 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:size-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-primary-400 checked:bg-primary-400 checked:before:bg-primary-400 hover:before:opacity-10 dark:border-dark-700"
    {...props}
  >
    <Checkbox.Indicator className="pointer-events-none absolute left-2/4 top-2/4 flex size-full -translate-x-2/4 -translate-y-2/4 items-center justify-center rounded-md text-white-lilac-50 opacity-0 transition-all data-[state='checked']:bg-primary-400 data-[state='checked']:opacity-100 dark:text-smoke-950">
      <svg
        strokeWidth="1"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-3.5"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        />
      </svg>
    </Checkbox.Indicator>
  </Checkbox.Root>
);

export const CheckBox = forwardRef(CheckBoxRef);
