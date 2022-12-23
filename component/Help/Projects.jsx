import React from 'react'
import dynamic from 'next/dynamic'
const ProjectItem = dynamic(() => import('./ProjectItem'))

const Projects = () => {
    return (
        <div className='w-full mx-auto' id='projects' >
            <div className='max-w-[1240px] mx-auto   py-16 ' >
                <p className='text-xl md:ml-16 tracking-widest uppercase text-[#5e51e5] '>Projects</p>
                <h2 className='py-4 md:ml-20 ' >What I've Built</h2>
                <div className='mx-auto md:ml-20 my-auto md:p-10 p-5  rounded-xl grid md:grid-cols-1 gap-8 mt-[50px] '  >
                    <ProjectItem />
                </div>
            </div>
        </div>
    )
}

export default Projects