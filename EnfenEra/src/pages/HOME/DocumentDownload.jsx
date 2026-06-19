import { DockIcon, File, X } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {useNavigate} from 'react-router-dom'



const doc = [
    { id: "001", DocumentName: "Hellow Brow", color: "red", size: "2.8MB" },
    { id: "002", DocumentName: "Hellow Brow How", color: "purple", size: "8.8MB" }
]

function DocumentDownload() {
    const [IsOpen, SetOpen] = useState(true);
    const navigate = useNavigate(); 

    return (
        <>
            {IsOpen && (<div className="fixed top-0  z-100 block w-full h-screen bg-black/50">
                <div className="flex justify-center items-center w-full  h-full">
                    <div className=" w-100">
                        <AnimatePresence>
                            {IsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="  border border-white/10 rounded-3xl py-5 p-3 md:p-8 backdrop-blur-3xl">
                                    <div className="w-full">
                                        <div className=" flex justify-between px-3 items-center ">
                                            <div className="font-bold logo-font text-gray-400">Infenera </div>
                                            <div className={` p-1.5 cursor-pointer rounded-xl bg-gray-500/20 hover:bg-gray-50/50 backdrop-blur-2xl hover:text-red-600 ${IsOpen ? "white":""}`}
                                                onClick={() => SetOpen(!IsOpen)}
                                            ><X /></div>
                                        </div>
                                        <div className="py-5">
                                            <h1 className="md:text-2xl text-xl font-bold uppercase text-center">Welcome to india's no.1 tournament hosting platform</h1>
                                        </div>

                                        <div className="px-8 py-2 flex flex-col gap-2">
                                            <h1 className="font-semibold text-sm transition  hover:text-white cursor-pointer rounded-xl uppercase text-gray-500 text-center border py-2">Host Your Tournament</h1>

                                            <h1 className="font-semibold text-sm transition  hover:text-white cursor-pointer rounded-xl uppercase text-gray-500 text-center border py-2">Patnar Program</h1>

                                            <h1 className="font-semibold text-sm transition  hover:text-white cursor-pointer rounded-xl uppercase text-gray-500 text-center border py-2">jOIN aND EARN</h1>

                                            <h1 className="text-[12px] text-center pt-3 text-blue-600  underline font-semibold">
                                                <span
                                                    onClick={() => navigate("/register")}
                                                    className="hover:text-blue-400 cursor-pointer">Register</span>/
                                                <span
                                                    onClick={() => navigate("/singin")}
                                                    className="hover:text-blue-400 cursor-pointer">Singin</span>
                                            </h1>

                                        </div>
                                        
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}

export default DocumentDownload;
