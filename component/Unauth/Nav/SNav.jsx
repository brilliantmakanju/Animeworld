import React from 'react'

const SNav = () => {
    return (
        <nav className=' w-[100px] pl-3 py-5 pr-5 sticky h-screen overflow-x-hidden overflow-y-scroll  md:flex md:flex-col hidden scrollbar-[3px] scrollbar-track-transparent  ' >
            <ul className={`mt-5  p-1 tracking-widest font-bold text-[20px] `}>
                <li className=' flex flex-col  justify-center items-center p-2 mb-2 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> <span className='text-[15px] px-2 tracking-tight ' >Home</span> </li>
                <li className=' flex flex-col  justify-center items-center p-2 mb-2 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> <span className='text-[15px] px-2 tracking-tight ' >Trending</span> </li>
                <li className=' flex flex-col  justify-center items-center p-2 mb-2 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> <span className='text-[15px] px-2 tracking-tight ' >Explore</span> </li>
                <li className=' flex flex-col  justify-center items-center p-2 mb-2 ease-in-out  duration-300 ' ><span className='mr-2'>Ar</span> <span className='text-[15px]  px-2 tracking-tight  ' >Favourite</span> </li>
            </ul>
        </nav>
    )
}

export default SNav