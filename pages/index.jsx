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
