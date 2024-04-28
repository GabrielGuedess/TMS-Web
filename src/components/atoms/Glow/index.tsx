import { Glow as GlowPrimitive } from '@codaworks/react-glow';

import { type GlowProps } from './types';

export const Glow = ({ children, ...props }: GlowProps) => (
  <GlowPrimitive {...props}>{children as undefined}</GlowPrimitive>
);
