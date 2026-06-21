import { motion } from "framer-motion";
import {
    HardDriveDownload,
    Lock,
    LockKeyhole,
    LucideVerified,
    NotepadTextDashed,
    Shield,
    Verified,
} from "lucide-react";
import React from "react";
import { staticImage } from "../../constants/cloud.Image";

const Devolopers = [
    {
        UID: "PRM-MP1IEFW9-17VG",
        avater: "/devolopres/devoloper3.jpg",
        username: "anamika roy",
        cvt: ["Backend", "Master At Django AWS"],
        bio: "Bas wahi nhi milta jo dil chata hai",
    },
    {
        avater: "/devolopres/devoloper4.jpg",
        username: "Arnesha Paul",
        cvt: ["Master At Go", "GOOGLE CLOUD", "Server"],
        bio: "Tu agle janam mil sake dubara mujhe",
    },
    {
        avater: "/devolopres/devoloper6.jpg",
        username: "Trisha Banerjee",
        cvt: ["Master At Ruby", "Frontend", "System Design"],
        bio: "Made Sumthing Did Someone Remember",
    },
    {
        avater: "/devolopres/devoloper7.jpg",
        username: "Moumits Prajapatee",
        cvt: ["Master At Java, Python", "AI?ML LLM Model ", "DSA"],
        bio: "It Is my lasr take to keep alive",
    },
    {
        avater: "/devolopres/devoloper8.jpg",
        username: "Pretty Chakraborty",
        cvt: ["Tech Baster", "CEO", "Production", "CA"],
        bio: "Lost Is The Faith Of Getting Somting",
    },
    {
        UID: "PRM-MP1I818X-XN01",
        avater: staticImage.admin_banner,
        username: "Prashanta Mondal",
        cvt: ["Pythomn", "APi", "Stack", "Micro Service's"],
        bio: "Jalabee Babe Jababee Baby",
    },
];

function Devoloper_Profiles({ }) {
    return (
        <>
            <div className="w-full h-full   ">
                {/* Devoploper Profiles */}
                <header className="p-3 px-2">
                    <h1 className="font-black flex gap-3 items-center  text-2xl ">
                        <HardDriveDownload size={20} color="gray" /> Devoloper
                        Profile's{" "}
                    </h1>
                    <p className="font-semibold text-sm text-gray-500">
                        {" "}
                        Who Comtrobution & Add More Feature's To Make The Project Or The
                        Company Biger To Biger
                    </p>
                </header>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3 }}>
                    <main className="flex  flex-col gap-5   px-10">
                        {Devolopers.map((element, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" w-full md:h-60 relative not-md:flex-col   shadow-[inset_0_-20px_30px_rgba(0,0,0,0.6)]  flex flex-row gap-2 justify-evenly rounded-2xl overflow-hidden border  border-purple-600/50">
                                    {/* Background Image  */}

                                    <div className="w-full h-full overflow-hidden absolute -z-50">
                                        <img
                                            className="object-center object-cover h-full w-full blur-[2px] opacity-50"
                                            src={element.avater}
                                            alt=""
                                        />
                                    </div>

                                    <div className="p-3 flex justify-start items-center  gap-3">
                                        <img
                                            className="h-30  w-30  rounded-xl shadow-purple-500 shadow-2xs object-center object-cover "
                                            src={element.avater}
                                            alt=""
                                        />

                                        <div className=" p-3 not-md:p-1 not-md:w-full">
                                            <h1 className="font-black text-2xl not-md:text-sm flex items-center gap-2 ">
                                                <Verified size={20} color="blue" />
                                                {element.username}
                                            </h1>
                                            <p className="text-sm not-md:text-[8px] font-mono">
                                                {element.bio}
                                            </p>

                                            {element.cvt.map((e, idx) => {
                                                return (
                                                    <span
                                                        key={idx}
                                                        className="mt-1 flex justify-between bg-cyan-400/3 px-5 rounded-2xl  items-center text-lime-400 border text-[9px] border-cyan-400/50">
                                                        {e} <LucideVerified size={10} />
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center flex-col  px-5 w-1/3 not-md:w-full">
                                        <div>
                                            <h1 className="rounded-b-full text-[8px]  bg-lime-400/20 border border-lime-400 text-lime-400  backdrop-blur-2xl font-black px-5 py-1">
                                                {element.UID ? element.UID : "Not Give Role In Base"}
                                            </h1>
                                        </div>

                                        <h1 className="font-black text-sm  ">
                                            Technology By <span>Infen</span>
                                            <span className="text-yellow-500">Era</span>{" "}
                                        </h1>
                                        <p className="text-[12px] font-bold text-center text-gray-400 not-md:text-[10px]">
                                            We Are The Student Of Computer Science And Engineering We
                                            Are Meet And Start From University of ASI
                                        </p>
                                        <button className=" my-2 border flex items-center gap-1 bg-purple-500/10 border-purple-600  text-[10px] px-8 py-1 font-bold   rounded-2xl">
                                            Verify Through Devolopers <NotepadTextDashed size={15} />
                                        </button>
                                    </div>

                                    <div className=" w-1/3 not-md:w-full">
                                        <div className=" flex  gap-5 justify-end not-md:p-0 not-md:pb-1 p-2 not-md:w-full">
                                            <h1 className="text-[8px] font-bold flex items-center backdrop-blur-2xl   gap-1 px-5">
                                                <Shield size={12} /> Official{" "}
                                            </h1>

                                            <span className="font-black bg-linear-to-r from-green-500 to-lime-400 px-5 text-[10px] rounded-tr-full py-0.5 rounded-bl-full">
                                                Popular
                                            </span>
                                        </div>

                                        <div className="flex  text-black px-2  text-[10px] font-black justify-end not-md:w-full not-md:justify-center">
                                            <div className="bg-linear-to-br from-orange-500 to-yellow-400 px-5 items-center text-white flex gap-2">
                                                +45
                                            </div>
                                            <div className="bg-white flex gap-1 px-5 items-center">
                                                {" "}
                                                Midasbye Only
                                                <LockKeyhole size={15} color="skyblue" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </main>
                </motion.div>
            </div>
        </>
    );
}

export default Devoloper_Profiles;
