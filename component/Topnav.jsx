import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Topnav = () => {
    return (
        <>
            <nav className="hidden md:flex md:ml-[17rem] ml-[20px] flex-row justify-between items-center mt-[20px] mb-[10px] p-3 md:w-[66rem]   ">
                <div className="flex gap-5 items-center">
                    <div className="bg-[#3a94ddc4] p-2 font-bold text-white rounded-[2rem] rounded-r-none rounded-t-[2rem] " >
                        Welcome
                    </div>
                    <form className=" md:w-[29em] items-center  flex relative rounded-sm">
                        <input type='text' placeholder="Search...." className="w-[90%] placeholder:text-[#143d5ec4] text-[#143d5ec4] pr-9 bg-[#06cfaecc] border-[2px] border-[#3a94ddc4] p-2 pl-4 md:w-[90%] rounded-3xl " required />
                        <button className="absolute right-0">S</button>
                    </form>
                </div>

                <div>Links</div>
            </nav>
            <nav className=" md:hidden px-2 py-3 flex flex-row justify-between items-center shadow-md shadow-[#3d6592] text-white bg-transparent ">
                <div className="flex flex-row items-center gap-3 ">
                    <div> <AiOutlineMenu size={35} /></div>
                    <div>
                        <h2 className=" font-serif " >AnimeWorld</h2>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4 ">
                    <div>S</div>
                    <div>P</div>
                </div>
            </nav>
        </>
    )
}

export default Topnav