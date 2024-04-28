import { type Meta, type StoryFn } from '@storybook/react';

import { Badge } from '.';

import { type BadgeProps } from './types';

export default {
  component: Badge,
  title: 'Atoms/Badge',
  args: {
    title: 'Storybook',
  },
} as Meta<BadgeProps>;

export const Default: StoryFn<BadgeProps> = args => (
  <div className="flex w-full justify-center py-5">
    <Badge {...args} />
  </div>
);
