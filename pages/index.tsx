import type { NextPage } from "next";
import { useRef, useState } from "react";

import CustomCursor from "../components/CustomCursor";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Greeter from "../components/Greeter";
import Intro from "../components/Intro";
import Loader from "../components/Loader";
import Project from "../components/Project";
import Contact from "../components/Contact";

import ScrollTriggerProxy from "../components/ScrollTriggerProxy";

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  console.log("Welcome to Niranj's Portfolio");
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader load={loading} setLoading={setLoading} />;
  }
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.05,
        multiplier: 2,
        firefoxMultiplier: 2,

        smartPhone: {
          smooth: true,
          breakpoint: 0,
          touchMultiplier: 2,
        },
        tablet: {
          smooth: true,
          breakpoint: 0,
          touchMultiplier: 2,
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
