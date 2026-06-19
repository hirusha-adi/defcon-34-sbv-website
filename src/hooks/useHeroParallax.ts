import { useEffect, useRef, useState, type RefObject } from 'react';

export interface HeroCursorRef {
  x: number;
  y: number;
  active: boolean;
}

interface ParallaxState {
  scroll: number;
  mx: number;
  my: number;
  reduced: boolean;
  cursorRef: RefObject<HeroCursorRef>;
}

export function useHeroParallax(ref: RefObject<HTMLElement | null>): ParallaxState {
  const [state, setState] = useState({ scroll: 0, mx: 0, my: 0, reduced: false });
  const cursorRef = useRef<HeroCursorRef>({ x: 0, y: 0, active: false });
  const rafRef = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setState((s) => ({ ...s, reduced }));

    const el = ref.current;
    if (!el) return;

    const updateScroll = () => {
      const rect = el.getBoundingClientRect();
      setState((s) => ({ ...s, scroll: rect.top * 0.12 }));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateScroll);
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      cursorRef.current.x = e.clientX - rect.left;
      cursorRef.current.y = e.clientY - rect.top;
      cursorRef.current.active = true;

      if (reduced) return;

      const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setState((s) => ({ ...s, mx, my })));
    };

    const onLeave = () => {
      cursorRef.current.active = false;
      if (!reduced) setState((s) => ({ ...s, mx: 0, my: 0 }));
    };

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

  return { ...state, cursorRef };
}
