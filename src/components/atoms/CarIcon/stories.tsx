import { type Meta, type StoryFn } from '@storybook/react';

import { CarIcon } from '.';

export default {
  component: CarIcon,
  title: 'Atoms/CarIcon',
} as Meta;

export const Default: StoryFn = () => <CarIcon />;
