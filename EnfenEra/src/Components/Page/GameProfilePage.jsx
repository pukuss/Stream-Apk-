import React, { useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import LoadingScreen from '../common/LoadingScreen';

import WebLogo from '../horizon/WebLogo'
import { ArrowLeft, BadgeIndianRupeeIcon, Bubbles, CarTaxiFront, ChevronUp, DonutIcon, Gamepad2, IndianRupee, LeafyGreen, Menu, MoveUpIcon, PlusCircle, ShoppingBag, TruckElectric, Verified } from 'lucide-react';

function GameProfilePage() {
  const gameData = ["bgmi","freefire","callofduty","coc"];
  const navigate = useNavigate();
  const {id} = useParams();


  const [activeFooter, setActiveFooter] = useState();

  const contact = [
    {
      id :1 ,
      name : "Call Of Duty Mobile",
      appLogo : "/images/logos/cod.png",
      banner : "/images/pic/cod_background.jpg",
      appName : "Call Of Duty Mobile",
      appHost : "Krafton",
      about : "Call of duty"
    },
    {
      id :2 ,
      name : "BGMI India",
      appLogo : "/images/logos/bgmi.png",
      banner : "/images/pic/bgmi_background.jpg",
      appName : "BGMI (Battlegrounds Mobile India)",
      appHost : "Krafton",
      about : "Battlegrounds Mobile India"
    },
    {id:2 ,name : "BGMI India", price : 895452},
    {id:3 ,name : "Free Fire India", price : 895452},
    {id:4 ,name : "Clash Of Clans", price : 895452},

  ];
  const itemlist = contact.find((item) => item.id === Number(id));
  
  return (
    <>
      <div className='w-full h-full relative'>
        <div className='absolute top-0 w-full shadow-[10px_10px_500px_50px] shadow-blue-500 '></div>

      
        <div className='h-full w-full pb-10   relative'>
          <header className='flex gap-5  w-full px-5 py-5'>
            <div 
              onClick={() => navigate('/')}
              className={``}
            ><ArrowLeft /></div>
            
            <div className='flex flex-col justify-center '>
              {/* <span><WebLogo /> </span> */}
              <span className='logo-font text-white flex'> <span className='text-purple-600 gap-5 flex'><ShoppingBag color='white' /> H</span>ost Product</span>
            </div>
          </header>
          
          <div className='max-w-350 m-auto  px-5 py-2 flex bg-gray-950 rounded-xl border border-slate-900'>
            <div className='h-20 flex w-full items-center'>
              <div className='flex '><img className='flex h-20' src={itemlist.appLogo} alt="" /></div>
              <div className='px-3 flex flex-col justify-between  h-full '> 
                <span className='text-[10px] text-gray-500 font-semibold'>{itemlist.appHost}</span>
                <h1 className='font-bold '> {itemlist.appName}</h1>
                <h1 className='font-medium flex gap-5 text-[10px] items-center'>
                  <span className='flex  items-center gap-2 text-green-600'> <IndianRupee size={16}  color='white' className='bg-green-700 p-0.5 rounded-2xl'  /> Offer</span>
                  <span className='flex items-center  gap-2 text-gray-500'> <TruckElectric size={16} fill='gray ' /> Offer2 </span>
                  <span className='flex  items-center gap-2 text-gray-500 '><Verified size={16} color='white' fill='gray' /> Offer3</span>
                </h1>
              </div>
            </div>

            <div className='py-1'>
              <Menu />
            </div>
          </div>

          <main className='w-full h-full'>
          {/* background image section  */}
          <div className=' max-w-350  my-10 px-5 overflow-hidden m-auto '><img className='object-cover md:h-100 h-80 rounded-2xl object-centers ' src={itemlist.banner} alt="" /></div>


          </main>
            
        </div>

        <main className='max-full m-auto h-full md:px-10 px-5 bg-gray-700/30 rounded-t-2xl border-gray-500 border py-5'>
        <div>
          <h1 className='font-semibold uppercase '>{itemlist.name}</h1>
          <h1 className='flex items-center gap-3 text-[12px]'><Bubbles size={15 } /> <p>Importaint Notice : Only For Applicable Indian Reagion Players</p></h1>

          <h1 className='py-5 flex items-center gap-3 font-medium'> <Gamepad2 color='gray' /> Join Today Now <span className='flex  items-center gap-3 text-sm rounded-4xl bg-linear-to-bl from-blue-500 to-blue-700 px-5 font-semibold py-2'><PlusCircle size={20 } /> Enter Your Player Id Or List</span></h1>
        
          <div className='w-full  '>
            <h1 className='flex uppercase font-bold text-gray-500 '>description</h1>
            <h2 className='flex  pt-5 pb-3 font-bold text-xl'>About {itemlist.name} Game</h2>

            <p className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptas provident vitae soluta commodi aut obcaecati fugit similique pariatur et suscipit quod sequi ducimus reprehenderit voluptatem, maiores explicabo. Explicabo, cum.</p>
          </div>

          <div>
            
          </div>
        </div>
        </main>


        <footer className='bg-gray-800/50 fixed bottom-0 w-full border border-gray-700 rounded-t-2xl py-2 px-5'>
          <div className='flex'>
            <div className='text-[10px] m-auto  flex items-center gap-3 border-b-3 px-3 border-gray-500'> <ChevronUp color='gray' size={15} /></div>
          </div>
          <div>
            {activeFooter && (
              <div>
                
              </div>
            )}
          </div>
        </footer>

    </div>
    </>
  )
}

export default GameProfilePage
