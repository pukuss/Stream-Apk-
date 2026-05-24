import { Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react'

function HeroSection() {
    const tournamentCard = [
        { name: "CALL OF DUTY MOBILE", url: "images/logos/cod.png", path: "", titel: "Call Of Duty Warzone " },
        { name: "BGMI INDIA", url: "images/logos/bgmi.png", path: "", titel: "Call Of Duty Warzone " },
        { name: "FREE FIRE INDIA", url: "images/logos/freefire.png", path: "", titel: "Call Of Duty Warzone " },
        { name: "CLASH OF CLANS", url: "images/logos/freefire.png", path: "", titel: "Call Of Duty Warzone " }
    ]




    return (
        <>
            <div className='w-full h-full'>
                <header>
                    <div className='flex justify-between items-center px-1'>
                        <div>
                            <h1 className='text-xl font-black'>Improve your gaming expriance</h1>
                            <p className='text-sm font-mono text-gray-500 '>Active Games You Can Host And Join</p>
                        </div>
                        <div>
                            <button
                                className='text-sm  px-5 py-1 rounded-sm bg-gray-500/20 font-black text-gray-400 hover:text-white active:scale-95 cursor-pointer'
                                type='button'>
                                Explore Matches
                            </button>
                        </div>
                    </div>

                    <div className=' rounded-xl flex px-5 items-center  bg-gray-500/10  mb-3 '>
                        <div> <img className='w-20 md:w-30' src="/images/logos/bgmi.png" alt="" /> </div>
                        <div><img className='w-20 md:w-30' src="images/logos/cod.png" alt="" /></div>
                        <div><img className=' w-30 md:w-30' src="images/logos/freefire.png" alt="" /></div>
                    </div>

                    <div><h1 className='font-bold py-2'>Start Your Tournament Hear </h1></div>
                    <div className='grid  md:grid-cols-2 md:grid-rows-2 py-2 justify-center items-center md:px-5 gap-1 rounded-xl  px-5   bg-gray-500/10  mb-3 '>

                        {tournamentCard.map((element, index) => {

                            return (
                                <section key={index} className='flex overflow-hidden  rounded-xl gap-1  top- z-10 max-w-90 bg-black '>
                                    <div className='flex items-center'>
                                        <img className='w-20 flex items-center ' src={element.url} alt="logo" />
                                    </div>

                                    <div className='px-2 bg-gray-500/10 w-50 rounded-sm m-2 p-5'>
                                        <h1 className='text-sm font-black not-md:text-[10px] '>{element.name}</h1>
                                        <p className='text-[10px] italic  text-gray-400 '>{element.titel}</p>
                                    </div>

                                    <div>
                                        <button
                                            type='button'
                                            className='px-5 md:text-sm text-sm  bg-amber-500 font-black rounded-b-2xl py-1'>
                                            Play
                                        </button>
                                        <p className='font-bold text-gray-500 items-center italic  flex justify-center text-sm'>20:50</p>
                                    </div>
                                </section>
                            )
                        })}
                    </div>
                     <div className=' rounded-xl flex px-5 items-center  bg-gray-500/10  mb-3 w-full '>
                            <section className=' w-full '>
                                <div>
                                    <h1 className='font-black pt-2 px-2 text-xl'>Daily Trafic Of Our Website </h1>
                                    <p className='font-extralight text-sm px-2'>one of the trusted platform get extraodenary reword get premeum feature </p>
                                </div>
                                <div className='w-full  flex gap-5 py-2 '>
                                    <h1 className='border-red-800 border-b h-40 w-40 flex items-center justify-center font-black bg-red-800/50 bg-linear-to-b to-black text-red-500  text-[15px] rounded-full ' >User Count : 45+</h1>
                                    <h1 className='border-b border-indigo-800 h-40 w-40 flex items-center justify-center font-black bg-indigo-500/50 text-indigo-500 bg-linear-to-b to-black text-[15px] rounded-full ' >Active User : 19+</h1>
                                    <h1 className='border-b border-cyan-800 h-40 w-40 flex items-center justify-center font-black text-cyan-500 bg-cyan-500/50 bg-linear-to-b to-black text-[15px] rounded-full ' >Daily Activity : 507%</h1>
                                </div>
                            </section>

                        </div>

                </header>

                <main className='w-full h-full block relative group z-0 overflow-hidden' >
                    <div
                        style={{
                            backgroundImage: "url('/images/pic/cod_background.jpg')"
                        }}
                        className='w-full    min-h-[80vh] bg-right md:bg-center  bg-cover rounded-sm overflow-hidden'>
                        {/* opacity leyar */}
                        <div className='absolute  bg-black/50 z-0 w-full bg-linear-to-b to-black h-full'></div>


                        <section className='absolute bottom-0 text-gray-500 w-full group-hover:text-white z-10 left-0'>
                            <div className=' px-5 font-normal italic  py-2 flex gap-3  '>
                                <h2 className='flex items-center italic text-sm not-md:text-[10px] gap-2'>Follow Us On Youtube <Youtube size={20} color='red' /></h2>
                                <h1 className='flex  items-center italic text-sm not-md:text-[10px] gap-2' >Follow Us On Instagram <Instagram size={20} color='pink' /></h1>
                                <h3 className='flex  items-center italic text-sm not-md:text-[10px] gap-2'>Follow Us On Facebook <Facebook size={20} color='blue' /></h3>
                            </div>
                        </section>
                    </div>
                </main>

                <main className='w-full h-full relative z-0 mb-5'>
                     <div className='absolute  bg-black/50 z-0 w-full bg-linear-to-b to-black h-full'></div>
                    <div
                        className=' w-full min-h-[90vh] bg-center bg-cover '
                        style={{ backgroundImage: "url('/images/pic/bgmi_background.jpg')" }}>




                    </div>
                </main>

                <main className='w-full h-full relative z-0'>
                     <div className='absolute  bg-black/50 z-0 w-full bg-linear-to-b to-black h-full'></div>
                    <div
                        className=' w-full min-h-[90vh] bg-center bg-cover '
                        style={{ backgroundImage: "url('/images/pic/coc_background.jpg')" }}>



                    </div>
                </main>

                <main className='w-full h-full relative z-0'>
                     <div className='absolute  bg-black/50 z-0 w-full bg-linear-to-b to-black h-full'></div>
                    <div
                        className=' w-full min-h-[90vh] bg-center bg-cover '
                        style={{ backgroundImage: "url('/images/pic/freefire_background.jpg')" }}>


                    </div>
                </main>

                <footer>

                </footer>
            </div>
        </>
    )
}

export default HeroSection
