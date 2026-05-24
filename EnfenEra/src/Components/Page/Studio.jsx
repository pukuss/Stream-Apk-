import React, { useState } from 'react'
import FooterBackground from '../horizon/FooterBackground'
import { Bell, Check, CheckCircle2, CreativeCommons, Gamepad, Gamepad2Icon, Power } from 'lucide-react'


import { Tournament_request, T_ProfileBar } from '../../pages/STUDIO/index'
import TournamentCard from '../../pages/TOURNAMENT_DETAILS/TournamentCard'
import NotificationPOPUP from '../../pages/STUDIO/Notification'


function Studio() {
    // NOTIFICATION POP UP STORE============================= 
    const [Notification, SetNotification] = useState(false);
    const itembox = [1,2,3,4,5,6]

    




    return (
        <>
                    <div className='w-full'>
                        <FooterBackground />
                    </div>
            <div className='h-screen w-full'>
                <div className='relative  h-screen max-w-350  m-auto'>
                    {/* NOTIFICATION ==================================== */}
                        {Notification && (
                            <div className='not-md:hidden fixed top-0 z-10 w-130 h-full  bg-black/90'>
                                <div className='flex-col gap-2 overflow-y-scroll flex max-w-200 h-full justify-center items-center  m-auto p-4'>
                                    {itembox.map((element) => (
                                    
                                            <NotificationPOPUP/>
                                    
                                    ))}
                                </div>
                                
                            </div>
                        )}

         

                    <div className='border  border-gray-500 font-black flex relative top-25 m-5 gap-5 p-5 justify-center items-center rounded-2xl'>
                        <div className=' '>
                            LOGO
                        </div>

                        <div className=' w-full '>
                            <div className=''>
                                <div className='text-2xl  bg-linear-to-r from-teal-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent'>INFENERA STUDIO</div>
                                <div>
                                    <span className='font-medium text-gray-500 text-[10px]'>Powerd By InfenEra 2.0 Engine</span>
                                </div>
                            </div>
                        </div>

                        <div className='w-full not-md:hidden'>
                            <div className=' flex gap-5  justify-end'>
                                {/* Notification Pop Up ======================= */}
                                <button
                                    onClick={() => {
                                        SetNotification((prev)=> !prev )
                                    }}
                                    className='flex cursor-pointer gap-2 items-center justify-center  px-4 font-mono text-[15px] rounded-2xl  border border-gray-500/50  '
                                >
                                    <Bell size={20} /> Responce
                                    <div className='h-2 w-2  bg-red-600 animate-ping rounded-full'></div>
                                </button>

                                <button
                                    className='Rank-Button px-5 py-2 flex rounded-xl'
                                >HOST YOUR TOURNAMENT</button>
                            </div>
                        </div>
                    </div>

                    <div className='relative top-30 flex flex-col gap-3'>
                        <Tournament_request />
                        <T_ProfileBar />
                    </div>




                    <div className=' relative top-30 m-5  rounded-2xl  flex justify-center'>
                        <div>
                            <button
                                className=' px-10 font-medium py-3 border rounded-xl bg-gray-900/20s text-'
                            >
                                Get Start
                            </button>

                        </div>
                    </div>
                </div>



            </div>


            <div className='border h-100'>
                <TournamentCard />
            </div>
        </>
    )
}

export default Studio
