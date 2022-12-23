import React from 'react'
import AnimeListCard from './AnimeCard'
import { motion } from 'framer-motion'

const AnimeList = () => {
    return (
        <motion.div
            className="rounded-2xl shadow-md shadow-[#3c6fa8] py-4 md:p-4 md:w-[46em] bg-[#2875b4] w-full "
            initial={{ y: "100vh" }}
            animate={{ y: "0" }}
            transition={{ type:"spring", duration: 1, bounce: 0.2 }}
        >
            <h3 className="font-bold md:px-[10px] px-[20px] md:text-[27px] text-white text-[22px] mb-3">
                Latest Episodes
            </h3>
            <AnimeListCard />
        </motion.div>
    )
}

export default AnimeList