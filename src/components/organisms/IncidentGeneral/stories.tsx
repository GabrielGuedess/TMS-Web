import { type Meta, type StoryFn } from '@storybook/react';

import { IncidentGeneral } from '.';

import { type IncidentGeneralProps } from './types';

export default {
  args: {},
  component: IncidentGeneral,
  title: 'Organisms/IncidentGeneral',
} as Meta<IncidentGeneralProps>;

export const Default: StoryFn<IncidentGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <IncidentGeneral className="w-full" {...args} />
  </div>
);
