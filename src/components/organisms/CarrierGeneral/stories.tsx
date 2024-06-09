import { type Meta, type StoryFn } from '@storybook/react';

import { CarrierGeneral } from '.';

import { type CarrierGeneralProps } from './types';

export default {
  args: {},
  component: CarrierGeneral,
  title: 'Organisms/CarrierGeneral',
} as Meta<CarrierGeneralProps>;

export const Default: StoryFn<CarrierGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CarrierGeneral className="w-full" {...args} />
  </div>
);
