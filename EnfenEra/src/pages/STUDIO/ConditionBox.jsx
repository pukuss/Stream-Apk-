import React from 'react'

function ConditionBox() {
  return (
    <>
      
                <div className='border border-gray-500/10 relative top-30 m-5  rounded-2xl bg-gray-800/20'>
                    <div className='font-medium p-3'>
                        <div className='flex gap-5 items-center'>
                            <span className='text-[12px] text-gray-400'>Presence Of Gameing Industry</span>
                            <span><Gamepad color='purple'/></span>
                        </div>

                        <div className='font-black  bg-linear-to-r from-teal-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent'>
                            <h1>ERA STUDIO</h1>
                        </div>
                        <hr />

                        <div className='m-5 flex flex-col gap-2'>
                            <div className='flex  items-center gap-5 text-[10px] '>
                                <span><CheckCircle2 color='lightgreen' size={15}/></span>
                                <span>Instant Cash Withdrawal</span>
                            </div>

                            <div className='flex  items-center gap-5 text-[10px]'>
                                <span><CheckCircle2 color='lightgreen' size={15}/></span>
                                <span>Hosting Just Rupis ₹2 [At Starting INR]</span>
                            </div>

                            <div className='flex  items-center gap-5 text-[10px] '>
                                <span><CheckCircle2 color='lightgreen' size={15}/></span>
                                <span>FREE & Paid Join Match & Support </span>
                            </div>

                            <div className='flex  items-center gap-5 text-[10px] '>
                                <span><CheckCircle2 color='lightgreen' size={15}/></span>
                                <span>Security Of Use 2.0 ERA STUDIO </span>
                            </div>
                        </div>

                        <div className='flex justify-between '>
                            <div>
                                <button className='primary-back px-5 text-[12px] rounded-lg py-1  '>
                                    Get IT ? 
                                </button>
                            </div>
                            <div>
                                <button className='Log-back px-5 text-[12px] rounded-lg py-1  '>
                                    User ID Log 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default ConditionBox
