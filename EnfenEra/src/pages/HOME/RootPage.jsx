import { Chrome, Facebook, Github, LogIn, MousePointerClick } from 'lucide-react'
import React, { useState } from 'react'

const RootPage = ({ LogPopUp = null }) => {

  const [IsPopUpShow, SetPopUpShow] = useState(true);

  return (
    <>
      {/* Popup Wrapper */}
      <div className={`${IsPopUpShow ? "block" : "hidden"}`}>
        
        <div className='h-screen w-full bg-black relative'>
          
          {/* Background Image */}
          <img
            className='w-full h-full opacity-50 fixed object-cover'
            src="/IMAGE/InfencoStudio.png"
            alt=""
          />

          {/* Content */}
          <div className='h-full max-w-3xl m-auto flex justify-center items-center'>
            <div className='w-full p-3 z-10 font-black py-5 text-white'>

              {/* Login */}
              <div>
                <div className='flex justify-center flex-col items-center'>
                  <h1 className='text-2xl'>Login Here</h1>
                  <span className='text-xs text-gray-400'>
                    If can't login, Sign Up below
                  </span>
                </div>

                <div className='flex justify-center mt-3'>
                  <button className='flex  auth-color justify-between items-center w-80 px-5 py-2 rounded-xl cursor-pointer hover:bg-cyan-400'>
                    Login Here
                    <LogIn />
                  </button>
                </div>
              </div>

              {/* Signup */}
              <div className='mt-6'>
                <div className='flex justify-center flex-col items-center'>
                  <h1 className='text-2xl'>Sign Up</h1>
                  <span className='text-xs text-gray-400'>
                    Register yourself
                  </span>
                </div>

                <div className='flex justify-center mt-3'>
                  <button className='flex text-gray-400 auth-color hover:text-white justify-between items-center w-80 px-5 py-2 rounded-xl cursor-pointer hover:bg-gray-400'>
                    Sign Up
                    <LogIn />
                  </button>
                </div>
              </div>

              {/* Social Signup */}
              <div className='py-5'>
                <h1 className='text-center'>Sign Up with :</h1>

                <div className='p-2 flex flex-col gap-5 mt-3'>
                  
                  <button className='flex text-gray-400 bg-black auth-color justify-between items-center w-80 mx-auto px-5 py-2 rounded-xl hover:bg-gray-400 hover:text-white'>
                    <Facebook />
                    FACEBOOK
                    <LogIn />
                  </button>

                  <button className='flex text-yellow-400 bg-black auth-color justify-between items-center w-80 mx-auto px-5 py-2 rounded-xl hover:bg-gray-400 hover:text-white'>
                    <Github />
                    Github
                    <LogIn />
                  </button>

                  <button className='flex text-gray-400 auth-color justify-between items-center w-80 mx-auto px-5 py-2 rounded-xl hover:bg-gray-400 hover:text-white'>
                    <Chrome />
                    GOOGLE
                    <LogIn />
                  </button>

                </div>
              </div>

              {/* Skip Button */}
              <div className='flex justify-center items-center text-gray-400  mt-5'>
                <button
                  onClick={() => SetPopUpShow(false)}
                  className='p-3 cursor-pointer hover:text-white flex gap-2 animate-bounce text-[12px]'
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