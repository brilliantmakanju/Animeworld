import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiBracketsLine } from 'react-icons/ri'

const Sidenav = () => {

  const [open, setOpen] = useState(false)

  function openDrop() {
    setOpen(!open)
  }

  return (
    <div className={`overflow-y-scroll bg-[#2875b4] overflow-x-hidden md:flex fixed tracking-widest shadow-2xl shadow-gray-900 top-4 h-[95%] left-4 rounded-2xl ${open ? "p-0" : "p-6"} w-[27%] scrollbar scrollbar-track-[#2e92b1] scrollbar-thumb-[#42d3c7d8] rounded-r-none hidden`}>
      <div className=' absolute ' >
        <h2 className={` ${open ? "p-8 pb-0" : "p-0"} font-bold text-[25px] text-left `} >
          Anime Castle
        </h2>

        <ul className={`mt-10  p-1 tracking-widest font-bold`}>
          <Link href="/" prefetch={false} >
            <li className=' flex justify-start p-2 mb-2 rounded-lg hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> Home</li>
          </Link>
          <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> Libary</li>
          <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' onClick={(() => openDrop())} ><span className='mr-2' >Ar</span> Explore</li>
          <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> History</li>
          <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Watch Later</li>
          <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Liked Video</li>
          <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> Settings</li>
          <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Report History</li>
        </ul>

        {
          open
            ?
            <div className={` text-white absolute top-[-10px] pl-3 pr-3 bg-gradient-to-bl from-[#3a94dd] to-[#06cfae]  w-full left-0 h-auto rounded-xl ${open ? "popup" : ""}`}  >
              <div className='flex flex-row ml-[-10px] mr-5 items-center justify-between '>
                <div className=' p-6 ' onClick={(() => openDrop())} >
                  <svg aria-hidden="true" className=" w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                </div>
                <h3>Explore</h3>
              </div>
              <ul className='p-1 tracking-widest mt-[-20px] font-bold'>
                <li className=' flex justify-start p-2 mb-2 rounded-lg hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> Home</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> Libary</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2' >Ar</span> Explore</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> History</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Watch Later</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Liked Video</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> Settings</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Report Historys</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Liked Video</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> Settings</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Report Historys</li>

                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Liked Video</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> Settings</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Report Historys</li>

                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Liked Video</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> Settings</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Report Historys</li>

                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Liked Video</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300 ' ><span className='mr-2'>Ar</span> Settings</li>
                <li className=' flex justify-start p-2 mb-2 hover:bg-[#25ceb2] hover:rounded-lg hover:shadow-md hover:shadow-gray-900 ease-in-out duration-300' ><span className='mr-2'>Ar</span> Report Historys</li>
              </ul>
            </div>
            :
            <></>
        }

        {/* <div className='absolute h-[50px] bottom-30 flex justify-start'>
          <div className='shadow-xl relative shadow-gray-900'>
            <Image
              fill
              src="/assets/people01.png"
              className='absolute rounded-xl object-fit'
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Sidenav