import { ChessKing, Gamepad2, Play } from 'lucide-react'
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
        Promotional = [],
        List = []
    }
) {
    const PF = "25%"
  return (
    <>
        <div className='max-w-350 border h-full m-auto p-6 rounded-2xl primary-back'>
            <div className='flex justify-between px-4 font-black md:text-2xl p-6 items-center'>
                <div>
                    <p>{NAME}</p>
                    <h1 className='text-yellow-500 text-xl px-2 flex gap-2 items-center'><Gamepad2 color='lightgreen' />{G_NAME} <p className='flex text-gray-500/80 text-[15px] items-center'> <ChessKing /> {COMPANY}</p></h1>
                </div>
                <p className='font-mono  md:text-[14px] px-3 py-1 bg-gray-700 rounded-[8px]'>{Time}</p>
            </div>

            <div>
                <div className='flex gap-3 p-1 font-medium text-[10px] md:text-[8px] text-cyan-400'>
                    <h1 className='flex'> Joining : {CU_JOIN}</h1>
                    <h2 className='flex'><Play size={15} /> {PF}</h2>
                    <h3>Company : {COMPANY}</h3>
                    <h4>REQUEST</h4>
                </div>

                <span>
                    <button className=' px-5 font-medium rounded-xl button-back py-1  '>
                        Details
                    </button>
                </span>
            </div>

            <div>
                <span className='font-medium'>
                    <h1>TEAM : {Critria}</h1>
                    <h2>ENTRY FEE : {EntryFEE}₹</h2>
                    <h3>MOD : {GameMOD}</h3>
                </span>
            </div>

            <div className='flex justify-between mx-4 py-2 font-black '>
                <button className='md:px-10 px-8 text-sm py-2 rounded-xl bg-cyan-500/30'>
                    JOIN
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
