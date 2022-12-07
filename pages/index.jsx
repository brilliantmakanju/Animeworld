import Head from "next/head";

// import dynamic from "next/dynamic";
// const Intro = dynamic(() => import("../component/Intro"))
// const About = dynamic(() => import("../component/About"))
// const Skill = dynamic(() => import("../component/Skills"))
// const Contact = dynamic(() => import("../component/Contact"))
// const Projects = dynamic(() => import("../component/Projects"))
import { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import AnimeBanner from "../component/Anim/AnimeBanner";
import TopAnime from "../component/Anim/TopAnime/TopAnime";
import AnimeList from "../component/Anim/AnimeList/AnimeList";
import JustAddedAnime from "../component/Anim/JustAdded/TopAnime";

export default function Home() {

  const [fixed, setFixed] = useState(false)

  const FixedChange = () => {
    if (window.scrollY >= 500) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", FixedChange)
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Movie Ap using Nextjs And Django" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="hidden md:flex md:ml-[17rem] ml-[20px] flex-row justify-between items-center mt-[20px] mb-[10px] p-3 md:w-[66rem]   ">
        <div className="flex gap-5 items-center">
          <div className="bg-[#3a94ddc4] p-2 font-bold text-white rounded-[2rem] rounded-r-none rounded-t-[2rem] " >
            Welcome
          </div>
          <form className=" md:w-[29em] items-center  flex relative rounded-sm">
            <input type='text' placeholder="Search...." className="w-[90%] placeholder:text-[#143d5ec4] text-[#143d5ec4] pr-9 bg-[#06cfaecc] border-[2px] border-[#3a94ddc4] p-2 pl-4 md:w-[90%] rounded-3xl " required />
            <button className="absolute right-0">S</button>
          </form>
        </div>

        <div>Links</div>
      </nav>
      <nav className=" md:hidden px-2 py-3 flex flex-row justify-between items-center shadow-md shadow-[#3d6592] text-white bg-transparent ">
        <div className="flex flex-row items-center gap-3 ">
          <div> <AiOutlineMenu size={35} /></div>
          <div>
            <h2 className=" font-serif " >AnimeWorld</h2>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 ">
          <div>S</div>
          <div>P</div>
        </div>
      </nav>
      <main className="md:float-left rounded-lg md:w-[68em] w-full p-3 md:ml-[16rem]">
        <AnimeBanner />
        <div className="flex md:gap-4 flex-wrap  mt-[20px]">
          <AnimeList />
          <TopAnime />
          <JustAddedAnime />
        </div>
      </main>
    </div>
  );
}
