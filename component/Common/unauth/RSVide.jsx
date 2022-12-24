import Image from 'next/image'
import React from 'react'

const RSVide = () => {
    return (
        <div className='flex flex-col gap-5 mt-2 font-extrabold justify-start items-start ' >

            <h3>Popular Movies</h3>

            <div className='flex flex-col gap-5 w-full ' >
                <div className='flex flex-row gap-5 justify-start items-center relative ' >
                    <div className='relative hover:scale-[1.03] duration-200 ease-in-out md:w-[50%] md:h-[100px]  shadow-lg shadow-gray-900 bg-red-400 ' >
                        <Image
                            fill
                            alt='Slide'
                            src="/projects/movie14.jpg"
                            className="absolute object-cover"
                        />
                    </div>
                    <div className=' w-full ' >
                        <h3 className='word-break w-full text-[13px] tracking-widest ' >Hunter X Hunter</h3>
                        <span>Genre</span>
                        <ul className='flex flex-row gap-2 ' >
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                        {/* <button className='p-2 bg-gray-900 text-white rounded-md w-full ' >Watch</button> */}
                    </div>
                </div>
                <div className='flex flex-row gap-5 justify-start items-center relative ' >
                    <div className='relative hover:scale-[1.03] duration-200 ease-in-out md:w-[50%] md:h-[100px]  shadow-lg shadow-gray-900 bg-red-400 ' >
                        <Image
                            fill
                            alt='Slide'
                            src="/projects/movie2.jpg"
                            className="absolute object-cover"
                        />
                    </div>
                    <div className=' w-full ' >
                        <h3 className='word-break w-full text-[13px] tracking-widest ' >Hunter X Hunter</h3>
                        <span>Genre</span>
                        <ul className='flex flex-row gap-2 ' >
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                        {/* <button className='p-2 bg-gray-900 text-white rounded-md w-full ' >Watch</button> */}
                    </div>
                </div>
                <button className='bg-gray-900 p-3 rounded-md text-white ' >See More</button>
            </div>
        </div>
    )
}

export default RSVide