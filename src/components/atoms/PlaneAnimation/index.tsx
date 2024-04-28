'use client';

import {
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import Lottie from 'lottie-react';
import { twMerge } from 'tailwind-merge';

import plane from 'assets/lottie/plane.json';

import { type PlaneAnimationProps } from './types';

const PlaneAnimationRef: ForwardRefRenderFunction<
  ElementRef<typeof Lottie>,
  PlaneAnimationProps
> = ({ className, ...props }, ref) => (
  <Lottie
    ref={ref}
    animationData={plane}
    className={twMerge('w-80', className)}
    loop
    autoPlay
    {...props}
  />
);

export const PlaneAnimation = forwardRef(PlaneAnimationRef);
