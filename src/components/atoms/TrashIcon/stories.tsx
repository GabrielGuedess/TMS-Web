import { type Meta, type StoryFn } from '@storybook/react';

import { TrashIcon } from '.';

import { type TrashIconProps } from './types';

export default {
  args: { size: 24 },
  component: TrashIcon,
  title: 'Atoms/TrashIcon',
} as Meta<TrashIconProps>;

export const Default: StoryFn<TrashIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <TrashIcon {...args} />
  </div>
);
