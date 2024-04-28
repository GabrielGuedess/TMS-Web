import { type Meta, type StoryFn } from '@storybook/react';

import { PauseIcon } from '.';

import { type PauseIconProps } from './types';

export default {
  args: { size: 24 },
  component: PauseIcon,
  title: 'Atoms/PauseIcon',
} as Meta<PauseIconProps>;

export const Default: StoryFn<PauseIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <PauseIcon {...args} />
  </div>
);
