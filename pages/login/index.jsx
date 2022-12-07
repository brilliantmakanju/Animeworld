import React from 'react'

const Login = () => {
    return (
        <main className='md:float-left rounded-lg md:w-[68em] w-full flex justify-center items-center h-screen flex-col gap-0  p-9 md:px-[350px] md:ml-[16rem]  ' >
            <div className=' w-full flex flex-col flex-wrap gap-3 '  >
                <input type="text" className='h-[40px] rounded-sm ' placeholder='Facebook' />
                <input type="text" className='h-[40px] rounded-sm ' placeholder='Google' />
                <input type="text" className='h-[40px] rounded-sm ' placeholder='Apple' />
            </div>
            <div className='flex justify-center w-full items-center my-[10px] gap-2 ' >
                <div className='w-[50%] bg-black h-[1px] ' ></div>
                <span className=' font-bold mt-[5px] ' >or</span>
                <div className='w-[50%] bg-black h-[1px] ' ></div>
            </div>
            <form className=' w-full flex   rounded-xl flex-col  gap-3 ' >
                <input type="text" className='h-[40px] pl-2 rounded-sm ' placeholder='Email' />
                <input type="text" className='h-[40px] rounded-sm pl-2 ' placeholder='Password' />
                <div className='flex my-[10px] gap-2 justify-center items-center w-full ' >
                    <input className='w-[25px] rounded-md h-[25px] ' type="checkbox" />
                    <span className='w-full  text-[15px]  ' >Keep me signed in until i sign out</span>
                </div>
                <button className='bg-[#0abdbdd5]  hover:shadow-xl hover:shadow-[#2f313a] duration-500 ease-in-out  p-[10px] rounded-md  ' >Login</button>
                <a className='my-[14px] mb-[20px]  text-[red] font-bold  ' >Forgot Password?</a>
            </form>
            <div className='flex justify-center items-center ' >Not a member yet?  <a className=' mx-2 text-[red] font-bold ' >Sign Up.</a> </div>
        </main>
    )
}

export default Login