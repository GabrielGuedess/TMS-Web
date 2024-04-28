import {
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import { type ShippingCompanyIconProps } from './types';

const ShippingCompanyIconRef: ForwardRefRenderFunction<
  ElementRef<'svg'>,
  ShippingCompanyIconProps
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
      d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.69995 9.26001L12 12.33L17.2599 9.28003"
    />
    <path
      strokeWidth="1.5"
      d="M12 17.77V12.32"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.76 6.29L7.55998 8.07003C6.83998 8.47003 6.23999 9.48002 6.23999 10.31V13.7C6.23999 14.53 6.82998 15.54 7.55998 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.31C17.77 9.48002 17.18 8.47003 16.45 8.07003L13.25 6.29C12.56 5.9 11.44 5.9 10.76 6.29Z"
    />
  </svg>
);

export const ShippingCompanyIcon = forwardRef(ShippingCompanyIconRef);
