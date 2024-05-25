'use client';

import React, { forwardRef, type ForwardRefRenderFunction } from 'react';

import { twMerge } from 'tailwind-merge';
import * as Accordion from '@radix-ui/react-accordion';

import { CarIcon } from 'components/atoms/CarIcon';
import { IcmsIcon } from 'components/atoms/IcmsIcon';
import { UsersIcon } from 'components/atoms/UsersIcon';
import { TruckIcon } from 'components/atoms/TruckIcon';
import { ToolsIcon } from 'components/atoms/ToolsIcon';
import { PriceIcon } from 'components/atoms/PriceIcon';
import { SenderIcon } from 'components/atoms/SenderIcon';
import { WarningIcon } from 'components/atoms/WarningIcon';
import { ExpensesIcon } from 'components/atoms/ExpensesIcon';
import { DashboardIcon } from 'components/atoms/DashboardIcon';
import { RecipientIcon } from 'components/atoms/RecipientIcon';
import { LinearWalletIcon } from 'components/atoms/LinearWalletIcon';
import { CollaboratorsIcon } from 'components/atoms/CollaboratorsIcon';
import { ShippingCompanyIcon } from 'components/atoms/ShippingCompanyIcon';

import { SideButton } from '../SideButton';
import { DropdownSide } from '../DropdownSide';

import { type SideNavbarProps } from './types';

const SideNavbarRef: ForwardRefRenderFunction<HTMLElement, SideNavbarProps> = (
  { className, isOpen = true, ...props },
  ref,
) => (
  <nav ref={ref} {...props}>
    <div className="flex-1 overflow-y-auto">
      <Accordion.Root
        type="single"
        className={twMerge('flex flex-col gap-4', className)}
        collapsible
      >
        <SideButton
          isOpen={isOpen}
          href="/dashboard"
          title="Dashboard"
          icon={DashboardIcon}
        />

        <SideButton
          isOpen={isOpen}
          title="Usuários"
          icon={UsersIcon}
          href="/dashboard/users"
        />

        <SideButton
          isOpen={isOpen}
          title="Transportadora"
          icon={ShippingCompanyIcon}
          href="/dashboard/carrier-companies"
        />

        <SideButton
          icon={CarIcon}
          isOpen={isOpen}
          title="Motorista Próprio"
          href="/dashboard/own-drivers"
        />

        <SideButton
          isOpen={isOpen}
          icon={RecipientIcon}
          title="Destinatário"
          href="/dashboard/recipients"
        />

        <SideButton
          isOpen={isOpen}
          icon={SenderIcon}
          title="Remetente"
          href="/dashboard/senders"
        />

        <SideButton
          isOpen={isOpen}
          icon={PriceIcon}
          title="Cotação Jurídico"
          href="/dashboard/legal-client-quote-tables"
        />

        <SideButton
          title="ICMS"
          isOpen={isOpen}
          icon={IcmsIcon}
          href="/dashboard/icms"
        />

        <SideButton
          isOpen={isOpen}
          title="Despesas"
          icon={ExpensesIcon}
          href="/dashboard/expenses"
        />

        <SideButton
          isOpen={isOpen}
          title="Incidente"
          icon={WarningIcon}
          href="/dashboard/incidents"
        />

        <DropdownSide
          title="Pedidos"
          isNavbarOpen={isOpen}
          icon={LinearWalletIcon}
          subPath="/dashboard/orders"
        >
          <SideButton
            title="Físico"
            isOpen={isOpen}
            href="/dashboard/physical-customer-orders"
            isSubButton
          />

          <SideButton
            isOpen={isOpen}
            title="Jurídico"
            href="/dashboard/legal-client-orders"
            isSubButton
          />
        </DropdownSide>

        <DropdownSide
          icon={ToolsIcon}
          title="Manutenção"
          isNavbarOpen={isOpen}
          subPath="/dashboard/maintenances"
        >
          <SideButton
            isOpen={isOpen}
            title="Manutenção"
            href="/dashboard/maintenances"
            isSubButton
          />

          <SideButton
            isOpen={isOpen}
            title="Empresas"
            href="/dashboard/maintenance-companies"
            isSubButton
          />
        </DropdownSide>

        <DropdownSide
          title="Clientes"
          isNavbarOpen={isOpen}
          icon={CollaboratorsIcon}
          subPath="/dashboard/clients"
        >
          <SideButton
            title="Físico"
            isOpen={isOpen}
            href="/dashboard/physical-customers"
            isSubButton
          />

          <SideButton
            isOpen={isOpen}
            title="Jurídico"
            href="/dashboard/legal-clients"
            isSubButton
          />
        </DropdownSide>

        <DropdownSide
          title="Veículos"
          icon={TruckIcon}
          isNavbarOpen={isOpen}
          subPath="/dashboard/benefits"
        >
          <SideButton
            title="Tipo"
            isOpen={isOpen}
            href="/dashboard/vehicle-types"
            isSubButton
          />

          <SideButton
            title="Marca"
            isOpen={isOpen}
            href="/dashboard/vehicle-brands"
            isSubButton
          />

          <SideButton
            title="Modelo"
            isOpen={isOpen}
            href="/dashboard/vehicle-models"
            isSubButton
          />

          <SideButton
            isOpen={isOpen}
            title="Carroceria"
            href="/dashboard/vehicle-bodyworks"
            isSubButton
          />

          <SideButton
            isOpen={isOpen}
            title="Empresa"
            href="/dashboard/company-vehicles"
            isSubButton
          />
        </DropdownSide>
      </Accordion.Root>
    </div>
  </nav>
);

export const SideNavbar = forwardRef(SideNavbarRef);
