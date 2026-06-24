import React, { useState } from 'react'
// import { HandelForm } from '../../../utils/handelForm'
import { GenerateId } from '../../../utils/idGenerator'
import { CloudAlert, Mail, MessageCircleReply, Pen, PenBox, RefreshCcw, RefreshCcwDot, RussianRuble, Ticket, Trophy, User2 } from 'lucide-react';

function BasicInfo({
  register,
  setValue,
}) {

  // VALUE OF THE REPETABLE INPUT BOX ELEMENTS 
  const item = [
    { icon :User2 , name: "Host Name", ID: "name", Titel: "Choose a name worthy of the tournament", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "Useraname / Host Name  " },
    { icon :Trophy , name: "Title", ID: "title", Titel: "A title name of your arena ", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "Titel " },
    {icon : MessageCircleReply,  name: "Discription", ID: "discription", Titel: " Enter Anything About Your Idera And more ...", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "Discription" },
    { icon : Mail, name: "EMAIL / CONTACT ", ID: "email", Titel: "Email Id To Inform You And Conformation ", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "email" },
  ];

  
  const getUserId = GenerateId();
  const [id, setId] = useState("");



  return (
    <>
      <div
        className='w-full h-full'>
        <header className='px-5 font-bold rounded-xl bg-slate-950 py-5'>
          <h1 className='text-2xl font-heading flex gap-4 items-center'><PenBox /> Hii fii the basic details and send request </h1>
          <p className='text-sm text-gray-500 '> Fill Basic Details & Go Ahed Then We Verify And Host Tournament</p>
        </header>


        <main>
         
              {/* request id  */}
            <div
              className='flex w-full  flex-col bg-linear-to-bl from-gray-950 to-slate-900  text-white  mt-3 border border-blue-600 rounded-xl p-2'>
              <label
                className='px-5 font-bold '
                htmlFor="requestId">
                <h1>Generate Request Id</h1>
                <h6 className='text-sm space-x-0 text-gray-500'> Generate user request Id that help identyfy your tournament </h6>
              </label>
              {/* <h1>{select,discop}</h1> */}
              <div className='w-full flex gap-2  '>
                <input
                  className='border w-full   px-4  font-semibold text-blue-600  placeholder:text-white placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
                  type="text"
                  {...register("requestId")}
                  readOnly
                  placeholder="Generate Id"
                  id="requestId" />

                <button
                  id='requestId'
                  type='button'
                  className='border font-bold gap-2 flex cursor-pointer items-center justify-center   px-3 text-sm text-amber-50 border-blue-600  bg-slate-900  rounded-xl'
                  onClick={() => {
                    const data = getUserId
                    setValue("requestId",data)
                    
                  }}
                ><RefreshCcw size={20} /> RUN</button>
              </div>
            </div>

            {/* //MAP USEING TO REPEAT INPUT TASK MULTI TIME */}
            {item.map((Element, index) => (
              <div
                key={index}
                className='flex flex-col bg-linear-to-bl from-gray-950 to-slate-900  text-white mt-3 border border-blue-600 rounded-2xl p-2 py-4 '>
                <label
                  className='px-5 font-bold '
                  htmlFor={Element.ID}>
                  <h1 className='flex gap-5 items-center'><Element.icon color='gray' size={18}/> {Element.name}</h1>
                  <h6 className='text-[10px] text-gray-500 space-x-0'>  {Element.Titel}</h6>
                </label>

                <input
                  className=' px-4 outline-0 bg-gray-300 font-medium text-black  placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
                  type="text"
                  {...register(Element.ID)}
                  required
                  placeholder={Element.Placeholder}
                  id={Element.ID} />
              </div>
            ))}
        </main>

      </div>
    </>
  )
}

export default BasicInfo
