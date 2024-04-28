import { type Meta, type StoryFn } from '@storybook/react';

import { AbsenteeismIcon } from '.';

import { type AbsenteeismIconProps } from './types';

export default {
  args: { size: 24 },
  component: AbsenteeismIcon,
  title: 'Atoms/AbsenteeismIcon',
} as Meta<AbsenteeismIconProps>;

export const Default: StoryFn<AbsenteeismIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <AbsenteeismIcon {...args} />
  </div>
);
