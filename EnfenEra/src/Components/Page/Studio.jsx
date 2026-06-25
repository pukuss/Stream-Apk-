import  { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, X, Gamepad2, Sparkles, Trophy } from 'lucide-react'
import WebLogo from '../horizon/WebLogo'
import { Tournament_request, T_ProfileBar } from '../../pages/STUDIO/index'
import TournamentCard from '../../pages/TOURNAMENT_DETAILS/TournamentCard'
import NotificationPOPUP from '../../pages/STUDIO/Notification'
import { useSelector } from 'react-redux'
import userService from '../../service/user.service'

function Studio() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  // Prevent application crash on initial load by providing standard fallback array structure
  const [requestData, setRequestData] = useState({ documents: [] })
  
  const notificationApi = useSelector((state) => state.notification.requestdata)

  async function getRequest() {
    try {
      const res = await userService.getMyRequest()
      if (res) setRequestData(res)
    } catch (error) {
      console.error("Error at Studio fetching requests:", error)
    }
  }

  useEffect(() => {
    getRequest()
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#070a12] text-slate-100 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* ANIMATED NOTIFICATION DRAWER OVERLAY */}
      <AnimatePresence>
        {isNotificationOpen && (
          <>
            {/* Backdrop Blur Mask */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNotificationOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Sidebar Element */}
            <motion.div 
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="fixed left-0 top-0 bottom-0 w-full max-w-md bg-[#0a0e17] border-r border-slate-800/80 p-5 z-50 shadow-[5px_0_5px_rgba(0,0,0,0.5)] flex flex-col"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-900 mb-4">
                <div className="flex items-center gap-2">
                  <Bell className="text-purple-400" size={18} />
                  <h2 className="text-sm font-black tracking-wider uppercase text-slate-200">System Logs / Responses</h2>
                </div>
                <button 
                  onClick={() => setIsNotificationOpen(false)}
                  className="p-1.5 hover:bg-slate-900 rounded-lg text-slate-500 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Container Elements */}
              <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 custom-scrollbar">
                {requestData?.documents?.length > 0 ? (
                  requestData.documents.map((element, index) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={element.$id || index}
                    >
                      <NotificationPOPUP data={element} />
                    </motion.div>
                  ))
                ) : (
                  <div className="h-40 flex flex-col items-center justify-center text-slate-500 gap-2 text-xs">
                    <Gamepad2 size={24} className="opacity-20 animate-pulse" />
                    No notifications available.
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CORE CONTROL HUB WRAPPER */}
      <div className="max-w-7xl mx-auto relative top-25 px-4 py-8 flex flex-col gap-8">
        
        {/* PREMIUM BRANDING HEADER MODULE */}
        <div className="relative bg-[#0d111c] border border-slate-800/60 p-6 rounded-2xl flex flex-col md:flex-row gap-6 justify-between items-center shadow-2xl overflow-hidden group">
          {/* <div className="absolute  left-0 right-0 h-0.5 bg-linear-to-r from-pink-500 via-purple-600 to-cyan-500 opacity-80" /> */}
          
          <div className="flex items-center gap-5 w-full md:w-auto">
            <div className="bg-[#070a12] p-2 rounded-xl border border-slate-800 shadow-inner shrink-0 group-hover:border-purple-500/30 transition-colors duration-300">
              <WebLogo className="h-16 w-16 md:h-20 md:w-20" />
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                INFENERA STUDIO
              </h1>
              <div className="flex items-center gap-1.5 mt-1">
                <Sparkles size={12} className="text-purple-400 animate-pulse" />
                <span className="font-mono text-slate-500 font-bold tracking-widest text-[9px] uppercase">
                  Powered by InfenEra 2.0 Engine
                </span>
              </div>
            </div>
          </div>

          {/* INTERACTIVE ACTIONS COMPONENT */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-end border-t border-slate-950 pt-4 md:border-none md:pt-0">
            {/* Pop Trigger Button */}
            <button
              onClick={() => setIsNotificationOpen((prev) => !prev)}
              className={`relative flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-bold rounded-xl border transition-all duration-200 active:scale-95 cursor-pointer ${
                isNotificationOpen 
                  ? 'bg-purple-500/10 border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]' 
                  : 'bg-[#070a12] border-slate-800 hover:border-slate-700 text-slate-300'
              }`}
            >
              <Bell size={15} className={isNotificationOpen ? 'animate-bounce' : ''} /> 
              Responses
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </button>

            {/* CTA Core Execution Anchor */}
            <button className="flex items-center gap-2 px-5 py-2.5 font-black text-xs bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(124,58,237,0.25)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.4)] active:scale-95 tracking-wider uppercase cursor-pointer">
              <Trophy size={14} /> Host Your Tournament
            </button>
          </div>
        </div>

        {/* DATA FEED LAYOUT ROWS */}
        <div className="flex flex-col gap-4 bg-[#0a0e17]/40 p-4 rounded-2xl border border-slate-900/60">
          <Tournament_request />
          <T_ProfileBar />
        </div>

        {/* BOTTOM MANAGEMENT ENTRY ACTION */}
        <div className="flex justify-center py-4">
          <button className="px-12 py-3.5 font-black text-xs border border-slate-800 bg-[#0d111c] hover:bg-[#121826] hover:border-slate-700 rounded-xl transition-all duration-200 shadow-xl tracking-widest uppercase active:scale-95 cursor-pointer text-slate-300 hover:text-white">
            Get Started
          </button>
        </div>

        {/* LOWER GRID MODULE FEED */}
        <div className="border-t border-slate-900 pt-8 mt-4">
          <div className="flex items-center gap-2 mb-6 px-1">
            <Gamepad2 size={16} className="text-cyan-400" />
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">Active Live Matches</h2>
          </div>
          <div className="bg-[#0d111c]/30 rounded-2xl border border-slate-900 p-4 shadow-inner">
            <TournamentCard />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Studio