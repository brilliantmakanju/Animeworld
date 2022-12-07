import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Topnav = () => {

    const [mobile, setMobile] = useState(false)

    const handleMobile = () => {
        setMobile(!mobile)
    }

    return (
        <>
            <nav className="hidden md:flex md:ml-[17rem] ml-[20px] flex-row justify-between items-center mt-[20px] mb-[10px] p-3 md:w-[66rem]   ">
                <div className="flex gap-5 items-center">
                    <div className="bg-[#3a94ddc4] p-2 font-bold text-white rounded-[2rem] rounded-r-none rounded-t-[2rem] " >
                        Welcome
                    </div>
                    <form className=" md:w-[29em] items-center  flex relative rounded-sm">
                        <input type='text' placeholder="Search...." className="w-[90%] placeholder:text-[#143d5ec4] text-[#143d5ec4] pr-9 bg-[#06cfaecc] border-[2px] border-[#3a94ddc4] p-2 pl-4 md:w-[90%] rounded-3xl " required />
                    </form>
                </div>

                <ul className='flex justify-center items-center gap-4  ' >
                    <li className='font-bold  border-[1px] p-2 rounded-md ' >Login</li>
                    <li className='font-bold  border-[1px] p-2 rounded-md ' >Login</li>
                    <li className='font-bold  border-[1px] p-2 rounded-md ' >Login</li>
                    <li className='font-bold  border-[1px] p-2 rounded-md ' >Login</li>
                    <li className='font-bold  border-[1px] p-2 rounded-md ' >Login</li>
                    <li className='font-bold  border-[1px] p-2 rounded-md ' >Login</li>

                </ul>
            </nav>
            <nav className=" md:hidden px-2 py-3 flex flex-row justify-between items-center shadow-md shadow-[#3d6592] text-white bg-transparent ">
                <div className="flex flex-row items-center gap-3 ">
                    <div> <AiOutlineMenu size={35} onClick={() => handleMobile()} /></div>
                    <div>
                        <h2 className=" font-serif " >AnimeWorld</h2>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4 ">
                    <div>S</div>
                    <div>P</div>
                </div>
                <div className={` z-[13]  ${mobile ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-[#141313b2] ' : ' z-[13] '}  `}>
                    <div className={mobile ? 'fixed  left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-bl from-[#3a94dd] to-[#06cfae] p-10 ease-in duration-500  ' : ' fixed left-[-100%] top-0 w-895%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-bl from-[#3a94dd] to-[#06cfae] p-10 ease-in duration-300  '}>
                        <div>
                            <div className='flex w-full items-end justify-end '>
                                <div onClick={() => handleMobile()} className='rounded-full shadow-lg shadow-[#256663] cursor-pointer p-3 '>
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className='border-b border-gray-300 py-4'>
                                <h1 className='w-[100%] text-[30px] md:w-[50%]  '>Anime Castle</h1>
                            </div>
                            <div className='py-4 flex flex-col'>
                                <ul className='uppercase'>
                                    <Link
                                        href='/#intro'
                                        prefetch={false}
                                        onClick={(() => setMobile(false))}
                                    >
                                        <li
                                            className='p-4 text-small'
                                        >
                                            Home
                                        </li>
                                    </Link>
                                    <Link
                                        href='/#about'
                                        prefetch={false}
                                        onClick={(() => setMobile(false))}
                                    >
                                        <li
                                            className='p-4 text-small'
                                        >
                                            About
                                        </li>
                                    </Link>
                                    <Link
                                        href='/#skills'
                                        prefetch={false}
                                        onClick={(() => setMobile(false))}
                                    >
                                        <li
                                            className='p-4 text-small'
                                        >
                                            Skills
                                        </li>
                                    </Link>
                                    <Link
                                        href='/#projects'
                                        prefetch={false}
                                        onClick={(() => setMobile(false))}
                                    >
                                        <li
                                            className='p-4 text-small'
                                        >
                                            Projects
                                        </li>
                                    </Link>
                                    <Link
                                        href='/#contact'
                                        prefetch={false}
                                        onClick={(() => setMobile(false))}
                                    >
                                        <li
                                            className='p-4 text-small'
                                        >
                                            Contact
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Topnav