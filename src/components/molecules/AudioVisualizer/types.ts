import { type WaveSurferOptions } from 'wavesurfer.js';

export type AudioVisualizerProps = {
  className?: string;
} & Omit<WaveSurferOptions, 'container'>;
