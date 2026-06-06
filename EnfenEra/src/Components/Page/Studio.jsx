import React, { useState } from 'react'
import FooterBackground from '../horizon/FooterBackground'
import { Bell, Check, CheckCircle2, CreativeCommons, Gamepad, Gamepad2Icon, Power } from 'lucide-react'
import WebLogo from '../horizon/WebLogo'

import { Tournament_request, T_ProfileBar,ConditionBox } from '../../pages/STUDIO/index'
import TournamentCard from '../../pages/TOURNAMENT_DETAILS/TournamentCard'
import NotificationPOPUP from '../../pages/STUDIO/Notification'
// import Sucessfull from '../horizon/Sucessfull'

import { useSelector } from 'react-redux'
import { element } from 'three/src/nodes/tsl/TSLCore.js'

function Studio() {
    // NOTIFICATION POP UP STORE============================= 
    const [Notification, SetNotification] = useState(false);
    // const itembox = [1,2,3,4,5,6,7,8,9];
    const notifiactionApi = useSelector((state) => state.notification.requestdata);
    

    




    return (
        <>
                    <div className='w-full  '>
                        <FooterBackground />
                    </div>

            <div className='h-screen w-full relative'>
                <div className='max-w-150  absolute  left-0 z-100  rounded-2xl overflow-hidden bg-black'>
                    {/* NOTIFICATION ==================================== */}
                        {Notification && (
                            <div  className='max-w-120  h-screen p-4 flex flex-col gap-3 overflow-y-auto '>
                                {notifiactionApi.map((Element,index) => (
                                    <div className='max-w-120' key={index}>
                                        <NotificationPOPUP
                                            Heading={Element.title}
                                            Date={Element.DATE}
                                            User={Element.name}
                                            Titel={Element.discription}
                                            />
                                    </div>
                                ))}
                            </div>
                        )}
                </div>

                <div className='relative top-0 h-screen max-w-350  m-auto'>
                    <div className='border  border-gray-500 font-black flex relative top-25 m-5 gap-5 p-5 justify-center items-center rounded-2xl'>
                        <div className=' '>
                            <WebLogo className ='h-30 w-30'  />
                        </div>

                        <div className=' w-full '>
                            <div className=''>
                                <div className='text-2xl  bg-linear-to-r from-teal-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent'>INFENERA STUDIO</div>
                                <div>
                                    <span className='font-medium text-gray-500 text-[10px]'>Powerd By InfenEra 2.0 Engine</span>
                                </div>
                            </div>
                        </div>

                        {/* <div><ConditionBox /></div> */}
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
                        {/* <Sucessfull /> */}
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
