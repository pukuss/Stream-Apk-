import { DotIcon, LucideMenu, MenuSquare } from 'lucide-react'
import React from 'react'

const AdCard = ({
  id = 123,
  avater = 'public/defimg.png',
  titel = "this simulation is looding",
    sponsor  = "clowd.google.com",
    sponsor_image = "public/defimg.png",
  download = "https://www.google.com",
  url = "fttps"
}) => {
  return (
    <>
        <div className='max-w-135 not-md:w-80 h-full '>
          <div className='grid grid-rows-2 rounded-3xl overflow-hidden '>
            <div className='bg-gray-400'>
              <img className='h-30 not-md:h-20 w-full' src={avater} alt="" />
            </div>

            <div className='primary-back flex justify-center items-center '>
              <div className=' justify-center  p-2 w-30 not-md:w-15 not-md:bg-center'><img  src={sponsor_image} alt="" /></div>
              <div className=' p-2 h-full flex flex-col justify-center'>
                <div className='text-2xl not-md:text-[10px] font-medium text-gray-400 '>{titel}</div>
                
                <div className='not-md:text-[8px] '>
                  <span className='flex gap-1'>
                    <h1 className='font-black'>Sponsored .</h1>
                    <h5 className='text-gray-500'>{sponsor}</h5>
                  </span>
                </div>
              </div>

              <div className='h-full  p-2 flex '>
                <div className='flex justify-center items-center'>
                  <button className='bg-gray-500/50 px-5 py-3 not-md:px-3 not-md:py-1.5 rounded-2xl '>Sing Up</button>
                  <div className='p-1'>
                    :
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AdCard
