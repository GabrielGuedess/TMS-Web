import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type WarningIconProps } from './types';

const WarningIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  WarningIconProps
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
      d="M12 7.75V13"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.47998 18.15C3.50998 17.59 2.90997 16.55 2.90997 15.42V8.58003C2.90997 7.46003 3.50998 6.41999 4.47998 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z"
    />
    <path
      strokeWidth="2"
      d="M12 16.2V16.3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WarningIcon = forwardRef(WarningIconRef);
