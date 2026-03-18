import React, { useEffect, useRef } from 'react';

export default function CanvasBg() {
  const ref = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let W;
    let H;
    let t = 0;

    const lines = Array.from({ length: 6 }, () => ({
      x: Math.random() * 1200,
      y: Math.random() * 800,
      len: 200 + Math.random() * 300,
      speed: 0.15 + Math.random() * 0.2,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: (Math.random() - 0.5) * 0.002,
      opacity: 0.03 + Math.random() * 0.04,
      width: 0.5 + Math.random(),
    }));

    const orbs = [
      { x: 0.15, y: 0.2, r: 420, color: '139,78,42', sx: 0.00015, sy: 0.0001 },
      { x: 0.85, y: 0.7, r: 380, color: '90,107,82', sx: -0.00012, sy: 0.00015 },
      { x: 0.5, y: 0.5, r: 300, color: '201,168,76', sx: 0.0001, sy: -0.00012 },
    ];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const onMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.5;

      orbs.forEach((o) => {
        const cx = (o.x + Math.sin(t * o.sx * 1000) * 0.12) * W;
        const cy = (o.y + Math.cos(t * o.sy * 1000) * 0.1) * H;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, o.r);
        g.addColorStop(0, `rgba(${o.color},0.07)`);
        g.addColorStop(1, `rgba(${o.color},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, o.r, 0, Math.PI * 2);
        ctx.fill();
      });

      lines.forEach((l) => {
        l.angle += l.angleSpeed;
        l.x += Math.cos(l.angle) * l.speed;
        l.y += Math.sin(l.angle) * l.speed;
        if (l.x < -l.len) l.x = W + l.len;
        if (l.x > W + l.len) l.x = -l.len;
        if (l.y < -l.len) l.y = H + l.len;
        if (l.y > H + l.len) l.y = -l.len;

        ctx.strokeStyle = `rgba(201,168,76,${l.opacity})`;
        ctx.lineWidth = l.width;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x + Math.cos(l.angle) * l.len, l.y + Math.sin(l.angle) * l.len);
        ctx.stroke();
      });

      const mg = ctx.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, 200);
      mg.addColorStop(0, 'rgba(201,168,76,0.04)');
      mg.addColorStop(1, 'rgba(201,168,76,0)');
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, W, H);

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
  }, []);

  return <canvas id="bg-canvas" ref={ref} />;
}
