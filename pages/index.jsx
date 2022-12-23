import Head from "next/head";
import dynamic from "next/dynamic";

// const Intro = dynamic(() => import("../component/Intro"))
import { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import Banner from "../component/Common/Banner";

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
      <main className="  ">
        <Banner />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
        <h1>
          Top Nav
        </h1><br />
      </main>
    </div>
  );
}
