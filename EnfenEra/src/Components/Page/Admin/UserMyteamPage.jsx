import { motion } from 'framer-motion'
import { Copy, Plus, PlusCircle, Search, UserRoundIcon } from 'lucide-react'
import { useSelector } from 'react-redux'


function UserMyteamPage() 
{
  const profile = useSelector((state) => state.auth.profile)

  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" border border-white/10 bg-slate-900 p-2 px-4  text-white"
        >
          <div className='flex justify-between '>
            <h1>My Teams</h1>
            <h1 className=' flex  gap-3 text-xs items-center px-2 py-1 bg-white/10 rounded-2xl  '> <UserRoundIcon size={18} color='gray' /> {profile?.userId} <Copy size={18}  /></h1>
          </div>
        </motion.div>

        <section className='py-3 px-5 w-full'>
          <div className='border px-2 transition duration-300 ease-in-out  focus-within:w-[80%] focus-within:border-amber-500 active:border-amber-500 border-gray-600 items-center bg-gray-500/10 rounded-2xl py-2 flex p-1 gap-2 w-80 font-heading text-white font-semibold '>
            <label htmlFor=""> <Search /> </label>
            <input 
            className=' w-full placeholder:text-gray-600  px-2 outline-0'
            placeholder='Search Hear'
            type="search" name="" id="" />
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" border border-white/10  p-2 px-4  text-white overflow-hidden md:flex-col  flex gap-5 flex-wrap "
        >
          <div className='border p-4 rounded-xl px-5  items-center gap-5 active:scale-102 border-slate-950 flex bg-gray-500/50  cursor-pointer hover:scale-101 hover:-translate-y-1 transition duration-300 ease-out hover:border-amber-500  '>
            <span className='bg-white/50 p-2 rounded-full  '><Plus /></span>
            <h1> Make Your Own Team </h1>
          </div>

          <div className='border p-4 rounded-xl  items-center gap-5 active:scale-102 border-slate-950 flex bg-gray-500/50  cursor-pointer hover:scale-101 hover:-translate-y-1 transition duration-300 ease-out hover:border-amber-500  '>
            <span className='bg-white/50 p-2 rounded-full  '><Plus /></span>
            <h1> Join Team </h1>
          </div>


        </motion.div>
      </div>
    </>
  )
}

export default UserMyteamPage
