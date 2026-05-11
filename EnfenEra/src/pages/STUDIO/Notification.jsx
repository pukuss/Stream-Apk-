import { BookOpenCheck, Droplet, MoveDown } from 'lucide-react'
import React from 'react'

function Notification({
  Heading = "Heading...",
  Titel = "Titel...",
  Date = "Date...",
  User = "User..."
}) {
  return (
    <>
        <div className='bg-amber-50/20  group   w-full rounded-2xl  p-4 '>
            {/* <h1 className='px-'>User</h1> */}
            <div className=' p-2 flex justify-between items-center px-5 '>
              
              <h1 className='text-xl flex  items-start  flex-col font-black'>
                <span className='text-blue-400/50'>Notification</span>
                <span className='text-[14px] font-mono text-gray-400 '  >{Date}</span>
                <span className='text-[18px] font-mono text-green-400 '>{User}</span>
              </h1>
    
              <div className='flex justify-center items-center gap-5'>
                <h1 className='text-green-400'>New</h1>
                <div className=' animate-ping bg-red-600 h-3 w-3 rounded-full'></div>
              </div>
            </div>

            {/* Titel input  */}
            <div className='px-5 flex justify-between items-center'>
              <div className=''>
                <h1 className='text-2xl font-semibold'>{Heading}</h1>
                <h1 className='text-xl text-gray-400'>{Titel}</h1>
              </div>

              <div className='flex gap-5 h-10 font-black'>
                <button
                  className='bg-cyan-500/30 border flex justify-between items-center gap-2 border-cyan-300/50 px-5 p-1 rounded-xl'
                >
                  Spand <MoveDown size={15} />
                </button>
                <button className='bg-green-400/30 border-green-500/50 border flex justify-between items-center gap-2  px-5 p-1 rounded-xl'>
                  Open <BookOpenCheck />
                </button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Notification
