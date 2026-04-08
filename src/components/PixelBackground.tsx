"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function PixelBackground({ isVisible }: { isVisible: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";

      const render = () => {
        if (!img.complete) return;
        
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        if (width === 0 || height === 0) return;

        canvas.width = width;
        canvas.height = height;
        
        // Pixelation factor
        const pixelSize = 10;
        const w = Math.ceil(width / pixelSize);
        const h = Math.ceil(height / pixelSize);

        if (w === 0 || h === 0) return;

        // Draw small version
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0, w, h);
        
        // Scale up
        ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
      };

      img.onload = () => {
        setImageLoaded(true);
        render();
      };

      window.addEventListener("resize", render);
      return () => {
        window.removeEventListener("resize", render);
      };
    }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-0 pointer-events-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover grayscale opacity-40"
      />
      <div className="absolute inset-0 bg-black/60" />
    </motion.div>
  );
}
