import React from 'react'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'

const Login = () => {
    return (
        <main className='md:float-left rounded-lg md:w-[68em] w-full flex justify-center items-center md:h-screen h-[90vh] flex-col gap-0  p-9 md:px-[350px] md:ml-[16rem] md:mt-[-50px]   ' >
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
            <form className=' w-full flex   rounded-xl flex-col  gap-3 ' >
                <input type="email" className='h-[50px] text-[18px] font-bold  pl-2 rounded-sm ' required placeholder='Email' />
                <input type="password" className='h-[50px] text-[18px] font-bold  pl-2 rounded-sm ' required placeholder='Password' />
                <div className='flex my-[10px] gap-2 justify-center items-center w-full ' >
                    <input className='w-[25px] rounded h-[25px] ' type="checkbox" />
                    <span className='w-full  text-[15px]  ' >Keep me signed in until i sign out</span>
                </div>
                <button className='bg-[#0abdbdd5]  hover:shadow-md hover:shadow-[#2f313a] duration-500 ease-in-out  p-[10px] rounded-md  ' >Login</button>
                <a className='my-[14px] md:my-[1px] md:mb-[15px] mb-[20px]  text-[#18526d] font-bold  ' >Forgot Password?</a>
            </form>
            <div className='flex justify-center items-center ' >Not a member yet?  <a className=' mx-2 text-[#18526d] font-bold ' >Sign Up.</a> </div>
        </main>
    )
}

export default Login