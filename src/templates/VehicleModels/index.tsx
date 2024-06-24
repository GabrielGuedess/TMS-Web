import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { GlowCapture } from '@codaworks/react-glow';

import { SunIcon } from 'components/atoms/SunIcon';
import { MoonIcon } from 'components/atoms/MoonIcon';
import { Container } from 'components/atoms/Container';
import { ClockIcon } from 'components/atoms/ClockIcon';
import { UsersIcon } from 'components/atoms/UsersIcon';
import { Breadcrumb } from 'components/atoms/Breadcrumb';
import { CardDataStats } from 'components/molecules/CardDataStats';
import { DataTableVehicleModels } from 'components/organisms/DataTableVehicleModels';

import { type VehicleModelsProps } from './types';

const VehicleModelsRef: ForwardRefRenderFunction<
  HTMLElement,
  VehicleModelsProps
> = ({ ...props }, ref) => (
  <section
    ref={ref}
    className="flex flex-col gap-4 md:grid-cols-2 md:gap-6"
    {...props}
  >
    <Breadcrumb pageName="Modelos de Veículos" />

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
        icon={UsersIcon}
        isPositive={false}
        title="Total VehicleModels"
      />
    </GlowCapture>

    <Container>
      <DataTableVehicleModels />
    </Container>
  </section>
);

export const VehicleModels = forwardRef(VehicleModelsRef);