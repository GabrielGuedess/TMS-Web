import { type Meta, type StoryFn } from '@storybook/react';

import { Map } from '.';

import { type MapProps } from './types';

export default {
  component: Map,
  title: 'Molecules/Map',
  args: {
    center: [-46.527_312_8, -23.467_588_2],
    marker: [-46.527_312_8, -23.467_588_2],
  },
} as Meta<MapProps>;

export const Default: StoryFn<MapProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <Map {...args} />
  </div>
);
