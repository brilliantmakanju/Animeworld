import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <motion.div
            className="relative h-[30vh] md:h-[50vh] w-full "
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
            <Image
                fill
                src="/projects/banner-18.jpg"
                className="absolute rounded-md object-fit"
            />
            {/* <div className='absolute  md:left-0 text-white  lg:text-[30px] rounded-b-md bg-[#3a94ddc4] p-[10px] md:p-[20px] lg:p-[50px] bottom-0 w-full flex flex-col '>
                <Link href=''>
                    <h2 className='md:p-[30px] lg:text-[60px] text-[20px] tracking-widest '>One Punch Man</h2>
                </Link>
                <button className='bg-gradient-to-bl from-[#06cfaecc] to-[#3a94ddc4] hidden md:visible w-[100px] tracking-widest rounded-xl p-3'>Watch</button>
            </div> */}
        </motion.div>
    )
}

export default Banner
