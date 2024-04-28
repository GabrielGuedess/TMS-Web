import { type Meta, type StoryFn } from '@storybook/react';

import { CloseIcon } from '.';

import { type CloseIconProps } from './types';

export default {
  args: { size: 24 },
  component: CloseIcon,
  title: 'Atoms/CloseIcon',
} as Meta<CloseIconProps>;

export const Default: StoryFn<CloseIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <CloseIcon {...args} />
  </div>
);
