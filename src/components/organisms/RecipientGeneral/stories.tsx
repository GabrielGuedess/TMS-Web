import { type Meta, type StoryFn } from '@storybook/react';

import { RecipientGeneral } from '.';

import { type RecipientGeneralProps } from './types';

export default {
  args: {},
  component: RecipientGeneral,
  title: 'Organisms/RecipientGeneral',
} as Meta<RecipientGeneralProps>;

export const Default: StoryFn<RecipientGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <RecipientGeneral className="w-full" {...args} />
  </div>
);
