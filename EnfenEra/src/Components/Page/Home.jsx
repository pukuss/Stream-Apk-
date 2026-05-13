import React, { useState,useRef } from 'react'
import FooterBackground from '../horizon/FooterBackground'
import QuantumBackground from '../horizon/QuantumBackground'
import AetherForgeBackground from '../horizon/AetherForgeBackground'
import { Import, Power, PowerSquare, ShoppingBagIcon, Spool } from 'lucide-react'

// temp 
import { GenerateId } from '../../utils/idGenerator'
 const id = GenerateId();
 console.log(id);

//if it work  testing..........................
import { useScrollBlur } from '../../hooks/UseScrollBlur'

import { AdCard,DownloadBar,RootPage,DocumentDownload,Devoloper_Profiles } from '../../pages/HOME/index'



function Home() {

  const [DocPopOpen , SetDocPopOpen] = useState(true);

  const LogPop = useState(false)
  const imageRef = useRef(null);



  // const {} = UseScrollBlur()
   useScrollBlur(10, 500, imageRef);
 
  return (
    <>


      <div className=' block w-full top-0 fixed z-50'>
        <div  className=' w-full'>
          <RootPage  LogPopUp = {LogPop} />
        </div>
      </div>
      
      <div className=' w-full relative  h-screen'>
        {/* <QuantumBackground />  */}
        <div 
          
          className=' w-full h-full absolute overflow-hidden'
        >
            <img 
            ref={imageRef}
          
                className='w-full h-full object-cover  '
                src="IMAGE/UserProfile.jpg" alt="Background Image" />
           {/* <AetherForgeBackground /> */}
           {/* <FooterBackground/> */}
           
        </div>

    


          <div className='relative top-70  max-w-350 h-20 m-auto content-center   '>
            <span className='flex text-[12px] items-center gap-1'>Infenco <Spool size={14} /> Powerdby EnfenEra</span>

            <div className=' font-black text-5xl p-5'>
              Infen <span className='text-orange-400'>Era </span>
            </div>
            <div className=' text-sm w-100 font-medium text-[#eeab53]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias nostrum cumque maiores ex est nam quisquam dolorem laudantium sapiente. Impedit tenetur fugit similique deserunt sed unde error quos nobis.
            </div>

            {/* Learn & Get Install Button =================================  */}
            <div className='flex p-5 mt-10 gap-15'>
              <div>
                <button className='border border-sky-300 px-4 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-black py-1 rounded-xl ' type="button">Leaen More</button>
              </div>
              <div>
                <button
                  className=' border px-5  text-white font-black rounded-xl py-1 border-gray-500'
                  type="button">Get Install</button>
              </div>
            </div>

            <div className=' font-normal text-blue-400 p-5  '>
              <h1>Get unlimeted Use And Soo One</h1> 
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
        
        <div className='max-w-350  m-auto  mt-5'>
          <Devoloper_Profiles />
        </div>


{/* Download Cards ================================= */}
        <div className='w-full  h-full bg-[#050505]'>
          <div className='max-w-350 m-auto h-full'>
            <DownloadBar />
          </div>


          <div className='max-w-350 m-auto h-full'>
            {/* <AdCard /> */}
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
