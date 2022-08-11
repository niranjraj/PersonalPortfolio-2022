import type { NextPage } from "next";
import { useRef } from "react";
import Head from "next/head";
import CustomCursor from "../components/CustomCursor";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Greeter from "../components/Greeter";
import Intro from "../components/Intro";

import Project from "../components/Project";
import Contact from "../components/Contact";

import ScrollTriggerProxy from "../components/ScrollTriggerProxy";

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  console.log("Welcome to Niranj's Portfolio");

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
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="content-language" content="en-US" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, 
      shrink-to-fit=no"
          />
          <meta name="title" content="NiranjRaj - 2022" />
          <meta
            name="description"
            content="A passionate creative frontend developer.I love to create new and
              awesome features, Optimized to perform across all devices and
              provide a solid experience."
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="NiranjRaj - 2022" />
          <meta
            property="og:description"
            content="A passionate creative frontend developer.I love to create new and
              awesome features, Optimized to perform across all devices and
              provide a solid experience."
          />
          <meta property="og:image" content="/static/Logo.png" />

          <meta property="twitter:title" content="NiranjRaj - 2022" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:description"
            content="A passionate creative frontend developer.I love to create new and
              awesome features, Optimized to perform across all devices and
              provide a solid experience"
          />
          <meta property="twitter:image" content="/static/Logo.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          {/* <link
            rel="preload"
            href="/fonts/IvyMode/IvyMode-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/WorkSans/WorkSans-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          /> */}
          <title>NiranjRaj - 2022</title>
        </Head>
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
