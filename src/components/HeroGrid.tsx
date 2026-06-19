import { useEffect, useRef, type RefObject } from 'react';
import type { HeroCursorRef } from '../hooks/useHeroParallax';

const CELL = 64;
const INFLUENCE = 110;
const MAX_PUSH = 16;
const LERP = 0.1;
const BOTTOM_FADE = 240;

interface CellState {
  ox: number;
  oy: number;
  tx: number;
  ty: number;
}

interface HeroGridProps {
  cursorRef: RefObject<HeroCursorRef>;
  reduced: boolean;
}

export function HeroGrid({ cursorRef, reduced }: HeroGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellsRef = useRef<CellState[]>([]);
  const sizeRef = useRef({ w: 0, h: 0, cols: 0, rows: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      sizeRef.current = {
        w,
        h,
        cols: Math.ceil(w / CELL) + 1,
        rows: Math.ceil(h / CELL) + 1,
      };
      const total = sizeRef.current.cols * sizeRef.current.rows;
      while (cellsRef.current.length < total) {
        cellsRef.current.push({ ox: 0, oy: 0, tx: 0, ty: 0 });
      }
    };

    const draw = () => {
      const { w, h, cols, rows } = sizeRef.current;
      if (w === 0 || h === 0) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const cursor = cursorRef.current;
      let i = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cell = cellsRef.current[i]!;
          const cx = col * CELL + CELL / 2;
          const cy = row * CELL + CELL / 2;

          if (!reduced && cursor?.active) {
            const dx = cx - cursor.x;
            const dy = cy - cursor.y;
            const dist = Math.hypot(dx, dy);

            if (dist < INFLUENCE) {
              const t = 1 - dist / INFLUENCE;
              const push = t * t * MAX_PUSH;
              const angle = Math.atan2(dy, dx);
              cell.tx = Math.cos(angle) * push;
              cell.ty = Math.sin(angle) * push;
            } else {
              cell.tx = 0;
              cell.ty = 0;
            }
          } else {
            cell.tx = 0;
            cell.ty = 0;
          }

          cell.ox += (cell.tx - cell.ox) * LERP;
          cell.oy += (cell.ty - cell.oy) * LERP;

          const x = col * CELL + cell.ox;
          const y = row * CELL + cell.oy;
          const drift = Math.hypot(cell.ox, cell.oy);
          const broken = drift > 1.5;
          const distFromBottom = h - (y + CELL);
          const verticalFade =
            distFromBottom < BOTTOM_FADE ? Math.max(0, distFromBottom / BOTTOM_FADE) : 1;
          const baseAlpha = 0.38 * verticalFade;

          if (broken) {
            ctx.fillStyle = `rgba(57, 255, 136, ${(0.015 + (drift / MAX_PUSH) * 0.025) * verticalFade})`;
            ctx.fillRect(x + 1, y + 1, CELL - 2, CELL - 2);
          }

          ctx.strokeStyle = broken
            ? `rgba(38, 99, 71, ${(0.25 + (1 - Math.min(1, drift / MAX_PUSH)) * 0.35) * verticalFade})`
            : `rgba(24, 53, 42, ${baseAlpha})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 0.5, y + 0.5, CELL - 1, CELL - 1);

          i++;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => resize());
    ro.observe(container);
    resize();
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [cursorRef, reduced]);

  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
