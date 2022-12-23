// import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BsPersonFill } from 'react-icons/bs'
import React, { useState, useEffect } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'

// const Link = dynamic(() => import("next/link"))
// const Image = dynamic(() => import("next/image"))

const Nav = () => {

    const router = useRouter()

    const [mobile, setMobile] = useState(false)
    

    const handleMobile = () => {
        setMobile(!mobile)
    }

    const [fixed, setFixed] = useState(false)

    const FixedChange = () => {
        if (window.scrollY >= 100) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", FixedChange)
    }, [])

    return (
        <nav className={` ease-in duration-100 transition-colors ${fixed ? "fixed w-full h-20 shadow-xl z-[100]  bg-slate-600 shadow-gray-600 border-b-2 border-[black]" : " fixed w-full h-20 z-[100] "} `}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
                <Image
                    src="/vercel.svg"
                    alt="Logo"
                    width='125'
                    height="40"
                />
                <div>
                    <ul className={`${router.pathname === '/project/[projectid]' ? 'text-white' : ''}  ${fixed ? " hidden md:flex text-white" : " hidden md:flex"}`}>
                        <Link
                            href='/#intro'
                            prefetch={false}
                        >
                            <li
                                className='ml-10 text-small uppercase hover-border-b'
                            >
                                Home
                            </li>
                        </Link>
                        <Link
                            href='/#about'
                            prefetch={false}
                        >
                            <li
                                className='ml-10 text-small uppercase hover-border-b'
                            >
                                About
                            </li>
                        </Link>
                        <Link
                            href='/#skills'
                            prefetch={false}
                        >
                            <li
                                className='ml-10 text-small uppercase hover-border-b'
                            >
                                Skills
                            </li>
                        </Link>
                        <Link
                            href='/#projects'
                            prefetch={false}
                        >
                            <li
                                className='ml-10 text-small uppercase hover-border-b'
                            >
                                Projects
                            </li>
                        </Link>
                        <Link
                            href='/#contact'
                            prefetch={false}
                        >
                            <li
                                className='ml-10 text-small uppercase hover-border-b'
                            >
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className={`${router.pathname === '/project/[projectid]' ? 'text-white' : ''}   md:hidden`} onClick={() => handleMobile()}>
                    <AiOutlineMenu size={35} />
                </div>
            </div>

            <div className={` ${mobile ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-[#141313b2] ' : '  '}  `}>
                <div className={mobile ? 'fixed  left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#bccec9] p-10 ease-in duration-500  ' : ' fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#bccec9] p-10 ease-in duration-300  '}>
                    <div>
                        <div className='flex w-full justify-between'>
                            <Image
                                src="/vercel.svg"
                                alt="Logo"
                                width='87'
                                height="35"
                            />
                            <div onClick={() => handleMobile()} className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 '>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 py-4'>
                            <p className='w-[85%] md:w-[50%] py-4 '>Let's Build the future together</p>
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

                            <div className='pt-40'>
                                <p className='uppercase tracking-widest text-[gray] '>Let's Connect</p>
                                <div className='flex items-center justify-between py-4 w-full sm:w-[100%] '>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <BsPersonFill />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav