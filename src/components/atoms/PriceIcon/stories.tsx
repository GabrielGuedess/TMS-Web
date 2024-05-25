import { type Meta, type StoryFn } from '@storybook/react';

import { PriceIcon } from '.';

export default {
  component: PriceIcon,
  title: 'Atoms/PriceIcon',
} as Meta;

export const Default: StoryFn = () => <PriceIcon />;
