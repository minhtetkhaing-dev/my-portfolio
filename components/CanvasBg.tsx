'use client';

import { useEffect, useRef } from 'react';
import type { Theme } from '@/components/AppShell';

type Orb = {
  x: number;
  y: number;
  r: number;
  color: string;
  sx: number;
  sy: number;
};

type Line = {
  x: number;
  y: number;
  len: number;
  speed: number;
  angle: number;
  angleSpeed: number;
  opacity: number;
  width: number;
};

export default function CanvasBg({ theme }: { theme: Theme }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    let raf = 0;
    let width = 0;
    let height = 0;
    let time = 0;
    const isLight = theme === 'light';

    const lines: Line[] = Array.from({ length: 6 }, () => ({
      x: Math.random() * 1200,
      y: Math.random() * 800,
      len: 200 + Math.random() * 300,
      speed: 0.15 + Math.random() * 0.2,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: (Math.random() - 0.5) * 0.002,
      opacity: 0.03 + Math.random() * 0.04,
      width: 0.5 + Math.random(),
    }));

    const orbs: Orb[] = isLight
      ? [
          { x: 0.15, y: 0.2, r: 420, color: '220,169,126', sx: 0.00015, sy: 0.0001 },
          { x: 0.85, y: 0.7, r: 380, color: '128,152,120', sx: -0.00012, sy: 0.00015 },
          { x: 0.5, y: 0.5, r: 300, color: '201,168,76', sx: 0.0001, sy: -0.00012 },
        ]
      : [
          { x: 0.15, y: 0.2, r: 420, color: '139,78,42', sx: 0.00015, sy: 0.0001 },
          { x: 0.85, y: 0.7, r: 380, color: '90,107,82', sx: -0.00012, sy: 0.00015 },
          { x: 0.5, y: 0.5, r: 300, color: '201,168,76', sx: 0.0001, sy: -0.00012 },
        ];

    const lineColor = isLight ? '124,92,47' : '201,168,76';
    const mouseGlow = isLight ? 'rgba(124,92,47,0.06)' : 'rgba(201,168,76,0.04)';

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouse = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.5;

      orbs.forEach((orb) => {
        const cx = (orb.x + Math.sin(time * orb.sx * 1000) * 0.12) * width;
        const cy = (orb.y + Math.cos(time * orb.sy * 1000) * 0.1) * height;
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
        gradient.addColorStop(0, `rgba(${orb.color},0.07)`);
        gradient.addColorStop(1, `rgba(${orb.color},0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      lines.forEach((line) => {
        line.angle += line.angleSpeed;
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;
        if (line.x < -line.len) line.x = width + line.len;
        if (line.x > width + line.len) line.x = -line.len;
        if (line.y < -line.len) line.y = height + line.len;
        if (line.y > height + line.len) line.y = -line.len;

        ctx.strokeStyle = `rgba(${lineColor},${line.opacity})`;
        ctx.lineWidth = line.width;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + Math.cos(line.angle) * line.len, line.y + Math.sin(line.angle) * line.len);
        ctx.stroke();
      });

      const mouseGradient = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        200
      );
      mouseGradient.addColorStop(0, mouseGlow);
      mouseGradient.addColorStop(1, 'rgba(201,168,76,0)');
      ctx.fillStyle = mouseGradient;
      ctx.fillRect(0, 0, width, height);

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, [theme]);

  return <canvas id="bg-canvas" ref={ref} />;
}
