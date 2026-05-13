import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Compass, Cpu, MessageSquare, Menu, X, Zap,Gamepad2 } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Explore', path: '/explore', icon: Compass },
  { name: 'Engine', path: '/engine', icon: Cpu },
  { name: 'Connect', path: '/connect', icon: MessageSquare },
  { name: 'Studio', path: '/studio', icon: Cpu},
  { name: "PlayGame", path:'/playzone', icon: Gamepad2}
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 w-full px-6 z-50">
      <nav className="max-w-7xl mx-auto bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl">
        <div className="flex justify-between items-center">
          
          {/* Brand with a Pulse Effect */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-md opacity-40 group-hover:opacity-100 transition-opacity" />
              <Zap className="relative text-cyan-400 fill-cyan-400/20" size={28} />
            </div>
            <span className="text-xl font-black tracking-tighter text-transparent uppercase  bg-linear-to-r from-teal-400 via-indigo-400 to-violet-400 bg-clip-text">
              InFenEra<span className="text-cyan-400"></span>
            </span>
          </div>

          {/* Desktop Nav - Using Magnetic Hover Effect */}
          <div className="hidden relative md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className="relative group px-2 py-2">
                {({ isActive }) => (
                  <>
                    <div className={` relative flex items-center gap-1 text-[10px] font-semibold transition-all duration-300 ${isActive ? 'text-cyan-400' : 'text-gray-400 group-hover:text-white'}`}>
                      <item.icon size={13} />
                      {item.name}
                    </div>
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-cyan-500 to-blue-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <button className="ml-4 bg-white text-black px-5 py-2 rounded-xl font-bold text-sm hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Launch App
            </button>

            <div className=' '>
              <button className="ml-1.5 bg-gray-400/50 text-[12px] text-white px-3 py-1 rounded-lg font-bold text-sm hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Sing In
            </button>

             <button className="ml-1.5 bg-linear-to-r text-[12px] from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-lg font-bold text-sm hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              DOWNLOAD
            </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 bg-black/90 border border-white/10 rounded-3xl p-8 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="text-[12px] font-bold text-white flex items-center gap-4">
                  <item.icon className="text-cyan-400" size={15} /> {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;