import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LoadingScreen from '../common/LoadingScreen';
import { gamesData } from '../../temp/gameData';


import WebLogo from '../horizon/WebLogo'
import { Share2,Trophy,Info, Settings,ArrowLeft, BadgeIndianRupeeIcon, Bubbles, CarTaxiFront, ChevronUp, DonutIcon, Gamepad2, IndianRupee, LeafyGreen, Menu, MoveUpIcon, PlusCircle, ShoppingBag, TruckElectric, Verified, VerifiedIcon } from 'lucide-react';
import BottomSheet from '../common/BottomSheet';

function MenuItem({ icon, title }) {
  return (
    <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition">
      <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
        {icon}
      </div>

      <span className="font-semibold">{title}</span>
    </button>
  );
}


function GameProfilePage() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [openSheet ,setOpenSheet] = useState(false);
  console.log(openSheet);
  


  const [activeFooter, setActiveFooter] = useState(true);


  const product = gamesData.find((item) => item.slug === slug);
  console.log(product);

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
              <span className='font-heading font-bold text-xl text-white flex'> <span className='text-purple-600 gap-5 flex'><ShoppingBag color='white' /> H</span>ost Product</span>
              <p className='px-11 font-tech  text-[12px]'>{product.currentStatus} </p>
            </div>
          </header>


          {/* B O X  */}
          <div className='max-w-350 md:min-h-120 overflow-hidden justify-evenly  m-auto relative flex bg-gray-950 rounded-xl  border border-slate-900  flex-col'>
            <div className=' w-full z-0  h-full absolute'><img className=' object-cover object-center' src={product.images.banner} alt="" /></div>
            <div className=' absolute left-0 h-full shadow-[0px_0px_500px_400px] shadow-black'></div>

            <div className='relative  px-5 py-5'>
              <div>
                <h1 className='font-body text-[12px] text-gray-500'>{product.category}</h1>
              </div>

              <div className='flex items-center '>
                <div className='not-md:w-20  h-25'><img className='h-full w-full ' src={product.images.logo} alt="" /></div>
                <div>
                  <h1 className='font-heading text-3xl font-bold'>{product.officialName}</h1>
                  <div className='flex items-center gap-5 '>
                    <p className='font-body text-sm font-semibold text-gray-400 '>{product.product ||" none"}</p>
                    <h1 className='flex gap-3 items-center text-[12px] '>{product.platforms.map((ele, idx) => (
                      <span
                        className='bg-gray-500/20 px-3 rounded-2xl '
                        key={idx}>
                        {ele}</span>
                    ))}</h1>
                  </div>
                </div>
              </div>
              
              <div className='flex gap-8 items-center pt-5'>
                <div className='text-sm font-heading font-semibold '> release At : <span>{product.releaseDate}</span></div>
                <div className='text-sm font-heading '>{product.currentStatus}</div>
              </div>

              <div className='pt-5'>
                <div className='text-[12px] font-heading flex gap-5 items-center '>{product.hero.title}  <span className='flex items-center gap-3 text-sm font-semibold    '>Verified <VerifiedIcon  strokeWidth="transparent" size={15} className='fill-blue-500 '  /></span> </div>
                <div className='font-body text-sm  font-semibold uppercase'>{product.hero.subtitle}</div>
              </div>

              <div>
                <h1 className='text-[12px] pt-3 font-heading '>{product.hero.description}</h1>
              </div>

              <div className='w-full flex justify-between items-center  border mt-8 border-gray-600'>
                <button 
                  onClick={() => setOpenSheet((prev)=> !prev)}
                  className='text-sm bg-blue-500  rounded-sm  px-5 py-2 cursor-pointer'
                  type='button'>{product.hero.buttonText}</button>
                
                <h1>View Details</h1>
              </div>


            </div>



          </div>
        </div>


        {/* M A I N  C O N T A I N T   I N F O R M A T I O N */}
        <main className='max-full m-auto h-full md:px-10 px-5 bg-gray-700/30 rounded-t-2xl border-gray-500 border py-5'>
           {/* A B O U T  */}
          <div>
            <h1 className='font-black uppercase text-taupe-500  font-heading text-2xl'>{product.about.heading}</h1>
            <h1 className='flex  gap-3 text-sm text-gray-500 '><Bubbles size={20} /> <p>{product.about.description}</p></h1>
            <h1 className='py-5 flex items-center gap-3 font-medium'> <Gamepad2 color='gray' /> Join Today Now <span className='flex  items-center gap-3 text-sm rounded-4xl bg-linear-to-bl from-blue-500 to-blue-700 px-5 font-semibold py-2'><PlusCircle size={20} /> Enter Your Player Id Or List</span></h1>
          </div>
          {/* W H O   MADE   M I N E C R A F T  */}
          <div>
            <h1 className='font-heading text-taupe-500 font-bold font-bold text-2xl'>{product.madeBy.heading}</h1>
            <h2 className='text-sm px-5 text-gray-500'>{product.madeBy.description}</h2>
            <h3 className='flex gap-2 md:flex-row  flex-col'>{product.madeBy.companies.map((elemet,idx) => (
              <h1 className='text-[15px] font-tech px-5 py-4 md:py-8 font-bold text-gray-400'> {elemet.role} : {elemet.name}</h1>
            ))}
            </h3>
          </div>
          {/* HISTRY  */}
          <div className='py-5'>
            <h1 className='text-2xl text-taupe-500 font-bold  font-heading font-bold '>{product.history.heading}</h1>
            <h2 className='font-light text-[13px] pb-5 px-5 text-gray-600 '>{product.history.shortHistory}</h2>
            <h3>{product.history.timeline.map((element,idx) => (
              <h4 className='flex flex-col'>
                <span className='font-tech text-taupe-400 font-bold'>{element.year}</span>
                <span className='font-heading '>{element.title}</span>
                <span className='font-sans text-sm text-gray-500'>{element.description}</span>
              </h4>
            ))}</h3>
          </div>

          {/* GAMEPLAY  */}
          <div>
            <h1>{product.gameplay.heading}</h1>
            <h1>{product.gameplay.description}</h1>
            <h3>{product.gameplay.features.map((e,idx) => (
              <h1 key={idx} className=''>{e}</h1>
            ))}</h3>
            
            <h1>Popularmap's</h1>
            <h1>
              {product.popularMaps }
            </h1>
          </div>

          <div>
            <h1>{product.whyPopular.heading}</h1>
            <h2>{product.whyPopular.points.map((ele,idx) => (<h1>{ele}</h1>))}</h2>
          </div>
        </main>


       
        
          <div>
          
              <div>
              <BottomSheet
        open={openSheet}
        onClose={() => setOpenSheet(false)}
        title="Game Options"
      >
        <div className="space-y-3">
          <MenuItem icon={<Gamepad2 />} title="Game Details" />
          <MenuItem icon={<Trophy />} title="Tournaments" />
          <MenuItem icon={<Info />} title="Rules & Info" />
          <MenuItem icon={<Share2 />} title="Share Game" />
        </div>
      </BottomSheet>
              </div>
          </div>
    
      </div>
    </>
  )
}

export default GameProfilePage
