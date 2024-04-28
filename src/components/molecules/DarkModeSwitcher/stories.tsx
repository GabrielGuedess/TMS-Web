import { type Meta, type StoryFn } from '@storybook/react';

import { DarkModeSwitcher } from '.';

import { type DarkModeSwitcherProps } from './types';

export default {
  component: DarkModeSwitcher,
  title: 'Molecules/DarkModeSwitcher',
} as Meta<DarkModeSwitcherProps>;

export const Default: StoryFn<DarkModeSwitcherProps> = args => (
  <div className="flex w-full justify-center py-5 ">
    <DarkModeSwitcher {...args} />
  </div>
);
