import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

import { Gamepad2Icon, CreativeCommons, LayoutDashboard } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';

function Tournament_request() {
    const navigate = useNavigate();

    const dispach = useDispatch();
    const Select = useSelector((state) => state.counter.point);



    return (
        <div className='w-full h-full'>
            <div className='border  mx-5 p-4 bg-white/10 rounded-2xl border-pink-600/20'>
                <div>
                    <span className='font-black flex w-full justify-between  text-amber-50'>
                        <h1 className='text-xl font-black'>Tournament Organization Plartform</h1>
                        <CreativeCommons color='purple' />
                    </span>
                    <p className='text-[10px] font-medium text-blue-300'>Creating Tournament With Us  </p>
                </div>

                <div className=' md:flex  items-center'>
                    <Link
                        to={""}
                    >
                        <button
                            className=' flex gap-3 px-10 rounded-xl py-2 border-gray-500 border   font-black hover:bg-indigo-500/20 hover:cursor-pointer m-5'
                            onClick={()=> navigate("/studio/sendrequest")}
                            type="button">
                            Request Tournament
                            <Gamepad2Icon color='lightgreen' />
                        </button>
                    </Link>


                    


                    <div
                        className=' not-md:hidden flex gap-3 px-10 rounded-xl py-1.5 button-back2 font-black hover:bg-amber-100 hover:cursor-pointer m-5'
                    >
                        Dashboard <LayoutDashboard color='lightgreen' />
                    </div>


                </div>

                <span className='font-medium text-[12px] text-gray-400'>
                    Dashboard access, Get Overvew, Real Result, Better Quality , All Match Access , Support <Link to={"/"} className='text-sky-500 underline' >Learn More ...</Link> 
                </span>
            </div>
        </div>
    )
}

export default Tournament_request
