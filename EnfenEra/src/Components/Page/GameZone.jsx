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
  Lock
} from 'lucide-react';

import {Link} from 'react-router-dom'

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
        <div className="xl:col-span-4 space-y-6 md:w-350 m-auto">
          
          {/* USER INFO & WALLET SECTION */}
          <motion.div variants={fadeUp} className=" bg-slate-900/80 border w-full border-slate-800 rounded-2xl p-6  overflow-hidden">
            <div className="absolute top-0 right-0  w-full h-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
            
            <div className="flex justify-between  items-start mb-6">
              <div>
                <h2 className="text-2xl font-black bg-linear-to-r from-teal-400 via-indigo-400 to-violet-400 uppercase  bg-clip-text text-transparent tracking-tight">  {User.username}</h2>
                <p className="text-cyan-400 text-sm font-mono mt-1">LEVEL : {User.Level}</p>
                <p className='font-medium text-sm'>UID : <span>{User.UserUID}</span></p>
              </div>
              <div className="p-3 bg-slate-800 rounded-xl">
                <User2 color='lightgreen' />
              </div>
            </div>

            {/* WALLET AREA ======================= */}
            <div className="mb-6 ">
                <div className='  py-3 bg-cyan-900/20 rounded-2xl text-2xl font-black '>
                    <div className='flex items-center'>
                        <span className='px-3'><Wallet className='bg-gray-50 p-1  rounded-xl' color='PURPLE ' /></span>
                        <span className='flex gap-3 items-center'>
                            <h1 className='font-medium text-[15px]'>WALLETE</h1>
                            <span className=' bg-amber-50 p-2 text-[15px] rounded-lg  border  border-amber-300/40 px-5   items-center text-yellow-400 flex gap-2'>
                                <span className='font-sans text-[13px] text-black'>Available Balance</span>
                                <img width="24" height="24" src="https://img.icons8.com/pastel-glyph/64/exchange--shekel.png" alt="coins"/>
                                {User.balance}
                                <span className="text-slate-500 text-lg font-light text-[12px]">Unit</span>    
                            </span>
                        </span>
                    </div>
                </div>

                
              {/* ADD MONEY SECTION ===================  */}
              <div className=' flex items-center gap-5 my-5'>
                <div>
                  <button className=' items-center rounded-xl border-cyan-300/50 border px-5 font-bold bg-cyan-700/20 flex gap-3 p-1 '>
                    ADD UNIT'S 
                    <span><Plus size={20} className=' rounded-2xl p-1 font-black border-2' /></span>
                  </button>
                </div>
                <div className='flex gap-2 sm:text-[16px] text-[10px] flex-3 flex-wrap'>
                  <span className=' px-5 font-medium py-1 rounded-sm bg-purple-700/20'>ADD 50 UNITS</span>
                  <span className=' px-5 font-medium py-1 rounded-sm bg-purple-700/20'>ADD 100 UNITS</span>
                  <span className=' px-5 font-medium py-1 rounded-sm bg-purple-700/20'>ADD 500 UNITS</span>
                </div>
              </div>

              <div className='z'>
                <span className=''>
                  <h1 className='font-medium'>Devoloper Community</h1>
                  <p className='font-bold  bg-linear-to-r from-teal-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text text-2xl '>Join the epic Gaming Community</p>
                </span>
              
              </div> <hr className='mt-2 ' />
              
            </div>

            {/* PAY / DEPOSIT ACTIONS */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3 rounded-lg font-bold transition-colors">
                <CreditCard size={18} /> DEPOSIT
              </button>
              <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-bold transition-colors border border-slate-700">
                <ArrowUpRight size={18} /> WITHDRAW
              </button>
            </div>
          </motion.div>


          <motion.div 
            className='bg-purple-900/20 border border-pink-400 rounded-2xl p-2 '
            variants={fadeUp} 
          >
            <span className='flex gap-3 px-4  font-black '>
            Tournament  publish Ruin <IceCream2 color='lightgreen' /></span>
            <span className='flex items-center gap-2 text-gray-400 font-medium text-[9px] px-4 pb-2'>
              <Lock size={12} /> 
              <p>
                -SSL Secured powerd by secure payment Geteway
              </p>
            </span>

            <span className='font-medium pb-2 text-[10px] text-blue-400 flex gap-3 px-2 '>
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