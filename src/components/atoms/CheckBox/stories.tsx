import { type Meta, type StoryFn } from '@storybook/react';

import { CheckBox } from '.';

import { type CheckBoxProps } from './types';

export default {
  component: CheckBox,
  args: { checked: true },
  title: 'Atoms/CheckBox',
} as Meta<CheckBoxProps>;

export const Default: StoryFn<CheckBoxProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <CheckBox {...args} />
  </div>
);
