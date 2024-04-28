import { forwardRef, type ForwardRefRenderFunction } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Glow } from 'components/atoms/Glow';
import { ArrowUpIcon } from 'components/atoms/ArrowUpIcon';
import { ArrowDownIcon } from 'components/atoms/ArrowDownIcon';

import { type CardDataStatsProps } from './types';

const CardDataStatsRef: ForwardRefRenderFunction<
  HTMLDivElement,
  CardDataStatsProps
> = (
  { rate, title, total, className, icon: Icon, isPositive = true, ...props },
  ref,
) => (
  <Glow
    style={{}}
    debug={false}
    className="rounded"
    color={isPositive ? 'green' : 'red'}
  >
    <div
      className={twMerge(
        'rounded border border-zumthor-100 bg-white-lilac-50 px-[1.875rem] py-6 shadow-default transition-all glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow dark:border-shark-950 dark:bg-smoke-950',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="flex size-[2.875rem] items-center justify-center rounded-full bg-porcelain-50 transition-all dark:bg-shark-950">
        <Icon className="transition-all glow:text-glow" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-[1.5rem] font-bold text-shark-900 transition-all dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium text-comet-500 transition-all dark:text-dark-300">
            {title}
          </span>
        </div>

        <span
          className={clsx('flex items-center gap-1 text-sm font-medium', {
            'text-red-500': !isPositive,
            'text-success-500': isPositive,
          })}
        >
          {rate}

          {isPositive ? (
            <ArrowUpIcon className="text-success-500" />
          ) : (
            <ArrowDownIcon className="text-red-500" />
          )}
        </span>
      </div>
    </div>
  </Glow>
);

export const CardDataStats = forwardRef(CardDataStatsRef);
