import { useRef, useState } from "react";
import Sucessfull from "../../../horizon/Sucessfull";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
// import { disable } from "express/lib/application";

function OtpPage() {
  
  const navigate = useNavigate();
  const [emailpop, setemailpop ] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value[0];
    setOtp(newOtp);

    if (index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="w-full h-screen bg-slate-950 relative">

      {/* EMAIL VERYFING POPUP ======================================== */}

      {emailpop && (
      <motion.section 
      className="h-full w-full absolute  flex justify-center items-center z-10 ">
        <div className="border flex justify-center items-center flex-col bg-slate-950 px-10 py-10 overflow-hidden rounded-2xl  border-slate-900 relative">
          <div className="absolute shadow-[50px_50px_2000px_100px] shadow-green-500  "></div>

          <div>
            <Sucessfull />
          </div>
          
          <div className="uppercase text-center font-black text-2xl ">
            <h1>OTP SEND</h1>
            <p className="text-sm font-semibold">Send Via Email : UID --Upadate soon</p>
          </div>

          <div>
            {/* <button>Cancel</button> */}
            <button 
              onClick={() => {
                setemailpop((prev) => !prev)
              }}
            className="my-5 py-2 rounded-3xl bg-green-500 font-black text-white cursor-pointer  border px-10 ">Contenue</button>
          </div>
        </div>
      </motion.section>
      )}

      <div className="w-full h-full flex justify-center items-center">


        <main className="bg-slate-950 border border-slate-900 px-10 md:px-20 py-10 overflow-hidden rounded-lg relative">
          <div className="absolute shadow-[50px_50px_2000px_100px] shadow-blue-600  "></div>

          <div className="flex font-bold justify-between gap-2 mb-5">
            <h1 className="bg-linear-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent logo-font" >
              InfenEra
            </h1>
            <h1 className="text-white">Login Verification code</h1>
          </div>

          <div className="flex gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                value={digit}
                ref={(el) => (inputs.current[index] = el)}
                maxLength={1}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                type="text"
                className="w-12 h-12 text-center text-xl border border-gray-500 bg-slate-800 text-white rounded "
              />
            ))}
          </div>

          <p className="text-white mt-4">
            OTP: {otp.join("")}
          </p>
          <div>
            <h1 className="text-[12px]">Don't receive the OTP ? , 
              <span 
                onClick={() => {
                if(!otp.join("")){
                  setemailpop(true)
                }
              }}
                className="hover:text-blue-600 underline  cursor-pointer" >Resend</span> 
            </h1>
            <h2 
              onClick={() => navigate("/singin")}
            className="text-[12px]"> <span className="hover:text-blue-600 underline  cursor-pointer">Chenge</span> Number or email</h2>
          </div>

          <div className="w-full h-full ">
            <button
             
              className='border px-2 py-2 mt-5 border-slate-800 w-full  hover:bg-slate-900  cursor-pointer rounded-2xl font-bold'
              type='submit'
            >Login</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default OtpPage;