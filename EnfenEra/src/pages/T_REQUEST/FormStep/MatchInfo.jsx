import React from 'react'
import { Calendar1, Clock10Icon, ConeIcon, Gamepad2, MessageCircleCheck, Plus, ReceiptIndianRupee, Timer, Watch } from 'lucide-react'
// import { HandelForm } from '../../../utils/handelForm'

function MatchInfo({
  HandelForm,
  formData,
  setformData
}) {

  function gameimg(image) {
    const gameImages = {
      "FREE FIRE INDIA": "/images/logos/freefire.png",
      "BGMI INDIA": "/images/logos/bgmi.png",
      "CALL OF DUTY": "/images/logos/cod.png",
      "CLASH OF CLANS": "/images/logos/coc.png",
    };
    return gameImages[image]
  }

  //  console.log(gameimg(formData.game));


  // const map = ["map"]
  const gameMaps = {
    freefire: ["Bermuda", "Bermuda Remastered", "Purgatory", "Kalahari", "Alpine", "NeXTerra", "NeXTerra 2.0", "Solara"],
    bgmi: ["Erangle", "Miramar", "Sanhok", "Vikendi", "Livik", "Nusa", "Karakin", "Rondo", "Deston"],
    codm: ["Nuketown", "Crash", "Crossfire", "Firing Range", "Raid", "Shipment", "Standoff", "Hijacked", "Terminal", "Rust", "Summit", "Scrapyard", "Express", "Takeoff", "Highrise"],
    coc: ["Home Village", "Builder Base", "Clan Capital"]
  }
  // its not are Official name 
  // const gameModes = {
  //   freefire : ["Clash Squad Rush","Fast 4v4 Arena","Booyah Blitz","Quick Clash","Squad Rush Mode","Rapid Fire Room","Mini Battle Royel","Headshot Arena","Short Survival","Firestorm clash"],
  //   bgmi : ["TDM Blitz", "Arena Rush 4v4","Quick Erangel Fight","Sanhok Speed Battle","Mini Classic Room","Squad Clash Mode","Fast Loot War","Close Loot War","Survival Sprint","Elite TDM Cup"],
  //   codm : ["5v5 Rapid fire","hardpoint Rush","domination Blitz","Quick TDM Match","Kill Confirmed Fast","Arena Strike","Sniper Quick Room","Gunfight 2v2","Fast Respawn War","Elite Combat Zone"],
  //   coc : ["Quick War Clash","mini Clan Battle","Fast Friendly War","Rush Raid Mode","Short Clan War","1v1 Challenge Room","Blitz War Session "]
  // }

 
  function gameoptions(formData, map) {
    const finalData = [];
    if (formData.game === "FREE FIRE INDIA") {
      finalData.push(map.freefire)
    }
    else if (formData.game === "BGMI INDIA") {
      finalData.push(map.bgmi)
    }
    else if (formData.game === "CALL OF DUTY") {
      finalData.push(map.codm)
    }
    else if (formData.game === "CLASH OF CLANS") {
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
        <main>
          {/* TIME INPUT================================ */}
          <div className='flex border border-slate-700 flex-col bg-slate-950 text-white mt-3  rounded-xl p-2 py-5'>
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
                  name="matchDate"
                  value={formData.matchDate}
                  onChange={HandelForm}
                  id="matchDate" />
              </div>

              <div className='flex items-center justify-around md:px-5 border border-gray-500 rounded-xl px-3 '>
                <Clock10Icon color='gray' />
                <input
                  className=' px-4  font-medium text-gray-500 outline-0  placeholder:text-gray-500 placeholder:text-[12px]  h-10 '
                  type="time"
                  placeholder="matchTime"
                  name="matchTime"
                  required
                  value={formData.matchTime}
                  onChange={HandelForm}
                  id="matchTime" />
              </div>
            </div>
          </div>

          <div>
            <div className='flex flex-col bg-slate-950 border-slate-700  text-white  mt-3 border  rounded-2xl p-2'>
              <label
                className='px-5 font-bold '
                htmlFor="SELECT_GAME "
              >
                <h1>Select Map </h1>
                <h6 className='text-[10px] text-gray-400 space-x-0'> What is the mode of your Tournament /solo/</h6>
              </label>

              <select
                onChange={HandelForm}
                className='font-black px-4 rounded-xl m-2 bg-slate-900  text-gray-500 py-2 outline-0'
                name="map"
                value={formData.map}
                id="map" >
                {gameoptions(formData, gameMaps).map((hamper) =>

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

          <div className='flex flex-col bg-slate-950 py-5 mt-3   rounded-2xl p-2'>
            <label
              className='px-5  font-bold flex justify-between items-center '
              htmlFor="DATE">
              <div>
                <h1 className='flex gap-2'> <Gamepad2 size={20} /> Game Details</h1>
                <h6 className='text-[10px] text-gray-400 space-x-0'> What is the prefered  time you shoud announce</h6>
              </div>
              <div >
                <img src={gameimg(formData.game)} alt="" className='w-30 ' />
              </div>
            </label>


            <h1 className='px-5 font-bold pt-5 flex gap-3 text-xl text-green-400'>Hosting Mode <MessageCircleCheck /> </h1>
            <div className='px-3  '>
              <section className='flex py-5 justify-around items-center font-bold'>
                <label htmlFor="host-managed" className='flex items-center gap-3  px-3 py-1.5 rounded-xl bg-slate-900 text-white active:bg-slate-700 '>
                  <input type="radio" value="host-managed" name="hostingType" id="host-managed" onChange={HandelForm} />
                  Host Managed
                </label>
                <label htmlFor="platform-assisted" className='flex items-center gap-3  px-3 py-1.5 rounded-xl bg-slate-900 text-white active:bg-slate-700 '>
                  <input type="radio" value="platform-assisted" name="hostingType" id="platform-assisted" onChange={HandelForm} />
                  Platform Assisted
                </label>
                <label htmlFor="open-hosting" className='flex items-center gap-3  px-3 py-1.5 rounded-xl bg-slate-900 text-white active:bg-slate-700 '>
                  <input type="radio" value="open-hosting" name="hostingType" id="open-hosting" onChange={HandelForm} />
                  Open Hosting
                </label>
              </section>

              <div className='md:text-sm text-[12px] border-green-400 rounded-2xl bg-green-400/20   border p-3 font-extralight '>
                <h1 className='flex gap-3 '>  <span className='text-green-400 underline font-semibold'>○ Host Managed</span>
                  Host creates the tournament, invites players, and earns a hosting reward.</h1>

                <h1 className='flex gap-3 '> <span className='text-green-400 underline font-semibold'> ○ Platform Assisted</span>
                  InfenEra helps find players and manage participation for a small commission.</h1>

                <h1 className='flex gap-3 '>  <span className='text-green-400 underline font-semibold'>○ Open Hosting</span>
                  No commission. Full control and full prize distribution.</h1>
              </div>
            </div>

            <label className='px-4 font-bold text-sm pt-2 ' htmlFor="slots"> Total Slots(Player) sTo Join Match* </label>
            <input
              className='border border-rose-600/50 px-4  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
              type="number"
              required
              placeholder="Tdm 8, FF , 50, cod 100, bgmi 100, coc 12"
              name="slots"
              maxLength={3}
              max={3}
              onChange={HandelForm}
              id="slots" />

            <label className='px-4 text-sm font-bold' htmlFor="sponsor">Sponsor* </label>
            <input
              className='border border-rose-600/50 px-4  font-medium text-cyan-100 placeholder:text-gray-500 placeholder:text-[12px] m-3 p-1 h-10 rounded-xl'
              type="text"
              placeholder="sponsor"
              name="sponsor"
              required
              onChange={HandelForm}
              id="sponsor" />



            <div className='w-full h-full flex items-center gap-2'>
              {/* -------------Hidden Update Soon  */}
              <div className='border hidden h-30 w-30'>{formData.bannerImage ?
                (<img className='bg-black object-cover ' src={formData.bannerImage} alt="" />) : (<h1>No Signal</h1>)}</div>
              {/* src={URL.createObjectURL(formData.bannerImage)} */}

              <div className='w-full h-full border flex justify-center items-center  rounded-xl border-dashed '>
                <label htmlFor="bannerImage" className=' h-full py-5 w-full flex justify-center '> <Plus /> </label>
                <input type="file" accept='image/*' name="bannerImage" id="bannerImage" className='hidden' onChange={HandelForm} />
              </div>
            </div>


          </div>



        </main>

      </div>

    </>
  )
}

export default MatchInfo

