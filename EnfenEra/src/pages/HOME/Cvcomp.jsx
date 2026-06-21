import React, { useState } from 'react'
import { Info,BadgeInfo,Code2,FileCode2, PhoneCallIcon, MailPlus, Projector, DotIcon, School2, } from 'lucide-react'
import {staticImage} from '../../constants/cloud.Image'


function Cvcomp() {
    const [isproject, setproject] = useState(true);

    

    const projectname = [
        "Cafe Management System","Hospital Management System", "Netflix Clone"
    ]
    const qualification = [
        "10th , Baugachhi Kashibala Vidyapith (H.S)",
        "12th , Rajballavpur High School(H.S) Sci + Electrical",
        "Bootcamp  At Computer Science & Engeenering from AIR SPACE INDIA",
        "Diploma Appering..."
        ]

  return (
    <div>
      <div className="w-full h-full relative mb-5 overflow-hidden rounded-2xl ">
            {/* styel  */}
            <div className=' absolute w-full top-0 shadow-[0_0_400px_40px]  shadow-cyan-500'></div>
                    {/* <div className="absolute  bg-black/80 z-0 w-full bg-linear-to-b to-black h-full"></div> */}
                    <div className="bg-black px-5 py-3 rounded-2xl">
                        <div className="pb-5">
                            <h1 className="text-2xl font-bold flex items-center gap-3 bg-clip-text text-transparent w-fit bg-linear-to-r from-pink-700  via-orange-500 to-yellow-400"><Info color='gray'/> About Me </h1>
                            <p className="text-sm font-bold flex gap-2"> INFENERA & INFENCO    <span className="text-red-600">  STUDIO</span></p>
                        </div>


                        <div className="flex flex-row not-md:flex-wrap md:gap-30 gap-10   ">
                            <div className="h-70 w-50 overflow-hidden rounded-2xl  "><img className='object-cover object-center h-full ' src={staticImage.admin_banner} alt="" /></div>
                            <div>
                                <div className="flex flex-col gap-1">
                                    <h1 className="font-semibold text-xl flex gap-3 text-gray-400 items-center"><BadgeInfo size={18} color="yellow" /> PRASHANTA MONDAL</h1>
                                    <h2 className=" flex gap-2 font-semibold text-sm items-center pb-4"><Code2 color="gray" size={18} /> A FullStack Devoloper & Cloude Technology</h2>
                                    <h3 className="flex items-center gap-2 ">
                                        <span className="flex text-purple-500 items-center text-[12px] gap-2 font-semibold border px-2 bg-purple-500/10 border-purple-600 rounded-2xl py-0.5"><FileCode2 color="purple"  size={15} /> Programing </span>
                                        <span className=" text-sm font-semibold text-gray-500">Python , JavaScript, Rush ,Go, Oops </span>
                                    </h3>
                                    <h4 className='flex gap-2 text-sm font-semibold text-gray-300'>
                                        <span> Contact : </span>
                                        <span className='flex gap-1 items-center'><PhoneCallIcon size={15}/> +91 89455*****</span>
                                        <span className='flex gap-1 items-center'> <MailPlus size={15} />prashantaa007@gmail.com</span>
                                    </h4>
                                
                                </div>

                                <div className='border w-fit px-5 py-0.5 rounded-xl bg-green-500/10 text-sm font-semibold text-green-600  mt-1'>Read More</div>
                            </div>
                        </div>


                    </div>
    </div>
    </div>
  )
}

export default Cvcomp
