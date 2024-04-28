'use client';

import { useState, forwardRef, type ForwardRefRenderFunction } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Logo } from 'components/atoms/Logo';
import { SideNavbar } from 'components/molecules/SideNavbar';

import { type SidebarProps } from './types';

const SidebarRef: ForwardRefRenderFunction<HTMLElement, SidebarProps> = (
  { className, ...props },
  ref,
) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={twMerge(
        clsx(
          'relative hidden h-screen max-w-fit flex-col items-center gap-12 border-r bg-white-lilac-50 px-4 py-3 transition-all dark:border-shark-950 dark:bg-smoke-950 md:flex',
          {
            'w-[82px]': !isOpen,
          },
        ),
        className,
      )}
      ref={ref}
      {...props}
    >
      <Logo size={isOpen ? 50 : 40} />
      <SideNavbar isOpen={isOpen} />

      <button
        type="button"
        aria-label="Close Sidebar"
        onClick={() => setIsOpen(previousState => !previousState)}
        className="absolute right-0 top-10 z-40 hidden -translate-y-1/2 translate-x-1/2 rounded-full border border-dashed bg-white-lilac-50 p-1 text-shark-950 outline-primary-400 transition-all hover:text-primary-400 focus:text-primary-400 dark:border-shark-950 dark:bg-smoke-950 dark:text-dark-300 lg:flex"
      >
        <svg
          className={clsx('transition-all', {
            'rotate-180': !isOpen,
          })}
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          aria-hidden={!isOpen}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"
          />
        </svg>
      </button>
    </aside>
  );
};

export const Sidebar = forwardRef(SidebarRef);
