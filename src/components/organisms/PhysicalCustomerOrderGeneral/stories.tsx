import { type Meta, type StoryFn } from '@storybook/react';

import { PhysicalCustomerOrderGeneral } from '.';

import { type PhysicalCustomerOrderGeneralProps } from './types';

export default {
  args: {},
  component: PhysicalCustomerOrderGeneral,
  title: 'Organisms/PhysicalCustomerOrderGeneral',
} as Meta<PhysicalCustomerOrderGeneralProps>;

export const Default: StoryFn<PhysicalCustomerOrderGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <PhysicalCustomerOrderGeneral className="w-full" {...args} />
  </div>
);
