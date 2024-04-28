import { type Meta, type StoryFn } from '@storybook/react';

import { Tabs } from '.';

import { type TabsProps } from './types';

export default {
  component: Tabs,
  title: 'Molecules/Tabs',
  args: {
    tabs: [{ title: 'Geral', href: '/dashboard/users' }],
  },
} as Meta<TabsProps>;

export const Default: StoryFn<TabsProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <Tabs {...args} />
  </div>
);
