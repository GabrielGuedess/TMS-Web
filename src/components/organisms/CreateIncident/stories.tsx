import { type Meta, type StoryFn } from '@storybook/react';

import { CreateIncident } from '.';

import { type CreateIncidentProps } from './types';

export default {
  args: {},
  component: CreateIncident,
  title: 'Organisms/CreateIncident',
} as Meta<CreateIncidentProps>;

export const Default: StoryFn<CreateIncidentProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateIncident className="w-full" {...args} />
  </div>
);
