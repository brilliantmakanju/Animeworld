import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Banner = () => {

    useEffect(() => {
        const slideCont = document.getElementById("bannerScroll")
        // const slide = document.getElementById("slide")
        // const slideL = document.getElementById("slideL")
        // const slideR = document.getElementById("slideR")

        // slideR.addEventListener("click", (e) => {
        //     const slideWidth = slide.clientWidth;

        //     // console.log(slideCont.scrollLeft)
        //     slideCont.scrollLeft += slideWidth

        //     console.log(slideWidth)
        // })

        // slideL.addEventListener("click", (e) => {
        //     const slideWidth = slide.clientWidth;

        //     // console.log(slideCont.scrollLeft)
        //     slideCont.scrollLeft -= slideWidth

        //     console.log(slideWidth)
        // })
        // function cook() {
        //     slideCont.scrollBy(0, 150)
        // }
        // const slideTimer = setInterval(cook, 1000)


        // function clearTimer() {
            
        // }

    }, [])

    return (
        <>
            <motion.div
                // id='slideCont'
                id='carouselDarkVariant'
                className="carousel slide carousel-fade carousel-dark  relative h-auto md:h-auto w-full flex flex-row justify-around items-center bg-red-400  gap-10 overflow-scroll bannerSlide  "
                data-bs-ride="carousel"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 1, bounce: 0.3 }}
            >

                <div className="carousel-inner bannerSlide h-[30vh] md:h-[50vh] relative w-screen overflow-x-scroll overflow-y-scroll " id='bannerScroll' style={{scrollBehavior:"smooth"}} >
                    <div className="carousel-item active relative float-left h-[40vh] md:h-[50vh]  w-full " >
                        <Image
                            fill
                            src="/projects/banner-11.jpg"
                            className="absolute rounded-md object-fit"
                            alt='Slide'
                        />
                        <div className="carousel-caption bg-red-900 text-white p-5 hidden md:block absolute text-center  ">
                            <h5 className='text-xl' >First Slide</h5>
                        </div>
                    </div>
                    
                    <div className="carousel-item active relative float-left h-[40vh] md:h-[50vh]  w-full " >
                        <Image
                            fill
                            src="/projects/banner-18.jpg"
                            className="absolute rounded-md object-fit"
                            alt='Slide'
                        />
                        <div className="carousel-caption bg-red-900 text-white p-5 hidden md:block absolute text-center  ">
                            <h5 className='text-xl' >3 Slide</h5>
                        </div>
                    </div>

                    <div className="carousel-item active relative float-left h-[40vh] md:h-[50vh]  w-full " >
                        <Image
                            fill
                            src="/projects/banner-10.jpg"
                            className="absolute rounded-md object-fit"
                            alt='Slide'
                        />
                        <div className="carousel-caption bg-red-900 text-white p-5 hidden md:block absolute text-center  ">
                            <h5 className='text-xl' >3 Slide</h5>
                        </div>
                    </div>

                    <div className="carousel-item active relative float-left h-[30vh] md:h-[50vh]  w-full " >
                        <Image
                            fill
                            src="/projects/banner-12.jpg"
                            className="absolute rounded-md object-fit"
                            alt='Slide'
                        />
                        <div className="carousel-caption bg-red-900 text-white p-5 hidden md:block absolute text-center  ">
                            <h5 className='text-xl' >3 Slide</h5>
                        </div>
                    </div>

                </div>



                {/* <div id='slide' className='relative w-full h-[30vh] md:h-[50vh] ' style={{ flex: "1 0 100%" }} >
                </div>
                <div id='slide' className='relative w-full h-[30vh] md:h-[50vh] ' style={{ flex: "1 0 100%" }} >
                    <Image
                        fill
                        src="/projects/banner-11.jpg"
                        className="absolute rounded-md object-fit"
                    />
                </div>
                <div id='slide' className='relative w-full h-[30vh] md:h-[50vh] ' style={{ flex: "1 0 100%" }} >
                    <Image
                        fill
                        src="/projects/banner-11.jpg"
                        className="absolute rounded-md object-fit"
                    />
                </div>
                <div id='slide' className='relative w-full h-[30vh] md:h-[50vh] ' style={{ flex: "1 0 100%" }} >
                    <Image
                        fill
                        src="/projects/banner-11.jpg"
                        className="absolute rounded-md object-fit"
                    />
                </div> */}
                {/* <div id='slide' className='relative w-screen h-[30vh] md:h-[50vh] ' style={{ flex: "1 0 100%" }} >
                    <Image
                        fill
                        src="/projects/banner-12.jpg"
                        className="absolute rounded-md object-fit"
                    />
                </div>
                <div id='slide' className='relative w-screen h-[30vh] md:h-[50vh] ' style={{ flex: "1 0 100%" }} >
                    <Image
                        fill
                        src="/projects/banner-15.jpg"
                        className="absolute rounded-md object-fit"
                    />
                </div>
                <div id='slide' className='relative w-screen h-[30vh] md:h-[50vh] ' style={{ flex: "1 0 100%" }} >
                    <Image
                        fill
                        src="/projects/banner-14.jpg"
                        className="absolute rounded-md object-fit"
                    />
                </div> */}
                {/* <div id='slide' className='relative w-screen h-[30vh] md:h-[50vh] ' style={{ flex: "1 0 100%" }} >
                    <Image
                        fill
                        src="/projects/banner-13.jpg"
                        className="absolute rounded-md object-fit"
                    />
                </div> */}

                {/* <div className='absolute  md:left-0 text-white  lg:text-[30px] rounded-b-md bg-[#3a94ddc4] p-[10px] md:p-[20px] lg:p-[50px] bottom-0 w-full flex flex-col '>
                <Link href=''>
                    <h2 className='md:p-[30px] lg:text-[60px] text-[20px] tracking-widest '>One Punch Man</h2>
                </Link>
                <button className='bg-gradient-to-bl from-[#06cfaecc] to-[#3a94ddc4] hidden md:visible w-[100px] tracking-widest rounded-xl p-3'>Watch</button>
            </div> */}



            </motion.div>
            {/* <button id='slideR' className=' top-[50%] right-2 bg-red-900 z-[31] h-10 w-10 rounded-full ' >
                R
            </button>
            <button id='slideL' className=' top-[50%] left-2 bg-red-900 z-[31] h-10 w-10 rounded-full ' >
                L
            </button> */}
        </>
    )
}

export default Banner
