import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AnimeCard = () => {

    const [topmovie, setTopMovie] = useState()
    const [loading, setLoading] = useState(true)


    const Topanimeget = async (e) => {
        let response = await fetch(`http://127.0.0.1:8000/TopAnime`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "NetVid " + String(authToken.access)
            }
        })
        let data = await response.json()
        setLoading(false)
        setTopMovie(data)
        // console.log('Here is homepage: ', authToken.access)
        console.log(data)
    }

    useEffect(() => {
        Topanimeget()
    }, [])

    return (
        <div className={` mt-[5px] md:mt-[20px] scrollbar scrollbar-track-[#2e92b11f] scrollbar-thumb-[#42d3c7d8]  grid w-full overflow-y-scroll overflow-x-hidden rounded-xl pb-2 md:pt-3  md:grid-cols-1  md:gap-8 justify-start items-center `}>

            {

                loading ?
                    <>
                        Loading
                    </>
                    :
                    <>
                        {topmovie ?
                            topmovie.map((value, index) => {

                                const src = `http://127.0.0.1:8000${value.thumbnail}`

                                return (
                                    <div key={index} className='flex ml-2 items-center  md:gap-2 gap-3  '>
                                        <span className='p-4 py-2 rounded-xl  border-2 border-[#06cfaecc]  my-auto text-center  '>1</span>
                                        <div className="relative hover:scale-[1.03] duration-200 ease-in-out md:w-[70px] md:h-[100px] w-[50px] h-[70px] md:rounded-xl rounded-md shadow-lg shadow-gray-900 bg-red-400  ">
                                            <Image
                                                fill
                                                src={src}
                                                alt={value.title}
                                                className="absolute rounded-md md:rounded-xl object-fit"
                                            />
                                        </div>
                                        <div className=" text-white font-extrabold p-2 tracking-wider md:ml-1 text-[12px] break-words w-[120px]">
                                            <h4 className='font-extrabold md:mb-[0px] mb-[5px] '>{value.title}</h4>
                                            <div className='hidden md:flex justify-start items-start p-2'>
                                                <span> V {value.views} </span>
                                            </div>
                                            <span className='mb-[5px] md:hidden break-words ' >V {value.views} </span>
                                            <button className='bg-red-500 p-2 md:px-6 px-6 rounded-lg' >Watch</button>
                                        </div>
                                    </div>
                                )

                            })
                            :
                            <>
                                <h2>No Video Ava</h2>
                            </>
                        }
                    </>

            }
        </div>
    )
}

export default AnimeCard