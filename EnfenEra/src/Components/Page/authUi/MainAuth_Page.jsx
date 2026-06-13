import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Auth Ui Import
import SingIn from './auth/SingIn';

function MainAuth_Page() {
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    user : " ",
    passwd : " ",
    username : " ",
  });
  
  
  return (
    <>
        <div className='w-full h-screen relative bg-slate-950'>
          <div className=' absolute w-full h-full top-0 overflow-hidden md:hidden' 
          ><img 
              className='w-full h-full origin-center object-cover blur '
              src="/IMAGE/blueartback.jpg" alt="" /></div>
          <div className='absolute  shadow-[50px_50px_2000px_100px] shadow-amber-600'></div>
          <div className='absolute top-0 right-0  shadow-[50px_50px_2000px_100px] shadow-indigo-600'></div> 

          <header></header>
          <main className='flex w-full h-full   justify-center items-center relative '>
            <div className='w-full h-full' >
              <SingIn props = {userData} />
            </div>
          </main>
        </div>
    </>
  )
}

export default MainAuth_Page
