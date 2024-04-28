'use client';

import {
  useRef,
  useState,
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import * as random from 'maath/random';
import resolveConfig from 'tailwindcss/resolveConfig';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

import tailwindConfig from '../../../../tailwind.config';

import { type StarsProps } from './types';

const fullConfig = resolveConfig(tailwindConfig);

const StarsPoints = () => {
  const ref = useRef<ElementRef<typeof Points>>(null);

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.5 }),
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        frustumCulled={false}
        positions={sphere as Float32Array}
      >
        <PointMaterial
          size={0.005}
          depthWrite={false}
          color={fullConfig.theme.colors.primary['500']}
          transparent
          sizeAttenuation
        />
      </Points>
    </group>
  );
};

const StarsRef: ForwardRefRenderFunction<
  ElementRef<typeof Canvas>,
  StarsProps
> = ({ ...props }, ref) => (
  <Canvas ref={ref} camera={{ position: [0, 0, 1] }} {...props}>
    <StarsPoints />
  </Canvas>
);

export const Stars = forwardRef(StarsRef);
