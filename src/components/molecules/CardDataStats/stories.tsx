import { GlowCapture } from '@codaworks/react-glow';
import { type Meta, type StoryFn } from '@storybook/react';

import { SunIcon } from 'components/atoms/SunIcon';

import { CardDataStats } from '.';

import { type CardDataStatsProps } from './types';

export default {
  component: CardDataStats,
  title: 'Molecules/CardDataStats',
  args: {
    rate: '0.43%',
    icon: SunIcon,
    total: '$3.456K',
    isPositive: true,
    title: 'Total views',
  },
} as Meta<CardDataStatsProps>;

export const Default: StoryFn<CardDataStatsProps> = args => (
  <div className="flex w-full p-5">
    <GlowCapture className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-[1.875rem]">
      <CardDataStats className="w-96" {...args} />
    </GlowCapture>
  </div>
);
