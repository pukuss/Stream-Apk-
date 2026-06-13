import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Compass, Cpu, MessageSquare, Menu, X, Zap, Gamepad2, ChevronRight } from 'lucide-react';
import WebLogo from '../horizon/WebLogo';


const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Explore', path: '/explore', icon: Compass },
  { name: 'Engine', path: '/engine', icon: Cpu },
  { name: 'Connect', path: '/connect', icon: MessageSquare },
  { name: 'Studio', path: '/studio', icon: Cpu },
  { name: "Profile", path: '/Profile', icon: Gamepad2 },
  { name: "About", path: '/about', icon : Cpu}
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    /* রুট কন্টেনারে relative ট্র্যাকিং সেফটি এবং isolation যুক্ত করা হয়েছে */
    <div className="fixed top-5 left-0 w-full px-4 sm:px-8 z-50 isolation-isolate select-none ">
      <nav className="max-w-7xl mx-auto bg-black/50 backdrop-blur-md border border-white/5 rounded-2xl px-4 sm:px-5 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-500 hover:border-cyan-500/20 group/nav">
        <div className="flex justify-between items-center">
          
          {/* 🌟 ব্র্যান্ড লোগো (Cyberpunk Glow Upgrade) */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 group-hover:border-cyan-500/40 transition-all duration-300 shadow-inner">
              <div className="absolute inset-0 bg-cyan-500/10 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <WebLogo className="relative text-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-transparent bg-linear-to-r from-purple-600 via-indigo-400 to-indigo-500 bg-clip-text  ">
                InfenEra
              </span>
              <span className="text-[9px] font-bold text-gray-500 tracking-tight mt-0.5 group-hover:text-cyan-400/60 transition-colors">STUDIOS</span>
            </div>
          </div>

          {/* 🌟 ডেস্কটপ নেভিগেশন মেনু (Error Fixed & UI Refined) */}
          {/* এখানে relative এবং relative-parent নোড ব্যবহারের মাধ্যমে অন-স্ক্রল হ্যান্ডলার এররটি নিশ্চিতভাবে ফিক্স করা হয়েছে */}
          <div className="hidden md:flex relative items-center bg-white/3 border border-white/5 rounded-xl p-1 gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <NavLink 
                  key={item.path} 
                  to={item.path} 
                  
                  className="relative block h-full rounded-lg"
                >
                  <div className="relative px-4 py-2 flex items-center gap-2 text-xs font-semibold transition-all duration-300 z-10 rounded-lg">
                    <item.icon 
                      size={14} 
                      className={`transition-transform duration-300 ${isActive ? 'text-cyan-400 scale-110' : 'text-gray-400 group-hover/nav:text-gray-300'}`} 
                    />
                    <span className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                      {item.name}
                    </span>
                    
                    {/* ব্যাকগ্রাউন্ড মেটেরিয়াল ক্যাপসুল অ্যানিমেশন */}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-active-pill"
                        className="absolute inset-0 bg-linear-to-b from-white/8 to-white/2 rounded-lg -z-10 border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                </NavLink>
              );
            })}
          </div>

          {/* 🌟 রাইট সাইড বাটন প্যানেল (Sleek Glassmorphism UI) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={()=> {
                navigate("/register")
              }}
            className="text-gray-400 hover:text-white px-3 py-2 rounded-xl text-xs font-semibold transition-colors duration-300">
              Sign In
            </button>
            <button className="relative overflow-hidden bg-white text-black px-4 py-2 rounded-xl font-bold text-xs transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
              Launch App
            </button>
          </div>

          {/* মোবাইল মেনু বাটন */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={18} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>
      {/* 🌟 মোবাইল রেসপন্সিভ ড্রপডাউন মেনু (গ্লাস ইফেক্ট বৃদ্ধি করা হয়েছে) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute  top-20 left-4 right-4 bg-black/80 border border-white/10 rounded-2xl p-3 backdrop-blur-3xl md:hidden z-40 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink 
                    key={item.path} 
                    to={item.path} 
                    onClick={() => setIsOpen(false)} 
                    className={`group text-xs font-semibold flex items-center justify-between py-3 px-4 rounded-xl transition-all ${
                      isActive ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-inner' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={15} className={isActive ? 'text-cyan-400' : 'text-gray-400 group-hover:text-white'} /> 
                      {item.name}
                    </div>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0 text-cyan-400' : 'group-hover:opacity-40 group-hover:translate-x-0'}`} />
                  </NavLink>
                );
              })}
              
              <div className="border-t border-white/5 my-2 mx-2" />
              
              <div className="grid grid-cols-2 gap-2 p-1">
                <button 
                  onClick={()=> navigate("/register")}
                className="bg-white/5 text-white py-2.5 rounded-xl font-bold text-xs border border-white/10 hover:bg-white/10 transition-colors active:scale-98">
                  Sign In
                </button>
                <button className="bg-cyan-500 text-black py-2.5 rounded-xl font-black text-xs hover:bg-cyan-400 transition-colors shadow-[0_4px_15px_rgba(6,182,212,0.3)] active:scale-98">
                  Launch App
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;