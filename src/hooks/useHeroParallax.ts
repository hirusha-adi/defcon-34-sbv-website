import { useEffect, useRef, useState, type RefObject } from 'react';

interface ParallaxState {
  scroll: number;
  mx: number;
  my: number;
  reduced: boolean;
}

export function useHeroParallax(ref: RefObject<HTMLElement | null>): ParallaxState {
  const [state, setState] = useState<ParallaxState>({
    scroll: 0,
    mx: 0,
    my: 0,
    reduced: false,
  });
  const rafRef = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setState((s) => ({ ...s, reduced }));

    const el = ref.current;
    if (!el || reduced) return;

    const updateScroll = () => {
      const rect = el.getBoundingClientRect();
      const scroll = rect.top * 0.35;
      setState((s) => ({ ...s, scroll }));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateScroll);
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setState((s) => ({ ...s, mx, my }));
    };

    const onLeave = () => setState((s) => ({ ...s, mx: 0, my: 0 }));

    window.addEventListener('scroll', onScroll, { passive: true });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    updateScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [ref]);

  return state;
}
