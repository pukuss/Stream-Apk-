import React from 'react'
import { Calendar1, ChartNoAxesCombined, Gamepad2, TimerIcon, MoreHorizontal, Heart } from 'lucide-react'

function TournamentCard({
    NAME = "A NIGHT OF SEVEN KINGDOMS",
    G_NAME = "FREE FIRE",
    CU_JOIN = "25/40",
    COMPANY = "GAME.DEV",
    GameUID = "123UID458",
    AdminUID = "JHS8985JKCX",
    PrizePool = [250, 100, 10],
    EntryFEE = 5,
    PlartfomFee = 0.25,
    Gift = ["ROYELPASS"],
    Mitions = [],
    GameMOD = "SINGALE",
    GameType = "INVITE ONLY",
    Critria = [],
    Time = "12:00 PM",
    Date = "12/4/2026",
    Promotional = [null],
    List = []
}) {
    return (
        <div className="w-full max-w-162.5 bg-white rounded-[20px] p-4 flex flex-col sm:flex-row gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 font-sans text-gray-900 mx-auto">
            
            {/* Left: Image Section */}
            <div className="w-full sm:w-[40%] h-48 sm:h-auto rounded-xl overflow-hidden relative shrink-0 bg-gray-100">
                <img
                    className="w-full h-full object-cover"
                    src="/devolopres/devoloper1.jpg" // Replace with your actual image path
                    alt={NAME}
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" // Fallback image
                    }}
                />
                <button className="absolute top-3 right-3 p-1.5 bg-black/30 backdrop-blur-md rounded-md text-white hover:bg-black/50 transition">
                    <Heart size={16} strokeWidth={2.5} />
                </button>
            </div>

            {/* Right: Content Section */}
            <div className="w-full sm:w-[60%] flex flex-col justify-between py-1">
                
                <div>
                    {/* Top Row: Code & Menu */}
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                            Code #{GameUID}
                        </span>
                        <MoreHorizontal size={18} className="text-gray-300 cursor-pointer hover:text-gray-500 transition-colors" />
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-black leading-tight mb-2 text-gray-900 tracking-tight">
                        {NAME}
                    </h2>

                    {/* Description / Meta Info */}
                    <div className="text-[11px] text-gray-500 leading-relaxed mb-4">
                        <p className="mb-2">
                            Join the ultimate <span className="font-semibold text-gray-800">{G_NAME}</span> tournament hosted by <span className="font-semibold text-gray-800">{COMPANY}</span>. Play to win real gifts with no limits.
                        </p>
                        
                        {/* Grid for Game Details */}
                        <div className="grid grid-cols-2 gap-y-2 mt-3 font-medium text-gray-600">
                            <span className="flex items-center gap-1.5"><Gamepad2 size={12} className="text-blue-500" /> {GameMOD} • {GameType}</span>
                            <span className="flex items-center gap-1.5"><ChartNoAxesCombined size={12} className="text-purple-500" /> Team: {CU_JOIN}</span>
                            <span className="flex items-center gap-1.5"><Calendar1 size={12} className="text-orange-500" /> {Date}</span>
                            <span className="flex items-center gap-1.5"><TimerIcon size={12} className="text-green-500" /> {Time}</span>
                        </div>
                    </div>
                </div>

                <div>
                    {/* Options (Mimicking the Sizes/Colors in the reference) */}
                    <div className="mb-5">
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                            Prize Pool Options
                        </span>
                        <div className="flex flex-wrap gap-2 items-center">
                            {PrizePool.map((prize, idx) => (
                                <span key={idx} className="text-[11px] font-bold px-2.5 py-1 bg-gray-100 text-gray-800 rounded">
                                    ₹{prize}
                                </span>
                            ))}
                            {Gift.map((g, idx) => (
                                <span key={idx} className="text-[11px] font-bold px-2.5 py-1 bg-blue-50 text-blue-600 rounded">
                                    🎁 {g}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="flex justify-between items-center pt-2">
                        <div className="text-2xl font-black text-gray-900 tracking-tight">
                            {EntryFEE > 0 ? `₹${EntryFEE}` : "FREE"}
                        </div>
                        
                        {/* Button styled exactly like the reference */}
                        <button className="bg-[#df6b5c] hover:bg-[#c95b4d] text-white text-[12px] font-bold px-6 py-2.5 rounded-full transition-colors uppercase tracking-wide">
                            Join Tournament
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TournamentCard