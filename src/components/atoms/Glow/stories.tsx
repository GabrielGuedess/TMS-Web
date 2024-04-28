import { GlowCapture } from '@codaworks/react-glow';
import { type Meta, type StoryFn } from '@storybook/react';

import { Glow } from '.';

import { type GlowProps } from './types';

export default {
  component: Glow,
  title: 'Atoms/Glow',
} as Meta<GlowProps>;

export const Default: StoryFn<GlowProps> = args => (
  <div className="flex w-full justify-center py-5">
    <GlowCapture>
      <Glow
        style={{}}
        color="red"
        debug={false}
        className="rounded transition-all"
        {...args}
      >
        <div className="rounded border border-zumthor-100 bg-white-lilac-50 px-12 py-6 shadow-default transition-all glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow dark:border-shark-950 dark:bg-smoke-950">
          <span className="flex items-center justify-center gap-1 text-sm font-medium">
            GLOW
          </span>
        </div>
      </Glow>
    </GlowCapture>
  </div>
);
