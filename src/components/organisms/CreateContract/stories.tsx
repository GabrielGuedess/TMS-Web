import { type Meta, type StoryFn } from '@storybook/react';

import { CreateContract } from '.';

import { type CreateContractProps } from './types';

export default {
  args: {},
  component: CreateContract,
  title: 'Organisms/CreateContract',
} as Meta<CreateContractProps>;

export const Default: StoryFn<CreateContractProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateContract className="w-full" {...args} />
  </div>
);
