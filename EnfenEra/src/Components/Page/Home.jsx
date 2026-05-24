import React, { useState, useRef } from 'react'
import FooterBackground from '../horizon/FooterBackground'
import QuantumBackground from '../horizon/QuantumBackground'
import AetherForgeBackground from '../horizon/AetherForgeBackground'
import { Import, Power, PowerSquare, ShoppingBagIcon, Spool, UserCheck } from 'lucide-react'

// temp 
import { GenerateId } from '../../utils/idGenerator'


//if it work  testing..........................
import { useScrollBlur } from '../../hooks/UseScrollBlur'


import { AdCard, RootPage, DocumentDownload, HeroSection, MonitizeSection } from '../../pages/HOME/index'



function Home() {

  const [DocPopOpen, SetDocPopOpen] = useState(true);

  const LogPop = useState(false)
  const imageRef = useRef(null);

  //Generate Uniqe Id
  const id = GenerateId();
  console.log(id);


  // const {} = UseScrollBlur()
  useScrollBlur(10, 500, imageRef);

  return (
    <>


      <div className=' block w-full top-0 fixed z-50'>
        <div className=' w-full'>
          <RootPage LogPopUp={LogPop} />
        </div>
      </div>

      <div className=' w-full relative  h-screen'>
        {/* <QuantumBackground />  */}
        <div

          className=' w-full h-full absolute overflow-hidden'>
          <img
            ref={imageRef}
            className='w-full h-full object-cover  '
            src="/images/pic/hero_background.png" alt="Background Image" />
        </div>

        <div className='relative top-70  max-w-350 h-20 m-auto content-center   '>
          <span className='flex text-[8px] items-center gap-1'>Infenco Powerdby EnfenEra</span>

          <div className=' font-black text-5xl p-5 '>
            <h1 className='bg-linear-0 from-indigo-500 to-sky-500 bg-clip-text text-transparent '>InfenEra</h1>
          </div>

           <div className=' font-black text-xl p-5'>
            <span>Compete,Win, Become a  </span>
            <span className='text-orange-400'>Champion </span>
          </div>

          <div className=' text-sm w-100 font-medium text-white'>
            Join online Esports tournaments, battle top players, track live leaderboards and win exciting rewards across multiple game, and earn money.
          </div>

          {/* Learn & Get Install Button =================================  */}
          <div className='flex p-5 mt-10 gap-15'>
            <div>
              <button 
                className='border border-sky-300/50 justify-center items-center gap-1 px-4 flex bg-white text-sm text-black font-black py-1 rounded-xl ' 
                type="button"> <UserCheck size={20} />
                  Join Tournament
                </button>
            </div>
            <div>
              <button
                className=' border px-5  text-white font-black text-sm rounded-xl py-1 border-gray-500'
                type="button">Register New Account</button>
            </div>
          </div>

          <div className=' font-normal text-blue-400 p-5  '>
            <h1>Get Start With Us & Make Rial Credits</h1>
          </div>
        </div>


        <div className=' absolute bottom-0  w-full '>
          <div className=' max-w-350 items-center px-2 font-mono  m-auto flex gap-5  '>
            <span>To Buy Our Product </span>
            <div className='flex gap-5 items-center cursor-pointer hover:bg-cyan-400 border m-2 p-1 bg-white text-black font-black px-5 rounded-xl shadow-2xl shadow-amber-50'>
              <span><ShoppingBagIcon size={20} /></span>
              <span>Shoop Now</span>
            </div>

          </div>
        </div>
      </div>



      {/* Download Cards ================================= */}
      <div className='w-full  h-full bg-[#050505]'>
        <div className='max-w-350 m-auto h-full mt-3'>
          {/* --- Add New Component Hear  */}
          <HeroSection />
          <MonitizeSection />
        </div>

        <div className='max-w-350 m-auto h-full bg-black '>

        </div>

      </div>

      {/* Popup ===================== */}
      <div className='w-full h-full'>
        <DocumentDownload />
      </div>

    </>
  )
}

export default Home
