import { type Meta, type StoryFn } from '@storybook/react';

import { PhysicalCustomerGeneral } from '.';

import { type PhysicalCustomerGeneralProps } from './types';

export default {
  args: {},
  component: PhysicalCustomerGeneral,
  title: 'Organisms/PhysicalCustomerGeneral',
} as Meta<PhysicalCustomerGeneralProps>;

export const Default: StoryFn<PhysicalCustomerGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <PhysicalCustomerGeneral className="w-full" {...args} />
  </div>
);
