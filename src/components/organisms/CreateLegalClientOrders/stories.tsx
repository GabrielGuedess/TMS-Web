import { type Meta, type StoryFn } from '@storybook/react';

import { CreateLegalClientOrder } from '.';

import { type CreateLegalClientOrderProps } from './types';

export default {
  args: {},
  component: CreateLegalClientOrder,
  title: 'Organisms/CreateLegalClientOrder',
} as Meta<CreateLegalClientOrderProps>;

export const Default: StoryFn<CreateLegalClientOrderProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateLegalClientOrder className="w-full" {...args} />
  </div>
);
