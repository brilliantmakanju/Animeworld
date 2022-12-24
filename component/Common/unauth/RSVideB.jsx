import Image from 'next/image'
import React from 'react'

const RSVideB = () => {
    return (
        <div className='flex pt-5 pb-2 flex-col gap-2 justify-start items-start ' >

            <h3>Popular Manga</h3>

            <div className='flex flex-col gap-5 w-full ' >
                <div className='flex flex-row gap-5 justify-start items-center ' >
                    <div className='relative hover:scale-[1.03] duration-200 ease-in-out md:w-[4em] md:h-[100px]  shadow-lg shadow-gray-900 bg-red-400 ' >
                        <Image
                            fill
                            alt='Slide'
                            src="/projects/movie13.jpg"
                            className="absolute object-cover"
                        />
                    </div>
                    <div>
                        <h3>Title</h3>
                        <span>Genre</span>
                        <ul className='flex flex-row gap-2 ' >
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row gap-5 justify-start items-center ' >
                    <div className='relative hover:scale-[1.03] duration-200 ease-in-out md:w-[4em] md:h-[100px]  shadow-lg shadow-gray-900 bg-red-400  ' >
                        <Image
                            fill
                            alt='Slide'
                            src="/projects/movie10.jpg"
                            className="absolute object-cover"
                        />
                    </div>
                    <div>
                        <h3>Title</h3>
                        <span>Genre</span>
                        <ul className='flex flex-row gap-2 ' >
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                </div>

                <button className='bg-gray-900 p-3 rounded-md text-white ' >See More</button>
            </div>
        </div>
    )
}

export default RSVideB