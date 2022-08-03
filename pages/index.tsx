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
import CustomCursor from "../components/CustomCursor";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";

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
  const mouseref = useRef<HTMLDivElement | null>(null);

  return (
    <Suspense fallback={<Loader />}>
      <div className="noise"></div>

      <CustomCursor mouseRef={mouseref} />
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
          tablet: {
            inertia: 0.8,
            smooth: true,
          },
        }}
        watch={[]}
        containerRef={scrollRef}
      >
        <div className="mouse-container" ref={mouseref}>
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
        </div>
      </LocomotiveScrollProvider>
    </Suspense>
  );
};

export default Home;
