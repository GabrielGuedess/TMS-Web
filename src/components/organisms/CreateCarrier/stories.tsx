import { type Meta, type StoryFn } from '@storybook/react';

import { CreateCarrier } from '.';

import { type CreateCarrierProps } from './types';

export default {
  args: {},
  component: CreateCarrier,
  title: 'Organisms/CreateCarrier',
} as Meta<CreateCarrierProps>;

export const Default: StoryFn<CreateCarrierProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateCarrier className="w-full" {...args} />
  </div>
);
