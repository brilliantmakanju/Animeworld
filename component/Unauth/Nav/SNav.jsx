import React from 'react'
import {FaHome, FaFire, FaCompass } from 'react-icons/fa'

const SNav = () => {
    return (
        <nav className=' w-[100px]   py-5 px-0 sticky h-screen overflow-x-hidden overflow-y-scroll  md:flex md:flex-col hidden justify-center items-center scrollbar-none ' >
            <ul className={`mt-5 flex flex-col justify-center items-center  p-1 tracking-widest font-bold  text-[20px] `}>
                <li className=' flex flex-col justify-center items-center p-2  ease-in-out duration-300 ' ><span className=''><FaHome size={'30px'} /></span> <span className='text-[15px]  tracking-tight ' >Home</span> </li>
                <li className=' flex flex-col  justify-center items-center p-2  ease-in-out duration-300 ' ><span className=''><FaFire size={'30px'} /></span> <span className='text-[15px]  tracking-tight ' >Trending</span> </li>
                <li className=' flex flex-col  justify-center items-center p-2  ease-in-out duration-300 ' ><span className=''><FaCompass /> </span> <span className='text-[15px]  tracking-tight ' >Explore</span> </li>
                <li className=' flex flex-col  justify-center items-center p-2  ease-in-out  duration-300 ' ><span className=''>Ar</span> <span className='text-[15px]   tracking-tight  ' >Favourite</span> </li>
                
            </ul>
        </nav>
    )
}

export default SNav