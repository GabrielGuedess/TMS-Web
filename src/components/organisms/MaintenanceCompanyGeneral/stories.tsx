import { type Meta, type StoryFn } from '@storybook/react';

import { MaintenanceCompanyGeneral } from '.';

import { type MaintenanceCompanyGeneralProps } from './types';

export default {
  args: {},
  component: MaintenanceCompanyGeneral,
  title: 'Organisms/MaintenanceCompanyGeneral',
} as Meta<MaintenanceCompanyGeneralProps>;

export const Default: StoryFn<MaintenanceCompanyGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <MaintenanceCompanyGeneral className="w-full" {...args} />
  </div>
);
