import {
    CheckCircleIcon,
    Dot,
    Facebook,
    Heart,
    Instagram,
    ListVideo,
    MoveDown,
    Star,
    VideotapeIcon,
    Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const tournamentCard = [
        {
            name: "CALL OF DUTY MOBILE",
            url: "images/logos/cod.png",
            avtar: "/images/pic/cod_background.jpg",
            path: "/gameprofile/1",
            titel: "Call Of Duty Warzone ",
        },
        {
            name: "BGMI INDIA",
            url: "images/logos/bgmi.png",
            avtar: "/images/pic/bgmi_background.webp",
            path: "/gameprofile/2",
            titel: "Call Of Duty Warzone ",
        },
        {
            name: "FREE FIRE INDIA",
            url: "images/logos/freefire.png",
            avtar: "/images/pic/freefire_background.jpg",
            path: "/gameprofile/3",
            titel: "Call Of Duty Warzone ",
        },
        {
            name: "CLASH OF CLANS",
            url: "images/logos/coc.png",
            avtar: "images/pic/coc_background.jpg",
            path: "/gameprofile/4",
            titel: "Call Of Duty Warzone ",
        },
    ];

    //Steps Ui
    const stepui = [
        "Create Your Account",
        "Complete Your Profile",
        "Browse Tournaments",
        "Select Tournament",
        "Register Your Team",
        "Payment & Verification",
        "Recive Match Details",
        "Play & Compete",
        "Resule & Rewords",
    ];

    // Watch Live Buttton state
    const [match, setMatch] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full h-full z-0">
                <header>
                    <div className="flex justify-between items-center px-1 py-10 ">
                        <div>
                            <h1 className="text-3xl font-black uppercase">
                                Improve your <span className="text-red-600">gaming </span> expriance
                            </h1>
                            <p className="text-sm font-mono text-gray-500 ">
                                Active Games You Can Host And Join
                            </p>
                        </div>
                        <div>
                            <button
                                className="text-sm  px-5 py-2 rounded-sm bg-gray-500 font-black text-whit uppercasee hover:text-white active:scale-95 cursor-pointer"
                                type="button">
                                Explore Matches
                            </button>
                        </div>
                    </div>

                    <div className=" rounded-xl flex px-5 py-5 items-center border border-slate-900 bg-slate-950   mb-3 ">
                        <div>
                            {" "}
                            <img
                                className="w-20 md:w-30"
                                src="/images/logos/bgmi.png"
                                alt=""
                            />{" "}
                        </div>
                        <div>
                            <img className="w-20 md:w-30" src="images/logos/cod.png" alt="" />
                        </div>
                        <div>
                            <img
                                className=" w-30 md:w-30"
                                src="images/logos/freefire.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className=" w-30 md:w-30"
                                src="images/logos/coc.png"
                                alt=""
                            />
                        </div>
                    </div>

                    {/* <div><h1 className='font-bold py-2'>Start Your Tournament Hear </h1></div> */}
                    <div className="p-2">
                        <h1 className="text-2xl font-black uppercase text-center text-gray-500">
                            Popular Games '' Bing Coming Soon ...
                        </h1>
                        <p className="text-sm logo-font text-purple-500 px-2">
                            Hidron Technology
                        </p>
                    </div>
                    <div className="  font-black uppercase text-4xl  m-1 flex gap-2 text-center p-2 rounded-xl text-blue-700">
                        <div>Trending</div>
                        <div>Tournaments </div>
                        <div>Rank</div>
                    </div>
                    <div className="grid z-0 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  py-5 justify-center gap-3 items-center md:px-5  rounded-xl  px-5   bg-gray-500/10 shadow-[inset_0px_20px_30px_-20px] shadow-indigo-500   mb-3 ">
                        {/* Tournamenrt Card =============== */}

                        {tournamentCard.map((element, index) => {
                            return (
                                <section
                                    key={index}
                                    onClick={() => navigate(element.path)}
                                    className="flex  z-0 overflow-hidden  rounded-xl gap-5 cursor-pointer  max-w-90 group bg-black hover:scale-101 transition-all duration-300 ">
                                    <div className="flex w-full h-full flex-col p-3 bg-blend-color-burn bg-slate-950 gap-5 relative">
                                        <div className=' absolute bottom-0  shadow-[50px_50px_2000px_100px] shadow-orange-400'></div>
                                        <div className="flex justify-center items-center bg-pink-300/10 rounded-2xl  relative">
                                            <img
                                                src={element.avtar}
                                                className="h-50  group-hover:scale-105 duration-500 transition-transform rounded-xl"
                                                alt="image"
                                            />
                                            <img
                                                src={element.url}
                                                alt=" "
                                                className=" w-20 -bottom-10  left-0 absolute  rounded-full "
                                            />
                                        </div>

                                        <div className=" text-[12px] flex flex-col text-white flex-1 gap-3 p-3">
                                            <h1 className="font-black text-xl flex items-center">
                                                {" "}
                                                {element.name}
                                            </h1>
                                            <p className=" ">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Quisquam hic eos inventore impedit, sed autem
                                                dignissimos architecto facere tempore labore{" "}
                                            </p>
                                            <div className="flex gap-3 justify-between">
                                                <h1 className="flex gap-3 font-black text-gray-500">
                                                    {" "}
                                                    <span>4.74k</span> <span>7.2RE</span>
                                                </h1>
                                                <h2 className="flex gap-3">
                                                    <span className="flex">
                                                        <Star size={15} fill="yellow " color="gold" />
                                                        4.3
                                                    </span>{" "}
                                                    <span className="flex">
                                                        <Heart size={15} fill="hotpink" color="red" />
                                                        45k{" "}
                                                    </span>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                    <div className=" rounded-xl flex px-5 items-center py-8 border-b  mb-3 w-full relative overflow-hidden ">
                        <div className=' absolute top-0  shadow-[0px_00px_3200px_50px] shadow-amber-500'></div>
                        <section className=" w-full ">
                            <div>
                                <h1 className="font-black pt-2 px-2 text-2xl uppercase">
                                    Daily Trafic Of Our <span className="text-red-600">Website </span>{" "}
                                </h1>
                                <p className="font-extralight text-sm px-2">
                                    one of the trusted platform get extraodenary reword get
                                    premeum feature{" "}
                                </p>
                            </div>
                            <div className="w-full   gap-5  flex py-5">
                                <div className="border-r px-8 border-gray-500">
                                    <h1 className="text-4xl font-black">1.2<span className="text-red-600">K</span> </h1>
                                    <p className="text-sm text-gray-500 font-medium text-center">
                                        Active, Daily Online
                                    </p>
                                </div>
                                <div className="border-r px-8 border-gray-500">
                                    <h1 className="text-4xl font-black">1.2<span className="text-red-600">K</span></h1>
                                    <p className="text-sm text-gray-500 font-medium text-center">
                                        Pepole Trust Us
                                    </p>
                                </div>
                                <div className="border-r px-8 border-gray-500">
                                    <h1 className="text-4xl font-black">1.2<span className="text-red-600">K</span></h1>
                                    <p className="text-sm text-gray-500 font-medium text-center ">
                                        Instent cash{" "}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </header>

                <section className="bg-gray-500/10 rounded-xl p-5">
                    <div className="">
                        <h1 className="flex px-2 gap-5 font-black text-red-600 text-2xl uppercase " >
                            {" "}
                            <p className="font-black px-3 rounded-2xl text-sm flex items-center bg-white text-red-600 ">
                                {" "}
                                Live
                            </p>{" "}
                            Live <span className="text-white">Match</span>{" "}
                        </h1>
                        <div className="py-3 flex gap-3 not-md:flex-wrap items-center">
                            <p className="font-black text-gray-500/50">OPRATION</p>
                            {[
                                "Trending",
                                "Watch Live",
                                "Hall Of Frame",
                                "Teams",
                                "Feacherd",
                            ].map((element, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setMatch(element);
                                        }}
                                        className={`cursor-pointer hover:bg-blue-500/20 md:px-4 px-4 font-bold rounded-xl py-2 transition-all duration-150  
                                            ${match == element ? "bg-blue-500/70" : "bg-gray-500/20"}`}>
                                        {element}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <main className="w-full h-full block  group z-0 overflow-hidden rounded-xl my-4 sticky top-25">
                    <div
                        style={{
                            backgroundImage: "url('/images/pic/cod_background.jpg')",
                        }}
                        className="w-full   min-h-[60vh] md:min-h-[50vh]  md:bg-center  bg-cover bg-center rounded-xl overflow-hidden">
                        {/* opacity leyar */}
                        <div className="absolute  bg-black/80 z-0 w-full bg-linear-to-b to-black h-full"></div>

                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2.5 }}
                            className=" absolute top-0 flex flex-col h-full  w-full">
                            <div className=" py-8 w-full justify-center flex flex-col items-center">
                                <h1 className="text-2xl md:text-3xl text-white font-black uppercase ">
                                    Join Competitive Esports Tournaments & Play With Top Gamers
                                </h1>
                                <p className="text-sm font-bold text-gray-400">
                                    Expriance professional tournament managemant fast matchmaking
                                    and competivive gaming features designed for every players
                                </p>
                            </div>

                            <div className="font-semibold px-5">
                                <ul className="flex flex-col text-xl text-gray-400 text-center">
                                    <li>
                                        {" "}
                                        '' Play popuar battle royeland multiplayer tournaments with
                                        esey registration and live match traking
                                    </li>
                                    <li>
                                        {" "}
                                        '' Join exciting esports tournaments and complete with
                                        skilled players from all over INDIA
                                    </li>
                                    <li>
                                        {" "}
                                        '' Register your squad participate in custom matches & win
                                        rewords in competitive gaming events{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        '' Experience smooth tournament managemant instant match
                                        updates and profetional esports competition
                                    </li>
                                    <li>
                                        '' Discover the next generation esports tournament platform
                                        for games teams and communities
                                    </li>

                                </ul>
                            </div>
                        </motion.section>
                    </div>
                </main>

                <main className="w-full h-full relative z-0 mb-5 ">
                    <div className="absolute  bg-black/80 z-0 w-full bg-linear-to-b to-black h-full"></div>
                    <div
                        className=" w-full min-h-[90vh] bg-center bg-cover "
                        style={{
                            backgroundImage: "url('/images/pic/bgmi_background.webp')",
                        }}>
                        <div className="absolute top-0 w-full">
                            <div className="px-3 py-5">
                                <h1 className="text-6xl uppercase font-black text-center">How to join tournament ?</h1>
                                <p className="text-xl font-medium text-gray-500 text-center">
                                    Follow thr steps and join tournament and win credits and gift
                                    voucher
                                </p>
                            </div>

                            <div className="w-full flex justify-center items-center h-full ">
                                {/* <div><h1 className='text-5xl font-black'>1</h1></div> */}

                                <div className="flex  w-full h-full gap-3 flex-wrap px-5 py-10 items-center justify-center">
                                    {stepui.map((element, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex active:scale-x-105 gap-2 w-60  bg-gray-500/20 rounded-xl  p-2 items-center">
                                                <h1 className="text-5xl font-black">{index + 1}</h1>
                                                <div>
                                                    <h2 className="text-sm font-black">{element}</h2>
                                                    <p className="text-[10px] text-gray-400 underline hover:text-sky-600 cursor-pointer ">
                                                        Info
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </main>

                <main className="w-full h-full relative z-0">
                    <div className="absolute  bg-black/50 z-0 w-full bg-linear-to-b to-black h-full"></div>
                    <div
                        className=" w-full min-h-[90vh] not-md:min-h-[60vh] bg-center bg-cover "
                        style={{
                            backgroundImage: "url('/images/pic/freefire_background.jpg')",
                        }}>
                        <div className=" absolute top-0 w-full h-full">
                            <div className="flex flex-col justify-center items-center md:flex-row h-full w-full ">
                                <div>
                                    <img src="/images/logos/freefire.png" alt="" srcset="" />
                                </div>
                                <div>
                                    <div className="text-center">
                                        <h1 className="md:text-4xl text-2xl font-black uppercase"> Garena Free Fire India </h1>
                                        <p className="font-black md:text-2xl text-sm uppercase">Play Free Fire India Tournament</p>

                                    </div>
                                    <button
                                        className="border px-5 w-full border-purple-300/20 my-6 md:text-2xl font-black bg-purple-700/20 rounded-sm py-2"
                                    >Play </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

                <main className="w-full h-full relative z-0 p-5 bg-linear-to-bl from-orange-500 via-white to-green-600">
                    <div className="absolute   z-0 bg-black/30 w-full h-full top-0 left-0"></div>
                    <div
                        className=" w-full min-h-[90vh] not-md:min-h-[70vh] bg-center bg-cover rounded-2xl "
                        style={{
                            backgroundImage: "url('/images/pic/bgmi_background.jpg')",
                        }}>
                        <div className=" absolute top-0 w-full h-full">
                            <div className="flex flex-col justify-center items-center md:flex-row h-full w-full ">
                                <div>
                                    <img src="/images/logos/bgmi.png" alt="" srcset="" />
                                </div>
                                <div>
                                    <div className="text-center">
                                        <h1 className="md:text-4xl text-2xl font-black uppercase">Battle Ground Monile India</h1>
                                        <p className="font-black md:text-2xl text-sm uppercase">Play BGMI Mobile India Tournament</p>

                                    </div>
                                    <button
                                        className="border px-5 w-full border-purple-300/20 my-6 md:text-2xl font-black bg-purple-700/20 rounded-sm py-2"
                                    >Play </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

                <main className="w-full h-full relative z-0">
                    <div className="absolute  bg-black/50 z-0 w-full bg-linear-to-b to-black h-full"></div>
                    <div
                        className=" w-full min-h-[90vh] bg-center bg-cover "
                        style={{
                            backgroundImage: "url('/images/pic/freefire_background.jpg')",
                        }}></div>
                </main>

                <footer></footer>
            </div>
        </>
    );
}

export default HeroSection;
