import React from 'react'
import dynamic from 'next/dynamic'
import { AboutMe } from '../data'
import Link from 'next/link'
const Image = dynamic(() => import("next/image"))

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-10 ' id='about'>
            <div className='max-w-[1240px] md:ml-10 ml-2 m-auto md:grid md:grid-cols-3 gaps-8 '>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5e51e5] '>About</p>
                    <h2>Who I Am</h2>
                    {
                        AboutMe.map((value, id) => (
                            <>
                                <p key={id} className='py-2 text-gray-600'>{value.overview}</p>

                            </>
                        ))
                    }
                    <Link href="#projects" >
                        <p className='py-2 text-gray-600 underline cursor-pointer ' >Check out some of my latest projects.</p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center  p-4 hover:scale-[1.03] ease-in duration-300 '>
                    {
                        AboutMe.map((value, id) => (
                            <>
                                <Image
                                    key={id}
                                    height={10}
                                    width={'400'}
                                    src={value.myImg}
                                    className='rounded-xl'
                                    alt={'Alkis Savoullis'}
                                />

                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About