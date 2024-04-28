import { type Meta, type StoryFn } from '@storybook/react';

import { PlayIcon } from '.';

import { type PlayIconProps } from './types';

export default {
  args: { size: 24 },
  component: PlayIcon,
  title: 'Atoms/PlayIcon',
} as Meta<PlayIconProps>;

export const Default: StoryFn<PlayIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <PlayIcon {...args} />
  </div>
);
