import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { twMerge } from 'tailwind-merge';

import { ApexChart } from 'components/atoms/ApexChart';

import { mockOptions } from './mock';

import { type ChartOneProps } from './types';

const ChartOneRef: ForwardRefRenderFunction<HTMLDivElement, ChartOneProps> = (
  { className, ...props },
  ref,
) => (
  <div
    className={twMerge(
      'flex w-full flex-col gap-4 rounded border border-zumthor-100 bg-white-lilac-50 px-5 pb-5 pt-[1.875rem] shadow-default transition-all dark:border-shark-950 dark:bg-smoke-950 sm:px-[1.875rem] md:grid-cols-2 md:gap-6 xl:col-span-8',
      className,
    )}
    ref={ref}
    {...props}
  >
    <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
      <div className="flex w-full flex-wrap gap-3 sm:gap-5">
        <div className="flex gap-2">
          <div className="mt-1 flex size-4 items-center justify-center rounded-full border border-cobalt-900">
            <div className="flex size-2 rounded-full bg-cobalt-900" />
          </div>

          <div className="w-full">
            <p className="font-semibold text-cobalt-900">Total Revenue</p>
            <p className="text-sm font-medium text-comet-500 dark:text-dark-300">
              12.04.2022 - 12.05.2022
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="mt-1 flex size-4 items-center justify-center rounded-full border border-red-500">
            <div className="flex size-2 rounded-full bg-red-500" />
          </div>

          <div className="w-full">
            <p className="font-semibold text-primary-400">Total Sales</p>
            <p className="text-sm font-medium text-comet-500 dark:text-dark-300">
              12.04.2022 - 12.05.2022
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full justify-center sm:mt-0 sm:justify-end">
        <div className="inline-flex items-center gap-2 rounded-md bg-porcelain-50 p-1.5 transition-all dark:bg-shark-950">
          <button
            type="button"
            className="rounded bg-white-lilac-50 px-3 py-1 text-xs font-medium text-comet-500 shadow-card outline-primary-400 transition-all hover:bg-white-lilac-50 hover:shadow-card dark:bg-smoke-950 dark:text-white-lilac-50 dark:hover:bg-smoke-950"
          >
            Day
          </button>

          <button
            type="button"
            className="rounded px-3 py-1 text-xs font-medium text-comet-500 outline-primary-400 transition-all hover:bg-white-lilac-50 hover:shadow-card dark:text-white-lilac-50 dark:hover:bg-smoke-950"
          >
            Week
          </button>

          <button
            type="button"
            className="rounded px-3 py-1 text-xs font-medium text-comet-500 outline-primary-400 transition-all hover:bg-white-lilac-50 hover:shadow-card dark:text-white-lilac-50 dark:hover:bg-smoke-950"
          >
            Month
          </button>
        </div>
      </div>
    </div>

    <div className="h-[355px] w-full">
      <ApexChart
        series={[
          {
            name: 'Product One',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
          },
          {
            name: 'Product Two',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
          },
        ]}
        type="area"
        width="100%"
        height="100%"
        options={mockOptions}
      />
    </div>
  </div>
);

export const ChartOne = forwardRef(ChartOneRef);
