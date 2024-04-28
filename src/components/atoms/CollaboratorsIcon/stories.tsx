import { type Meta, type StoryFn } from '@storybook/react';

import { CollaboratorsIcon } from '.';

import { type CollaboratorsIconProps } from './types';

export default {
  args: { size: 24 },
  component: CollaboratorsIcon,
  title: 'Atoms/CollaboratorsIcon',
} as Meta<CollaboratorsIconProps>;

export const Default: StoryFn<CollaboratorsIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <CollaboratorsIcon {...args} />
  </div>
);
