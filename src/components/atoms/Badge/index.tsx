import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { type BadgeProps } from './types';

const BadgeRef: ForwardRefRenderFunction<HTMLDivElement, BadgeProps> = (
  { title, className, color = 'primary', variant = 'label', ...props },
  ref,
) => (
  <div className={twMerge('relative w-min', className)} {...props}>
    <div
      className={clsx('absolute left-0 top-0 size-full rounded', {
        'bg-shark-950': color === 'dark',
        'bg-cobalt-700': color === 'info',
        'bg-danger-500': color === 'danger',
        'opacity-[16%]': variant === 'label',
        'bg-primary-400': color === 'primary',
        'bg-success-500': color === 'success',
        'bg-warning-500': color === 'warning',

        'bg-dark-200 dark:bg-shark-950': color === 'secondary',
      })}
      ref={ref}
    />

    <div
      className={clsx('flex px-[0.625rem] py-[0.313rem]', {
        'text-white': variant === 'solid',

        'text-cobalt-700': color === 'info' && variant === 'label',
        'text-danger-500': color === 'danger' && variant === 'label',
        'text-primary-400': color === 'primary' && variant === 'label',
        'text-success-500': color === 'success' && variant === 'label',
        'text-warning-500': color === 'warning' && variant === 'label',
        'text-secondary-500': color === 'secondary' && variant === 'label',
        'bg-dark-200 dark:bg-shark-950':
          color === 'dark' && variant === 'label',
      })}
    >
      <span className="z-10 text-center text-[0.813rem] font-semibold capitalize">
        {title}
      </span>
    </div>
  </div>
);

export const Badge = forwardRef(BadgeRef);
