import Link from 'next/link';

import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type BreadcrumbProps } from './types';

const BreadcrumbRef: ForwardRefRenderFunction<
  HTMLDivElement,
  BreadcrumbProps
> = ({ pageName, ...props }, ref) => (
  <div
    ref={ref}
    className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    {...props}
  >
    <h2 className="text-xl font-semibold text-shark-950 transition-all dark:text-white-lilac-50 md:text-2xl">
      {pageName}
    </h2>

    <nav>
      <ol className="flex items-center gap-2">
        <li className="text-shark-950 transition-all dark:text-white-lilac-50">
          <Link
            href="/dashboard"
            className="font-medium text-shark-950 transition-all dark:text-white-lilac-50"
          >
            Dashboard
          </Link>
        </li>
        /<li className="font-medium text-primary-400">{pageName}</li>
      </ol>
    </nav>
  </div>
);

export const Breadcrumb = forwardRef(BreadcrumbRef);
