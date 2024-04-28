import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { GlowCapture } from '@codaworks/react-glow';

import { SunIcon } from 'components/atoms/SunIcon';
import { MoonIcon } from 'components/atoms/MoonIcon';
import { MapOne } from 'components/molecules/MapOne';
import { ClockIcon } from 'components/atoms/ClockIcon';
import { ChartOne } from 'components/molecules/ChartOne';
import { ChartThree } from 'components/molecules/ChartThree';
import { CardDataStats } from 'components/molecules/CardDataStats';
import { CollaboratorsIcon } from 'components/atoms/CollaboratorsIcon';

import { type OverviewProps } from './types';

const OverviewRef: ForwardRefRenderFunction<HTMLElement, OverviewProps> = (
  { ...props },
  ref,
) => (
  <section
    ref={ref}
    className="flex flex-col gap-4 md:grid-cols-2 md:gap-6"
    {...props}
  >
    <GlowCapture className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-[1.875rem]">
      <CardDataStats
        rate="0.43%"
        icon={SunIcon}
        total="$3.456K"
        title="Total views"
        isPositive
      />

      <CardDataStats
        rate="4.35%"
        total="$45,2K"
        icon={MoonIcon}
        title="Total Profit"
        isPositive
      />

      <CardDataStats
        rate="2.59%"
        total="2.450"
        icon={ClockIcon}
        title="Total Product"
        isPositive
      />

      <CardDataStats
        rate="0.95%"
        total="3.456"
        isPositive={false}
        title="Total Users"
        icon={CollaboratorsIcon}
      />
    </GlowCapture>

    <ChartOne />

    <div className="2xl:mt-[1.875rem'] 2xl:gap-[1.875rem'] mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6">
      <MapOne />
      <ChartThree />
    </div>
  </section>
);

export const Overview = forwardRef(OverviewRef);
