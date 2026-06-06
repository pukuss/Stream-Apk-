import React from 'react'
import { useNavigate } from 'react-router-dom'

function MainAuth_Page() {
  const navigate = useNavigate();
  
  return (
    <>
        <div className='w-full h-screen relative'>
          <div className=' absolute w-full h-full top-0 overflow-hidden' 
          ><img 
              className='w-full h-full origin-center object-cover blur '
              src="/IMAGE/blueartback.jpg" alt="" /></div>

          <section className=' absolute top-0'>
            <header></header>
            <main>hii</main>
            <footer></footer>
          </section>
            
        </div>
    </>
  )
}

export default MainAuth_Page
