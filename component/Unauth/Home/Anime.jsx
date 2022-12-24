import React from 'react'
import CAnime from '../../Common/unauth/Home/CAnime'

const Anime = () => {
  return (
    <div className='grid grid-cols-1 gap-1 justify-start py-5 ' >
        <div className=' flex flex-row justify-between items-center px-2 ' >
            <h3>Now Playing</h3>
            <div className='grid grid-cols-2 gap-5 ' >
                <button className='bg-gray-900 text-white flex h-[30px] items-center justify-center w-[30px] text-center p-3 rounded-full ' >{"<"}</button>
                <button className='bg-gray-900 text-white flex h-[30px] items-center justify-center w-[30px] text-center p-3 rounded-full '  >{">"}</button>
            </div>
        </div>
        <div className=' grid grid-cols-2 gap-5  md:grid-cols-4 h-[300px] md:h-[48vh] py-5 w-full overflow-y-hidden overflow-x-scroll md:gap-5 aspect-square px-2 ' >
        <CAnime />
        </div>
    </div>
  )
}

export default Anime