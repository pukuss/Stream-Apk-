import { Banknote } from 'lucide-react'
import React, { useRef, useState } from 'react'

function PaymentInfo({
   formData,
  setformData,
  HandelForm
}) {

  const feeconfig = {
    "host-managed" : {
      fee : 10,
      slots : ""
    },
    "platform-assisted" : {
      fee : 20,
      slots : ""
    }
  }

  const [fee , setfee] = useState(null)
  const gst = useRef("rupees");

    function cal(value){
      const fee = Number(formData.entryFee);
      const platformfee = Number(formData.platformfee) ;
      const gst = getFee(formData.entryFee)
      return gst
    }
    function getFee(value){
      const data = formData.hostingType === "open-hosting"? (<h1 className='flex text-gray-500 '>FREE {value} Off</h1>) : <h1>{feeconfig[formData.hostingType]?.fee || 0}</h1> ;
      return data 
    }

    console.log(gst.current.innerText);
    
  return (
    <>
      <div className='w-full h-full'>
        <header>Payment And Information</header>
        <main className='w-full h-full flex flex-col gap-3'>
          <div className=' px-5 py-5 rounded-xl bg-white text-black flex flex-col '>
            <label className='px-2 ' htmlFor="entryFee">Joiningfee * </label>
            <input 
              className='py-2  rounded-3xl px-3 bg-gray-300  placeholder:text-gray-700 font-bold'
              placeholder='₹ Join Fee Per Players [INR] '
              onChange={HandelForm}
              value={formData.entryFee}
              type="number" name="entryFee" id="entryFee" />
          </div>

          <div className=' px-5 py-5 rounded-xl bg-white text-black flex flex-col '>
            <label className='px-2 ' htmlFor="">Invoice * </label>
            <input 
              className='py-2  rounded-3xl px-3 bg-gray-300'
              placeholder='₹ Join Fee Per Players [INR] '
              type="number" name="" id="" />

              <div>
                <h1>Joining Fee</h1>
                <h2>Payble Ammount</h2>
                <h3>Tax* Gst </h3>
                <h4>Slots * Total Players </h4>
                <h5>Total Ammount In Stock</h5>
                <h1>PrizePool</h1>
                <h2>Credit Ammount</h2>
                <h3>Payment : Pending</h3>
                <h4>Host Prise</h4>
                <h1>Pay To Request: </h1>
                              </div>
          </div>
          <section className='bg-white rounded-xl p-4'>
            <div className='w-full py-2 px-2 flex items-center justify-center font-bold text-xl bg-gray-500'>
              Payment Via Upi
            </div>
            {/* Hosting Fee================== */}
            <div className='flex gap-5 text-black py-5 font-bold w-full'>
              <h1 className='text-slate-400'>Hosting Fee : </h1>
              <div className='flex justify-between items-center text-black gap-2'>{getFee(formData.entryFee) } <span>INR</span> 
              <span className='font-serif  text-[12px] bg-purple-700/10 border-purple-600 text-purple-600 border px-3 rounded-2xl flex items-center '>{formData.hostingType || "Host Plan"} </span></div>
            </div>

            <div  className='flex gap-5 font-bold w-full'>
              <h1 className='text-slate-400'>Entry Fee :  </h1>
              <h1 className='flex justify-between items-center text-black  gap-2'>{formData.entryFee} <span>INR</span></h1> 
            </div>

             <div  className='flex gap-5 font-bold w-full'>
              <h1 className='text-slate'>GST :  </h1>
              <h1 ref={gst} className='flex justify-between items-center text-black gap-2'>{formData.entryFee * 0.18} <span>INR</span></h1> 
            </div>
            <div  className='flex gap-5 font-bold w-full'>
              <h1 className='text-slate-400'>PlatformFee  </h1>
              <h1 className='flex justify-between items-center text-black gap-2'>{formData.platformfee}</h1> 
            </div>

            <div  className='flex gap-5 font-bold w-full'>
              <h1 className='text-slate-400'>Total :  </h1>
              <h1 className='flex justify-between items-center text-black  gap-2'>{cal()} <span>INR</span></h1> 
            </div>

          </section>


        </main>
      </div>
    </>
  )
}

export default PaymentInfo
