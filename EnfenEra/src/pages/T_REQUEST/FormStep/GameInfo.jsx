import React from 'react'
// import { HandelForm } from '../../../utils/handelForm'


function GameInfo({
  formData,
  setformData,
  HandelForm
}) {


  const gametype = ["FREE FIRE MAX", "BGMI", "CALL OF DUTY", "COC"];
  const gameMode = ["Solo", "Duo", "Squad"]
  const map = ["map"]

  return (
    <>
      <div className='w-full h-full'>
        <main>
          <form action="">
            {/* GAME SELECTION================================ */}
            <div className='flex flex-col bg-linear-to-r from-pink-600/20 to-black mt-3 border border-pink-700/20 rounded-2xl p-2'>
              <label
                className='px-5 font-bold '
                htmlFor="SELECT_GAME "
              >
                <h1>Game Name </h1>
                <h6 className='text-[10px] text-gray-400 space-x-0'> Select a game you want to create or host tournament</h6>
              </label>

              <select
                onChange={HandelForm}
                className='font-black px-4 rounded-xl m-2 border-pink-700/50 border py-2 outline-0'
                name="game"
                value={formData.game}
                id="game" >
                {
                  gametype.map((Element) => (
                    <option
                      key={Element}
                      id='game'

                      className=' rounded-2xl bg-black font-black hover:bg-green-500'
                      value={Element}>{Element}</option>
                  ))
                }
              </select>
            </div>

            {/* GAME MODE SOLO DUO SQURD===============================  */}
            <div className='flex flex-col bg-linear-to-r from-pink-600/20 to-black mt-3 border border-pink-700/20 rounded-2xl p-2'>
              <label
                className='px-5 font-bold '
                htmlFor="SELECT_GAME "
              >
                <h1>Game Mode </h1>
                <h6 className='text-[10px] text-gray-400 space-x-0'> What is the mode of your Tournament /solo/</h6>
              </label>

              <select
                onChange={HandelForm}
                className='font-black px-4 rounded-xl m-2 border-pink-700/50 border py-2 outline-0'
                name="gameMode"
                value={formData.gameMode}
                id="gameMode" >
                {
                  gameMode.map((Element) => (
                    <option
                      key={Element}
                      id='SELECT_GAME'
                      className=' rounded-2xl bg-black font-black hover:bg-green-500'
                      value={Element}>{Element}</option>
                  ))
                }
              </select>
            </div>

                    {/* GAME MODE SOLO DUO SQURD===============================  */}
        <div className='flex flex-col bg-linear-to-r from-pink-600/20 to-black mt-3 border border-pink-700/20 rounded-2xl p-2'>
          <label
            className='px-5 font-bold '
            htmlFor="SELECT_GAME "
          >
            <h1>Game Mode </h1>
            <h6 className='text-[10px] text-gray-400 space-x-0'> What is the mode of your Tournament /solo/</h6>
          </label>

          <select
            onChange={HandelForm}
            className='font-black px-4 rounded-xl m-2 border-pink-700/50 border py-2 outline-0'
            name="map"
            value={formData.map}
            id="map" >
            {
              map.map((Element) => (
                <option
                key={Element}
                  id='SELECT_GAME'
                  className=' rounded-2xl bg-black font-black hover:bg-green-500'
                  value={Element}>{Element}</option>
              ))
            }
          </select>
        </div>





          </form>
        </main>
      </div>
    </>
  )
}

export default GameInfo
