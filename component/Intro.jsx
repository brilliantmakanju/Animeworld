import React from 'react'
import dynamic from 'next/dynamic'
import { BriefIntro } from '../data'
import { BsPersonFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Image = dynamic(() => import("next/image"))

const Intro = () => {
    return (
        <div className='w-full h-screen text-center' id='intro'>
            <div className='max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-center items-center '>
                <div className='sm:mt-[0] mt-[100px]'>
                    {
                        BriefIntro.map((Value) => (
                            <>
                                <p className='uppercase text-sm tracking-widest text-gray-500 ' >{Value.quote}</p>
                                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5] '>
                                    {Value.name}</span></h1>
                                <h1 className='py-4 text-gray-700'>{Value.role}</h1>
                                <p className='py-6 text-gray-600 max-w-[70%] m-auto  '>{Value.overview}</p>
                                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 ' >
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <BsPersonFill />
                                    </div>
                                </div>
                            </>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Intro


// {/* <div className='w-full flex md:flex-row flex-col items-center justify-center  h-[80vh] top-[100vh] '>
//     <Image
//         src='/assets/people01.png'
//         alt='Alkis Savuollis'
//         width={250}
//         height={250}
//     />
// </div> */}