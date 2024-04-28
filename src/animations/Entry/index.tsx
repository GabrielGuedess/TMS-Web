'use client';

import { gsap } from 'gsap';

import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect';

export const EntryAnimation = () => {
  const tl = gsap.timeline();

  useIsomorphicLayoutEffect(() => {
    tl.to('.panels .panel:first-child, .panels .panel:last-child', {
      scaleY: 1,
      duration: 1,
    })
      .to(
        '.panels .panel:not(:first-child):not(:last-child)',
        { scaleY: 1 },
        '-=0.5',
      )
      .to('.panels .panel', {
        scaleY: 0,
        duration: 0.3,
        stagger: 0.05,
      })
      .to('.panels', {
        skewX: 0,
        duration: 1,
        clipPath: 'circle(0%)',
      });
  }, []);

  return (
    <ul className="panels">
      <li className="panel" />
      <li className="panel" />
      <li className="panel" />
      <li className="panel" />
      <li className="panel" />
      <li className="panel" />
    </ul>
  );
};
