import { type Meta, type StoryFn } from '@storybook/react';

import { OwnDriverGeneral } from '.';

import { type OwnDriverGeneralProps } from './types';

export default {
  args: {},
  component: OwnDriverGeneral,
  title: 'Organisms/OwnDriverGeneral',
} as Meta<OwnDriverGeneralProps>;

export const Default: StoryFn<OwnDriverGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <OwnDriverGeneral className="w-full" {...args} />
  </div>
);
