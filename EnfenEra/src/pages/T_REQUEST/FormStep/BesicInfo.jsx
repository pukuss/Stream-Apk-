import React, { useState } from 'react'
// import { HandelForm } from '../../../utils/handelForm'
import { GenerateId } from '../../../utils/idGenerator'
import { CloudAlert, RussianRuble } from 'lucide-react';

function BasicInfo({
  formData,
  setformData,
  HandelForm
}) {

  // VALUE OF THE REPETABLE INPUT BOX ELEMENTS 
  const item = [
    { name: "Host Name", ID: "name", Titel: "Choose a name worthy of the tournament", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "Useraname / Host Name  " },
    { name: "Title", ID: "title", Titel: "A title name of your arena ", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "Titel " },
    { name: "Discription", ID: "discription", Titel: " Enter Anything About Your Idera And more ...", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "Discription" },
    { name: "EMAIL / CONTACT ", ID: "head.email", Titel: "Email Id To Inform You And Conformation ", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "email" },
  ]
  const getUserId = GenerateId();
  const [id, setId] = useState("");



  return (
    <>
      <div
        className='w-full h-full'>
        <header className='px-5 font-bold '>
          <h1 className='text-xl'>Basic User Infomation</h1>
          <p className='text-sm'> Fill Basic Details & Go Ahed Then We Verify And Host Tournament</p>
        </header>


        <main>
          <form
            action="" className='w-full '>

            <div

              className='flex w-full  flex-col bg-slate-950  text-white bg-conic-120 mt-3 border border-pink-700/20 rounded-sm p-2'>
              <label
                className='px-5 font-bold '
                htmlFor="requestId">
                <h1>Generate Request Id</h1>
                <h6 className='text-sm space-x-0 text-gray-500'> Generate user request Id that help identyfy your tournament </h6>
              </label>
              {/* <h1>{select,discop}</h1> */}
              <div className='w-full flex gap-2  '>
                <input
                  className='border w-full   px-4  font-medium text-purple-400 placeholder:text-white placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
                  type="text"
                  value={formData.head.requestId}
                  readOnly
                  placeholder="Generate Id"
                  name="head.requestId"
                  onChange={HandelForm}
                  id="requestId" />
                
                <button
                  id='requestId'
                  className='border font-bold gap-2 flex items-center justify-center py-0 px-3 border-white  bg-slate-900  rounded-xl'
                  onClick={() => {
                    const data = getUserId
                    setId(data)
                    setformData((prev) => ({
                      ...prev, head: { ...prev.head, requestId: data }
                    }))
                  }}
                ><CloudAlert /> RUN</button>
              </div>
            </div>

            {/* //MAP USEING TO REPEAT INPUT TASK MULTI TIME */}
            {item.map((Element, index) => (
              <div
                key={index}
                className='flex flex-col bg-slate-950  text-white mt-3 border border-slate-700 rounded-2xl p-2'>
                <label
                  className='px-5 font-bold '
                  htmlFor={Element.ID}>
                  <h1>{Element.name}</h1>
                  <h6 className='text-[10px] text-gray-500 space-x-0'> {Element.Titel}</h6>
                </label>

                <input
                  className=' px-4 outline-0 bg-slate-900 font-medium  placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
                  type="text"
                  value={
                    Element.ID.includes(".")
                      ? formData[
                      Element.ID.split(".")[0]
                      ]?.[
                      Element.ID.split(".")[1]
                      ]
                      : formData[Element.ID]
                  }
                  required
                  placeholder={Element.Placeholder}
                  name={Element.ID}
                  onChange={HandelForm}
                  id={Element.ID} />
              </div>
            ))}

          </form>

        </main>

      </div>
    </>
  )
}

export default BasicInfo
