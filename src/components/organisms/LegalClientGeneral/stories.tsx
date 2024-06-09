import { type Meta, type StoryFn } from '@storybook/react';

import { LegalClientGeneral } from '.';

import { type LegalClientGeneralProps } from './types';

export default {
  args: {},
  component: LegalClientGeneral,
  title: 'Organisms/LegalClientGeneral',
} as Meta<LegalClientGeneralProps>;

export const Default: StoryFn<LegalClientGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <LegalClientGeneral className="w-full" {...args} />
  </div>
);
