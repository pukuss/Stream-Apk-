import { Chrome, Facebook, Github, LogIn, MousePointerClick } from 'lucide-react'
import React, { useState } from 'react'
import { SocialButton } from "../../Components/base/buttons/social-button"


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
                  <h1 className='text-sm'>Login Here</h1>
                  <span className='text-[5px] text-gray-400'>
                    If can't login, Sign Up below
                  </span>
                </div>

                <div className='flex justify-center mt-3'>
                     <SocialButton social="apple" theme="brand">
                LogIn
            </SocialButton>
                </div>
              </div>

              {/* Signup */}
              <div className='mt-6 ' >
                <div className='flex justify-center flex-col items-center'>
                  <h1 className='text-sm'>Sign Up</h1>
                  <span className='text-xs text-gray-400'>
                    Register yourself
                  </span>
                </div>

                <div className='flex w-56 justify-center mt-3'>
                   <SocialButton social="apple" theme="brand">
                Sing Up
            </SocialButton>
                </div>
              </div>


               <div className="">
           
           
         
        </div>

              {/* Social Signup */}
              <div className='py-5'>
                <h1 className='text-center'>Sign Up with :</h1>

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