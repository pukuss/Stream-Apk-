import { Plus } from 'lucide-react'
import React from 'react'

function UploadPdf() {
  return (
    <div>
        <div className='h-30 border-dashed rounded-2xl flex justify-center group hover:bg-gray-500/10 items-center border hover:scale-105 cursor-pointer'>
            <span className='flex items-center gap-3 font-black text-gray-500 '>
                <Plus size={20} /> 
                <h1 className='group-hover:text-white text-sm font-medium'>New Document</h1>
            </span>
        </div>
    </div>
  )
}

export default UploadPdf
