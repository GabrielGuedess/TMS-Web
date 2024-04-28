import { type Meta, type StoryFn } from '@storybook/react';

import { InputOTP } from '.';

import { type InputOTPProps } from './types';

export default {
  args: {},
  component: InputOTP,
  title: 'Atoms/InputOTP',
} as Meta<InputOTPProps>;

export const Default: StoryFn<InputOTPProps> = args => (
  <div className="flex w-full justify-center py-5">
    <div className="w-14">
      <InputOTP {...args} />
    </div>
  </div>
);
