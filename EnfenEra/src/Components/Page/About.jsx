import React, { useState, useRef } from 'react'
import FooterBackground from '../horizon/FooterBackground'
import QuantumBackground from '../horizon/QuantumBackground'
import AetherForgeBackground from '../horizon/AetherForgeBackground'
import { Import, Power, PowerSquare, ShoppingBagIcon, Spool } from 'lucide-react'

// temp 
import { GenerateId } from '../../utils/idGenerator'
const id = GenerateId();
console.log(id);

//if it work  testing..........................
import { useScrollBlur } from '../../hooks/UseScrollBlur'

import { AdCard, RootPage, DocumentDownload } from '../../pages/HOME/index'
import Devoloper_Profiles from '../../pages/ABOUT/Devoloper_Profiles'


function About() {

    const [DocPopOpen, SetDocPopOpen] = useState(true);

    const LogPop = useState(false)
    const imageRef = useRef(null);



    // const {} = UseScrollBlur()
    useScrollBlur(10, 500, imageRef);

    return (
        <>
            <div className=' w-full relative  h-screen'>
                {/* <QuantumBackground />  */}
                <div

                    className=' w-full h-full absolute overflow-hidden'
                >
                    <img
                        ref={imageRef}

                        className='w-full h-full object-cover  '
                        src="IMAGE/UserProfile.jpg" alt="Background Image" />
                    {/* <AetherForgeBackground /> */}
                    {/* <FooterBackground/> */}

                </div>




               


              
            </div>

            <div className='max-w-350  m-auto  mt-5'>
                <Devoloper_Profiles />
            </div>


            {/* Download Cards ================================= */}
            <div className='w-full  h-full bg-[#050505]'>
                <div className='max-w-350 m-auto h-full'>
                    {/* <DownloadBar /> */}
                </div>


                {/* <div className='max-w-350 m-auto h-full'>
                    <AdCard />
                </div>
                 */}
                <div className='max-w-350 m-auto h-full bg-black '>
                </div>
            </div>
        </>
    )
}

export default About

