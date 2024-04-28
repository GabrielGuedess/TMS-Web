'use client';

import { forwardRef, type ForwardRefRenderFunction } from 'react';

import * as Select from '@radix-ui/react-select';

import { CheckIcon } from '../CheckIcon';

import { type SelectItemProps } from './types';

const SelectItemRef: ForwardRefRenderFunction<
  HTMLDivElement,
  SelectItemProps
> = ({ children, ...props }, ref) => (
  <Select.Item
    className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-comet-500 outline-none hover:bg-primary-400/[.08] hover:text-primary-400 focus:bg-primary-400/[.08] focus:text-primary-400 dark:text-dark-300"
    {...props}
    ref={ref}
  >
    <Select.ItemText>{children}</Select.ItemText>

    <Select.ItemIndicator className="text-primary-400">
      <CheckIcon />
    </Select.ItemIndicator>
  </Select.Item>
);

export const SelectItem = forwardRef(SelectItemRef);
