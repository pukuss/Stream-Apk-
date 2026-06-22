import React, { useState, useRef } from 'react'

import { Import, Power, PowerSquare, ShoppingBagIcon, Spool, UserCheck } from 'lucide-react';
import WebLogo from '../horizon/WebLogo'
import { motion } from 'framer-motion';

// temp 
import { GenerateId } from '../../utils/idGenerator'
// Cloud Image Folder
import { staticImage } from '../../constants/cloud.Image';

//if it work  testing..........................
import { useScrollBlur } from '../../hooks/UseScrollBlur'


import { AdCard, DocumentDownload, HeroSection, MonitizeSection,Cvcomp } from '../../pages/HOME/index'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../horizon/Looding'

// root color : bg-clip-text text-transparent w-fit bg-linear-to-r from-pink-700  via-orange-500 to-yellow-400 

function Home() {

  const [DocPopOpen, SetDocPopOpen] = useState(true);
  const LogPop = useState(false)
  const imageRef = useRef(null);

  // NAVIGATION
  const navigate = useNavigate()

  //Generate Uniqe Id
  const id = GenerateId();
  console.log(id);



  const  reduxLoading = useSelector((state) => state.auth.looding);
  console.log(reduxLoading);
  

  // const {} = UseScrollBlur()
  useScrollBlur(10, 500, imageRef);

  return (
    <>
    <motion.div
      initial= {{opacity : 0}}
      animate = {{opacity : 1}}
      transition={{duration :0.3}}
    >
      {reduxLoading && (
          <div className=' w-full h-full bg-neutral-950 fixed flex items-center justify-center  top-0 left-0 z-100 '>
            <div><Loading /></div>
          </div>
        )}
      

      <div className=' w-full relative  h-screen overflow-hidden'>
        


        {/* <QuantumBackground />  */}
        <div
          className=' w-full h-full absolute overflow-hidden '>
          <img
            ref={imageRef}
            className='w-full h-full object-cover  '
            src={staticImage.hero_banner} alt="Background Image" />
        </div>

        <div className='relative top-70  max-w-350 h-20 m-auto content-center   '>
          <span className='flex text-[8px] items-center gap-1 font-logo '>Infenco Powerdby EnfenEra</span>
          
          <div className=' font-black text-5xl p-5 '>
            <h1 className='bg-clip-text text-transparent w-fit bg-linear-to-r from-pink-700  via-orange-500 to-yellow-400 logo-font '>InfenEra</h1>
          </div>

           <div className=' font-black text-xl p-5'>
            <span>Compete,Win, Become a  </span>
            <span className='bg-clip-text text-transparent w-fit bg-linear-to-r from-pink-700  via-orange-500 to-yellow-400'>Champion </span>
          </div>

          <div className=' text-sm w-100 font-medium text-white'>
            Join online Esports tournaments, battle top players, track live leaderboards and win exciting rewards across multiple game, and earn money.
          </div>

          {/* Learn & Get Install Button =================================  */}
          <div className='flex p-5 mt-10 gap-15'>
            <div>
              <button 
                
                className='border pacifico logo-font cursor-pointer hover:backdrop-blur-3xl font-black border-sky-300/50 justify-center items-center gap-1 px-4 flex bg-white text-sm text-black  py-2 rounded-xl ' 
                type="button"> <UserCheck size={20} />
                  Join Tournament
                </button>
            </div>
            <div>
              <button
                onClick={()=> navigate("/register")}
                className=' border px-5 cursor-pointer font-bold text-sm rounded-xl py-2 border-gray-500 bg-clip-text text-transparent w-fit bg-linear-to-r from-pink-700  via-orange-500 to-yellow-400'
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

      <div className='max-w-350 m-auto h-full  text-center uppercase pt-10'>
          <h1 className='text-4xl font-black bg-clip-text text-transparent w-fit bg-linear-to-r from-pink-700  via-orange-500 to-yellow-400 '> a Tournament <span className='text-red-600'>Hosting</span> Platform</h1>
          {/* <h2 className='font-black text-3xl text-red-700'>air space india</h2> */}
          <h3 className='font-semibold text-3xl py-5'> <span className='text-blue-700 '>Premium</span> <span className='text-red-600 logo-font lowercase' >hydron</span> technology </h3>
      {/* <hr /> */}
      </div>


      {/* Download Cards ================================= */}
      <div className='w-full  h-full bg-[#050505] overflow-hidden'>
        <div className='max-w-350 m-auto h-full mt-3'>
          {/* --- Add New Component Hear  */}
          
          <HeroSection />
          <MonitizeSection />
          <Cvcomp />
        </div>

        <div className='max-w-350 m-auto h-full bg-black '>
efrpo
        </div>

      </div>

      {/* Popup ===================== */}
      <div className='w-full h-full'>
        <DocumentDownload />
      </div>
      </motion.div>

    </>
  )
}

export default Home
