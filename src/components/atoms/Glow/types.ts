import { type ReactNode, type ComponentPropsWithoutRef } from 'react';

import { type Glow } from '@codaworks/react-glow';

export type GlowProps = {
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Glow>, 'children'>;
