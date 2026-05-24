import React, { useState } from "react";
import {
  CheckCircle2,
  ReceiptIndianRupee,
  Timer,
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

function Request_Form() {
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch();

  const select = useSelector(
    (state) => state.notification.requestdata
  );

  const currentStep = useSelector(
    (state) => state.notification.currentStep
  );

  // Form Data
  const [formData, setformData] = useState({
    name: "",
    bannerImage: null,
    title: "",
    slug: "",
    discription: "",
    game : "",
    gameMode: "",
    map: "",
    matchDate: "",
    matchTime: "",
    maxteams: "",
    maxPlayerPerTeam: "",
    entryFee: "",

    head: {
      email: "",
      requestId: "",
      status: "",
      userId: "",
      username: "",
      createsAt: "",
      updateAt: "",
    },
  });

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
  function SendNotification() {
    dispatch(addrequest(formData));

    console.log("FORM DATA", formData);
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

  return (
    <main className="w-full min-h-screen">

      {/* =============================== */}
      {/* HEADER */}
      {/* =============================== */}

      <header className="w-full p-5">

        {/* Step Bar */}
        <div className="flex flex-wrap justify-center gap-4">

          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-xl border
                ${currentStep >= step
                  ? "bg-blue-600 border-blue-500"
                  : "bg-zinc-900 border-zinc-800"
                }
              `}
            >
              {currentStep > step ? (
                <CheckCircle2 size={18} />
              ) : (
                <span className="font-bold">{step}</span>
              )}

              <span className="text-sm font-medium">
                Step {step}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* =============================== */}
      {/* FORM STEP SECTION */}
      {/* =============================== */}

      <div className="w-full min-h-125 overflow-hidden p-4">

        <AnimatePresence mode="wait">

          {/* STEP 1 */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              {...pageTransition}
            >
              <BasicInfo
                formData={formData}
                setformData={setformData}
                HandelForm={HandelForm}
              />
            </motion.div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              {...pageTransition}
            >
              <GameInfo
                formData={formData}
                setformData={setformData}
                HandelForm={HandelForm}
              />
            </motion.div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              {...pageTransition}
            >
              <MatchInfo
                formData={formData}
                setformData={setformData}
                HandelForm={HandelForm}
              />
            </motion.div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              {...pageTransition}
            >
              <Final
                formData={formData}
              />
            </motion.div>
          )}

          {/* STEP 5 */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              {...pageTransition}
            >
              <PaymentInfo
                formData={formData}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* =============================== */}
      {/* FOOTER BUTTONS */}
      {/* =============================== */}

      <footer className="w-full p-5">

        <div className="flex justify-center gap-5">

          {/* BACK */}
          <button
            className="
              px-6 py-2 rounded-xl
              bg-zinc-800 hover:bg-zinc-700
              active:scale-95 transition-all
              font-bold cursor-pointer
            "
            onClick={() => dispatch(back())}
            disabled={currentStep === 1}
          >
            Back
          </button>

          {/* NEXT */}
          <button
            className="
              px-6 py-2 rounded-xl
              bg-blue-600 hover:bg-blue-500
              active:scale-95 transition-all
              font-bold cursor-pointer
            "
            onClick={() => dispatch(next())}
            disabled={currentStep === 5}
          >
            Next
          </button>
        </div>
      </footer>

      {/* =============================== */}
      {/* SUBMIT SECTION */}
      {/* =============================== */}

      <div
        className="
          flex flex-col
          bg-gradient-to-r
          from-pink-600/20
          to-black
          mt-3
          border border-pink-700/20
          rounded-2xl
          p-4
          m-4
        "
      >
        <label className="px-5 font-bold">

          <h1 className="text-xl">
            ENTRY FEES AND PAY AMOUNT
          </h1>

          <h6 className="text-[10px] text-gray-400">
            What Is The Amount To Pay And Players Payable Amount
          </h6>
        </label>

        <button
          onClick={()=>{
            console.log(formData);
            
          }}
          className="
            border py-3 rounded-xl
            bg-blue-600 hover:bg-blue-500
            m-4 border-cyan-500/50
            font-black cursor-pointer
            active:scale-95 transition-all
          "
        >
          Quick Request
        </button>
      </div>
    </main>
  );
}

export default Request_Form;