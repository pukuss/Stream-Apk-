import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity } from 'lucide-react';
import EngieCard from './EngieCard';

const FEATURE_DATA = [
  { id: "ENG-001", title: "Quantum Ignition", date: "15 March 2026", desc: "Stable plasma containment achieved." },
  { id: "ENG-002", title: "Vortex Cooling", date: "18 March 2026", desc: "Thermal regulation optimized by 40%." },
  { id: "ENG-003", title: "Carbon Intake", date: "20 March 2026", desc: "New filtration system for extreme environments." },
  { id: "ENG-004", title: "Kinetic Recovery", date: "22 March 2026", desc: "Energy harvesting during deceleration." },
];

function DownloadBar() {
  return (
    <div className="min-h-screen w-full bg-[#050505] py-5 font-sans ">
      <div className="w-full p-5 mx-auto border-white/5 bg-gray-900/20 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
        
        {/* Header Bar */}
        <div className="p-5 flex justify-between items-center px-8 py-5 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-white font-black tracking-widest text-sm md:text-base">
              ENGINE CORE <span className="text-blue-500">v4.0</span>
            </span>
          </div>
          
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 border border-blue-500/50 rounded-full py-1.5 px-4 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-tighter cursor-pointer"
          >
            <Zap size={12} /> SYSTEM HIGHLIGHTS
          </motion.span>
        </div>

        {/* Responsive Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
          {FEATURE_DATA.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <EngieCard 
                UID={feature.id}
                HeadLine={feature.title}
                DateTime={feature.date}
                Description={feature.desc}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default DownloadBar;