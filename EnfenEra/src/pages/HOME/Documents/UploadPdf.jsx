import { Plus } from 'lucide-react'
import React from 'react'

function UploadPdf() {
  return (
    <div>
        <div className='h-30 border-dashed rounded-2xl flex justify-center items-center border'>
            <span className='flex gap-3 font-black text-gray-500'>
                <Plus /> 
                <h1>New Document</h1>
            </span>
        </div>
    </div>
  )
}

export default UploadPdf
