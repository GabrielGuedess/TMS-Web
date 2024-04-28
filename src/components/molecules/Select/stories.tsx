import { type Meta, type StoryFn } from '@storybook/react';

import { Select } from '.';

import { type SelectProps } from './types';

export default {
  component: Select,
  title: 'Molecules/Select',
  args: { placeholder: '20', defaultValue: '20', values: [20, 30, 50] },
} as Meta<SelectProps>;

export const Default: StoryFn<SelectProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <Select {...args} />
  </div>
);
