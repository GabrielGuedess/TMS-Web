import { type Meta, type StoryFn } from '@storybook/react';

import { CloseCircleIcon } from '.';

import { type CloseCircleIconProps } from './types';

export default {
  args: { size: 24 },
  component: CloseCircleIcon,
  title: 'Atoms/CloseCircleIcon',
} as Meta<CloseCircleIconProps>;

export const Default: StoryFn<CloseCircleIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <CloseCircleIcon {...args} />
  </div>
);
