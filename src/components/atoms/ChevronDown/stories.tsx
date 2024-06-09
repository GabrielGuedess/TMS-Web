import { type Meta, type StoryFn } from '@storybook/react';

import { ChevronDown } from '.';

export default {
  component: ChevronDown,
  title: 'Atoms/ChevronDown',
} as Meta;

export const Default: StoryFn = () => <ChevronDown />;
