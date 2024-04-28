import { type Meta, type StoryFn } from '@storybook/react';

import { SideNavbar } from '.';

import { type SideNavbarProps } from './types';

export default {
  component: SideNavbar,
  title: 'Molecules/SideNavbar',
} as Meta<SideNavbarProps>;

export const Default: StoryFn<SideNavbarProps> = args => (
  <div className="flex w-full justify-center py-5">
    <SideNavbar {...args} />
  </div>
);
