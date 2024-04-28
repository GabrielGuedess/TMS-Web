import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { twMerge } from 'tailwind-merge';

import { type ContainerProps } from './types';

const ContainerRef: ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = (
  { children, className, ...props },
  ref,
) => (
  <div
    className={twMerge(
      'rounded border transition-all border-zumthor-100 bg-white-lilac-50 shadow-default dark:border-shark-950 dark:bg-smoke-950',
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </div>
);

export const Container = forwardRef(ContainerRef);
