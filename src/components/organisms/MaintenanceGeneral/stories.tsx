import { type Meta, type StoryFn } from '@storybook/react';

import { MaintenanceGeneral } from '.';

import { type MaintenanceGeneralProps } from './types';

export default {
  args: {},
  component: MaintenanceGeneral,
  title: 'Organisms/MaintenanceGeneral',
} as Meta<MaintenanceGeneralProps>;

export const Default: StoryFn<MaintenanceGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <MaintenanceGeneral className="w-full" {...args} />
  </div>
);
