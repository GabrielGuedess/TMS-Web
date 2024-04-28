'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { forwardRef, type ForwardRefRenderFunction } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { type ButtonLinkMobileProps } from './types';

const ButtonLinkMobileRef: ForwardRefRenderFunction<
  HTMLAnchorElement,
  ButtonLinkMobileProps
> = ({ href, title, className, ...props }, ref) => {
  const pathname = usePathname();

  return (
    <Link
      className={twMerge(
        clsx('w-full p-4 text-center text-xl transition-all', {
          'dark:bg-shark-950 bg-primary-400 text-white-lilac-50':
            pathname === href,
          'dark:hover:bg-shark-950 hover:bg-primary-400 text-comet-500 dark:text-dark-300 hover:text-white-lilac-50':
            pathname !== href,
        }),
        className,
      )}
      ref={ref}
      href={href}
      {...props}
    >
      {title}
    </Link>
  );
};

export const ButtonLinkMobile = forwardRef(ButtonLinkMobileRef);
