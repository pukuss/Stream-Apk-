import { Eye, EyeClosed, EyeIcon, Mail, User2 } from 'lucide-react'
import React, { useState } from 'react'
import { SocialButton } from "../../../../Components/base/buttons/social-button"
import { Navigate, useNavigate } from 'react-router-dom'
import authService from '../../../../service/auth.service'

function SingIn() {
    const navigate = useNavigate();
    const [looding , setlooding] = useState(false);
    const [showPasswd, setshowPasswd] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }


    // handelsubmit
    async function handelSubmit(e) {
        e.preventDefault();

        try {
            const res = await authService.signUp(formData);
            console.log(res);
            setlooding(true);
        } catch (error) {
            console.log( "Singin Ui Error => " , error);
        }   finally {
            setlooding(false);
        }
        

    }


    return (
        <>
            <div className='w-full h-full '>
                <main className='flex h-full w-full  justify-center not-md:flex-col gap-5 items-center md:p-10 p-5'>
                    <section className='md:px-20 px-10 overflow-hidden border border-slate-900 p-4 rounded-2xl bg-slate-950 relative'>
                        <div className=' absolute bottom-0  shadow-[50px_50px_2000px_100px] shadow-indigo-500'></div>
                        <div className=' absolute bottom-0  shadow-[50px_50px_2000px_100px] shadow-pink-700 animate-pulse duration-500'></div>

                        <header className='w-full flex justify-between text-xl font-black py-5'>
                            {/* <h1>InfenEra</h1> */}
                            <h1 className='bg-linear-0 from-indigo-500 pacifico  to-sky-500 bg-clip-text text-transparent logo-font '>InfenEra</h1>
                            <div>Register
                                {/* L O O D I N G STATE =============  */}
                            <div className='text-[12px] font-mono text-green-500 '>{looding && (
                                <h1> Looging<span className=' animate-ping'>...</span></h1>
                            )}</div>
                            </div>
                            
                            
                        </header>

                        <main className='flex justify-center items-center flex-col p-2'>
                            <form
                                onSubmit={handelSubmit}

                                action="" className='text-sm font-bold flex flex-col gap-5 mt-4'>
                                {/* email id ==========  */}
                                <div className='flex gap-4 border p-2 border-slate-900 rounded-2xl px-5'>
                                    <label className='flex items-center text-gray-500 gap-2' htmlFor="Email"><Mail /> email</label>
                                    <input
                                        className='outline-0 '
                                        required
                                        onChange={handleChange}
                                        name='email'
                                        id='email'
                                        type="email" />
                                </div>
                                {/* password ============ */}
                                <div className='flex gap-4 border border-slate-900 p-2 rounded-2xl px-5'>
                                    <label className='flex gap-2 text-gray-500' htmlFor="passwd"> <User2 /> password</label>
                                    <input
                                        className='outline-0'
                                        required
                                        id='passwd'
                                        onChange={handleChange}
                                        name='password'
                                        type={showPasswd ? "text" : "password"} />
                                    <button
                                        className='cursor-pointer'
                                        type='button'
                                        onClick={() => setshowPasswd((prev) => !prev)}
                                    >{showPasswd ? <EyeIcon /> : <EyeClosed />}</button>
                                </div>

                                <div className='flex gap-4 border border-slate-900 p-2 rounded-2xl px-5'>
                                    <label className='flex gap-2 text-gray-500' htmlFor="name"> <User2 /> Username</label>
                                    <input
                                        className='outline-0'
                                        required
                                        name='name'
                                        id='name'
                                        onChange={handleChange}
                                        type="text" />
                                </div>

                                <button
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
                                <h1>Already Registers ,
                                    <span
                                        onClick={() => navigate("/singin")}
                                        className='text-sky-500 font-bold hover:underline cursor-pointer'>Sing In</span></h1>

                            </div>
                        </footer>
                    </section>
                </main>
            </div>
        </>
    )
}

export default SingIn
