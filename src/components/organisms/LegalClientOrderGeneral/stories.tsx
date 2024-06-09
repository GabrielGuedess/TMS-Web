import { type Meta, type StoryFn } from '@storybook/react';

import { LegalClientOrderGeneral } from '.';

import { type LegalClientOrderGeneralProps } from './types';

export default {
  args: {},
  component: LegalClientOrderGeneral,
  title: 'Organisms/LegalClientOrderGeneral',
} as Meta<LegalClientOrderGeneralProps>;

export const Default: StoryFn<LegalClientOrderGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <LegalClientOrderGeneral className="w-full" {...args} />
  </div>
);
