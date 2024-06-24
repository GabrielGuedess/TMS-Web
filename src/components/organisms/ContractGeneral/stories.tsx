import { type Meta, type StoryFn } from '@storybook/react';

import { ContractGeneral } from '.';

import { type ContractGeneralProps } from './types';

export default {
  args: {},
  component: ContractGeneral,
  title: 'Organisms/ContractGeneral',
} as Meta<ContractGeneralProps>;

export const Default: StoryFn<ContractGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <ContractGeneral className="w-full" {...args} />
  </div>
);
