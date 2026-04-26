import { File, MenuIcon, StarIcon } from 'lucide-react'
import React from 'react'

function Pdf({
    Document = "Demo.pdfjgfjgjf",
    size = "2.5 MB",
    color = "pink"
}) {
  return (
    <div className='w-full '>
        <div className='flex border border-black p-3 rounded-2xl bg-gray-950 justify-between w-full gap-2 items-center'>
            <div>
                <File color={color} size={35}/>
            </div>
            
            <div className='flex flex-col font-black'>
                <span className='text-pink-400'>{Document}</span>
                <span className='text-gray-500'>{size}</span>
            </div>
            
            <div>
                <StarIcon />
            </div>
            
            <div>
                <MenuIcon />
            </div>
        </div>
    </div>
  )
}

export default Pdf
    