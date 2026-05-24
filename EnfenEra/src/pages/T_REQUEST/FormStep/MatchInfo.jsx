import React from 'react'
import { ReceiptIndianRupee, Timer } from 'lucide-react'
// import { HandelForm } from '../../../utils/handelForm'

function MatchInfo({
  HandelForm,
  formData,
  setformData
}) {
  return (
    <>
      <div className='w-full h-full'>
        <main>
                  {/* TIME INPUT================================ */}
        <div className='flex flex-col bg-linear-to-r from-pink-600/20 to-black mt-3 border border-pink-700/20 rounded-2xl p-2'>
          <label
            className='px-5  font-bold '
            htmlFor="DATE">
            <h1 className='flex gap-2'> <Timer size={20} /> PREFERED TIME & DATE</h1>
            <h6 className='text-[10px] text-gray-400 space-x-0'> What is the prefered  time you shoud announce</h6>
          </label>

          <input
            className='border border-rose-600/50 px-4  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
            type="date"
            required
            placeholder="Time"
            name="DATE"
            onChange={HandelForm}
            id="DATE" />

          <input
            className='border border-rose-600/50 px-4  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
            type="time"
            placeholder="Time"
            name="TIME"
            required
            onChange={HandelForm}
            id="TIME" />
        </div>

        </main>

      </div>

    </>
  )
}

export default MatchInfo

