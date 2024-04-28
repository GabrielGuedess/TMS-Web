import { type Meta, type StoryFn } from '@storybook/react';

import { SignForm } from '.';

import { type SignFormProps } from './types';

export default {
  args: {},
  component: SignForm,
  title: 'Organisms/SignForm',
} as Meta<SignFormProps>;

export const Default: StoryFn<SignFormProps> = args => (
  <div className="w-full p-5">
    <SignForm {...args} />
  </div>
);
