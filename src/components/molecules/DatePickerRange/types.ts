import { type DateRange, type SelectRangeEventHandler } from 'react-day-picker';

import { type PopoverTriggerProps } from '@radix-ui/react-popover';

export type DatePickerRangeProps = {
  label: string;
  date: DateRange;
  isInvalid?: boolean;
  errorMessage?: string;
  setDate: SelectRangeEventHandler;
} & Omit<PopoverTriggerProps, 'onSelect'>;
