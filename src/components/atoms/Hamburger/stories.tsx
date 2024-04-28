import { type Meta, type StoryFn } from '@storybook/react';

import { Hamburger } from '.';

import { type HamburgerProps } from './types';

export default {
  args: { size: 24 },
  component: Hamburger,
  title: 'Atoms/Hamburger',
} as Meta<HamburgerProps>;

export const Default: StoryFn<HamburgerProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <Hamburger {...args} />
  </div>
);
