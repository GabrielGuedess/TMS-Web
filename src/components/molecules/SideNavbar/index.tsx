'use client';

import React, { forwardRef, type ForwardRefRenderFunction } from 'react';

import { twMerge } from 'tailwind-merge';
import * as Accordion from '@radix-ui/react-accordion';

import { CarIcon } from 'components/atoms/CarIcon';
import { UsersIcon } from 'components/atoms/UsersIcon';
import { TruckIcon } from 'components/atoms/TruckIcon';
import { SenderIcon } from 'components/atoms/SenderIcon';
import { DashboardIcon } from 'components/atoms/DashboardIcon';
import { RecipientIcon } from 'components/atoms/RecipientIcon';
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
  </nav>
);

export const SideNavbar = forwardRef(SideNavbarRef);
