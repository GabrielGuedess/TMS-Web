import { type Meta, type StoryFn } from '@storybook/react';

import { DashboardIcon } from '.';

import { type DashboardIconProps } from './types';

export default {
  args: { size: 24 },
  component: DashboardIcon,
  title: 'Atoms/DashboardIcon',
} as Meta<DashboardIconProps>;

export const Default: StoryFn<DashboardIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <DashboardIcon {...args} />
  </div>
);
