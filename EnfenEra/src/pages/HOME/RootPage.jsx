import { Check, CheckCircle2, Chrome, Facebook, Github, LogIn, MousePointerClick } from 'lucide-react'
import React, { useState } from 'react'
import { SocialButton } from "../../Components/base/buttons/social-button";


const RootPage = ({ LogPopUp = null }) => {

  const [IsPopUpShow, SetPopUpShow] = useState(true);

  return (
    <>
      {/* Popup Wrapper */}
      <div className={`${IsPopUpShow ? "block" : "hidden"}`}>

        <div className='h-screen w-full bg-black relative ' >

          {/* Background Image */}
          <img
            className='w-full h-full opacity-50 fixed object-cover'
            src="/IMAGE/InfencoStudio.jpg"
            loading='eager'
            fetchPriority='high'
            alt=""
          />

          <header>
            <div className='relative  flex justify-center flex-col items-center '>
              <h1 className='text-xl font-bold'>Login Here</h1>
              <span className='text-sm text-gray-400'>
                If can't login, Sign Up below
              </span>
            </div>
          </header>

          {/* Content */}
          <div className='h-full max-w-full  m-auto flex    '>
            <div className=' p-3 z-10  font-black py-5 text-white flex flex-col gap-10 justify-center  items-center w-full h-full'>

              {/* Login */}
              <div className=' flex  justify-center items-center w-full '>
                <div className=' gap-5 flex  justify-center mt-3 md:w-90'>
                   <SocialButton social="google" theme="brand">
                    Login with Google
                  </SocialButton>

                  <SocialButton social="apple" theme="brand">
                    Login with Apple 
                  </SocialButton>
                </div>
              </div>

              {/* Signup */}
              <div className="font-normal text-sm  p-1 flex flex-col  w-100 ">
                <label className='px-2 text-xl ' htmlFor="">Register Your Self</label>
                <div className=' w-full flex gap-3 items-center '>
                <label
                  className='w-full flex items-center border-b border-gray-500'
                  htmlFor="">
                  <input 
                    className='s w-full px-2 font-light  py-2 text-sm outline-0 bg-none lowercase '
                    placeholder='InfenEra@gmail.com'
                    type="email" name="" id="" />
                    {/* Update------------- if the email have @ then Show else Hide */}
                    <span 
                      className=''
                    ><Check size={15} color='lightgreen'/></span>
                  </label>
                
                  <button type="button"><CheckCircle2 color='gray' /></button>
                </div>
                <h1 className='text-[10px] flex px-2 gap-0.5 text-green-500'>Looding <p className='addanimation '>  ......</p></h1>
              </div>

              {/* Social Signup */}
              <div className='py-5'>
                <h1 className='text-center py-2 text-sm font-medium  '>Sign Up with :</h1>

                <div className='flex w-90 flex-col gap-3'>

                  <SocialButton social="google" theme="brand">
                    Sign in with Google
                  </SocialButton>

                  <SocialButton social="facebook" theme="brand">
                    Sign in with Facebook
                  </SocialButton>
                  <SocialButton social="apple" theme="brand">
                    Sign in with Apple
                  </SocialButton>

                </div>
              </div>

              {/* Skip Button */}
              <div className='flex justify-center items-center text-gray-400  mt-5'>
                <button
                  onClick={() => SetPopUpShow(false)}
                  className='p-3 cursor-pointer hover:text-white flex gap-2 animate-bounce font-monos text-[12px]'
                >
                  Skip for now
                  <MousePointerClick size={15} color='purple' />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default RootPage;