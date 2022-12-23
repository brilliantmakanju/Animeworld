import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ThreeCircles } from 'react-loader-spinner'

const AnimeListCard = () => {

    const [movie, setMovie] = useState()
    const [loading, setLoading] = useState(true)


    const movieget = async (e) => {
        let response = await fetch(`http://127.0.0.1:8000/Eposide`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "NetVid " + String(authToken.access)
            }
        })
        let data = await response.json()
        setLoading(false)
        setMovie(data)
        // console.log('Here is homepage: ', authToken.access)
        // console.log(data)
    }

    useEffect(() => {
        movieget()
    }, [])

    return (
        <>
            {

                loading ?
                    <>
                        <div className='flex justify-items-center  w-full md:h-[50%] h-[70%] ' >
                            <div className=" m-auto mt-[27%] mb-[27%] flex  justify-around items-center h-[40%] w-[80%]  " >
                                <ThreeCircles color=" #1a36da " />
                            </div>
                        </div>
                    </>
                    :
                    // This is an App built using Next , Tailwind and Django RestFramework 2022 using modern UI UX design and experience all done by the developer Named Brilliant Makanju.
                    <>
                        <div className="grid w-full px-2   md:pt-0  md:grid-cols-5 gap-5  grid-cols-2  ">
                            {movie ?
                                movie.map((value, index) => {

                                    const src = `http://127.0.0.1:8000${value.thumbnail}`

                                    return (
                                        <>
                                            <div key={index} className='relative  md:w-[120px] md:h-[200px] w-[100%] h-[250px] rounded-xl shadow-lg shadow-gray-900 bg-red-400 ' >
                                                <Image
                                                    fill
                                                    src={src}
                                                    alt={value.title}
                                                    className='absolute rounded-xl object-fit'
                                                />
                                                <div className="absolute bottom-0 text-xs text-white font-extrabold p-2 text-center w-full bg-[#000000c9]  ">
                                                    {value.title}
                                                </div>
                                            </div>
                                        </>
                                    )

                                })
                                :
                                <>
                                    <h2>No Video Ava</h2>
                                </>
                            }
                        </div>
                    </>
            }
            <div className="flex mt-[20px] flex-col items-center">
                {/* <!-- Help text --> */}
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span class="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
                </span>
                <div className="inline-flex gap-2 mt-2 xs:mt-0">
                    {/* <!-- Buttons --> */}
                    <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg aria-hidden="true" className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                        Prev
                    </button>
                    <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                        <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default AnimeListCard
                // <div className="relative hover:scale-[1.03] scale-[.7] duration-200 ease-in-out md:w-[120px] md:h-[200px] w-[200px] h-[300px] rounded-xl shadow-lg shadow-gray-900 bg-red-400  ">
                //     <Image
                //         fill
                //         src="/projects/banner-5.jpg"
                //         className="absolute rounded-xl object-fit"
                //         alt=''
                //     />
                //     <div className="absolute bottom-0 text-xs rounded-xl text-white font-extrabold p-2 text-center w-full bg-[#000000c9]  ">
                //         Naruto
                //     </div>
                // </div>
                // <div className="relative hover:scale-[1.03] scale-[.7] duration-200 ease-in-out md:w-[120px] md:h-[200px] w-[200px] h-[300px] rounded-xl shadow-lg shadow-gray-900 bg-red-400  ">
                //     <Image
                //         fill
                //         src="/projects/banner-5.jpg"
                //         className="absolute rounded-xl object-fit"
                //         alt=''
                //     />
                //     <div className="absolute bottom-0 text-xs rounded-xl text-white font-extrabold p-2 text-center w-full bg-[#000000c9]  ">
                //         Naruto
                //     </div>
                // </div>