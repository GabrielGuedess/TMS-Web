import { type Meta, type StoryFn } from '@storybook/react';

import { TruckIcon } from '.';

export default {
  component: TruckIcon,
  title: 'Atoms/TruckIcon',
} as Meta;

export const Default: StoryFn = () => <TruckIcon />;
