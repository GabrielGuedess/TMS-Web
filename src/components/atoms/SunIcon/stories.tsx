import { type Meta, type StoryFn } from '@storybook/react';

import { SunIcon } from '.';

import { type SunIconProps } from './types';

export default {
  args: { size: 24 },
  component: SunIcon,
  title: 'Atoms/SunIcon',
} as Meta<SunIconProps>;

export const Default: StoryFn<SunIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <SunIcon {...args} />
  </div>
);
