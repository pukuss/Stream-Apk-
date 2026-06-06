import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, CreditCard, Coins, ShieldAlert, 
  GitMerge, CalendarClock, Users, Gamepad2, 
  ChevronRight, ArrowUpRight, 
  User2,
  Plus,
  UserRoundMinusIcon,
  IceCream2,
  Lock,
  Banknote,
  PiggyBank
} from 'lucide-react';

import {Link} from 'react-router-dom'
import UserProfileBar from '../../pages/GAMEWORLD/UserProfileBar';

const GameZone = () => {
    
    const User ={
        username : "prashanta Mondal",
        UserUID : 1234656788,
        Level : 2,
        SaveGameUID :{
            "FREE FIRE" : 12345678900045,
            "BGMI" : 163171767176179,
            "Call OF Duty" : 6871368713771713
        },
        avater : "Link.com",
        balance: 25
        
    }
    // Shared Animation Config

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen relative top-20  text-slate-200 p-4 md:p-8 font-sans selection:bg-cyan-500/30 w-full">
      
      {/* MAIN DASHBOARD GRID */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-350 m-auto grid grid-cols-1  gap-6  "
      >
        
        {/* ============================== */}
        {/* LEFT COLUMN: WALLET & PROFILE  */}
        {/* ============================== */}

        <div className="xl:col-span-4 space-y-6 md:w-350 max-w-350 m-auto">
          {/* Import User Profile and Deta By REDUS TOOL ============ */}
          <UserProfileBar />


          <motion.div 
            className='bg-purple-900/20 border border-pink-400 rounded-2xl p-2 '
            variants={fadeUp} 
          >
           
          
          </motion.div>




          {/* REGISTRATION OPTIONS SECTION */}
          <motion.div variants={fadeUp} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
           
          </motion.div>
        </div>


        {/* ============================== */}
        {/* RIGHT COLUMN: TOURNAMENT DATA  */}
        {/* ============================== */}
        <div className="xl:col-span-8 space-y-6">
          
          {/* BRACKETS SECTION */}
          <motion.div variants={fadeUp} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 min-h-[300px] flex flex-col">
            
            {/* Visual Bracket Representation */}
            
          </motion.div>

          {/* SCHEDULE & RULES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* SCHEDULE SECTION */}
            <motion.div variants={fadeUp} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              
            </motion.div>

            {/* RULES SECTION */}
            <motion.div variants={fadeUp} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
             
            </motion.div>

          </div>
        </div>

      </motion.div>
    </div>
  );
};

// UI Sub-components for cleaner code
const BracketMatch = ({ team1, team2, score1, score2, active }) => (
  <div className={`p-3 rounded-lg border w-48 ${active ? 'bg-cyan-900/20 border-cyan-500/50' : 'bg-slate-800/50 border-slate-700'}`}>
    <div className="flex justify-between mb-2">
      <span className={score1 > score2 ? "text-white font-bold" : "text-slate-400"}>{team1}</span>
      <span className="text-white font-bold">{score1}</span>
    </div>
    <div className="flex justify-between">
      <span className={score2 > score1 ? "text-white font-bold" : "text-slate-400"}>{team2}</span>
      <span className="text-white font-bold">{score2}</span>
    </div>
  </div>
);

const ScheduleItem = ({ time, event, status }) => (
  <div className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
    <div>
      <p className="text-white font-medium text-sm">{event}</p>
      <p className="text-slate-500 text-xs font-mono">{time}</p>
    </div>
    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md ${
      status === 'Next' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-slate-800 text-slate-400'
    }`}>
      {status}
    </span>
  </div>
);

export default GameZone;