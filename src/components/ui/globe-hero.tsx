"use client";

import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface DotGlobeHeroProps {
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

  const handleMouseEnter = () => {
    setIsHovered(true);

  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--mx", "50%");
    event.currentTarget.style.setProperty("--my", "50%");
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
    setIsHovered(false);


  };

  const contentStyle: CSSProperties = {
    transform: `perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateY(${isHovered ? "-8px" : "0px"})`,
    transition: "transform 450ms ease, filter 450ms ease",
    willChange: "transform",
  };

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

    const buildGrid = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      W = rect.width;
      H = rect.height;
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

    const draw = (ts: number) => {
      const dt = Math.min((ts - last) / 1000, 0.05);
      last = ts;

      ctx.clearRect(0, 0, W, H);

      const mx = (window as any).__heroPointerX ?? -9999;
      const my = (window as any).__heroPointerY ?? -9999;

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.t += dt * 0.65;

        const dx = mx - cell.x;
        const dy = my - cell.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const want = dist < RADIUS ? Math.pow(1 - dist / RADIUS, 1.7) : 0;
        cell.lit += (want - cell.lit) * 0.16;

        const idle = 0.035 + 0.018 * Math.sin(cell.t + cell.x * 0.013 + cell.y * 0.009);
        const alpha = idle + cell.lit * 0.85;

        if (cell.lit > 0.015) {
          const g = Math.round(210 + cell.lit * 35);
          const b = Math.round(235 + cell.lit * 20);
          ctx.strokeStyle = `rgba(165,${g},${b},${alpha})`;
        } else {
          ctx.strokeStyle = `rgba(36,50,64,${alpha})`;
        }

        ctx.lineWidth = 0.5;
        ctx.strokeRect(cell.x, cell.y, CELL, CELL);

        if (cell.lit > 0.04) {
          const px = cell.x + CELL / 2;
          const py = cell.y + CELL / 2;

          const gradient = ctx.createRadialGradient(px, py, 0, px, py, CELL * cell.lit * 1.8);
          gradient.addColorStop(0, `rgba(165,242,243,${cell.lit * 0.45})`);
          gradient.addColorStop(1, "rgba(165,242,243,0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(px, py, CELL * cell.lit * 1.8, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(165,242,243,${cell.lit * 0.95})`;
          ctx.beginPath();
          ctx.arc(px, py, 1.6 * cell.lit, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (mx > 0 && mx < W && my > 0 && my < H) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, RADIUS * 1.2);
        gradient.addColorStop(0, "rgba(165,242,243,0.07)");
        gradient.addColorStop(0.5, "rgba(165,242,243,0.03)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mx, my, RADIUS * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(buildGrid, 120);
    };

    buildGrid();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      if (resizeTimer) window.clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div
      ref={(node) => {
        wrapperRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative w-full h-screen bg-background overflow-hidden isolation-isolate",
        className
      )}
      style={{
        "--mx": "50%",
        "--my": "50%",
        "--rx": "0deg",
        "--ry": "0deg",
      } as CSSProperties}
      {...props}
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#a5f2f3]/0 via-transparent to-[#a5f2f3]/8 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 via-transparent to-[#0a0a0f]/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#a5f2f3]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(165,242,243,0.10),transparent_35%)] opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: "radial-gradient(650px circle at var(--mx) var(--my), rgba(165,242,243,0.16), transparent 42%)",
        }}
      />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6" style={contentStyle}>
        {children}
      </div>
    </div>
  );
});

DotGlobeHero.displayName = "DotGlobeHero";

export { DotGlobeHero, type DotGlobeHeroProps };
