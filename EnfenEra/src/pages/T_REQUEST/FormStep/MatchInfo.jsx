import React from 'react'
import { Calendar1, Clock10Icon, ConeIcon, Gamepad2, MapIcon, MessageCircleCheck, Plus, ReceiptIndianRupee, Timer, Watch } from 'lucide-react'
// import { HandelForm } from '../../../utils/handelForm'
import {staticImage} from '../../../constants/cloud.Image'
import { useState } from 'react';

function MatchInfo({
  register,
  watch
}) {

  function gameimg(image) {
    const gameImages = {
      "FREE FIRE INDIA": staticImage.logos.freefire_logo ,
      "BGMI INDIA": staticImage.logos.bgmi_logo,
      "CALL OF DUTY": staticImage.logos.cod_logo,
      "CLASH OF CLANS": staticImage.logos.coc_logo,
      "MINECRAFT" : staticImage.logos.minecraft_logo
    };
    return gameImages[image]
  }

  //  console.log(gameimg(formData.game));


  const map = ["map"]
  const gameMaps = {
    freefire: ["select", "Bermuda", "Bermuda Remastered", "Purgatory", "Kalahari", "Alpine", "NeXTerra", "NeXTerra 2.0", "Solara"],
    bgmi: ["select", "Erangle", "Miramar", "Sanhok", "Vikendi", "Livik", "Nusa", "Karakin", "Rondo", "Deston"],
    codm: ["select", "Nuketown", "Crash", "Crossfire", "Firing Range", "Raid", "Shipment", "Standoff", "Hijacked", "Terminal", "Rust", "Summit", "Scrapyard", "Express", "Takeoff", "Highrise"],
    coc: ["select", "Home Village", "Builder Base", "Clan Capital"]
  }


  const selectGame = watch("game");
  const selectImage = watch("bannerImage[0]")
   const [preview, setPreview] = useState(null);

  function gameoptions(map) {
    const finalData = [];
    if (selectGame === "FREE FIRE INDIA") {
      finalData.push(map.freefire)
    }
    else if (selectGame === "BGMI INDIA") {
      finalData.push(map.bgmi)
    }
    else if (selectGame === "CALL OF DUTY") {
      finalData.push(map.codm)
    }
    else if (selectGame === "CLASH OF CLANS") {
      finalData.push(map.coc)
    }
    else {
      finalData.push(["Data Not found Please Try Again"])
    }
    return finalData
  }




  return (
    <>
      <div className='w-full h-full'>
        <header className='px-5 font-bold rounded-xl bg-slate-950 py-5'>
          <h1 className='text-2xl font-heading flex gap-4 items-center'>Hii fii the basic details and send request </h1>
          <p className='text-sm text-gray-500 '> Fill Basic Details & Go Ahed Then We Verify And Host Tournament</p>
        </header>

        <main>
          {/* TIME INPUT================================ */}
          <div className='flex  border-blue-600 border flex-col bg-linear-to-bl from-gray-950 to-slate-900 text-white mt-3  rounded-xl p-2 py-5'>
            <label
              className='px-5  font-bold '
              htmlFor="DATE">
              <h1 className='flex gap-2'> <Timer size={20} /> PREFERED TIME & DATE</h1>
              <h6 className='text-[10px] text-gray-400 space-x-0'> What is the prefered  time you shoud announce</h6>
            </label>
            <div className='flex items-center px-3 gap-5 py-5'>
              <div className='border border-gray-500 flex items-center justify-around md:px-5  rounded-xl px-3  '>
                <Calendar1 color='gray' id='matchDate' />
                <input
                  className='px-4  font-medium text-gray-500 placeholder:text-gray-500 placeholder:text-[12px] outline-0  h-10 '
                  type="date"
                  required
                  placeholder="matchDate"
                  {...register("matchDate")}
                  id="matchDate" />
              </div>

              <div className='flex items-center justify-around md:px-5 border border-gray-500 rounded-xl px-3 '>
                <Clock10Icon color='gray' />
                <input
                  className=' px-4  font-medium text-gray-500 outline-0  placeholder:text-gray-500 placeholder:text-[12px]  h-10 '
                  type="time"
                  placeholder="matchTime"
                  required
                  {...register("matchTime")}
                  id="matchTime" />
              </div>
            </div>
          </div>

          {/* SELECT MAP ====================================== */}
          <div>
            <div className='flex flex-col border border-blue-600 bg-linear-to-bl from-gray-950 to-slate-900   text-white  mt-3 py-5  rounded-2xl p-2'>
              <label
                className='px-5 font-bold '
                htmlFor="SELECT_GAME "
              >
                <h1 className='flex items-center gap-5'><MapIcon size={25} color='gray' /> Select Map </h1>
                <h6 className='text-[10px] text-gray-400 space-x-0'> What is the mode of your Tournament /solo/</h6>
              </label>

              <select
                className='font-black px-4 rounded-xl m-2 bg-gray-300  text-gray-600 py-2 outline-0'
                {...register("map")}
                id="map" >
                {gameoptions(gameMaps).map((hamper) =>
                  hamper.map((Element) => (
                    <option
                      key={Element}
                      id='SELECT_GAME'
                      className=' rounded-2xl bg-white font-black  hover:bg-green-500'
                      value={Element}>{Element}</option>
                  ))

                )}

              </select>
            </div>
          </div>


          <div className='flex flex-col bg-linear-to-bl from-gray-950 to-slate-900 text-white py-5 mt-3   rounded-2xl p-2'>
            <label
              className='px-5  font-bold flex justify-between items-center '
              htmlFor="DATE">
              <div>
                <h1 className='flex gap-2'> <Gamepad2 size={20} /> Game Details</h1>
                <h6 className='text-[10px] text-gray-400 space-x-0'> What is the prefered  time you shoud announce</h6>
              </div>
              <div >
                <img src={gameimg(selectGame)} alt="" className='w-30 ' />
              </div>
            </label>


          

            <label className='px-4 font-bold text-sm pt-2 ' htmlFor="slots"> Total Slots(Player) sTo Join Match* </label>
            <input
              className='border border-rose-600/50 px-4  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
              type="number"
              {...register("slots")}
              required
              placeholder="Select Your team Size"
              name="slots"
              maxLength={3}
              max={3}
              id="slots" />

            <label className='px-4 text-sm font-bold' htmlFor="sponsor">Sponsor* </label>
            <input
              className='border border-rose-600/50 px-4  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
              type="text"
              {...register("sponsor")}
              placeholder="sponsor"
              required
              id="sponsor" />



            <div className='w-full h-full flex items-center gap-2'>
              {/* -------------Hidden Update Soon  */}
              <div className='border hidden h-30 w-30'>{ selectImage?
                (<img className='bg-black object-cover ' src={selectGame} alt="" />) : (<h1>No Signal</h1>)}</div>
              {/* src={URL.createObjectURL(formData.bannerImage)} */}

              <div className='w-full h-full border flex justify-center items-center  rounded-xl border-dashed '>
                <label htmlFor="bannerImage" className=' h-full py-5 w-full flex justify-center '> <Plus /> </label>
                <input type="file" accept='image/*' name="bannerImage" id="bannerImage" className='hidden' 
                     {...register("bannerImage", {
          required: "Banner image is required",
          onChange: (e) => {
            const file = e.target.files[0];

            if (file) {
              setPreview(URL.createObjectURL(file));
            }
          },
        })}s
                />
                  {preview && (
        <img
          src={preview}
          alt="Banner Preview"
          className="w-full h-40 object-cover rounded-xl mt-3"
        />
      )}
              </div>

            </div>


          </div>



        </main>

      </div>

    </>
  )
}

export default MatchInfo

