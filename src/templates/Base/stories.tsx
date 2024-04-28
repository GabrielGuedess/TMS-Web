import { type Meta, type StoryFn } from '@storybook/react';

import { Base } from '.';

import { type BaseProps } from './types';

export default {
  component: Base,
  title: 'Templates/Base',
} as Meta<BaseProps>;

export const Default: StoryFn<BaseProps> = args => (
  <Base {...args}>
    <h1>Base</h1>
  </Base>
);
