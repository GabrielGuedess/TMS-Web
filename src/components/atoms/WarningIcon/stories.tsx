import { type Meta, type StoryFn } from '@storybook/react';

import { WarningIcon } from '.';

import { type WarningIconProps } from './types';

export default {
  args: { size: 24 },
  component: WarningIcon,
  title: 'Atoms/WarningIcon',
} as Meta<WarningIconProps>;

export const Default: StoryFn<WarningIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <WarningIcon {...args} />
  </div>
);
