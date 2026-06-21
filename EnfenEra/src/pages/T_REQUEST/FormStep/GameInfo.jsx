import { Gamepad2, LucideGamepadDirectional, SearchAlert, Type } from 'lucide-react';
import React from 'react'
// import { HandelForm } from '../../../utils/handelForm'


function GameInfo({
  formData,
  setformData,
  HandelForm
}) {


  const gametype = [ " Select Game ","FREE FIRE INDIA", "BGMI INDIA", "CALL OF DUTY", "CLASH OF CLANS"];
  const gameMode = ["select","Solo", "Duo", "Squad"]
  // const map = ["map"]
  const matchType = [ "select","Team Deathmatch","Domination","Assault","classic"]



  function gameMaps(formData){
     const mapReturn = []
    if (formData.map == "FREE FIRE INDIA" ) {
      
    }
}
  return (
    <>
      <div className='w-full h-full'>
        <main>
          {/* <form action=""> */}
            {/* GAME SELECTION================================ */}
            <div className='flex flex-col bg-linear-to-bl from-gray-950 to-slate-900 text-white mt-3  border-blue-600 border rounded-2xl p-2 py-4'>
              <label
                className='px-5 font-bold '
                htmlFor="SELECT_GAME"
              >
                <h1 className='flex items-center gap-5'><Gamepad2 size={18} color='gray'/> Game Name </h1>
                <h6 className='text-[10px] text-gray-500 space-x-0'> Select a game you want to create or host tournament</h6>
              </label>

              <select
                onChange={HandelForm}
                className='font-black px-4 rounded-xl m-2  bg-gray-600 py-2 outline-0'
                name="game"
                required
                value={formData.game}
                id="game" >
                {
                  gametype.map((Element) => (
                    <option
                      key={Element}
                      id='game'
                      required
                      className=' rounded-2xl text-black  bg-gray-500 font-black hover:bg-green-500 overflow-hidden'
                      value={Element}>{Element}</option>
                  ))
                }
              </select>
            </div>

            {/* GAME MODE SOLO DUO SQURD===============================  */}
            <div className='flex flex-col bg-linear-to-bl from-gray-950 to-slate-900 text-white mt-3  border-blue-600 border rounded-2xl p-2 py-4'>
              <label
                className='px-5 font-bold '
                htmlFor="SELECT_GAME "
              >
                <h1 className='flex items-center gap-5 '><LucideGamepadDirectional size={18} color='gray'/> Game Mode </h1>
                <h6 className='text-[10px] text-gray-400 space-x-0'> What is the mode of your Tournament /solo/</h6>
              </label>

              <select
                onChange={HandelForm}
                className='font-black px-4 rounded-xl m-2 bg-gray-600 py-2 outline-0'
                name="gameMode"
                required
                value={formData.gameMode}
                id="gameMode" >
                {
                  gameMode.map((Element) => (
                    <option
                      key={Element}
                      id='SELECT_GAME'
                      className=' rounded-2xl bg-gray-300 font-black hover:bg-green-500'
                      value={Element}>{Element}</option>
                  ))
                }
              </select>
            </div>
            
               {/* GAME MODE SOLO DUO SQURD===============================  */}
            <div className='flex flex-col bg-linear-to-bl from-gray-950 to-slate-900 text-white  mt-3  border-blue-600 border rounded-2xl p-2 py-4'>
              <label
                className='px-5 font-bold '
                htmlFor="SELECT_GAME "
              >
                <h1 className='flex items-center gap-5'><SearchAlert size={18 } color='gray'/> Game Type </h1>
                <h6 className='text-[10px] text-gray-400 space-x-0'> What is the type of your tournament like 4/4 8/8 or fullmap Game/</h6>
              </label>

              <select
                onChange={HandelForm}
                className='font-black px-4 rounded-xl m-2  bg-gray-600 py-2 outline-0'
                name="matchType"
                value={formData.matchType}
                required
                id="matchType" >
                {
                  matchType.map((Element) => (
                    <option
                      key={Element}
                      id='matchType'
                      className=' rounded-2xl bg-gray-500 text-white  font-medium hover:bg-green-500'
                      value={Element}>{Element}</option>
                  ))
                }
              </select>
            </div>
          {/* </form> */}
        </main>
      </div>
    </>
  )
}

export default GameInfo
