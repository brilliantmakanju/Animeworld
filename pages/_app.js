import "../public/Global.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import dynamic from "next/dynamic";

// const Nav = dynamic(() => import("../component/Nav"));

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <div className=" ">
      <Component {...pageProps}></Component>
    </div>
  );
}
