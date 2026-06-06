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
        <div className=' bg-conic-150 bg-linear-to-bl to-gray-500   group   min-w-80 h-full  rounded-xl  p-2 '>
            {/* <h1 className='px-'>User</h1> */}
            <div className=' p-2 flex justify-between items-center px-5 '>
              
              <h1 className='text-xl flex w-full items-start  justify-between flex-col font-black'>
                <span className='text-white/50 text-sm font-bold '>Notification</span>
                <div className='flex'>
                  <span className='text-[10px] font-mono text-gray-400 '  >{Date}</span>
                  <span className='text-[10px] font-mono text-green-400 '>{User}</span>
                </div>
              </h1>
    
              <div className='flex justify-center items-center gap-5'>
                <h1 className='text-green-400 text-sm font-bold'>New</h1>
                {/* <div className=' animate-ping bg-red-600 h-3 w-3 rounded-full'></div> */}
              </div>
            </div>

            {/* Titel input  */}
            <div className='px-5 flex justify-between items-center'>
              <div className=''>
                <h1 className='text-xl font-semibold'>{Heading}</h1>
                <h1 className='text-sm text-gray-400'>{Titel}</h1>
              </div>

              <div className='flex gap-2  font-medium pl-5'>
                <button
                  className=' border flex justify-between items-center gap-2 border-cyan-300/50 px-2 p-0 text-sm rounded-xl'
                >
                  Spand <MoveDown size={10} />
                </button>
                <button className='border flex  justify-between items-center gap-2  px-2 p-0 rounded-xl'>
                  Open <BookOpenCheck size={15}/>
                </button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Notification
