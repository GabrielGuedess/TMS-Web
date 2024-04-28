import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type CalendarIconProps } from './types';

const CalendarIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  CalendarIconProps
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
      d="M8 2V5"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 2V5"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      strokeWidth="1.5"
      d="M3.5 9.09H20.5"
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
      d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
    />
    <path
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.9955 13.7H12.0045"
    />
    <path
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.29431 13.7H8.30329"
    />
    <path
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.29431 16.7H8.30329"
    />
  </svg>
);

export const CalendarIcon = forwardRef(CalendarIconRef);
