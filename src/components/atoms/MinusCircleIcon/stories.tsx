import { type Meta, type StoryFn } from '@storybook/react';

import { MinusCircleIcon } from '.';

import { type MinusCircleIconProps } from './types';

export default {
  args: { size: 24 },
  component: MinusCircleIcon,
  title: 'Atoms/MinusCircleIcon',
} as Meta<MinusCircleIconProps>;

export const Default: StoryFn<MinusCircleIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <MinusCircleIcon {...args} />
  </div>
);
