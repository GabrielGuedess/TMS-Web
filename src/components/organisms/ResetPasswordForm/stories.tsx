import { type Meta, type StoryFn } from '@storybook/react';

import { ResetPasswordForm } from '.';

import { type ResetPasswordFormProps } from './types';

export default {
  args: {},
  component: ResetPasswordForm,
  title: 'Organisms/ResetPasswordForm',
} as Meta<ResetPasswordFormProps>;

export const Default: StoryFn<ResetPasswordFormProps> = args => (
  <div className="w-full p-5">
    <ResetPasswordForm {...args} />
  </div>
);
