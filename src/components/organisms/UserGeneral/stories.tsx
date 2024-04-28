import { type Meta, type StoryFn } from '@storybook/react';

import { UserGeneral } from '.';

import { type UserGeneralProps } from './types';

export default {
  component: UserGeneral,
  title: 'Organisms/UserGeneral',
  args: {
    data: {
      user: {
        id: '1',
        name: 'test',
        role: 'ADMIN',
        password: '123',
        username: 'test',
        email: 'test@gmail.com',
        updated_at: new Date(),
        created_at: new Date(),
      },
    },
  },
} as Meta<UserGeneralProps>;

export const Default: StoryFn<UserGeneralProps> = args => (
  <div className="flex w-full p-5">
    <UserGeneral className="w-full" {...args} />;
  </div>
);
