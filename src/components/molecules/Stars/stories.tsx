import { type Meta, type StoryFn } from '@storybook/react';

import { Stars } from '.';

import { type StarsProps } from './types';

export default {
  args: {},
  component: Stars,
  title: 'Molecules/Stars',
} as Meta<StarsProps>;

export const Default: StoryFn<StarsProps> = args => (
  <div className="h-96 w-full">
    <Stars {...args} />
  </div>
);
