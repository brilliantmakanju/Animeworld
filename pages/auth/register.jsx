import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'

const Register = () => {
    return (
        <>
            <Head>
                <title>Register</title>
                <meta name="description" content="Anime Castle Signup Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='  md:float-left rounded-lg md:w-[68em] w-full md:h-screen h-[90vh] flex-col gap-0  p-9 md:px-[350px] md:ml-[16rem] md:mt-[-40px] mt-[10vh]   ' >
                <div className=' w-full flex flex-col flex-wrap gap-3 '  >
                    <div className='flex border-[2px] py-1 rounded-md px-3 justify-between items-center ' >
                        <FaFacebook className='w-[20px] h-[40px] text-[blue] ' />
                        <span className='flex justify-center items-center pr-[20px] font-bold ' >Continue with Facebook</span>
                    </div>
                    <div className='flex border-[2px] rounded-md py-1 px-3 justify-between items-center ' >
                        <FaGoogle className='w-[20px] h-[40px] text-[red] ' />
                        <span className='flex justify-center items-center pr-[38px] font-bold ' >Continue with Google</span>
                    </div>
                    <div className='flex border-[2px] rounded-md py-1 px-3 justify-between items-center ' >
                        <FaApple className='w-[20px] h-[40px] text-[#000000] ' />
                        <span className='flex justify-center items-center pr-[47px] font-bold ' >Continue with Apple</span>
                    </div>
                </div>
                <div className='flex justify-center w-full items-center my-[10px] gap-2 ' >
                    <div className='w-[50%] bg-black h-[1px] ' ></div>
                    <span className=' font-bold mt-[5px] ' >or</span>
                    <div className='w-[50%] bg-black h-[1px] ' ></div>
                </div>
                <form className=' w-full flex flex-col  rounded-xl  gap-3 ' >
                    <input type="email" spellCheck="false" className='h-[50px] text-[18px] font-bold  pl-2 rounded-sm ' required placeholder='Email' />
                    <input type="text" spellCheck="false" className='h-[50px] text-[18px] font-bold  pl-2 rounded-sm ' required placeholder='Username' />
                    <input type="password" spellCheck="false" className='h-[50px] text-[18px] font-bold  pl-2 rounded-sm ' required placeholder='Password' />
                    <input type="password" spellCheck="false" className='h-[50px] text-[18px] font-bold  pl-2 rounded-sm ' required placeholder='Confirm Password' />
                    {/* <div className='flex my-[10px] gap-2 justify-center items-center w-full ' >
                        <input className='w-[25px] rounded h-[25px] ' type="checkbox" />
                        <span className='w-full  text-[15px]  ' >Keep me signed in until i sign out</span>
                    </div> */}
                    <button className='bg-[#0abdbdd5]  hover:shadow-md hover:shadow-[#2f313a] duration-500 ease-in-out  p-[10px] rounded-md  ' >Register</button>
                </form>
                <div className='my-[14px] md:my-[1px] md:mb-[15px] mb-[20px] flex justify-center items-center ' >Already a member?  <Link href="login" className=' mx-2 text-[#18526d] font-bold ' >Login.</Link> </div>
            </main>
        </>
    )
}

export default Register