import { type Meta, type StoryFn } from '@storybook/react';

import { CustomError } from '.';

import { type CustomErrorProps } from './types';

export default {
  component: CustomError,
  title: 'Molecules/CustomError',
  args: { noRowsMessageFunc: () => 'Custom Error' },
} as Meta<CustomErrorProps>;

export const Default: StoryFn<CustomErrorProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <CustomError {...args} />
  </div>
);
