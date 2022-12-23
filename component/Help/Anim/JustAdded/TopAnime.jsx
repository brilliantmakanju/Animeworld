import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AddedCard from './AnimeCard'

const JustAddedAnime = () => {

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
            className={` mt-[20px] md:mt-[0px] md:hidden relative  rounded-2xl  bg-gradient-to-tr from-[#06cfaecc] to-[#3a94ddc4]  h-auto md:w-[27%] flex w-[100%]  flex-col  ${fixed ? 'md:fixed  md:flex  md:bottom-2  md:overflow-hidden md:h-[47%] md:w-[22%] md:right-[30px] ' : 'h-auto'}   `}
            initial={{ y: "100vh" }}
            animate={{ y: "0" }}
            transition={{
                type: "spring", duration: 1, bounce: 0.2
            }}
        >
            <h2 className="md:text-[16px] text-[16px] md:pt-2 md:pr-6 md:pl-6 mb:pb-3 pt-2 pl-4 pb-3 " >Recently Added</h2>
            <div className='absolute right-2 p-1 bg-[#0783ca] text-white hover:text-[#0783ca] hover:bg-black duration-300 ease-in-out px-3 rounded-md top-3' >view all</div>
            <AddedCard />
        </motion.div>
    )
}

export default JustAddedAnime