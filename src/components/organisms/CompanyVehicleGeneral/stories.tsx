import { type Meta, type StoryFn } from '@storybook/react';

import { CompanyVehicleGeneral } from '.';

import { type CompanyVehicleGeneralProps } from './types';

export default {
  args: {},
  component: CompanyVehicleGeneral,
  title: 'Organisms/CompanyVehicleGeneral',
} as Meta<CompanyVehicleGeneralProps>;

export const Default: StoryFn<CompanyVehicleGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CompanyVehicleGeneral className="w-full" {...args} />
  </div>
);
