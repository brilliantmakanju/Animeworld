import React, { useEffect } from 'react'
import CAnime from '../../Common/unauth/Home/CAnime'

const Anime = () => {

  useEffect(() => {
    document.getElementById("right").addEventListener('click', function e() {
      document.getElementById("animeSlide").scrollLeft += '50'
    })

    document.getElementById("left").addEventListener('click', function e() {
      document.getElementById("animeSlide").scrollLeft -= '50'
    })
  }, [])

  return (
    <div className='grid grid-cols-1   gap-1 w-[85vw] justify-start py-5 pb-1 ' >
      <div className=' flex flex-row w-[97vw] justify-between items-center px-2 ' >
        <h3>Now Playing</h3>
        <div className='grid grid-cols-2 gap-4 ' >
          <button className='bg-gray-900 text-white flex h-[30px] items-center justify-center w-[30px] text-center p-3 rounded-full ' id='left' >{"<"}</button>
          <button className='bg-gray-900 text-white flex h-[30px] items-center justify-center w-[30px] text-center p-3 rounded-full ' id='right'  >{">"}</button>
        </div>
      </div>
      <div id='animeSlide' className='pr-5 grid grid-cols-10  gap-[150px] md:grid-cols-10 h-[46vh] py-5 w-screen  md:overflow-y-hidden overflow-x-scroll scrollbar-none md:gap-[185px] aspect-square px-2 ' >
        <CAnime />
      </div>
    </div>
  )
}

export default Anime