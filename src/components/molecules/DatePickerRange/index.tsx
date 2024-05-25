'use client';

import 'react-day-picker/dist/style.css';

import { DayPicker } from 'react-day-picker';
import type MaskedInput from 'react-text-mask';
import {
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import dayjs from 'dayjs';
import { ptBR } from 'date-fns/locale';
import { twMerge } from 'tailwind-merge';
import * as Popover from '@radix-ui/react-popover';

import { Input } from 'components/atoms/Input';
import { CalendarIcon } from 'components/atoms/CalendarIcon';

import { type DatePickerRangeProps } from './types';

const DatePickerRangeRef: ForwardRefRenderFunction<
  ElementRef<'input'> & MaskedInput,
  DatePickerRangeProps
> = (
  {
    date,
    label,
    setDate,
    className,
    errorMessage,
    isInvalid = false,
    ...props
  },
  ref,
) => (
  <Popover.Root>
    <Popover.Trigger
      className={twMerge(
        'group text-left text-gray-800 outline-none',
        className,
      )}
    >
      <Input
        ref={ref}
        label={label}
        icon={CalendarIcon}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
        className="cursor-pointer group-focus:border-primary-300 group-data-[state='open']:border-primary-300"
        value={`${date?.from ? dayjs(date.from).format('DD/MM/YYYY') : 'Nenhuma'} a ${date?.to ? dayjs(date?.to).format('DD/MM/YYYY') : 'Nenhuma'}`}
        readOnly
      />
    </Popover.Trigger>

    <Popover.Portal>
      <Popover.Content
        align="center"
        sideOffset={4}
        className="z-40 w-[var(--radix-popover-trigger-width)] rounded-lg border border-zumthor-100 bg-white-lilac-50 p-4 text-gray-800 shadow-md outline-none transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-shark-950 dark:bg-smoke-950"
      >
        <DayPicker
          classNames={{
            head_row: 'flex',
            month: 'space-y-4',
            row: 'flex w-full mt-2',
            day_hidden: 'invisible',
            day_outside: 'opacity-50',
            dropdown_icon: 'invisible',
            day_disabled: 'opacity-50',
            caption_end: 'space-y-4 w-full',
            caption_start: 'space-y-4 w-full',
            nav: 'space-x-1 flex items-center',
            root: 'bg-transparent transition-all',
            table: 'w-full border-collapse space-y-1',
            day_today: 'bg-primary-200 text-gray-500',
            caption_dropdowns: 'flex gap-4 items-center',
            caption_label: 'text-sm font-medium capitalize',
            day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
            caption: 'flex justify-between pt-1 mb-5 relative items-center',
            nav_button:
              'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
            day_range_middle:
              'aria-selected:bg-primary-400 aria-selected:text-white-lilac-50',
            head_cell:
              'text-comet-500 dark:text-dark-300 rounded-sm w-9 font-normal text-[0.8rem]',
            months:
              'flex flex-col sm:flex-row space-y-4 text-comet-500 dark:text-dark-300 sm:space-x-4 sm:space-y-0',
            day_selected:
              'bg-primary-400 text-white-lilac-50 hover:bg-primary-400 rounded-sm hover:text-white-lilac-50 focus:bg-primary-400 focus:text-white-lilac-50',
            nav_button_next:
              'absolute right-1 hover:text-primary-400 transition-all focus:text-primary-400 outline-primary-400 flex justify-center items-center rounded-sm',
            nav_button_previous:
              'absolute hover:text-primary-400 transition-all focus:text-primary-400 outline-primary-400 left-1 flex justify-center items-center rounded-sm',
            cell: 'text-center dark:text-dark-300 text-sm p-0 relative [&:has([aria-selected])]:bg-primary-400 [&:has([aria-selected])]:text-white-lilac-50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          }}
          mode="range"
          locale={ptBR}
          selected={date}
          weekStartsOn={1}
          onSelect={setDate}
          captionLayout="dropdown-buttons"
          {...props}
        />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export const DatePickerRange = forwardRef(DatePickerRangeRef);
