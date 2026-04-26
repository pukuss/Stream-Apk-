import React, { useState } from 'react'
import { ReceiptIndianRupee, Timer } from 'lucide-react'
import { use } from 'react';
function T_InputBox({
  Placeholder = "Text Input",
  name = "name",
  Titel = "Name Of The Outher",
  discrip = "name of the  creator "
}) {


  //Reuseable Event Handlear
  function HandelForm(e) {
    const { name, value } = e.target;
    setDETA((prev) => ({
      ...prev, [name]: value
    }))
  }

  // VALUE OF THE REPETABLE INPUT BOX ELEMENTS 
  const item = [
    { name: "REQUESTED BY", ID: "USER_ID", Titel: "Name Of The  USER?ADMIN Create Tournament", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "Useraname / ADMIN " },
    { name: "TITEL", ID: "TITEL", Titel: "What Is The Titel Name Of Tournament", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "Titel " },
    { name: "DISCRIPTION", ID: "DISCRIPTION", Titel: "Small Discription", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "Discription" },
    { name: "EMAIL / CONTACT ", ID: "EMAIL", Titel: "Email Id To Inform You And Conformation ", Discription: "Name Of The  USER?ADMIN Create Tournament ", Placeholder: "email" },
  ]

  // ITEM DETA 
  const [DETA, setDETA] = useState({
    USER_ID: "",
    TITEL: "",
    DISCRIPTION: "",
    SELECT_GAME: "",
    PREFERD_TIME: "",
    DATE: "",
    ENTRY_FEES: "",
    EXPECTED_PLAYERS: " "
  })





  const GameUpdate = ["FREE FIRE MAX", "BGMI", "CALL OF DUTY", "COC"]
  const [Player_Range, SetPlayer_Range] = useState(null)

  return (
    <div
      // style={{backgroundImage:url('')}}
      className='w-full h-full

    '>
      



        {/* //MAP USEING TO REPEAT INPUT TASK MULTI TIME */}
        {item.map((Element,index) => (
          <div 
            key={index}
            className='flex flex-col bg-linear-to-r from-pink-600/20 to-black mt-3 border border-pink-700/20 rounded-2xl p-2'>
            <label
              className='px-5 font-bold '
              htmlFor={Element.ID}>
              <h1>{Element.name}</h1>
              <h6 className='text-[10px] space-x-0'> {Element.Titel}</h6>
            </label>
            <input
              className='border border-rose-600/50 px-4  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
              type="text"
              required
              placeholder={Element.Placeholder}
              name={Element.ID}
              onChange={HandelForm}
              id={Element.ID} />
          </div>
        ))}

        {/* GAME SELECTION================================ */}
        <div className='flex flex-col bg-linear-to-r from-pink-600/20 to-black mt-3 border border-pink-700/20 rounded-2xl p-2'>
          <label
            className='px-5 font-bold '
            htmlFor="SELECT_GAME "
          >
            <h1>PREFERED TIME </h1>
            <h6 className='text-[10px] text-gray-400 space-x-0'> Time To Crfeate Tournament And Give You The Conformation Time</h6>
          </label>

          <select
            onChange={HandelForm}
            className='font-black px-4 rounded-xl m-2 border-pink-700/50 border py-2 outline-0'
            name="SELECT_GAME"
            id="SELECT_GAME" >
            {
              GameUpdate.map((Element) => (
                <option
                key={Element}
                  id='SELECT_GAME'
                  className=' rounded-2xl bg-black font-black hover:bg-green-500'
                  value={Element}>{Element}</option>
              ))
            }
          </select>
        </div>


        {/* TIME INPUT================================ */}
        <div className='flex flex-col bg-linear-to-r from-pink-600/20 to-black mt-3 border border-pink-700/20 rounded-2xl p-2'>
          <label
            className='px-5  font-bold '
            htmlFor="DATE">
            <h1 className='flex gap-2'> <Timer size={20} /> PREFERED TIME & DATE</h1>
            <h6 className='text-[10px] text-gray-400 space-x-0'> What is the prefered  time you shoud announce</h6>
          </label>

          <input
            className='border border-rose-600/50 px-4  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
            type="date"
            required
            placeholder="Time"
            name="DATE"
            onChange={HandelForm}
            id="DATE" />

          <input
            className='border border-rose-600/50 px-4  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
            type="time"
            placeholder="Time"
            name="TIME"
            required
            onChange={HandelForm}
            id="TIME" />
        </div>


        {/* ENTRY FEES AND DEPOSITE AMMUNT ==================== */}
        <div className='flex flex-col bg-linear-to-r from-pink-600/20 to-black mt-3 border border-pink-700/20 rounded-2xl p-2'>
          <label
            className='px-5 font-bold '
            htmlFor="ENTRY_FEES">
            <h1>ENTRY FEES AND PAY AMMOUNT</h1>
            <h6 className='text-[10px] space-x-0 text-gray-400'> What Is The Amount To Pay And Players Payeble Amount </h6>
          </label>
          <input
            className='border outline-0 border-rose-600/50 px-4  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
            type="text"
            required
            inputMode="numeric"
            maxLength={3}
            placeholder="₹ Pay Ammount 50 to 999"
            name="ENTRY_FEES"
            onChange={HandelForm}
            id="ENTRY_FEES" />


          <label
            className='text-[8px] text-gray-400 font-mono px-6'
            htmlFor=""
          >5% CUT OF By Maintaniance and Managment Charge</label>
          <input
            className='border outline-0 border-rose-600/50 px-4  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
            type="text"
            // required
            readOnly
            inputMode="numeric"
            // maxLength={3}
            // 5% Tax cut By maintainance fee ===========================================================>>>>>>>>>>>>>>
            value={DETA.ENTRY_FEES * 5 / 100}
            placeholder="₹ Pay Ammount 50 to 999"
            name="ENTRY_FEES"
            onChange={HandelForm}
            id="ENTRY_FEES" />

        </div>


        {/* EXPECTED PLAYERS TO JOIN IN A MATCG =========================================== */}
        <div className='flex flex-col bg-linear-to-r from-pink-600/20 to-black mt-3 border border-pink-700/20 rounded-2xl p-2'>
          <label
            className='px-5 font-bold '
            htmlFor="EXPECTED_PLAYERS">
            <h1>ENTRY FEES AND PAY AMMOUNT</h1>
            <h6 className='text-[10px] space-x-0'> What Is The Amount To Pay And Players Payeble Amount </h6>
          </label>

          <div className='flex items-center w-full  px-4 gap-5'>
            <input
              className='border in-range:bg-amber-900 border-rose-600/50 px-4 w-full  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
              type="range"
              required
              inputMode="numeric"
              name="EXPECTED_PLAYERS"
              onChange={(e) => {
                SetPlayer_Range(e.target.value)
                setDETA((prev) => (
                  { ...prev, EXPECTED_PLAYERS: e.target.value }
                ))
              }}
              id="EXPECTED_PLAYERS" />
            <label
              className='border px-5 p-1  flex gap-2 rounded-3xl font-black  bg-linear-to-r from-pink-600/20 to-black border-pink-800/50'
              htmlFor="">{Player_Range} <h1>Players</h1></label>
          </div>
        </div>

        {/* ============================= */}
        {/* SUBMIT BUTTON================ */}
        {/* ============================= */}
        <div className='flex flex-col bg-linear-to-r from-pink-600/20 to-black mt-3 border border-pink-700/20 rounded-2xl p-2'>
          <label
            className='px-5 font-bold '
            htmlFor={Element.ID}>
            <h1>ENTRY FEES AND PAY AMMOUNT</h1>
            <h6 className='text-[10px] space-x-0'> What Is The Amount To Pay And Players Payeble Amount </h6>
          </label>
          <button
            onClick={() => {

              console.log(DETA);

            }}
            className='border py-3 rounded-xl primary-back m-4 border-cyan-500/50 font-black hover:bg-blue-600'
            type="submit">
            Quick Request
          </button>
        </div>



 
    </div>




  )
}

export default T_InputBox
