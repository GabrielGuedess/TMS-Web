import { type Meta, type StoryFn } from '@storybook/react';

import { PreLoader } from '.';

import { type PreLoaderProps } from './types';

export default {
  component: PreLoader,
  title: 'Atoms/PreLoader',
} as Meta<PreLoaderProps>;

export const Default: StoryFn<PreLoaderProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <PreLoader {...args} />
  </div>
);
