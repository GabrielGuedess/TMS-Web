import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { twMerge } from 'tailwind-merge';

import { ApexChart } from 'components/atoms/ApexChart';
import { CaretArrowDownIcon } from 'components/atoms/CaretArrowDownIcon';

import { mockOptions } from './mock';

import { type ChartThreeProps } from './types';

const ChartThreeRef: ForwardRefRenderFunction<
  HTMLDivElement,
  ChartThreeProps
> = ({ className, ...props }, ref) => (
  <div
    className={twMerge(
      'col-span-12 rounded border bg-white-lilac-50 px-5 pb-5 pt-[1.875rem] shadow-default transition-all dark:border-shark-950 dark:bg-smoke-950 sm:px-[1.875rem] xl:col-span-5',
      className,
    )}
    ref={ref}
    {...props}
  >
    <div className="mb-3 justify-between gap-4 sm:flex">
      <div>
        <h5 className="text-xl font-semibold text-shark-900 dark:text-white-lilac-50">
          Análise de Visitantes
        </h5>
      </div>
      <div>
        <div className="relative z-20 inline-block">
          <select className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-9 text-sm font-medium outline-none">
            <option value="">Mensal</option>
            <option value="">Anual</option>
          </select>
          <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
            <CaretArrowDownIcon size={18} className="text-comet-500" />
          </span>
        </div>
      </div>
    </div>

    <div className="flex size-full items-center justify-center">
      <ApexChart
        width="100%"
        height={390}
        type="radialBar"
        options={mockOptions}
        series={[76, 67, 61]}
      />
    </div>
  </div>
);

export const ChartThree = forwardRef(ChartThreeRef);
