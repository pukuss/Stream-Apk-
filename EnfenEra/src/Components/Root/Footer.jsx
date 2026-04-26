import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, ArrowUp, Zap, Globe } from 'lucide-react';

const Footer = () => {
  const container = useRef(null);
  
  // Create a scroll-parallax effect for the background text
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <footer ref={container} className="relative bg-black text-white py-20 px-6 overflow-hidden">
      
      {/* 1. GRAIN OVERLAY (Gives it a cinematic, textured feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. THE BACKGROUND "TITLES" (Parallax Text) */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <h2 className="text-[35vw] font-black text-zinc-900/40 tracking-tighter">
          NOVA
        </h2>
      </motion.div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col gap-24">
          
          {/* HEADER SECTION: Cinematic Tagline */}
          <div className="flex flex-col md:flex-row justify-between items-start">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-xl"
            >
              <p className="text-blue-500 font-light text-xs uppercase tracking-[0.5em] mb-6">End Transmission</p>
              <h3 className="text-5xl md:text-8xl font-medium tracking-tight leading-none">
                Silence is <br /> 
                <span className="text-zinc-500">the new loud.</span>
              </h3>
            </motion.div>

            <div className="mt-10 md:mt-0 flex flex-col items-end gap-2 text-right">
              <span className="text-xs text-zinc-600 font-mono">CURRENT_ORIGIN</span>
              <div className="flex items-center gap-2 group cursor-none">
                <Globe size={14} className="text-blue-500 group-hover:rotate-180 transition-transform duration-1000" />
                <span className="text-[15px] font-medium">PLANET EARTH // 2026</span>
              </div>
            </div>
          </div>

          {/* INTERACTIVE NAVIGATION: Magnetic Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/5 pt-12">
            
            <div className="col-span-1 flex flex-col gap-2 `">
              <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest mb-4">Pulse</p>
              <MagneticLink label="Instagram" href="#" />
              <MagneticLink label="Dribbble" href="#" />
              <MagneticLink label="Behance" href="#" />
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest mb-4">Code</p>
              <MagneticLink label="Github" href="#" />
              <MagneticLink label="Source Code" href="#" />
              <MagneticLink label="Lab" href="#" />
            </div>

            {/* BIG SCROLL TO TOP */}
            <div className="md:col-span-2 flex justify-end items-end">
              <motion.button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 md:w-40 md:h-40 rounded-full border border-white/10 flex flex-col items-center justify-center gap-2 group hover:border-blue-500 transition-colors"
              >
                <ArrowUp className="group-hover:-translate-y-2 transition-transform" />
                <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Top</span>
              </motion.button>
            </div>
          </div>

          {/* THE "STAMP" (Bottom Bar) */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-6 text-[10px] font-mono tracking-widest">
              <span>© NOVA_SYSTEMS</span>
              <span className="hidden md:inline">|</span>
              <span>4KB_GZ_COMPRESSED</span>
            </div>
            
            <div className="flex items-center gap-2">
               <div className="w-12 h-[1px] bg-zinc-800" />
               <Zap size={14} className="text-blue-500" />
               <div className="w-12 h-[1px] bg-zinc-800" />
            </div>

            <div className="text-[10px] font-mono tracking-widest text-zinc-500">
               TIMESTAMP: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-component: Magnetic Text Link
const MagneticLink = ({ label, href }) => (
  <motion.a
    href={href}
    whileHover={{ x: 10, color: "#3b82f6" }}
    className="text-2xl font-light text-zinc-400 transition-colors duration-300 w-fit"
  >
    {label}
  </motion.a>
);

export default Footer;