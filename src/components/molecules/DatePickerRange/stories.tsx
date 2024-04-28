import dayjs from 'dayjs';
import { type Meta, type StoryFn } from '@storybook/react';

import { DatePickerRange } from '.';

import { type DatePickerRangeProps } from './types';

export default {
  component: DatePickerRange,
  title: 'Molecules/DatePickerRange',
  args: {
    label: 'Período Concessivo',
    date: {
      from: dayjs().toDate(),
      to: dayjs().add(1, 'day').toDate(),
    },
  },
} as Meta<DatePickerRangeProps>;

export const Default: StoryFn<DatePickerRangeProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <DatePickerRange className="w-72" {...args} />;
  </div>
);
