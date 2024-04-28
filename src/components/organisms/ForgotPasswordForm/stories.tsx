import { type Meta, type StoryFn } from '@storybook/react';

import { ForgotPasswordForm } from '.';

import { type ForgotPasswordFormProps } from './types';

export default {
  args: {},
  component: ForgotPasswordForm,
  title: 'Organisms/ForgotPasswordForm',
} as Meta<ForgotPasswordFormProps>;

export const Default: StoryFn<ForgotPasswordFormProps> = args => (
  <div className="w-full p-5">
    <ForgotPasswordForm {...args} />
  </div>
);
