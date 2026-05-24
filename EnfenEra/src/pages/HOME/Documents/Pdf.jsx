import { File, MenuIcon, StarIcon } from 'lucide-react'
import React, { useState } from 'react'

function Pdf({
    Document = "Demo.pdfjgfjgjf",
    size = "2.5 MB",
    color = "pink",
    isSave = true
}) {

    //IsSave Color Chenge
  return (
    <div className='w-full cursor-pointer  border rounded-2xl border-gray-500/50 hover:border-indigo-500/50'>
        <div className='flex border-gray-500 p-3 rounded-2xl bg-gray-500/10 justify-between w-full gap-2 items-center'>
            <div>
                <File color={color} size={25}/>
            </div>
            
            <div className='flex flex-col font-black'>
                <span className='text-white text-sm italic '>{Document}</span>
                <span className='text-gray-500 text-[10px]'>{size}</span>
            </div>
            
            <div className='active:scale-95'>
                <StarIcon
                    onClick={()=>{
                        // Update-------------
                    }}
                    fill={isSave ? "yellow": "white"} />
            </div>
            
            <div className=' hover:text-gray-500 active:scale-95'>
                <MenuIcon />
            </div>
        </div>
    </div>
  )
}

export default Pdf
    