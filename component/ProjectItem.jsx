import React from 'react'
import dynamic from 'next/dynamic'
import { Projects } from '../data'
const Link = dynamic(() => import("next/link"))
const Image = dynamic(() => import("next/image"))
import { RiAnchorLine, RiRadioButtonFill } from "react-icons/ri"

const ProjectItem = () => {
    return (
        <>
            {
                Projects.map((value, index) => {
                    return (
                        <div key={index} className='  md:shadow-none shadow-lg shadow-gray-700 grid  md:grid-cols-2 mb-20 ' >
                            <div className=' md:mx-auto shadow-md shadow-gray-500 md:w-[70%] md:h-[50%] w-[100%] h-[90%]  hover:scale-[1.03] duration-300 rounded-xl ' >
                                <Image
                                    width={200}
                                    height={200}
                                    src={value.image}
                                    alt={value.title}
                                    className=' w-[100%] md:scale-[1] shadow-lg shadow-gray-500 scale-[1.05] h-[100%] object-fit rounded-xl '
                                />
                            </div>
                            <div className='' >
                                <h3 className='text-2xl md:text-3xl tracking-wider text-center md:text-left font-bold ' >{value.title}</h3>
                                <p className='pb-4 md:p-6 p-3 font-bold  ' >{value.overview}</p>
                                <Link href={value.gitHub} > <p className=' ml-4 cursor-pointer flex text-[#2a61c5] ' > <RiAnchorLine className='mr-1 my-auto ' /> Github</p> </Link>
                                <div className='grid grid-cols-2 md:grid-cols-3  p-4 ' >
                                    {
                                        value.tech.map((techValue, id) => (
                                            <p key={id} className='text-gray-600 py-2 capitalize flex items-center hover:text-white ease-in-out duration-300' ><RiRadioButtonFill className='pr-2' /> {techValue} </p>
                                        ))
                                    }
                                </div>
                                <Link href={value.demo} > <p className='text-center  py-3 rounded-xl mt-3 mb-5 ml-10 w-[125px] bg-white text-gray-600 font-bold text-lg cursor-pointer ' >View Demo</p> </Link>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default ProjectItem
// w-full mx-auto relative flex items-center justify-center h-auto shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5e51e5] to-slate-500
// absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block 