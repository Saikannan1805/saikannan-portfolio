'use client';

import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  /** Start and end background positions in %, 100 = bottom, 0 = top */
  startPercent?: number; // default 100
  endPercent?: number;   // default 0
  className?: string;
};

export function ParallaxBackground({
  src,
  startPercent = 100,
  endPercent = 0,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ✅ SSR + ref guard
    const el = ref.current;
    if (typeof window === 'undefined' || !el) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReduced = media.matches;

    // keep helpers inside effect to avoid deps warnings
    const clamp = (v: number, min: number, max: number) =>
      v < min ? min : v > max ? max : v;

    const update = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight); // avoid /0
      const progress = clamp(window.scrollY / maxScroll, 0, 1); // 0 → 1
      const pos = startPercent + (endPercent - startPercent) * progress;
      el.style.backgroundPosition = `center ${pos}%`;
    };

    // Initial paint
    update();

    // If reduced motion, don't animate—just set start position
    if (prefersReduced) return;

    // Use rAF for smooth updates; passive listener for scroll
    const onScroll = () => requestAnimationFrame(update);
    const onResize = () => requestAnimationFrame(update);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // If user toggles reduced motion while page is open
    const onMediaChange = () => update();
    media.addEventListener?.('change', onMediaChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      media.removeEventListener?.('change', onMediaChange);
    };
  }, [startPercent, endPercent]);

  return (
    <div
      ref={ref}
      className={`parallax-bg ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `center ${startPercent}%`,
      }}
      aria-hidden="true"
    />
  );
}
