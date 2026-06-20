import { Mail, User2 } from 'lucide-react'
import { useState } from 'react';
import { SocialButton } from "../../../Components/base/buttons/social-button"
import { EyeClosed, EyeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import Sucessfull from '../../horizon/Sucessfull'

// import { HandelForm } from '../../../utils/handelForm';

function LoginPage({ props }) {
    const [logData, setLogData] = useState({
        email : "",
        passwd : "",
    })  

    function handeform (e) {
        const {name, value} = e.target;

        setLogData((prev) => (
            {...prev, [name] : value}
        )) 
    }

    const [islooding, setLooding] = useState(true);
    const [showPasswd, setshowPasswd] = useState(false);
    const [pop, setpop] = useState(false)
    const [error , setError] = useState(true)
    


    const navigate = useNavigate();
    return (
        <>
            <div className='w-full h-screen flex  justify-center items-center bg-slate-950 relative'>
                <div className='absolute w-full h-full'>
                    {pop && (
                        <motion.section
                            className="h-full w-full absolute  flex justify-center items-center z-10 ">
                            <div className="border flex justify-center items-center flex-col bg-slate-950 px-10 py-10 overflow-hidden rounded-2xl  border-slate-900 relative">
                                <div className="absolute shadow-[50px_50px_2000px_100px] shadow-green-500  "></div>

                                <div>
                                    <Sucessfull />
                                </div>

                                <div className="uppercase text-center font-black text-2xl ">
                                    <h1>OTP SEND</h1>
                                    <p className="text-sm lowercase font-semibold">Send Via Email : {logData.email}</p>
                                </div>

                                <div>
                                    {/* <button>Cancel</button> */}
                                    <button
                                        onClick={() => {
                                            setpop((prev) => !prev);
                                            navigate("/singin/otp-verify");

                                        }}
                                        className="my-5 py-2 rounded-3xl bg-green-500 font-black text-white cursor-pointer  border px-10 ">Contenue</button>
                                </div>
                            </div>
                        </motion.section>
                    )}
                </div>
                <div>
                    <div className={` ${pop ? "hidden": "" }w-full h-full `}>
                        <main className='flex h-full w-full  justify-center not-md:flex-col gap-5 items-center md:p-10 p-5'>
                            <section className='md:px-20 px-10 overflow-hidden border border-slate-900 p-4 rounded-2xl bg-slate-950 relative'>
                                <div className=' absolute bottom-0  shadow-[50px_50px_2000px_100px] shadow-indigo-500'></div>
                                <div className=' absolute bottom-0  shadow-[50px_50px_2000px_100px] shadow-pink-700 animate-pulse duration-500'></div>

                                <header className='w-full flex justify-between text-xl font-black'>
                                    {/* <h1>InfenEra</h1> */}
                                    <h1 className='bg-linear-0 from-indigo-500 pacifico  font-logo  to-sky-500 bg-clip-text text-transparent logo-font '>InfenEra</h1>
                                    <h1>SingIn</h1>
                                </header>

                                <main className='flex justify-center items-center flex-col p-2'>
                                    <form 
                                        onSubmit={(e)=> 
                                        { return e.preventDefault() }}

                                        action="" className='text-sm font-bold flex flex-col gap-5 mt-4'>
                                        {/* email id ==========  */}
                                        <div className='flex gap-4 border p-2 border-slate-900 rounded-2xl px-5'>
                                            <label className='flex items-center text-gray-500 gap-2' htmlFor="Email"><Mail /> email</label>
                                            <input
                                                className='outline-0'
                                                onChange={(e) => handeform(e)}
                                                required
                                                id='Email'
                                                name='email'
                                                type="email" />
                                        </div>
                                        {/* password ============ */}
                                        <div className='flex gap-4 border border-slate-900 p-2 rounded-2xl px-5'>
                                            <label className='flex gap-2 text-gray-500' htmlFor="passwd"> <User2 /> password</label>
                                            <input
                                                className='outline-0'
                                                required
                                                id='passwd'
                                                type={showPasswd? "text" : "password"} />
                                            <button
                                                className='cursor-pointer'
                                                onClick={() => setshowPasswd((prev) => !prev)}
                                            >{showPasswd ? <EyeIcon /> : <EyeClosed />}</button>
                                        </div>

                                        {/* E R R O R   Code  */}
                                        {}

                                        <button
                                            disabled={!logData.email}
                                            onClick={() => {
                                                setpop((prev)=> !prev)
                                            }}
                                            className='border px-2 py-2 border-slate-800 hover:bg-slate-900  cursor-pointer rounded-2xl'
                                            type='submit'
                                        >Log in</button>
                                    </form>

                                    <h1 className='text-sm font-black text-indigo-600 p-3'>Or</h1>
                                </main>

                                <footer className='flex flex-col items-center justify-center w-full'>
                                    <div className='flex justify-center items-center flex-col  gap-3 w-90'>
                                        <SocialButton
                                            className='w-90'
                                            social="google" theme="brand">
                                            Sing in with Google
                                        </SocialButton>
                                        <SocialButton
                                            className='w-90'
                                            social="apple" theme="brand">
                                            Sing in with Apple
                                        </SocialButton>
                                        <SocialButton
                                            className='w-90'
                                            social="facebook" theme="brand">
                                            Sign in with Facebook
                                        </SocialButton>
                                    </div>

                                    <div className='p-5 text-sm '>
                                        <h1>Create new account ,
                                            <span
                                                onClick={() => navigate("/register")}
                                                className='text-sky-500 font-bold hover:underline cursor-pointer'>Register</span></h1>

                                    </div>
                                </footer>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
