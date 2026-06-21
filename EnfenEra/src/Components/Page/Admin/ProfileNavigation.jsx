import {
    BellDot,
    ChevronDown,
    ChevronUp,
    CreditCard,
    HeadphoneOff,
    ListVideo,
    LogOut,
    LucideVerified,
    MoveLeft,
    Newspaper,
    PhoneCall,
    PresentationIcon,
    SendToBack,
    Settings,
    Settings2,
    ShoppingBag,
    SkipBack,
    StepBack,
    User2,
    Verified,
    Wallet2,
    X,
} from "lucide-react";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import authService from "../../../service/auth.service";
import Looging from "../../horizon/Looding";
import { clearAuth } from "../../../REDUX/Feachour/AuthSlice";
// REDUX DATA 
import {useSelector,useDispatch} from 'react-redux'



function ProfileNavigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const [loading,setLooding] = useState(false);

    const user = useSelector((state)=> state.auth.profile)
    console.log(user);


    // LogOut Funtion 
    async function handelLogOut(log) {
            setLooding(true);

        try {
            await authService.logout();
            dispatch(clearAuth());
            navigate("/",{replace : true})
            console.log("Log Out Successfily");


        } catch (error) {
            // console.log("ClearAuth Funtion Error => ", error);
            
        }
        finally {
            setLooding(false)
        }
    };
    




    const acccenter = [
        { name: "Profile", path: "/", icon: User2 },
        { name: "Settings", path: "/", icon: Settings2 },
        { name: "KYC & Updates", path: "/", icon: Settings2 },
    ];

    const teamsettingitem = [
        { name: "Team List", path: "/", icon: Settings },
        { name: "Team Settings", path: "/", icon: Settings },
        { name: "Modification", path: "/", icon: Settings },
        { name: "Team Profile", path: "/", icon: Settings },
    ];

    const logCenter = [
        { name: "Account", path: "/", icon: LucideVerified },
        { name: "payment", path: "/", icon: CreditCard },
        { name: "Product", path: "/", icon: ShoppingBag },
        { name: "Watch Live", path: "/", icon: ListVideo },
        { name: "NEWS", path: "/", icon: Newspaper },
        { name: "Notification", path: "/", icon: BellDot },
    ]

    const Product = [
        
    ]




    // navigation State
    const [accountCenter, setaccountCenter] = useState(false);
    const [workspace, setWorkspace] = useState(false);
    const [teamsettings, setTeamsettings] = useState(false);

    return (
        <>
            <div className="w-full h-screen nav-bg relative flex flex-col gap-1">
                <div className=" w-full flex items-center justify-between">
                    <div
                        onClick={() => navigate("/")}
                        className=" flex font-bold w-fit px-5 py-2 text-gray-500 hover:text-red-600 gap-3 cursor-pointer">
                        <h1>
                            <MoveLeft />
                        </h1>
                        <h2>Back</h2>
                    </div>

                    <div className="flex items-center gap-2 font-semibold text-gray-500 hover:text-white cursor-pointer text-sm px-5">
                        <PhoneCall size={15} />
                        <h1>Support ?</h1>
                    </div>
                </div>
                <header className="font-semibold text-sm hover:text-white hover:bg-slate-950 px-5 cursor-pointer border border-slate-900">
                    <div
                        onClick={() => setaccountCenter((prev) => !prev)}
                        className="flex items-center justify-between ">
                        <h1
                            className={`flex items-center gap-3 py-1.5 hover:text-white text-gray-400 ${accountCenter ? "text-white" : ""}`}>
                            <span>
                                <User2 size={15} />
                            </span>{" "}
                            Account Center
                        </h1>
                        <span>
                            {accountCenter ? (
                                <ChevronUp size={15} />
                            ) : (
                                <ChevronDown size={15} />
                            )}
                        </span>
                    </div>
                </header>

                {/* Account center active section  */}
                <div>
                    {accountCenter && (
                        <motion.div className="bg-slate-950 rounded-sm">
                            <div className="px-3">
                                {acccenter.map((element, index) => {
                                    return (
                                        <NavLink
                                            key={index}
                                            to={element.path}
                                            className={({ isActive }) =>
                                                `${isActive ? "text-white bg-slate-900" : "text-gray-500"} hover:text-white active:scale-95 hover:bg-slate-950`
                                            }>
                                            <div
                                                // onClick={()=> navigate(element.path)}
                                                className={`flex gap-3 items-center px-3 w-full rounded-sm hover:bg-slate-900 py-1.5 font-semibold text-sm`}>
                                                <span>
                                                    <element.icon size={15} />
                                                </span>
                                                {element.name}
                                            </div>
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </div>

                <main className="flex flex-col gap-1">
                    <section className="px-5 font-semibold text-sm">
                        <div className="flex gap-3 items-center ">
                            <span>
                                <Wallet2 size={15} />
                            </span>
                            <h1>Wallet</h1>
                        </div>
                    </section>

                    {/* Team settings ==============  */}
                    <section>
                        <div
                            onClick={() => setTeamsettings((prev) => !prev)}
                            className="flex items-center justify-between px-5 font-semibold cursor-pointer">
                            <h1
                                className={`flex items-center gap-3 py-1.5 text-sm   hover:text-white text-gray-400 ${teamsettings ? "text-white" : ""}`}>
                                <span>
                                    <Settings2 size={15} />
                                </span>{" "}
                                Team settings
                            </h1>
                            <span>
                                {teamsettings ? (
                                    <ChevronUp size={15} />
                                ) : (
                                    <ChevronDown size={15} />
                                )}
                            </span>
                        </div>

                        <div>
                            {teamsettings && (
                                <motion.div className="bg-slate-950 rounded-sm">
                                    <div className="flex flex-col gap-1">
                                        {teamsettingitem.map((element, index) => {
                                            return (
                                                <NavLink
                                                    key={index}
                                                    to={element.path}
                                                    className={({ isActive }) =>
                                                        `${isActive ? "text-white bg-slate-900" : "text-gray-500"} hover:text-white active:scale-95 hover:bg-slate-950`
                                                    }>
                                                    <div
                                                        // onClick={()=> navigate(element.path)}
                                                        className={`flex gap-3 items-center px-8 py-1.5 font-semibold text-sm  hover:bg-slate-900`}>
                                                        <span>
                                                            <element.icon size={15} />
                                                        </span>
                                                        {element.name}
                                                    </div>
                                                </NavLink>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </section>

                    {/* Payment ================== */}
                    <section>
                        <div>
                            <h1></h1>
                        </div>
                    </section>
                </main>

                {/* account */}
                <footer className="  absolute bg-slate-950 bottom-0 w-full">
                    <div className="p-2 flex gap-5 text-[12px] font-bold px-3 items-center h-full">
                        <div className="h-10 w-10 overflow-hidden rounded-full  border-3 border-pink-500 ">
                            <img className=" w-20" src="/devolopres/devoloper1.jpg" alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="flex gap-3 items-center">
                                {user?.name}
                                <span>
                                    <Verified fill="" color="blue" size={15} />
                                </span>
                            </h1>
                            <p className="text-gray-500">
                                {user?.email}
                            </p>
                        </div>
                        <div
                            onClick={() => setWorkspace((prev) => !prev)}
                            className="flex  flex-1 h-full justify-center  cursor-pointer ">
                            {teamsettings ? (
                                <ChevronUp size={15} />
                            ) : (
                                <ChevronDown size={15} color="gray" />
                            )}
                        </div>
                    </div>

                    <div className="relative">
                        {workspace && (

                            <div className=" absolute bottom-5  py-2 rounded-xl nav-bg border border-slate-800  w-full left-60   ">
                                <div className="border-b-2 border-slate-800">
                                    <div className="p-2 flex gap-5 text-[12px] font-bold px-3 items-center h-full">
                                        <div className="h-10 w-10 overflow-hidden rounded-full  border border-slate-800 ">
                                            <img className=" w-20" src="/devolopres/devoloper1.jpg" alt="" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="flex gap-3 items-center">
                                                {user?.name}
                                                <span>
                                                    <Verified fill="" color="blue" size={15} />
                                                </span>
                                            </h1>
                                            <p className="text-gray-500 text-[10px] ">{user.email}</p>
                                        </div>
                                        <div
                                            onClick={() => setWorkspace((prev) => !prev)}
                                            className="flex  flex-1 h-full justify-center  cursor-pointer ">
                                            {teamsettings ? (
                                                <ChevronUp size={15} />
                                            ) : (
                                                <X size={15} color="gray" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex px-5 gap-3 border-b-2 border-slate-800 font-semibold text-sm py-2 cursor-pointer hover:bg-slate-900 ">
                                    <span><PresentationIcon  /></span>
                                    <h1>Premium</h1>
                                </div>

                                <div className=" flex flex-col gap-1 ">
                                    {logCenter.map((element, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`py-1 px-5 flex items-center gap-3 text-sm font-semibold hover:bg-slate-900 rounded-sm cursor-pointer`}>
                                                <span><element.icon size={15} /></span>
                                                <h1>{element.name}</h1>
                                            </div>
                                        )
                                    })}
                                </div>
                                
                                <div
                                
                                    onClick={handelLogOut} 
                                    className=" border-t-2 border-slate-800 flex gap-3 items-center px-5 py-1.5 font-bold text-sm cursor-pointer " >
                                    <span><LogOut size={20} /></span>
                                    <h1 className="flex justify-center items-center ">LogOut {loading&& (<Looging />)} </h1> 
                                </div>
                            </div>
                        )}
                    </div>
                </footer>
            </div>
        </>
    );
}

export default ProfileNavigation;
