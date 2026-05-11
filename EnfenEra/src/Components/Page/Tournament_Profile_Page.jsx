import React, { useState } from 'react';
import { Tournament_Menu } from '../../pages/STUDIO';
import { File, FolderCheck, FolderClosed, LucideMenu, LucideSquareMenu } from 'lucide-react';



function Tournament_Profile_Page() {
  //team item configure for manupulate iteam
    const teamType = ["solo" , "Dual" , "Squard" , "MaxTeam"]

  // Tournament Menu Open Variable 
  const [IsOpen , setMenuOpen] = useState(false)



  return (
    <>
      {/* MAIN DIV  */}
      <main
       className=' max-w-350 m-auto relative top-25 mb-25 '
      >
          <div className='border mx-1 sm:mx-5 h-20 rounded-xl flex justify-between items-center px-2 bg-[#210635]'>
            <div >
              <h1>Tournament Team Name </h1>
              <h2>Rank</h2>
            </div>

            <div className=' flex gap-2'>
              <select 
                className='mx-5 px-2 py-1 rounded-xl bg-[#5e2868]'
                name="" id="">
                {teamType.map((element,idx) =>{
                  return (
                    <option key={idx} value={element}>{element}</option>
                  )
                })}
              </select>
            </div>
          </div>


          <div className='  w-full '>
            <div className='border mx-2 px-5 rounded-xl  m-2 flex py-5  '>
              <button
                className='cursor-pointer active:scale-95'
                onClick={() => setMenuOpen(!IsOpen)}
              >
                {IsOpen ? <FolderCheck color='lightgreen' /> :<FolderClosed color='red'/> }
              </button>
            </div>
          </div>





          <div className='p-2 flex gap-2 m-2 bg-[#010a16] h-screen rounded-2xl  border border-blue-900  sticky  '>
            {/* Tournament Menu Open Navigation  */}
           
            {IsOpen && (
              <section className='rounded-xl border border-blue-950 delay-100 transition starting:scale-0 '>
                <Tournament_Menu />
              </section>
            )

            }
            
            <section className='border border-blue-950 p-2 rounded-xl w-full overflow-y-scroll'>
              section two 
            </section>
          </div>
      </main>
    </>
  )
}

export default Tournament_Profile_Page
