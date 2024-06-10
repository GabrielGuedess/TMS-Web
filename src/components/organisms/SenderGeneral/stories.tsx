import { type Meta, type StoryFn } from '@storybook/react';

import { SenderGeneral } from '.';

import { type SenderGeneralProps } from './types';

export default {
  args: {},
  component: SenderGeneral,
  title: 'Organisms/SenderGeneral',
} as Meta<SenderGeneralProps>;

export const Default: StoryFn<SenderGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <SenderGeneral className="w-full" {...args} />
  </div>
);
