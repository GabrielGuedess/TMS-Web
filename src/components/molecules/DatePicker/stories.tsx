import { type Meta, type StoryFn } from '@storybook/react';

import { DatePicker } from '.';

import { type DatePickerProps } from './types';

export default {
  component: DatePicker,
  title: 'Molecules/DatePicker',
  args: {
    label: 'Data',
    date: new Date(),
    isInvalid: false,
    errorMessage: '',
  },
} as Meta<DatePickerProps>;

export const Default: StoryFn<DatePickerProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <DatePicker className="w-72" {...args} />
  </div>
);
