import { type Meta, type StoryFn } from '@storybook/react';

import { Input } from '.';

import { type InputProps } from './types';

export default {
  component: Input,
  title: 'Atoms/Input',
  args: { required: true, label: 'Storybook' },
} as Meta<InputProps>;

export const Default: StoryFn<InputProps> = args => (
  <div className="flex w-full justify-center py-5">
    <Input {...args} />
  </div>
);

export const Invalid: StoryFn<InputProps> = args => (
  <div className="flex w-full justify-center py-5">
    <Input errorMessage="Campo inválido!" isInvalid {...args} />
  </div>
);
