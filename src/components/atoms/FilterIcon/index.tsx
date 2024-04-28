import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type FilterIconProps } from './types';

const FilterIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  FilterIconProps
> = ({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.63 14.75C21.63 15.64 21.38 16.48 20.94 17.2C20.12 18.58 18.61 19.5 16.88 19.5C15.15 19.5 13.64 18.57 12.82 17.2C12.38 16.49 12.13 15.64 12.13 14.75C12.13 12.13 14.26 10 16.88 10C19.5 10 21.63 12.13 21.63 14.75Z"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      d="M18.66 14.73H15.11"
      strokeLinejoin="round"
    />
    <path
      strokeWidth="1.5"
      d="M16.88 13V16.55"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.69 4.02002V6.23999C20.69 7.04999 20.18 8.06001 19.68 8.57001L17.92 10.12C17.59 10.04 17.24 10 16.88 10C14.26 10 12.13 12.13 12.13 14.75C12.13 15.64 12.38 16.48 12.82 17.2C13.19 17.82 13.7 18.35 14.32 18.73V19.07C14.32 19.68 13.92 20.49 13.41 20.79L12 21.7C10.69 22.51 8.87 21.6 8.87 19.98V14.63C8.87 13.92 8.46 13.01 8.06 12.51L4.22 8.46997C3.72 7.95997 3.31 7.05001 3.31 6.45001V4.12C3.31 2.91 4.22 2 5.33 2H18.67C19.78 2 20.69 2.91002 20.69 4.02002Z"
    />
  </svg>
);

export const FilterIcon = forwardRef(FilterIconRef);
