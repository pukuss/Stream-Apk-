import {
    Airplay,
    CheckCircleIcon,
    Dot,
    Facebook,
    Heart,
    Icon,
    Instagram,
    ListVideo,
    MessageCircle,
    MoveDown,
    ShoppingBag,
    ShoppingBasket,
    ShoppingCartIcon,
    Star,
    VideotapeIcon,
    Youtube,
    AirVent,
    DotIcon,
    AtomIcon,
    Info,
    Apple,
    BadgeInfo,
    Code2,
    CodeXml,
    Codepen,
    FileCode2,
    ArrowLeftSquare,
    ArrowRightSquare,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import {FcPlus} from "react"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Cvcomp} from './index'

function HeroSection() {
    const tournamentCard = [
        {
            name: "CALL OF DUTY MOBILE",
            url: "images/logos/cod.png",
            avtar: "/images/pic/cod_background.jpg",
            path: "/gameprofile/1",
            titel: "Call Of Duty Warzone ",
            wining : "UpTo 5000₹"
        },
        {
            name: "BGMI INDIA",
            url: "images/logos/bgmi.png",
            avtar: "/images/pic/bgmi_background.webp",
            path: "/gameprofile/2",
            titel: "Call Of Duty Warzone ",
            wining : "UpTo 5000₹"
        },
        {
            name: "FREE FIRE INDIA",
            url: "images/logos/freefire.png",
            avtar: "/images/pic/freefire_background.jpg",
            path: "/gameprofile/3",
            titel: "Call Of Duty Warzone ",
            wining : "UpTo 5000₹"
        },
        {
            name: "CLASH OF CLANS",
            url: "images/logos/coc.png",
            avtar: "images/pic/coc_background.jpg",
            path: "/gameprofile/4",
            titel: "Call Of Duty Warzone ",
            wining : "UpTo 5000₹"
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

    const productItem = [
        {name : "Studio" , Icon : AirVent , title : "Join our patnar programe ", text : "Hostig Dashboard", isActive : true},
        {name : " Chat" , Icon : MessageCircle, title: "join our community and chat other's",text : "Our Community", isActive : false},
        {name : "Shoop" , Icon : ShoppingBag , title : "Shooping and get 20% Off",text : "Clame Swag", isActive : false},
        {name : "Ai Studio", Icon : Airplay, title : "Use Free AI chat and get help",text : "How Can I Help You", isActive : false} ,
        {name : "Marcketplace", Icon : ShoppingCartIcon , title : "Pay And get Premume",text : "premium", isActive : false},
        {name : "Engine", Icon : AtomIcon , title : "Start V.0.1 Engine Hear ",text : " V.0.1 Engine", isActive : false}

    ]

    // Watch Live Buttton state
    const [match, setMatch] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full h-full z-0">
                 {/* T O U R N A M E N T   C A R D   S E C T I O N ==================== */}
                <header>

                    {/* <div><h1 className='font-bold py-2'>Start Your Tournament Hear </h1></div> */}
               
                    <div className="grid z-0 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  py-5 justify-center gap-3 items-center md:px-5  rounded-xl  px-5   bg-gray-500/10   mb-3 ">
                        {/* <div>New Tournament</div> */}
                        {/* Tournamenrt Card =============== */}

                        {tournamentCard.map((element, index) => {
                            return (
                                <section
                                    key={index}
                                    onClick={() => navigate(element.path)}
                                    className="flex  z-0 overflow-hidden  rounded-xl gap-5 cursor-pointer  max-w-90 group bg-black hover:scale-101 transition-all  duration-300 ">
                                    <div className="flex w-full h-full flex-col p-3 bg-blend-color-burn bg-slate-950 gap-5 py-3 relative border overflow-hidden rounded-xl border-blue-950">
                                        <div className=' absolute bottom-0  shadow-[50px_50px_2000px_100px] shadow-blue-600'></div>
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
                                            <h1 className="font-bold ">Win : <span className="text-green-500 font-black">{element.wining}</span></h1>


                                            <div className="flex gap-3 justify-between font-medium">
                                                <h1 className="flex gap-3 font-black text-gray-500">
                                                    {" "}
                                                    <span>4.74k</span> <span>7.2RE</span>
                                                </h1>
                                                <h2 className="flex gap-3 font-semibold">
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
                    <div className=" rounded-xl flex px-5 items-center py-8  mb-3 w-full relative overflow-hidden ">
                        <div className=' absolute top-0 w-full shadow-[0px_00px_1000px_30px] shadow-red-600'></div>
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


                {/* P R O D U C T   AREA UI AND PATH  ================================ */}
                <main className="w-full h-full block  group z-0 overflow-hidden rounded-xl my-4 sticky top-25">
                    <motion.div
                        className="bg-gray-500/10 px-5 py-5 pb-10 "
                    >
                        <div className="relative">
                            <motion.div className="absolute  shadow-[0px_0px_100px_30px] shadow-amber-600" ></motion.div>
                            <h1 className="text-2xl flex items-center gap-3 font-bold bg-clip-text text-transparent w-fit bg-linear-to-r from-pink-700  via-orange-500 to-yellow-400"><ShoppingCartIcon color="gray"  /> Our Product's</h1>
                            <p className="text-gray-500 md:px-10" >try and give us feedback to inprove our service</p>
                        </div>

                        <div className="flex gap-3  flex-wrap justify-evenly" >
                            {productItem.map((element,index) => (
                                <div key={index} className="border relative px-5 py-3 min-w-90 overflow-hidde overflow-hidden min-h-60 flex flex-col justify-between bg-linear-to-br from-slate-950 to-slate-900  rounded-2xl border-slate-950">
                                    {/* styele == */}
                                        <div className="absolute shadow-[0px_0px_200px_60px] shadow-orange-400"></div>

                                    <div>
                                        <h1 className="font-bold text-xl flex items-center bg-clip-text text-transparent w-fit gap-3 bg-linear-to-r  from-pink-700  via-orange-500 to-yellow-400">
                                            <span><element.Icon className="text-amber-600" /></span>
                                            {element.name}</h1>
                                        <p className="font-sans text-sm  pl-8 pr-3 text-gray-500">{element.title}</p>
                                    </div>

                                    <div className="text-2xl text-center text-gray-400 font-black">
                                        <h1>{element.text}</h1>
                                        <p className="text-sm font-semibold   text-red-500">{element.isActive ? "" : "We Are Working On It ... "}</p>
                                    </div>

                                    <div>
                                        
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <h1 className="font-semibold text-gray-500 text-sm">Status</h1>
                                        <div className={`flex items-center font-semibold gap-3 text-sm py-0.5 border w-fit px-3 rounded-3xl ${element.isActive ? "border-green-600/50 text-green-600 bg-green-500/10" : "border-red-600/50 text-red-600 bg-red-500/10"} border-green-600 `}>
                                            {element.isActive? (<span className="bg-green-500 p-1 rounded-4xl "></span>) :  (<span className="bg-red-600 p-1  rounded-3xl"></span>)}
                                            {element.isActive ? "Active" : "Maintanance"}
                                        </div>
                                        <div className={` w-fit rounded-xl py-0.5 px-8 font-semibold  ${element.isActive? " text-blue-700 bg-sky-600/10 cursor-pointer": "hidden"}`}>
                                            Explore 
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </main>

                

                
                {/* C A L L   T O   A C T I O N     encourage visitor to take action  */}
                <main className="w-full h-full relative  overflow-hidden  rounded-2xl my-5">
                    <div className="shadow-[0_0_70px_30px] absolute w-full shadow-blue-600"></div>
                        <div className="flex justify-between  md:px-20 px-5 items-center flex-row bg-blue-950 py-10">
                            <div>
                                <h1 className="text-3xl font-bold">Ready to get started </h1>
                                <p className="text-sm  font-medium text-gray-400">Join us today and earn money and grow your skill & buisness</p>
                            </div>
                            <div>
                                <button 
                                    onClick={() => navigate("/register")}
                                    className="flex border border-blue-800 px-5 items-center cursor-pointer gap-3 py-1.5 rounded-3xl  bg-white text-blue-700 font-bold "
                                    type="button">
                                    <span><ArrowRight size={25} className="border-2 p-1 rounded-2xl" /></span>
                                    Get Started
                                </button>
                            </div>
                        </div>
                </main>


                {/* ABOUT  MY P R O J E C T   E X P L A N A T I O N  */}
                <main className="w-full h-full relative z-0 p-5">
                    <div >
                        <div>
                            <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent  bg-linear-to-r from-pink-700  via-orange-500 to-yellow-400">Hii <span className="logo-font text-purple-500"> Nomoskar  </span> 
                                Guest Welcome 
                            </h1>
                            <p className="text-sm text-center font-semibold text-gray-500">I want To Explain You It Just A Demo Version </p>
                        </div>

                        <div className="py-8">
                            <h1 className="text-sm font-semibold">You can earn by our partner programe
                                <Link className="text-blue-600 underline"> Become a Partner </Link>
                                Up-To 100₹  per hosting and become a Hoster profile of our website. Also get a Dashboard to host and maintain your game rule, result . 
                                You can joim our program episode and tournament's and own unblevale rewords and get higher rank episode profile . 
                                you can eran by join us or host with us ?  It showd be posibale with infenera.
                            </h1> 

                            <h2 className="text-sm font-semibold text-gray-500 flex flex-col  py-3"> 
                                <span className="text-white"> Why You Trust Us?</span>
                                you can eran with no fake coin or game currency you join our tournament just login or create account then you shod play solo and make your team 
                                and create full feach team and you can access all custoomsation of team name and we have a best of bestsupport team.
                            </h2>

                            <h1 className="text-sm ">
                                just Join via register your self. join just minimal rupees of 2inr just a simple click with your full team.
                                if you rank the team with 4vs4 or full classec map 100 players combat our observer set 1st 2nd 3rd position and tdm make victory team.
                                make disition and we give rewords via "winers" and the "Host" if host tournament thay get players by there own cunnections thay ge maximum profeet.
                                else use our platform give a small charge "--refundable" after the match we give all money of refund and small profit.
                            </h1>

                            <h1 className="text-sm  text-gray-500">
                                we get sponcer if you have a good infulance in your community and social media platform. user get free match and own match thay get more rewords like swag and game pass roil pass booyah pass etc dimond uc gims 
                                We cant lonch it bcouse of we dont have legale certifecate or licence ....
                            </h1>

                            <h1 className="bg-clip-text text-transparent text-center bg-linear-to-r from-pink-700  via-orange-500 to-yellow-400 font-bold text-sm"><span className="logo-font">West Bengal</span> Yeah i am Indian and Proude Bengali </h1>
                            <h6 className="text-[12px] underline text-blue-600 text-center cursor-pointer">Trems & Cunditions</h6>
                        </div>
                    </div>
                </main>



                <main className="w-full h-full relative z-0">
                    
                </main>

                <footer></footer>
            </div>
        </>
    );
}

export default HeroSection;
