import { type Meta, type StoryFn } from '@storybook/react';

import { Sidebar } from '.';

import { type SidebarProps } from './types';

export default {
  component: Sidebar,
  title: 'Organisms/Sidebar',
} as Meta<SidebarProps>;

export const Default: StoryFn<SidebarProps> = args => <Sidebar {...args} />;
