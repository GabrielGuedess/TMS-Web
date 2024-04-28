import { type Meta, type StoryFn } from '@storybook/react';

import { SendAngleIcon } from '.';

import { type SendAngleIconProps } from './types';

export default {
  args: { size: 24 },
  component: SendAngleIcon,
  title: 'Atoms/SendAngleIcon',
} as Meta<SendAngleIconProps>;

export const Default: StoryFn<SendAngleIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <SendAngleIcon {...args} />
  </div>
);
