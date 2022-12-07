import Image from 'next/image'
import AnimeCard from './AnimeCard'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const TopAnime = () => {

    const [fixed, setFixed] = useState(false)

    const FixedChange = () => {
        if (window.scrollY >= 420) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", FixedChange)
    }, [])

    return (
        <motion.div
            className={` mt-[20px] md:mt-[0px]   rounded-2xl  bg-gradient-to-bl from-[#06cfaecc] to-[#3a94ddc4]  h-auto md:w-[27%] flex w-[100%]  flex-col  ${fixed ? 'md:fixed md:top-2  md:overflow-hidden md:h-[50%] md:w-[22%] md:right-[30px] ' : 'h-auto'}   `}
            initial={{ y: "100vh" }}
            animate={{ y: "0" }}
            transition={{
                type: "spring", duration: 1, bounce: 0.2
            }}
        >
            <h2 className="md:text-[16px] text-[16px] md:pt-2 md:pr-6 md:pl-6  pt-2 pl-4 " >Top Anime</h2>
            <div className={` ${fixed ? "md:pb-[40%]  " : ""} relative w-full  h-[200px] `}>
                <Image
                    fill
                    src='/projects/banner-12.jpg'
                    className={`absolute object-fit ${fixed ? "md:top-0" : ""}`}
                />
                <div className=' bg-[#000000b6] absolute w-full h-[58px] bottom-0 ' >
                    <span className='p-3 px-4 rounded-md rounded-tl-none rounded-b-none  border-2 bg-[#06cfaecc] border-[#1d878fda] bottom-0 text-white font-[900] absolute  my-auto text-center  '>1</span>
                    <span className='p-1 left-14 rounded-md tracking-widest text-[#f7fdfc] font-[900]  bottom-6 absolute  my-auto text-center  '>Chainsaw Man</span>
                    <span className='p-1 left-14 rounded-md  text-[#06cfaecc] font-bold  bottom-1 absolute  my-auto text-center  '>V 4940484</span>
                </div>
            </div>
            <AnimeCard />
        </motion.div >
    )
}

export default TopAnime