import { Info, Instagram, Link2, LucideInstagram } from "lucide-react";
import React from "react";

function Final({
  register,

}) {
  return (
    <>
      <div className="w-full h-full bg-slate-950 px-2 py-5 rounded-xl  ">
        <header className='px-5 font-bold rounded-xl bg-slate-950 py-5'>
          <h1 className='text-2xl font-heading flex gap-4 items-center'>Hii fii the basic details and send request </h1>
          <p className='text-sm text-gray-500 '> Fill Basic Details & Go Ahed Then We Verify And Host Tournament</p>
        </header>


          {/* //Custoom Rules  */}
          <div className="font-bold min-h-30 p-2 text-white ">
            <label className="flex p-2 gap-2" htmlFor="customRules">
              <Info color="gray" />  Costoom Rules*
            </label>
            <input
              className=" border w-full h-full font-stretch-95% font-medium rounded-2xl border-gray-400 text-gray-3 text-sm  00  p-3 px-4  pb-25"
              placeholder="Typre Your Custoom Rules Or Any Requirment"
              {...register("customRules")}
              required
              type="text" name="customRules" id="customRules" />
          </div>

          <div className="font-bold text-white ">
            <label htmlFor="" className="flex gap-1 px-3 py-2 " ><Link2 color="lightgreen" /> SosialMedia Link's* </label>
            <div className="grid grid-cols-1 gap-2  ">
              <div className="flex items-center gap-2   bg-slate-900 px-3 py-5   rounded-xl  border border-gray-500 ">
                <label className="flex gap-2 bg-slate-950 py-3 px-4 rounded-3xl text-amber-50" htmlFor=""> <Link2 /> Instagram *</label>
                <input
                  placeholder="@instagram_user"
                  name="instagram"
                  {...register("media.instagram")}
                  type="text"  className="  border-b py-2 rounded-sm w-2/4 outline-0   px-3 " />
              </div>

              <div  className="flex items-center gap-2 bg-slate-900 px-3 py-2   rounded-4xl border border-gray-500 ">
                <label className="flex gap-2 bg-slate-950 py-3 px-4 rounded-3xl text-amber-50" htmlFor=""> <Link2 /> Whatsapp Community *</label>
                <input 
                  placeholder="+91 0123456789"
                  {...register("whatsapp")}
                  type="text"  className="  border-b py-2 rounded-sm w-2/4 outline-0   px-3 " />
              </div>
              <div  className="flex items-center gap-2  bg-slate-900 px-3 py-2   rounded-4xl  border border-gray-500 ">
                <label className="flex gap-2 bg-slate-950 py-3 px-4 rounded-3xl text-amber-50" htmlFor=""> <Link2 /> Discord Server *s</label>
                <input 
                placeholder="Discord Server "
                {...register("discord")}
                type="text"  className=" border-b  py-2 rounded-sm w-2/4  outline-0   px-3 " />
              </div>
            </div>
          </div>
          
      </div>
    </>
  );
}

export default Final;
