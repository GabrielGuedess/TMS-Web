'use client';

import { useState } from 'react';

import clsx from 'clsx';
import { Sling } from 'hamburger-react';
import { twMerge } from 'tailwind-merge';

import { DarkModeSwitcher } from 'components/molecules/DarkModeSwitcher';

import { ButtonLinkMobile } from '../ButtonLinkMobile';

import { type HamburgerProps } from './types';

export const Hamburger = ({ className, ...props }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className={twMerge('z-40', className)}>
        <Sling
          toggled={isOpen}
          label="Hamburger"
          onToggle={() => setIsOpen(previousState => !previousState)}
          {...props}
        />
      </div>

      <div
        className={clsx(
          'fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-white-lilac-50 transition-all dark:bg-smoke-950 md:hidden',
          {
            'opacity-1 pointer-events-auto': isOpen,
            'opacity-0 pointer-events-none': !isOpen,
          },
        )}
      >
        <nav className="flex w-full flex-col gap-1">
          <ButtonLinkMobile
            href="/dashboard"
            title="Dashboard"
            onClick={handleClose}
          />

          <ButtonLinkMobile
            title="Usuários"
            onClick={handleClose}
            href="/dashboard/users"
          />

          <ButtonLinkMobile
            onClick={handleClose}
            title="Transportadora"
            href="/dashboard/carrier-companies"
          />

          <ButtonLinkMobile
            onClick={handleClose}
            title="Motorista Próprio"
            href="/dashboard/own-drivers"
          />

          <ButtonLinkMobile
            title="Destinatário"
            onClick={handleClose}
            href="/dashboard/recipients"
          />

          <ButtonLinkMobile
            title="Remetente"
            onClick={handleClose}
            href="/dashboard/senders"
          />

          <ButtonLinkMobile
            onClick={handleClose}
            title="Cliente Físico"
            href="/dashboard/physical-customers"
          />

          <ButtonLinkMobile
            onClick={handleClose}
            title="Cliente Jurídico"
            href="/dashboard/legal-clients"
          />
        </nav>

        <DarkModeSwitcher className="absolute bottom-10" />
      </div>
    </>
  );
};
