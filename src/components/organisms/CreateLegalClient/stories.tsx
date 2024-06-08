import { type Meta, type StoryFn } from '@storybook/react';

import { CreateLegalClient } from '.';

import { type CreateLegalClientProps } from './types';

export default {
  args: {},
  component: CreateLegalClient,
  title: 'Organisms/CreateLegalClient',
} as Meta<CreateLegalClientProps>;

export const Default: StoryFn<CreateLegalClientProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateLegalClient className="w-full" {...args} />
  </div>
);
