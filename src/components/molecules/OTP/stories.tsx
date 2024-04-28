import { type Meta, type StoryFn } from '@storybook/react';

import { OTP } from '.';

import { type OTPProps } from './types';

export default {
  component: OTP,
  title: 'Molecules/OTP',
  args: {
    numInputs: 6,
  },
} as Meta<OTPProps>;

export const Default: StoryFn<OTPProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <OTP {...args} />
  </div>
);
