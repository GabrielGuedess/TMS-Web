import { type CaretRightIconProps } from './types';

export const CaretRightIcon = ({
  size = 18,
  color = '#4B465C',
}: CaretRightIconProps) => (
  <div>
    <svg
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 6L15.5 12L9.5 18"
      />
      <path
        stroke="white"
        strokeWidth="1.5"
        strokeOpacity="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 6L15.5 12L9.5 18"
      />
    </svg>
  </div>
);
