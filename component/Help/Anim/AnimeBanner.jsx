import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AnimeBanner = () => {
  return (
    <motion.div
      className="relative w-full md:w-[98%] md:h-[300px] h-[15em] rounded-xl shadow-lg shadow-gray-900 bg-red-400  "
      initial={{ x: "-100vw" }}
      animate={{ x: 0}}
      transition={{type:"spring", duration:1, bounce:0.3}}
    >
      <Image
        fill
        src="/projects/banner-18.jpg"
        className="absolute rounded-xl object-fit"
      />
      <div className='absolute  md:left-0 text-white rounded-xl bg-[#3a94ddc4] p-[10px] bottom-0 w-full flex flex-col '>
        <Link href=''>
          <h2 className='text-[20px] tracking-widest '>One Punch Man</h2>
        </Link>
        <button className='bg-gradient-to-bl from-[#06cfaecc] to-[#3a94ddc4] hidden md:visible w-[100px] tracking-widest rounded-xl p-3'>Watch</button>
      </div>
    </motion.div>
  )
}

export default AnimeBanner