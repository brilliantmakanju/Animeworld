import "../public/Global.css";
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";
import dynamic from "next/dynamic";
const Nav = dynamic(() => import("../component/Common/unauth/Nav/Nav"));
// const Nav = dynamic(() => import("../component/Nav"));

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Nav />
      <Component {...pageProps}></Component>
    </div>
  );
}
