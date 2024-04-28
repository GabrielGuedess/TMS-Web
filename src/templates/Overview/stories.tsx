import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { Overview } from '.';

import { type OverviewProps } from './types';

export default {
  component: Overview,
  title: 'Templates/Overview',
} as Meta<OverviewProps>;

export const Default: StoryFn<OverviewProps> = args => (
  <Base>
    <Overview {...args} />
  </Base>
);
