import type { NextPage } from "next";
import { useEffect, useState, useRef, MutableRefObject } from "react";

import dynamic from "next/dynamic";
import { Suspense } from "react"; // import Project from "../components/Project";
// import Intro from "../components/Intro";
import Loader from "../components/Loader";
import CustomCursor from "../components/CustomCursor";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import {
  setCursorText,
  setCursorVariant,
  setLoading,
  setTheme,
} from "../redux/cursor-slice";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);
// import Contact from "../components/Contact";

import Greeter from "../components/Greeter";
import Intro from "../components/Intro";

import Project from "../components/Project";
import Contact from "../components/Contact";

import ScrollTriggerProxy from "../components/ScrollTriggerProxy";

const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
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
      <div className="noise"></div>
      <div
        className="main-container"
        id="main-container"
        ref={scrollRef}
        data-scroll-container
      >
        <ScrollTriggerProxy />
        <CustomCursor />

        <Greeter />
        <Intro />
        <Project />
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;
