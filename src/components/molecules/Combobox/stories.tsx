import { type Meta, type StoryFn } from '@storybook/react';

import { ComboBox } from '.';

import { type ComboBoxProps } from './types';

export default {
  component: ComboBox,
  title: 'Atoms/ComboBox',
  args: {
    label: '',
    search: 'Storybook',
    placeholder: 'Selecione uma Tech',
    values: [
      { id: '1', description: 'Storybook' },
      { id: '2', description: 'React' },
    ],
  },
} as Meta<ComboBoxProps>;

export const Default: StoryFn<ComboBoxProps> = args => (
  <div className="flex h-64 w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <ComboBox className="h-min" {...args} />
  </div>
);
