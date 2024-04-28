'use client';

import {
  useRef,
  useMemo,
  forwardRef,
  useCallback,
  type ForwardRefRenderFunction,
} from 'react';

import { darken } from 'polished';
import { twMerge } from 'tailwind-merge';
import { useWavesurfer } from '@wavesurfer/react';
import resolveConfig from 'tailwindcss/resolveConfig';
import Timeline from 'wavesurfer.js/dist/plugins/timeline';

import { Button } from 'components/atoms/Button';
import { PlayIcon } from 'components/atoms/PlayIcon';
import { PauseIcon } from 'components/atoms/PauseIcon';

import tailwindConfig from '../../../../tailwind.config';

import { type AudioVisualizerProps } from './types';

const fullConfig = resolveConfig(tailwindConfig);

const AudioVisualizerRef: ForwardRefRenderFunction<
  HTMLDivElement,
  AudioVisualizerProps
> = ({ className, ...props }, ref) => {
  const containerRef = useRef(null);

  const { isPlaying, wavesurfer } = useWavesurfer({
    height: 100,
    barWidth: 4,
    barRadius: 3,
    hideScrollbar: true,
    container: containerRef,
    waveColor: fullConfig.theme.colors.primary[400],
    plugins: useMemo(() => [Timeline.create()], []),
    progressColor: darken(0.3, fullConfig.theme.colors.primary[400]),
    ...props,
  });

  const onPlayPause = useCallback(() => wavesurfer?.playPause(), [wavesurfer]);

  return (
    <div
      ref={ref}
      className={twMerge('flex flex-col items-center gap-8 px-4', className)}
    >
      <div ref={containerRef} className="w-full" />

      <Button
        type="button"
        variant="label"
        className="w-32"
        onClick={onPlayPause}
        iconFirst={isPlaying ? <PauseIcon /> : <PlayIcon />}
      />
    </div>
  );
};

export const AudioVisualizer = forwardRef(AudioVisualizerRef);
