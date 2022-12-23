import React from 'react'

const TNav = () => {
    return (
        <nav className='w-full px-2 text-white mb-5 rounded-sm flex flex-row justify-between items-center  py-5' >
            <div className='bg-gradient-to-r from-[#2e70a7] p-2.5 rounded-2xl rounded-br-none  to-[#0fe2bf]' >
                <h3>Welcome</h3>
            </div>
            <form className=' w-[50%] flex flex-row  ' >
                <input type="text" className='py-3 text-white placeholder:text-white font-extrabold pb-1 pl-3 rounded-t-sm border-[2px] border-gray-50 border-t-0 border-r-0 border-l-0 bg-transparent w-full ' placeholder='Search......' />
                <button>S</button>
            </form>

        </nav>
    )
}

export default TNav