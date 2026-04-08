"use client";

import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
  color: string;
}

const COLORS = [
  '#00f2ff', '#0066ff', '#7000ff', '#ff00d0', '#ff0055', '#ff9900', '#ccff00',
  '#00ff99', '#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e', '#10b981'
];

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
  
      let animationFrameId: number;
  
      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
  
      const addPoint = (x: number, y: number) => {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        pointsRef.current.push({
          x,
          y,
          age: 0,
          color
        });
      };

      const onMouseMove = (e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
        addPoint(e.clientX, e.clientY);
      };

      const onTouchMove = (e: TouchEvent) => {
        if (e.touches[0]) {
          const touch = e.touches[0];
          mouseRef.current = { x: touch.clientX, y: touch.clientY };
          addPoint(touch.clientX, touch.clientY);
        }
      };
  
      const animate = () => {

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const points = pointsRef.current;
      
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      const MAX_AGE = 120;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.age += 1;

        if (p.age > MAX_AGE) {
          points.splice(i, 1);
          i--;
          continue;
        }

        if (i > 0) {
          const prevP = points[i - 1];
          const opacity = 1 - p.age / MAX_AGE;
          ctx.beginPath();
          ctx.moveTo(prevP.x, prevP.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = opacity;
          ctx.lineWidth = 6 * opacity;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

      window.addEventListener('resize', resize);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onTouchMove);
      resize();
      animate();
  
      return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('touchmove', onTouchMove);
        cancelAnimationFrame(animationFrameId);
      };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
