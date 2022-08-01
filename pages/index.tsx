import type { NextPage } from "next";
import { useEffect, useState, useRef } from "react";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// import Project from "../components/Project";
// import Intro from "../components/Intro";
import Loader from "../components/Loader";
// import Contact from "../components/Contact";

const Greeter = dynamic(() => import("../components/Greeter"), {
  suspense: true,
});
const Project = dynamic(() => import("../components/Project"), {
  suspense: true,
});
const Intro = dynamic(() => import("../components/Intro"), {
  suspense: true,
});
const Contact = dynamic(() => import("../components/Contact"), {
  suspense: true,
});
const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();
  // useEffect(() => {
  //   setLoading(true);
  // }, []);
  // if (!loading) {
  //   return <Loader />;
  // }

  return (
    <Suspense fallback={<Loader />}>
      <div className="noise"></div>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.05,
          multiplier: 2,
          firefoxMultiplier: 2,
          touchMultiplier: 0.1,
          smartPhone: {
            smooth: true,
          },
        }}
        watch={[]}
        containerRef={scrollRef}
      >
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={scrollRef}
        >
          <Greeter />
          <Intro />
          <Project />
          <Contact />
        </div>
      </LocomotiveScrollProvider>
    </Suspense>
  );
};

export default Home;
