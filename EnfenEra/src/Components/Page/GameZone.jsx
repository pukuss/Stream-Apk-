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
            <span className='flex gap-3 px-4 items-center  font-black text-xl  '>
            Tournament  publish Ruin <PiggyBank color='gray' /> </span>

            <span className='flex items-center gap-2 text-gray-400 font-medium text-[9px] px-4 pb-2'>
              <Lock size={10} /> 
              <p>
                ---   SSL Secured powerd by secure payment Geteway
              </p>
            </span>

            <span className='font-medium pb-2 text-[8px] text-blue-400 flex gap-3 px-8 '>
                  <h1>Join Us</h1>
                  <h2>FeedBack</h2>
                  <h3>Community</h3>
                  <h1>Riport ?</h1>
            </span>
            
<hr />
            <div className='w-full h-full grid md:grid-cols-3 gap-2 p-4  md:max-w-200 '>
              <button
                className='border cursor-pointer h-full w-full p-5  rounded-2xl border-cyan-400 hover:border-amber-400 transition-all delay-150 font-black  hover:bg-linear-to-r from-teal-400 via-indigo-400 to-violet-400 hover:text-transparent hover:bg-clip-text'
                
              >
                Create Tournament
              </button>

              <button
                className='border cursor-pointer h-full w-full p-5 bg-cyan-500/20 rounded-2xl border-cyan-400 hover:bg-purple-400/20 hover:border-amber-400 transition-all delay-150 font-black bg-linear-to-r from-teal-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text '
              >
                Join Tournament
              </button>

              <button
                className='border cursor-pointer h-full w-full p-5 bg-cyan-500/20 rounded-2xl border-cyan-400 hover:bg-purple-400/20 hover:border-amber-400 transition-all delay-150 font-black bg-linear-to-r from-teal-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text '
              >
                Reword
              </button>

            </div>
          </motion.div>




          {/* REGISTRATION OPTIONS SECTION */}
          <motion.div variants={fadeUp} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Gamepad2 className="text-purple-400" size={20} /> ENTRY OPTIONS
            </h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl border border-slate-700/50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><Users size={18} /></div>
                  <div className="text-left">
                    <p className="font-bold text-white group-hover:text-purple-400 transition-colors">Squad (5v5)</p>
                    <p className="text-xs text-slate-400">Entry: 500 NXT</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-500 group-hover:text-white" />
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl border border-slate-700/50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg"><Users size={18} /></div>
                  <div className="text-left">
                    <p className="font-bold text-white group-hover:text-emerald-400 transition-colors">Duo (2v2)</p>
                    <p className="text-xs text-slate-400">Entry: 200 NXT</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-500 group-hover:text-white" />
              </button>
            </div>
          </motion.div>
        </div>


        {/* ============================== */}
        {/* RIGHT COLUMN: TOURNAMENT DATA  */}
        {/* ============================== */}
        <div className="xl:col-span-8 space-y-6">
          
          {/* BRACKETS SECTION */}
          <motion.div variants={fadeUp} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 min-h-[300px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GitMerge className="text-cyan-400" size={20} /> LIVE BRACKETS
              </h3>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full animate-pulse">
                QUARTER-FINALS
              </span>
            </div>
            
            {/* Visual Bracket Representation */}
            <div className="flex-1 flex items-center justify-center gap-4 text-sm font-mono">
              <div className="space-y-4">
                <BracketMatch team1="Team Alpha" team2="Cloud9" score1="2" score2="1" active />
                <BracketMatch team1="Fnatic" team2="Liquid" score1="0" score2="2" />
              </div>
              <div className="h-32 w-8 border-r-2 border-t-2 border-b-2 border-slate-700 rounded-r-lg" />
              <div>
                <BracketMatch team1="Team Alpha" team2="Liquid" score1="-" score2="-" />
              </div>
            </div>
          </motion.div>

          {/* SCHEDULE & RULES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* SCHEDULE SECTION */}
            <motion.div variants={fadeUp} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CalendarClock className="text-yellow-400" size={20} /> UPCOMING SCHEDULE
              </h3>
              <div className="space-y-4">
                <ScheduleItem time="14:00 EST" event="Semi-Finals Block A" status="Next" />
                <ScheduleItem time="16:30 EST" event="Semi-Finals Block B" status="Waiting" />
                <ScheduleItem time="20:00 EST" event="Grand Championship" status="Upcoming" />
              </div>
            </motion.div>

            {/* RULES SECTION */}
            <motion.div variants={fadeUp} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ShieldAlert className="text-red-400" size={20} /> MATCH RULES
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex gap-2"><span className="text-red-400">01.</span> No third-party software or macros allowed.</li>
                <li className="flex gap-2"><span className="text-red-400">02.</span> 5-minute maximum pause time per team.</li>
                <li className="flex gap-2"><span className="text-red-400">03.</span> Toxicity results in immediate disqualification.</li>
                <li className="flex gap-2"><span className="text-red-400">04.</span> All prize payouts are processed in NXT tokens.</li>
              </ul>
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