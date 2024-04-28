import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type PlayIconProps } from './types';

const PlayIconRef: ForwardRefRenderFunction<SVGSVGElement, PlayIconProps> = (
  { size = 24, ...props },
  ref,
) => (
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
      d="M4 12V8.44002C4 4.02002 7.13 2.21002 10.96 4.42002L14.05 6.20002L17.14 7.98002C20.97 10.19 20.97 13.81 17.14 16.02L14.05 17.8L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
    />
  </svg>
);

export const PlayIcon = forwardRef(PlayIconRef);
