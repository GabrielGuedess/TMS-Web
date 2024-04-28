import { type Meta, type StoryFn } from '@storybook/react';

import { DashboardIcon } from 'components/atoms/DashboardIcon';

import { SideButton } from '.';

import { type SideButtonProps } from './types';

export default {
  component: SideButton,
  title: 'Molecules/SideButton',
  args: { href: '/', title: 'Home', icon: DashboardIcon },
} as Meta<SideButtonProps>;

export const Default: StoryFn<SideButtonProps> = args => (
  <div className="flex w-full justify-center py-5">
    <SideButton {...args} />
  </div>
);
