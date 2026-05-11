import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

import { Gamepad2Icon, CreativeCommons, LayoutDashboard, Settings, TowelRackIcon, Trophy } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';

function T_ProfileBar() {
    const navigate = useNavigate()



    return (
        <div>
            <div className='w-full h-full'>
                <div className='border  mx-5 p-4 primary-back rounded-2xl border-pink-600/20'>
                    <div>
                        <span className='font-medium flex w-full justify-between  text-amber-50'>
                            <h1 className='text-xl font-black'>User Profie Settings & Custoomisition</h1>
                            <Trophy size={20} color='#A7EBF2'/>
                        </span>
                        <p className='text-[10px] font-medium text-blue-300'>Chenge And Edit Player Details Also Step Up rank  and rewords  </p>
                    </div>

                    <div className=' md:flex  items-center'>
                        <Link
                            to={""}
                        >
                            <button
                                className=' flex gap-3 px-10 rounded-xl py-1.5 Settings-Button font-black hover:bg-amber-100 hover:cursor-pointer m-5'
                                onClick={() => navigate("/studio/t_profile")}
                                type="button">
                                Profile Settings
                                <Settings  color='gray'/>
                            </button>
                        </Link>





                        <div
                            className=' not-md:hidden flex gap-3 px-10 rounded-xl py-1.5 Settings-Button font-black hover:bg-amber-100 hover:cursor-pointer m-5'
                        >
                            RANK  <TowelRackIcon />
                        </div>


                    </div>

                    <span className='font-medium text-[12px] text-gray-400'>
                        Dashboard access, Get Overvew, Real Result, Better Quality , All Match Access , Support
                    </span>
                </div>
            </div>
        </div>
    )
}

export default T_ProfileBar
