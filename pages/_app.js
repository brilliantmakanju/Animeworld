import "../public/Global.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import dynamic from "next/dynamic";
import SNav from "../component/Unauth/Nav/SNav";
import TNav from "../component/Unauth/Nav/TNav";
import RSide from "../component/Unauth/Nav/RSide";

// const Nav = dynamic(() => import("../component/Nav"));

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <div className=" flex md:flex-row md:justify-between  " >
      <SNav />
      <div className="w-full  text-[#9FD8CB] overflow-x-hidden h-auto md:overflow-y-scroll md:h-screen flex flex-col md:px-5 px-1 ">
        {/* <TNav /> */}
        <div className=" flex justify-between items-center py-2 px-2 " >
          <div className="md:flex hidden font-extrabold flex-row items-center justify-start md:gap-10 gap-5 " >
            <p>Movie</p>
            <p>Series</p>
            <p>Tv Show</p>
          </div>
          <form className=" lg:mr-[2.5em] md:mr-[-1.3em] bg-[#615f5c] w-[17em] hidden md:flex items-center justify-end flex-col mb-2 py-2 rounded-2xl " >
            <input type="search" placeholder="Search" className="px-3 pr-8  w-full duration-300 text-white  bg-transparent  rounded-t-md " />
          </form>
          <div className="md:hidden" >
            <h2 className="text-[20px]" >Anime Vanguard</h2>
          </div>
          <div className="flex md:hidden  font-extrabold flex-row items-center justify-end md:gap-10 gap-5" >
            <p>S</p>
            <p>P</p>
            <p>H</p>
          </div>
        </div>
        <Component {...pageProps}></Component>
      </div>
      <RSide />
    </div>
  )
}
