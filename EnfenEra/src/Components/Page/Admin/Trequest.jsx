import React from 'react'
// import T_InputBox from '../../../pages/T_REQUEST/Request_Form'
import Request_Form from '../../../pages/T_REQUEST/Request_Form'

function Trequest() {
  return (
    <>
        <div className=' w-full  h-full relative  '>
          <div className='fixed top-0 bg-[url("/devolopres/devoloper3.jpg")] blur opacity-20 bg-cover bg-center h-screen w-full'>

          </div>

          <header className=' relative max-w-350 h-full  m-auto mt-25 '>
            {/* <div className='  font-black md:text-2xl text-xl border px-5 pt-2  '>
              <h1 className='uppercase'>submit your tournament request |  Enfenera </h1>
              <p className='text-[10px] md:text-sm px-0 font-normal py-3 '>EnfenEra helps submit your Esports tournament request online . Organize , manage matches, verify results and host competetive gaming events professional. </p>
            </div> */}

            <div className='  px-8 py-3 text-sm md:text-[10px]'>
              <p className='font-medium text-gray-400/50'> Esports Tournament Application Portal</p>
            </div>

            {/* Hero Section */}
            <article className='px-5 flex flex-col justify-start '>
            <h1 className='text-xl md:text-4xl font-black uppercase bg-linear-to-r from-purple-500 to-purple-300  text-transparent bg-clip-text '>
              Competitive Gaming Reimagined
              <p className='text-xl bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-indigo-500  ' >Infenera Studios</p>
            </h1>

            <p className='font-medium text-[10px] md:text-sm text-gray-400'>
              EnfenEra is a mordan esports tournament management platform where organizers can submit tournament request , manage schedules , veryfy match results , and host professional competetive gaming events
            </p>


            </article>


            
          </header>

          <div className=' relative max-w-350 h-full  m-auto mt-25 '>
                        < Request_Form/>
          </div>
        </div>
    </>
  )
}

export default Trequest
