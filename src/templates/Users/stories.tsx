import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { Users } from '.';

import { type UsersProps } from './types';

export default {
  component: Users,
  title: 'Templates/Users',
} as Meta<UsersProps>;

export const Default: StoryFn<UsersProps> = args => (
  <Base>
    <Users {...args} />
  </Base>
);
