import { BookOpenCheck, ChevronDown, ChevronUp, Delete, Droplet, EllipsisVertical, Info, Link, LogOut, MoveDown, PenBox, Printer } from 'lucide-react'
import React, { useState } from 'react'

function Notification({
  props
}) {

  const [spand, setSpand] = useState(false);
  const [iselips, setElips] = useState(false)
  console.log(props, "hii");


  return (
    <>
      <div aria-readonly className='bg-linear-to-bl  from-slate-950 to-slate-800 border border-slate-900  group   min-w-80 h-full  rounded-xl  p-1.5 relative'>
        {iselips && (
          <div className=' px-2 py-3 absolute right-3 top-10 bg-slate-950 z-10 rounded-sm text-sm flex flex-col gap-1.5 border border-slate-900 font-semibold'>
            <div className='items-center  flex gap-2 hover:bg-slate-900 w-full cursor-pointer px-10 py-1 transition border-slate-900 '>
              <Delete size={18} /> Delete</div>
            <div className='flex items-center gap-2 hover:bg-slate-900 w-full cursor-pointer px-10 py-1 transition border-slate-900 '>
              <Printer size={18} /> Print</div>
            <div className='flex items-center gap-2 hover:bg-slate-900 w-full cursor-pointer px-10 py-1 transition border-slate-900 '>
              <Info size={18} /> About</div>
            <div className='flex items-center gap-2 hover:bg-slate-900 w-full cursor-pointer px-10 py-1 transition border-slate-900 '>
              <PenBox size={18} /> Riport</div>
          </div>
        )}
        {/* <h1 className='px-'>User</h1> */}
        <div className=' p-2 flex justify-between items-center px-2 '>
          <h1 className='text-xl flex w-full items-start  justify-between flex-col font-black'>
            <span className='text-white/50 text-sm font-bold '>Notification</span>
            <div className='flex items-center gap-3'>
              <span className='text-[10px] font-bold text-gray-400 '  >{props.name}</span>
              <span className='text-[14px] font-bold text-green-400 '>{props.game}</span>
            </div>
          </h1>


          {/* THREE DOT ICON DELETE INFO RIPORT ========================== */}
          <div className='flex justify-center items-center  gap-5'>
            <h1
              onClick={() => setElips((prev) => !prev)}
              className='text-white text-sm font-bold hover:bg-gray-800 p-2 rounded-2xl cursor-pointer active:scale-110 active:animate-ping active:border border-slate-900 '><EllipsisVertical size={16} /></h1>
            {/* <div className=' animate-ping bg-red-600 h-3 w-3 rounded-full'></div> */}
          </div>
        </div>

        {/* Titel input  */}
        <div className='px-5 flex justify-between items-center'>
          <div className=''>
            <h1 className='text-xl font-semibold overflow-hidden'>{props.title}</h1>
            <h1 className='text-sm text-gray-400'>{props.discription}</h1>
          </div>

          <div className='flex gap-1.5 text-sm font-semibold '>
            {/* status  */}
            <h1>{props.head.status}</h1>
            <h2>{props.totalAmount}</h2>
          </div>

          <div className='flex gap-2  font-medium pl-5'>
            <button
              className=' border cursor-pointer flex justify-between items-center gap-2 border-purple-700 font-semibold text-purple-600  px-2 p-0 text-sm rounded-xl'
              onClick={() => setSpand((prev) => !prev)}
            >
              Spand <span>{spand ? (<ChevronUp size={15} color='white' />) : (<ChevronDown size={15} color='gray' />)}</span>
            </button>

            <button className='border cursor-pointer flex text-sm font-semibold border-red-600 text-red-500  justify-between items-center gap-2  px-2 p-0 rounded-xl'>
              Open <LogOut size={15} />
            </button>
          </div>
        </div>

        <div className=' overflow-hidden  text-[12px] py-1'>
          {spand && (
            <div className=''>
              <div className='px-3 rounded-2xl py-4 bg-slate-950 w-full h-full'>
                <div className='border text-center font-bold text-sm py-2 my-3  bg-slate-900 rounded-2xl border-gray-800'>
                  {props.game}
                </div>
                {/* Request Id  */}
                <h1 className='font-semibold  text-gray-500 flex '>Request UID : <span className='text-white font-medium'>{props.head.requestId}</span></h1>
                {/* EMAIL ID  */}
                <h2 className='text-gray-500 mb-2 flex '>Email id : <span>{props.head.email}</span></h2>
                <h2 className='text-gray-500 mb-2 flex '>Name: <span className='uppercase'>{props.name}</span></h2>

                <hr />
                <div className='pt-4'>
                  <h3 className='uppercase font-semibold  text-gray-500'>Hosting : <span className='text-green-500'>{props.hostingType}</span></h3>
                  <h4 className='text-gray-500 font-bold'>Entry Fee : <span className='text-red-600'>{props.entryFee} ₹ INRS</span></h4>
                </div>

                <div className='bg-slate-900/50 text-sm font-bold text-gray-400 py-2 my-3 rounded-sm w-full px-2'>
                  <h1 className='text-[10px] font-bold text-gray-500 uppercase'>Game Info ---</h1>
                  <h3>map : <span>{props.map}</span></h3>
                  <h4>game mode : <span>{props.gameMode}</span></h4>
                  <h5>match type : <span>{props.matchType}</span></h5>
                  <h6> Slots : <span>{props.slots}</span></h6>
                </div>


                <div className='text-[15px]  font-semibold'>
                  <h1 className='font-bold text-blue-600 text-[12px] underline py-1'>Time Info/Details</h1>
                  <div className='text-[13px] font-mono'>
                    <h1>Request date : <span>{props.matchDate}</span></h1>
                    <h2>Match time : <span>{props.matchTime}</span></h2>
                  </div>

                  <div className=''>
                    <h1 className='text-[13px text-gray-500 ]'>Sponsor : <span>{props.sponsor}</span></h1>
                    <h2 className='flex flex-col border px-2 py-2 rounded-xl bg-slate-900/50 border-slate-900'> <span className='text-sm text-gray-500'>Rules* </span>
                      <span className='text-[12px]'>{props.customRules}</span>
                    </h2>
                  </div>

                </div>

                <div>

                  <h3></h3>
                </div>

                <div>
                  {/* head item  */}
                  <h1>CreateAt : <span>{ }</span></h1>
                </div>


              </div>

            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Notification
