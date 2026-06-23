import React, { useState } from "react";
import {
  CheckCircle2,
  Circle,
  ExternalLink,
  FocusIcon,
  Footprints,
  ReceiptIndianRupee,
  StepForward,
  Timer,
  Verified,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addrequest, back, next } from "../../REDUX/Feachour/Notification";
import { useNavigate } from "react-router-dom";
// Animation
import { motion, AnimatePresence } from "framer-motion";
// Steps
import BasicInfo from "./FormStep/BesicInfo";
import GameInfo from "./FormStep/GameInfo";
import MatchInfo from "./FormStep/MatchInfo";
import Final from "./FormStep/Final";
import PaymentInfo from "./FormStep/PaymentInfo";

import Sucessfull from '../../Components/horizon/Sucessfull'

import { useForm } from 'react-hook-form'

function Request_Form() {
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch();
  const select = useSelector((state) => state.notification.requestdata);
  const currentStep = useSelector((state) => state.notification.currentStep);




  // update-React Hook Form 
  const DefualsUserData = {
    name: "",
    bannerImage: null,
    title: "",
    slug: "",
    discription: "",
    game: "",
    gameMode: "",
    map: "",
    matchDate: "",
    matchTime: "",
    maxteams: "",
    slots: "",
    entryFee: "",
    hostingType: "",
    sponsor: "",
    customRules: "",
    platformfee: 2,
    totalAmount: "",

    media: {
      instagram: "",
      whatsapp: "",
      discord: "",
    },

    head: {
      email: "",
      requestId: "",
      status: "",
      userId: "",
      username: "",
      createsAt: "",
      updateAt: "",
    },
  }

  const { register, handleSubmit, setValue, watch } = useForm({ defaultValues: DefualsUserData })

  const total = watch("payment.totalAmount");
  const UID = watch("head.requestId");
  const PName = watch("name");
  const gmail = watch("head.email")



  // Form Data5
  

  // Reusable Input Handler
  function HandelForm(e) {
    const { name, value } = e.target;

    // Nested Input
    if (name.includes(".")) {
      const [parent, child] = name.split(".");

      setformData((prev) => ({
        ...prev,

        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    }

    // Normal Input
    else {
      setformData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  // Send Request
  function SendNotification(data) {
    dispatch(addrequest(data));

    console.log("FORM DATA", );
    console.log("REDUX DATA", select);

    // navigate("/studio");
  }

  // Animation Variant
  const pageTransition = {
    initial: {
      opacity: 0,
      x: 100,
    },

    animate: {
      opacity: 1,
      x: 0,
    },

    exit: {
      opacity: 0,
      x: -100,
    },

    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  };

  // payment 
  const [paymentstate, setPaymentstate] = useState(false);
  function onDone(data) {
    console.log("form data", data);
    SendNotification(data);
    setPaymentstate(true);
  }


  return (
    <main className="w-full  h-full relative">
      <form
        onSubmit={handleSubmit(onDone)}
        action="">
        <input type="text" className="border h-10" />
        <label htmlFor=""></label>

        {/* payment section verifyed */}
        {paymentstate && (
          <section className=" relative top-100 flex rounded-2xl justify-center items-center overflow-hidden   h-full w-full  z-10">
            <div className="border border-slate-900 px-20 py-10 md:w-1/2 w-full  fixed  rounded-2xl overflow-hidden  backdrop-blur-3xl flex flex-col justify-center">
              <div className="absolute bottom-0 shadow-[0px_50px_200px_100px]  shadow-emerald-500" ></div>

              <div className="text-xk font-heading  text-center text-white  font-semibold">
                <h1 >Payment UID : {UID} </h1>
                <h1>Name : {PName} </h1>
                <h2>email : {gmail}</h2>
              </div>

              <div className="flex justify-center items-center w-full h-full">
                <Sucessfull />
              </div>
              <div>

                <div className="font-bold text-5xl text-center  ">
                  <h1> {total} <span>₹ </span> </h1>
                </div>

              </div>
              <div className="text-center">
                <h1 className="font-bold text-xl">Payment Successfuls</h1>
                <h1
                  onClick={() => navigate("/")}
                  className="w-full  py-2 mt-3 font-black rounded-2xl bg-green-500 cursor-pointer active:scale-95 hover:bg-emerald-500 ">
                  Done
                </h1>
              </div>
            </div>
          </section>
        )}



        {/* =============================== */}
        {/* HEADER */}
        {/* =============================== */}
        <div
          onClick={() => navigate("/studio")}
          className="px-2 text-xl flex gap-5 border  max-w-35 bg-white/50 rounded-xl py-1  hover:bg-red-500 cursor-pointer mx-5  ">
          <ExternalLink /> Exit{" "}
        </div>

        <header className={`w-full p-5 sticky top-0 ${paymentstate ? "hidden" : ""}`}>
          {/* Step Bar */}
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`
                flex items-center gap-2 px-4 py-2 rounded-xl border
                ${currentStep >= step
                    ? "bg-blue-600/50 border-blue-500"
                    : "bg-gray-500/20 border-zinc-800"
                  }`}>
                {currentStep > step ? (
                  <Verified size={18} color="lightgreen" />
                ) : (
                  <span className="font-bold">
                    <Footprints size={15} />
                  </span>
                )}

                <span className="text-sm font-sans">Step {step}</span>
              </div>
            ))}
          </div>
        </header>

        {/* =============================== */}
        {/* FORM STEP SECTION */}
        {/* =============================== */}

        <div className={`w-full min-h-[60vh] overflow-hidden p-4  mb-5 rounded-xl ${paymentstate ? "hidden" : ""} `}>
          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {currentStep === 1 && (
              <motion.div key="step1" {...pageTransition}>
                <BasicInfo
                  register={register}
                  setValue={setValue}
                />
              </motion.div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <motion.div key="step2" {...pageTransition}>
                <GameInfo
                  register={register}
                />
              </motion.div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <motion.div key="step3" {...pageTransition}>
                <MatchInfo
                  register={register}
                  watch={watch}
                />
              </motion.div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <motion.div key="step4" {...pageTransition}>
                <Final
                  register={register}
                />
              </motion.div>
            )}

            {/* STEP 5 */}
            {currentStep === 5 && (
              <motion.div key="step5" {...pageTransition}>
                <PaymentInfo
                  register={register}
                  watch={watch}
                  setValue={setValue}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =============================== */}
        {/* FOOTER BUTTONS */}
        {/* =============================== */}

        <footer className={` ${paymentstate ? "hidden" : ""} w-full p-5 relative bottom-0 bg-slate-950 border-slate-700 border rounded-xl `}>
          <div className="flex justify-center gap-5">
            {/* BACK */}
            <button
            type="button"
              className="
              px-6 py-2 rounded-xl hover:bg-blue-600 border hover:scale-x-110
              active:scale-95 transition-all
              font-bold cursor-pointer border-slate-700
            "
              onClick={() => dispatch(back())}
              disabled={currentStep === 1}>
              Back
            </button>

            {/* NEXT */}
            <button
            type="button"
              className=" border border-slate-700
              px-6 py-2 rounded-xl 
              hover:bg-blue-600
              active:scale-95 transition-all
              font-bold cursor-pointer
            "
              onClick={() => dispatch(next())}
              disabled={currentStep === 5}>
              Next
            </button>
          </div>
        </footer>

        {/* =============================== */}
        {/* SUBMIT SECTION */}
        {/* =============================== */}

        <div
          className={`${paymentstate ? "hidden" : ""}
          flex flex-col
          bg-linear-to-r
          from-pink-600/20
          to-black
          mt-3
          border border-pink-700/20
          rounded-2xl
          p-4
          m-4
        `}>
          <label className="px-5 font-bold">
            <h1 className="text-xl">ENTRY FEES AND PAY AMOUNT</h1>

            <h6 className="text-[10px] text-gray-400">
              What Is The Amount To Pay And Players Payable Amount
            </h6>
          </label>

          <button
            // disabled={!formData.entryFee}

            type="submit"
            // onClick={() => handleSubmit(onDone)}
            className="
            border py-3 rounded-xl disabled:bg-slate-900
            bg-blue-600 hover:bg-blue-500
            m-4 border-cyan-500/50
            font-black cursor-pointer
            active:scale-95 transition-all
          ">
            Quick Request
          </button>



        </div>
      </form>
    </main>
  );
}

export default Request_Form;
