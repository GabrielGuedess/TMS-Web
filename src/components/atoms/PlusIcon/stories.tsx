import { type Meta, type StoryFn } from '@storybook/react';

import { PlusIcon } from '.';

export default {
  component: PlusIcon,
  title: 'Atoms/PlusIcon',
} as Meta;

export const Default: StoryFn = () => <PlusIcon />;
