import React, { useState } from 'react'
import FooterBackground from '../horizon/FooterBackground'
import QuantumBackground from '../horizon/QuantumBackground'
import AetherForgeBackground from '../horizon/AetherForgeBackground'
import { Import, Power, PowerSquare, ShoppingBagIcon, Spool } from 'lucide-react'



import { AdCard,DownloadBar,RootPage,DocumentDownload } from '../../pages/HOME/index'



function Home() {

  const [DocPopOpen , SetDocPopOpen] = useState(true);

  const LogPop = useState(false)

  return (
    <>


      <div className=' block w-full top-0 fixed z-50'>
        <div  className=' w-full'>
          <RootPage  LogPopUp = {LogPop} />
        </div>
      </div>
      
      <div className=' relative border h-screen'>
        {/* <QuantumBackground />  */}
        <div className=' relative -z-10'>
           <AetherForgeBackground />
           {/* <FooterBackground/> */}
           
        </div>

    


          <div className='relative top-45  max-w-350 h-20 m-auto content-center   '>
            <span className='flex text-[12px] items-center gap-1'>Infenco <Spool size={14} /> Powerdby EnfenEra</span>

            <div className=' font-black text-5xl p-5'>
              Infen <span className='text-orange-400'>Era </span>
            </div>
            <div className=' text-[12px] w-100 font-black text-gray-400'>
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

            <div className=' font-black text-gray-400/50 p-5  '>
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
