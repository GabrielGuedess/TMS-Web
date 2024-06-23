import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { GlowCapture } from '@codaworks/react-glow';

import { MapOne } from 'components/molecules/MapOne';
import { PriceIcon } from 'components/atoms/PriceIcon';
import { TruckIcon } from 'components/atoms/TruckIcon';
import { ChartOne } from 'components/molecules/ChartOne';
import { ChartThree } from 'components/molecules/ChartThree';
import { CardDataStats } from 'components/molecules/CardDataStats';
import { LinearWalletIcon } from 'components/atoms/LinearWalletIcon';
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
        total="27"
        rate="0.43%"
        title="Pedidos"
        icon={LinearWalletIcon}
        isPositive
      />

      <CardDataStats
        total="16"
        rate="4.35%"
        icon={PriceIcon}
        title="Cotações"
        isPositive
      />

      <CardDataStats
        total="42"
        rate="2.59%"
        icon={CollaboratorsIcon}
        title="Total de Clientes"
        isPositive
      />

      <CardDataStats
        total="61"
        rate="1.95%"
        icon={TruckIcon}
        title="Total de Veículos"
        isPositive
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
