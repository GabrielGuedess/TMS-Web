import { type SelectSingleEventHandler } from 'react-day-picker';

import { type PopoverTriggerProps } from '@radix-ui/react-popover';

export type DatePickerProps = {
  date: Date;
  label: string;
  isInvalid?: boolean;
  errorMessage?: string;
  setDate: SelectSingleEventHandler;
} & Omit<PopoverTriggerProps, 'onSelect'>;
