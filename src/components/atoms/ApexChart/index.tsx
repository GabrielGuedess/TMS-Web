'use client';

import dynamic from 'next/dynamic';

import { type ApexChartProps } from './types';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export const ApexChart = ({
  type,
  width,
  height,
  series,
  options,
}: ApexChartProps) => (
  <ReactApexChart
    type={type}
    width={width}
    series={series}
    height={height}
    options={options}
  />
);
