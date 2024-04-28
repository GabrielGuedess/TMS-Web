import { type Meta, type StoryFn } from '@storybook/react';

import { RecipientIcon } from '.';

export default {
  component: RecipientIcon,
  title: 'Atoms/RecipientIcon',
} as Meta;

export const Default: StoryFn = () => <RecipientIcon />;
