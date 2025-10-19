'use client';

import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  /** Start and end background positions in %, 100 = bottom, 0 = top */
  startPercent?: number; // default 100
  endPercent?: number;   // default 0
  className?: string;
};

// Background component that creates a smooth parallax scroll effect
export function ParallaxBackground({
  src,
  startPercent = 100,
  endPercent = 0,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevents execution on server and ensures element exists
    const el = ref.current;
    if (typeof window === 'undefined' || !el) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReduced = media.matches;

    // Utility to keep scroll values within valid range
    const clamp = (v: number, min: number, max: number) =>
      v < min ? min : v > max ? max : v;

    // Updates background position based on scroll progress
    const update = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = clamp(window.scrollY / maxScroll, 0, 1);
      const pos = startPercent + (endPercent - startPercent) * progress;
      el.style.backgroundPosition = `center ${pos}%`;
    };

    // Initial background position
    update();

    // Skip animation entirely if user prefers reduced motion
    if (prefersReduced) return;

    // Use requestAnimationFrame for smooth updates
    const onScroll = () => requestAnimationFrame(update);
    const onResize = () => requestAnimationFrame(update);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // Recalculate if user toggles reduced motion preference
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
