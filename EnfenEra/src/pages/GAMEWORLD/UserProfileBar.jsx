import React from "react";
import { motion } from "framer-motion";
import {
    User,
    User2,
    Wallet,
    Plus,
    CreditCard,
    ArrowUpRight,
    Copy,
} from "lucide-react";

function UserProfileBar() {
    // Shared Animation Config

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } },
    };

    const User = {
        username: "prashanta Mondal",
        UserUID: 1234656788,
        Level: 2,
        SaveGameUID: {
            "FREE FIRE": 12345678900045,
            BGMI: 163171767176179,
            "Call OF Duty": 6871368713771713,
        },
        avater: "/IMAGE/UserProfile.jpg",
        balance: 25,
    };

    return (
        <>
            <div className="w-full h-full">
                {/* USER INFO & WALLET SECTION */}
                <motion.div
                    variants={fadeUp}
                    className=" bg-slate-900/80 border w-full border-slate-800 rounded-2xl p-6  overflow-hidden">
                    <div className="absolute top-0 right-0  w-full h-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

                    <div className="flex justify-between  items-start mb-6">
                        <div className=" space-x-0">
                            <h2 className="text-2xl leading-10 font-black bg-linear-to-r from-teal-400 via-indigo-400 to-violet-400 uppercase  bg-clip-text text-transparent tracking-tight">
                                {" "}
                                {User.username}
                            </h2>
                            <p className="text-cyan-400 text-[10px]  space-x-0  font-mono mt-1">
                                LEVEL : {User.Level}
                            </p>
                            <p className="font-medium flex items-center gap-3 text-sm text-gray-500 ">
                                UID : <span>{User.UserUID}</span>
                                <span><Copy size={15} /></span>
                            </p>
                        </div>

                        <div className="p-1 bg-slate-800 rounded-full flex justify-center items-center h-20 w-20">
                            {User.avater ?
                                <div><img
                                    className=" rounded-full w-full h-18 bg-cover bg-origin-content border-2  "
                                    src={User.avater} alt="" /></div> : <User2 color="lightgreen" />}
                        </div>
                    </div>


                    {/* WALLET AREA ======================= */}
                    <div className="mb-6 ">
                        <div className="  py-3 bg-cyan-900/20 rounded-2xl text-2xl font-black ">
                            <div className="flex justify-between items-center px-5 "> 
                                <h1 className="text-[12px] px-5 font-bold text-gray-100 ">WALLET</h1>
                                <Wallet
                                    className=" p-1  rounded-xl"
                                    color="gray" />
                            </div>

                            <div className="flex flex-col text-[10px] text-gray-400 gap-1  px-5 font-bold ">
                                
                                
                                <hr />
                                <h1>DEBIT</h1>
                                <h2>CREDIT</h2>
                                <h3>BALANCE</h3>
                                <h4>CASH WITHDRAWAL SELF</h4>
                            </div>
                        </div>


                        {/* ADD MONEY SECTION ===================  */}
                        <div className=" flex items-center gap-5 my-5">
                                {/* <h1>Update KYC ID Type </h1>  Upcoming Update ================================= */}

                        </div>
                       
                        <div className="z">
                            <span className="">
                                <h1 className=" text-gray-400 font-medium">Devoloper Community</h1>
                                <p className="font-bold  bg-linear-to-r from-teal-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text text-2xl ">
                                    Join the epic Gaming Community
                                </p>
                            </span>
                        </div>{" "}
                        <hr className="mt-2 " />
                    </div>

                    {/* PAY / DEPOSIT ACTIONS */}
                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3 rounded-lg font-bold transition-colors">
                            <CreditCard size={18} /> DEPOSIT
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-bold transition-colors border border-slate-700">
                            <ArrowUpRight size={18} /> WITHDRAW
                        </button>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default UserProfileBar;
