import React from 'react'

const SNav = () => {
    return (
        <nav className=' w-[380px] pl-3 py-5 pr-5 sticky h-screen overflow-x-hidden overflow-y-scroll  md:flex md:flex-col hidden scrollbar-[3px] scrollbar-track-transparent  ' >
            <div className='animeSite' >
                <h2 className='md:text-[19px]  ' >
                    Anime Vanguard
                </h2>
            </div>

            <ul className={`mt-5  p-1 tracking-widest font-bold text-[20px] `}>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> Libary</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Explore</li>
            </ul>
        </nav>
    )
}

export default SNav