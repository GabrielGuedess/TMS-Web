import { type Meta, type StoryFn } from '@storybook/react';

import { AudioVisualizer } from '.';

import { type AudioVisualizerProps } from './types';

export default {
  component: AudioVisualizer,
  args: { url: '/audio/amigo.mp3' },
  title: 'Molecules/AudioVisualizer',
} as Meta<AudioVisualizerProps>;

export const Default: StoryFn<AudioVisualizerProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <AudioVisualizer className="w-full" {...args} />
  </div>
);
