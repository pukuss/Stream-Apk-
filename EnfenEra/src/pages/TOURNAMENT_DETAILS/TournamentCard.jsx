import { Calendar1, ChartNoAxesCombined, ChessKing, Gamepad2, Play, TimerIcon } from 'lucide-react'
import React from 'react'

function TournamentCard(
    {
        NAME = "A NIGHT OF SEVEN KINGDOMS",
        G_NAME = "FREE FIRE",
        CU_JOIN = "25/40",
        COMPANY = "GAME.DEV",
        GameUID = "123UID458",
        AdminUID = "JHS8985JKCX",
        PrizePool = [250,100,10],
        EntryFEE = 5,
        PlartfomFee = 0.25,
        Gift = ["ROYELPASS"],
        Mitions =[],
        GameMOD = "SINGALE",
        GameType = "INVITE ONLY",
        Critria = [],
        Time = "12:00 PM",
        Date = "12/4/2026",
        Promotional = [null],
        List = []
    }
) {
    const PF = "25%"
  return (
    <>
        <div 
            style={{
                // backgroundImage: url('EnfenEra/public/defimg.png')
            }}
        className='max-w-350  h-70  m-auto rounded-2xl  overflow-hidden relative '>
            <div className='absolute w-full h-full overflow-hidden  -z-50'>
                <img
                    className='bg-cover bg-center h-full w-full opacity-50 overflow-hidden '
                    src="public/defimg.png" alt="" />
            </div>


            <div className='flex justify-between px-4 font-black md:text-2xl  items-center p-5'>
                <div>
                    <p className='text-xl'>{NAME}</p>
                    <h1 className='text-gray-500 text-[12px] px-2 flex font-mono gap-2 items-center '><Gamepad2 size={12} color='lightgreen' />{G_NAME} 
                    <p className='flex text-gray-500/80 text-[12px] gap-2 items-center'> <ChartNoAxesCombined size={12} /> {COMPANY}</p>
                    <p className='flex text-gray-500/80 text-[12px] gap-2 items-center'> <TimerIcon size={12} /> {Time}</p>
                    <p className='flex text-gray-500/80 text-[12px] gap-2 items-center'><Calendar1 size={12} /> {Date}</p>
                    </h1>
                    
                </div>
                {/* <p className='font-mono  md:text-[14px] px-3 py-1 bg-gray-700 rounded-[8px]'>{Time}</p> */}
            </div>

            <div>
                <div className='flex gap-3 p-1 px-4 font-medium text-[10px] md:text-[8px] text-cyan-400'>
                    
                    <p>Play Game To Win Real Gift And Vouther No Limit No Compromise</p>
                    <h1>
                        Team : {CU_JOIN}
                    </h1>
                    <h2>
                        Gift's :  {Gift}
                    </h2>
                </div>
            </div>

            <div className='text-[12px] px-5 py-3 font-medium '>
                <h1>
                    Mod : {GameMOD}
                </h1>
                <h2>
                    Promotional : {Promotional? Promotional : "None"}
                </h2>
                <h3>
                    List ADD : {List}
                </h3>
                <h4>
                    Criteria : {Critria}
                </h4>
                <span className='font-medium'>
                    
                    {/* <h1>TEAM : {Critria}</h1>
                    <h2>ENTRY FEE : {EntryFEE}₹</h2>
                    <h3>MOD : {GameMOD}</h3> */}
                </span>
            </div>

            <div className='flex justify-between mx-4 py-2 font-black '>
                <button className='md:px-10 px-8 text-sm py-2 rounded-xl bg-cyan-500/30'>
                    {EntryFEE ? <h1>{EntryFEE }₹ Join</h1> : "Join Free" }
                    <span></span>
                </button>

                <button className='px-5'>
                    PRIZE POOL
                </button>
            </div>

        </div>
    </>
    )
}

export default TournamentCard
