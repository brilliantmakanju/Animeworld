import React from 'react'
import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'))

const Nav = () => {
    return (
        <nav className='w-screen bg-gray-900 py-1 pr-1 md:py-2  md:pr-5 flex flex-row justify-between items-center gap-6 ' >
            <div className='relative h-[3.5em] w-[20%] ml-[10px] md:h-[3em] md:w-[20%] ' >
                <Image
                    fill
                    src={"/assets/logo.svg"}
                    className='absolute object-fill'
                />
            </div>
            <div className='md:flex hidden flex-row flex-wrap items-center justify-center gap-5 text-white ' >
                <a href="#" className='p-5 py-2 rounded-md ' >Home</a>
                <a href="#" className='p-5 py-2 rounded-md ' >Course</a>
                <a href="#" className='p-5 py-2 rounded-md ' >Home</a>
                <a href="#" className='p-5 py-2 rounded-md ' >Pricing</a>
                <a href="#" className='p-5 py-2 rounded-md ' >Login</a>
                <a href="#" className='p-5 py-2 rounded-md bg-black ' >Register</a>
            </div>
            <div className='relative md:hidden h-[2em] w-[10%] ' >
                <Image
                    fill
                    src={"/assets/menu.svg"}
                    className='absolute object-fill'
                />
            </div>
        </nav>
    )
}

export default Nav