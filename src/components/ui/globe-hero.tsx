"use client";

import React, { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface DotGlobeHeroProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

type Cell = {
  x: number;
  y: number;
  lit: number;
  t: number;
};

const CELL = 46;
const RADIUS = 130;

function getThemeColors() {
  const styles = getComputedStyle(document.documentElement);
  const grid = styles.getPropertyValue("--canvas-grid-color").trim().replace(/^['"]|['"]$/g, "");
  const glow = styles.getPropertyValue("--canvas-glow-color").trim().replace(/^['"]|['"]$/g, "");

  return {
    grid,
    glow,
    bg: styles.getPropertyValue("--bg-primary").trim(),
  };
}

const DotGlobeHero = React.forwardRef<
  HTMLDivElement,
  DotGlobeHeroProps
>(({
  className,
  children,
  ...props
}, ref) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [supportsHover] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  const updatePointer = (clientX: number, clientY: number) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;

    (window as any).__heroPointerX = clientX - rect.left;
    (window as any).__heroPointerY = clientY - rect.top;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const rotateX = (0.5 - y / 100) * 5;
    const rotateY = (x / 100 - 0.5) * 5;

    event.currentTarget.style.setProperty("--mx", `${x}%`);
    event.currentTarget.style.setProperty("--my", `${y}%`);
    event.currentTarget.style.setProperty("--rx", `${rotateX}deg`);
    event.currentTarget.style.setProperty("--ry", `${rotateY}deg`);

    updatePointer(event.clientX, event.clientY);
  };

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--mx", "50%");
    event.currentTarget.style.setProperty("--my", "50%");
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
    setIsHovered(false);
  };


  const use3DEffect = isHovered && supportsHover;
  const contentStyle: CSSProperties = supportsHover ? {
    transform: use3DEffect
      ? `perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateY(-8px)`
      : `translateY(0px)`,
    transition: "transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)",
  } : {};

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let cells: Cell[] = [];
    let last = 0;
    let raf = 0;
    let resizeTimer: number | undefined;
    let currentTheme = "";

    const buildGrid = () => {
      const dpr = window.devicePixelRatio || 1;
      const vw = typeof visualViewport !== 'undefined' ? visualViewport.width : wrapper.getBoundingClientRect().width;
      const vh = typeof visualViewport !== 'undefined' ? visualViewport.height : wrapper.getBoundingClientRect().height;

      W = vw;
      H = vh;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(W / CELL) + 1;
      const rows = Math.ceil(H / CELL) + 1;
      cells = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          cells.push({
            x: c * CELL,
            y: r * CELL,
            lit: 0,
            t: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const drawGrid = (colors: ReturnType<typeof getThemeColors>) => {
      const mx = (window as any).__heroPointerX ?? -9999;
      const my = (window as any).__heroPointerY ?? -9999;

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.t += 0.01;

        const dx = mx - cell.x;
        const dy = my - cell.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const want = dist < RADIUS ? Math.pow(1 - dist / RADIUS, 1.7) : 0;
        cell.lit += (want - cell.lit) * 0.16;

        const idle = 0.04 + 0.022 * Math.sin(cell.t + cell.x * 0.013 + cell.y * 0.009);
        const alpha = idle + cell.lit * 0.85;

        if (cell.lit > 0.015) {
          ctx.strokeStyle = `rgba(${colors.glow},${alpha})`;
        } else {
          ctx.strokeStyle = `rgba(${colors.grid},${alpha})`;
        }

        ctx.lineWidth = 0.5;
        ctx.strokeRect(cell.x, cell.y, CELL, CELL);

        if (cell.lit > 0.04) {
          const px = cell.x + CELL / 2;
          const py = cell.y + CELL / 2;
          const radius = CELL * cell.lit * 1.8;

          const gradient = ctx.createRadialGradient(px, py, 0, px, py, radius);
          gradient.addColorStop(0, `rgba(${colors.glow},${cell.lit * 0.45})`);
          gradient.addColorStop(1, `rgba(${colors.glow},0)`);
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(${colors.glow},${cell.lit * 0.95})`;
          ctx.beginPath();
          ctx.arc(px, py, 1.6 * cell.lit, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (mx > 0 && mx < W && my > 0 && my < H) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, RADIUS * 1.2);
        gradient.addColorStop(0, `rgba(${colors.glow},0.07)`);
        gradient.addColorStop(0.5, `rgba(${colors.glow},0.03)`);
        gradient.addColorStop(1, `rgba(0,0,0,0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mx, my, RADIUS * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = (ts: number) => {
      const dt = Math.min((ts - last) / 1000, 0.05);
      last = ts;

      const colors = getThemeColors();
      const themeKey = `${colors.grid}-${colors.glow}-${colors.bg}`;
      if (themeKey !== currentTheme) {
        currentTheme = themeKey;
        ctx.clearRect(0, 0, W, H);
      }

      drawGrid(colors);
      raf = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(buildGrid, 200);
    };

    (window as any)._updateCanvasTheme = () => {
      currentTheme = "";
    };

    buildGrid();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", handleResize);
    if (typeof visualViewport !== 'undefined') {
      visualViewport.addEventListener("resize", handleResize);
    }

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      if (typeof visualViewport !== 'undefined') {
        visualViewport.removeEventListener("resize", handleResize);
      }
      if (resizeTimer) window.clearTimeout(resizeTimer);
    };
  }, []);

  // Disable pointer events on the hero content once it scrolls out of view.
  // We observe the OUTER wrapper with a negative rootMargin so the class flips
  // the moment the buttons are about to leave the visible area, not only when
  // the entire 100dvh section has scrolled past.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          el.classList.toggle("is-out", !entry.isIntersecting);
        }
      },
      { threshold: 0, rootMargin: "-30% 0px -30% 0px" }
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <div
        ref={(node) => {
          wrapperRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        onMouseMove={supportsHover ? handleMouseMove : undefined}
        onMouseEnter={supportsHover ? handleMouseEnter : undefined}
        onMouseLeave={supportsHover ? handleMouseLeave : undefined}
        className={cn(
          "relative w-full bg-[var(--bg-primary)] overflow-hidden",
          className
        )}
        style={{
          minHeight: '100dvh',
          "--mx": "50%",
          "--my": "50%",
          "--rx": "0deg",
          "--ry": "0deg",
        } as CSSProperties}
        {...props}
    >
      <canvas
        ref={canvasRef}
        id="bg-canvas"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ pointerEvents: 'none', touchAction: 'none' }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-[var(--bg-primary)]/70 via-[var(--bg-primary)]/15 to-transparent" />
      <div className="pointer-events-none absolute top-1/4 left-1/4 z-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 z-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--accent-dim),transparent_35%)] opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: supportsHover && isHovered ? 1 : 0,
          background: "radial-gradient(650px circle at var(--mx) var(--my), var(--accent-glow), transparent 42%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative z-20 flex flex-col items-center justify-center px-5 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12"
           style={{ ...contentStyle, pointerEvents: 'auto', touchAction: 'auto' }}>
        {children}
      </div>
    </div>
  );
});

DotGlobeHero.displayName = "DotGlobeHero";

export { DotGlobeHero, type DotGlobeHeroProps };
