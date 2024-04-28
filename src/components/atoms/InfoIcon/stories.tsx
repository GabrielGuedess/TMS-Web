import { type Meta, type StoryFn } from '@storybook/react';

import { InfoIcon } from '.';

import { type InfoIconProps } from './types';

export default {
  args: { size: 24 },
  component: InfoIcon,
  title: 'Atoms/InfoIcon',
} as Meta<InfoIconProps>;

export const Default: StoryFn<InfoIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <InfoIcon {...args} />
  </div>
);
