import { type Meta, type StoryFn } from '@storybook/react';

import { SenderIcon } from '.';

import { type SenderIconProps } from './types';

export default {
  args: {},
  component: SenderIcon,
  title: 'Atoms/SenderIcon',
} as Meta<SenderIconProps>;

export const Default: StoryFn<SenderIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <SenderIcon {...args} />
  </div>
);
