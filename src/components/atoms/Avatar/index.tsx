import Image from 'next/image';

import {
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import { twMerge } from 'tailwind-merge';

import { type AvatarProps } from './types';

const AvatarRef: ForwardRefRenderFunction<
  ElementRef<typeof Image>,
  AvatarProps
> = ({ alt, src, className, ...props }, ref) => (
  <div
    className={twMerge(
      'relative w-10 h-10 select-none overflow-hidden rounded-full bg-porcelain-50 dark:bg-smoke-950 transition-all',
      className,
    )}
  >
    <Image
      ref={ref}
      src={src}
      alt={alt}
      className="select-none object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
      fill
      priority
      {...props}
    />
  </div>
);

export const Avatar = forwardRef(AvatarRef);
