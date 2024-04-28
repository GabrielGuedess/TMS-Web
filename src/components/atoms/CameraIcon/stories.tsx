import { type Meta, type StoryFn } from '@storybook/react';

import { CameraIcon } from '.';

import { type CameraIconProps } from './types';

export default {
  args: { size: 24 },
  component: CameraIcon,
  title: 'Atoms/CameraIcon',
} as Meta<CameraIconProps>;

export const Default: StoryFn<CameraIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <CameraIcon {...args} />
  </div>
);
