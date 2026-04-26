import React from "react";
import { motion } from "framer-motion";

const FooterBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-[#020202] overflow-hidden">
      {/* 1. THE FLOOR GLOW - Light radiating from the very bottom */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-gradient-to-t from-blue-600/20 via-indigo-500/5 to-transparent blur-[120px] rounded-[100%]"
      />

      {/* 2. THE GRAIN - Essential for that cinematic texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
      />

      {/* 3. RADIAL VIGNETTE - Focuses the eye on the footer links */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.05)_0%,rgba(0,0,0,0)_70%)]" />

      {/* 4. THE HORIZON LINE - A very thin, glowing line at the top of the footer */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 5. FLOATING DUST PARTICLES */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px]"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 20}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FooterBackground;
