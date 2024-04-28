import { type Meta, type StoryFn } from '@storybook/react';

import { MoonIcon } from '.';

import { type MoonIconProps } from './types';

export default {
  args: { size: 24 },
  component: MoonIcon,
  title: 'Atoms/MoonIcon',
} as Meta<MoonIconProps>;

export const Default: StoryFn<MoonIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <MoonIcon {...args} />
  </div>
);
