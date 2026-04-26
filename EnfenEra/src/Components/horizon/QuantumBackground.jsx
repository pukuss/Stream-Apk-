import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const EventHorizonBackground = () => {
  // 1. Mouse Tracking with Spring Physics (makes movement smooth/heavy)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate position relative to center
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-[#000] overflow-hidden">
      
      {/* 2. THE LIQUID TURBULENCE LAYER (SVG Filter Magic) */}
      {/* This creates the "moving smoke" or "liquid" look */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <filter id="liquidFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="2">
            <animate attributeName="baseFrequency" dur="30s" values="0.015;0.02;0.015" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30" />
        </filter>
        <rect width="100%" height="100%" filter="url(#liquidFilter)" fill="transparent" />
      </svg>

      {/* 3. THE GRAVITY WELL (Mouse-following Light) */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
      >
        <div className="w-full h-full bg-blue-600/20 blur-[140px] rounded-full mix-blend-screen" />
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-500/20 blur-[100px] rounded-full mix-blend-overlay" />
      </motion.div>

      {/* 4. THE STATIC NOISE (Film Grain) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 5. GEOMETRIC SINGULARITY (Pulsing Lines) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-[150vw] h-[150vw] border-[1px] border-white/5 rounded-[40%] scale-110"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute w-[120vw] h-[120vw] border-[1px] border-white/5 rounded-[45%]"
        />
      </div>

      {/* 6. VANTABLACK VIGNETTE (Focuses the light) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* 7. FLOATING DATA DUST */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            delay: Math.random() * 10,
          }}
          className="absolute w-[1px] h-20 bg-gradient-to-b from-blue-500/40 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-100px`,
          }}
        />
      ))}
    </div>
  );
};

export default EventHorizonBackground;