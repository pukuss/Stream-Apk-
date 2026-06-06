import React from 'react'
// import T_InputBox from '../../../pages/T_REQUEST/Request_Form'
import Request_Form from '../../../pages/T_REQUEST/Request_Form'

function Trequest() {
  return (
    <>
    <div className='fixed z-0 bg-[url("/IMAGE/blackshed.jpg")]   bg-cover bg-center h-full w-full '></div>
    <div className='min-h-screen '>
      <header></header>

      <main className='relative z-10 max-w-350 m-auto px-5 '>
        <Request_Form />
      </main>
    </div>
    </>
  )
}

export default Trequest
